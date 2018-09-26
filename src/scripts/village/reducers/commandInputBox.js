// @flow
import * as ActionTypes from '../constants/ActionTypes'
import * as Contexts from '../constants/Contexts'
import * as Message from '../constants/Message'
import type {Chat, InputChannel, Payload, Role} from 'village'
import {AVAILABLE_FOR_LIMITED_CHAT} from '../constants/Role'
import type {SocketMessage} from '../actions'
import {getInputChannel} from '../constants/Channels'
import {getMyRole} from '../util'

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
      if (
        action.payload['@id'] === Message.PLAYER_MESSAGE &&
        action.payload['@context'].includes(Contexts.CHAT)
      ) {
        const payload: Payload<*, *, Chat> = action.payload

        if (payload.chatIsMine) {
          const kind: InputChannel = getInputChannel(payload.intensionalDisclosureRange)

          if (kind === 'post mortem') {
            return state
          }

          return {
            ... state,
            [kind]: {
              ... state[kind],
              postCount: payload.chatCounter,
              postCountLimit: payload.chatLimit
            }
          }
        }
      } else if (
        action.payload['@context'].includes(Contexts.BASE) &&
        action.payload['@context'].includes(Contexts.ROLE) &&
        action.payload['@context'].includes(Contexts.AGENT)
      ) {
        const payload: Payload<*, Role, *> = action.payload
        const role = getMyRole(payload.role)

        if (
          role.numberOfAgents > 1 &&
          AVAILABLE_FOR_LIMITED_CHAT.includes(role['@id'])
        ) {
          return {
            ... state,
            limited: {
              ... state.limited,
              available: true
            }
          }
        }
      }

      return state
    default:
      return state
  }
}

export default commandInputBox

