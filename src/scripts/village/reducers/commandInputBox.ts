import * as ActionTypes from '../constants/ActionTypes'
import {ChangePhase, SocketMessage} from '../actions'
import {getInputChannelFromChannel, getMyRole, just, strToRoleId} from '../util'
import {AVAILABLE_FOR_WEREWOLF_CHAT} from '../constants/Role'
import {village} from '../types'

export interface State {
  readonly public: {
    readonly postCount: number
  }
  readonly werewolf: {
    readonly available: boolean
    readonly postCount: number
  }
}
export type Action =
 | ChangePhase
 | SocketMessage

export const initialState: State = {
  public: {
    postCount: 0
  },
  werewolf: {
    available: false,
    postCount: 0
  }
}

const commandInputBox = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.global.CHANGE_PHASE: {
      return {
        ... state,
        public: {
          postCount: 0
        },
        werewolf: {
          ... state.werewolf,
          postCount: 0
        }
      }
    }
    case ActionTypes.socket.MESSAGE:
      switch (action.payload['@payload']) {
        case village.Message.playerMessage: {
          if (!action.payload.isMine) {
            return state
          }

          const inputChannel = getInputChannelFromChannel(action.payload.intensionalDisclosureRange)

          switch (inputChannel) {
            case village.InputChannel.public:
              return {
                ... state,
                public: {
                  postCount: just(action.payload.counter)
                }
              }
            case village.InputChannel.werewolf:
              return {
                ... state,
                werewolf: {
                  ... state.werewolf,
                  postCount: just(action.payload.counter)
                }
              }
            case village.InputChannel.grave:
            case village.InputChannel.postMortem:
            case village.InputChannel.private:
            default:
              return state
          }
        }
        case village.Message.systemMessage: {
          if (!action.payload.role) {
            return state
          }
          const role = getMyRole(action.payload.role)

          if (
            role.numberOfAgents > 1 &&
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
    default:
      return state
  }
}

export default commandInputBox

