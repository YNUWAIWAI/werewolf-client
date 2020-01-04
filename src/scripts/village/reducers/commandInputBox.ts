import * as ActionTypes from '../constants/ActionTypes'
import {
  ChangePhase,
  Message$ChatMessage,
  Message$SystemMessage
} from '../actions'
import {
  getInputChannelFromChannel,
  getMyRole,
  just,
  strToRoleId
} from '../util'
import {AVAILABLE_FOR_WEREWOLF_CHAT} from '../constants/Role'
import {village} from '../types'

export interface State {
  readonly public: {
    readonly numberOfChatMessages: number
  }
  readonly werewolf: {
    readonly available: boolean
    readonly numberOfChatMessages: number
  }
}
export type Action =
  | ChangePhase
  | Message$ChatMessage
  | Message$SystemMessage

export const initialState: State = {
  public: {
    numberOfChatMessages: 0
  },
  werewolf: {
    available: false,
    numberOfChatMessages: 0
  }
}

const commandInputBox = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.App.CHANGE_PHASE: {
      return {
        ... state,
        public: {
          numberOfChatMessages: 0
        },
        werewolf: {
          ... state.werewolf,
          numberOfChatMessages: 0
        }
      }
    }
    case ActionTypes.Message.CHAT_MESSAGE: {
      if (!action.payload.isMine) {
        return state
      }

      const inputChannel = getInputChannelFromChannel(action.payload.intensionalDisclosureRange)

      switch (inputChannel) {
        case village.InputChannel.public:
          return {
            ... state,
            public: {
              numberOfChatMessages: just(action.payload.counter)
            }
          }
        case village.InputChannel.werewolf:
          return {
            ... state,
            werewolf: {
              ... state.werewolf,
              numberOfChatMessages: just(action.payload.counter)
            }
          }
        case village.InputChannel.grave:
        case village.InputChannel.postMortem:
        case village.InputChannel.private:
        default:
          return state
      }
    }
    case ActionTypes.Message.SYSTEM_MESSAGE: {
      if (!action.payload.role) {
        return state
      }
      const role = getMyRole(action.payload.role)

      if (
        role.numberOfPlayers > 1 &&
        AVAILABLE_FOR_WEREWOLF_CHAT.includes(strToRoleId(role.name.en))
      ) {
        return {
          ... state,
          werewolf: {
            ... state.werewolf,
            available: true
          }
        }
      }

      return state
    }
    default:
      return state
  }
}

export default commandInputBox

