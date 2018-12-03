// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {InputChannel, Payload$playerMessage, Payload$systemMessage} from 'village'
import {PLAYER_MESSAGE, SYSTEM_MESSAGE} from '../constants/Message'
import {getInputChannelFromChannel, getMyRole, strToMessage, strToRoleId} from '../util'
import {AVAILABLE_FOR_LIMITED_CHAT} from '../constants/Role'
import type {SocketMessage} from '../actions'

export type State = {
  limited: {
    available: boolean,
    postCount: number,
    postCountLimit: number
  },
  private: {
    postCount: number,
    postCountLimit: number
  },
  public: {
    postCount: number,
    postCountLimit: number
  }
}
export type Action =
 | SocketMessage

export const initialState = {
  limited: {
    available: false,
    postCount: 0,
    postCountLimit: 10
  },
  private: {
    postCount: 0,
    postCountLimit: 10
  },
  public: {
    postCount: 0,
    postCountLimit: 10
  }
}

const commandInputBox = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.socket.MESSAGE:
      switch (strToMessage(action.payload['@id'])) {
        case PLAYER_MESSAGE: {
          const payload: Payload$playerMessage = action.payload

          if (payload.isMine) {
            const kind: InputChannel = getInputChannelFromChannel(payload.intensionalDisclosureRange)

            if (kind === 'grave' || kind === 'post mortem') {
              return state
            }

            return {
              ... state,
              [kind]: {
                ... state[kind],
                postCount: payload.counter,
                postCountLimit: payload.limit
              }
            }
          }

          return state
        }
        case SYSTEM_MESSAGE: {
          const payload: Payload$systemMessage = action.payload

          if (!payload.role) {
            return state
          }
          const role = getMyRole(payload.role)

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

