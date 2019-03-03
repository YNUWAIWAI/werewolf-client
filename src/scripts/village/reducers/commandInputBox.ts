/* global village */
import * as ActionTypes from '../constants/ActionTypes'
import {ChangePhase, SocketMessage} from '../actions'
import {getInputChannelFromChannel, getMyRole, just, strToRoleId} from '../util'
import {AVAILABLE_FOR_LIMITED_CHAT} from '../constants/Role'

export interface State {
  readonly limited: {
    readonly available: boolean
    readonly postCount: number
  }
  readonly public: {
    readonly postCount: number
  }
}
export type Action =
 | ChangePhase
 | SocketMessage

export const initialState: State = {
  limited: {
    available: false,
    postCount: 0
  },
  public: {
    postCount: 0
  }
}

const commandInputBox = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.global.CHANGE_PHASE: {
      return {
        ... state,
        limited: {
          ... state.limited,
          postCount: 0
        },
        public: {
          ... state.public,
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
            case village.InputChannel.limited:
              return {
                ... state,
                limited: {
                  ... state.limited,
                  postCount: just(action.payload.counter)
                }
              }
            case village.InputChannel.public:
              return {
                ... state,
                public: {
                  ... state.public,
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
            AVAILABLE_FOR_LIMITED_CHAT.includes(strToRoleId(role.name.en))
          ) {
            return {
              ... state,
              limited: {
                ... state.limited,
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

