// @flow
import * as ActionTypes from '../constants/ActionTypes'
import * as Contexts from '../constants/Contexts'
import * as Message from '../constants/Message'
import type {SetIsSendable, SocketMessage} from '../actions'
import {AVAILABLE_FOR_LIMITED_CHAT} from '../constants/Role'
import {Channels} from '../constants/Channels'
import {trimBaseUri} from '../module/util'

export type State = {
  limited: {
    available: boolean,
    isSendable: boolean,
    postCount: number,
    postCountLimit: number
  },
  private: {
    isSendable: boolean,
    postCount: number,
    postCountLimit: number
  },
  public: {
    isSendable: boolean,
    postCount: number,
    postCountLimit: number
  },
}
export type Action =
 | SetIsSendable
 | SocketMessage

export const initialState = {
  limited: {
    available: false,
    isSendable: true,
    postCount: 0,
    postCountLimit: 10,
  },
  private: {
    isSendable: true,
    postCount: 0,
    postCountLimit: 10,
  },
  public: {
    isSendable: true,
    postCount: 0,
    postCountLimit: 10,
  }
}

const commandInputBox = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SET_IS_SENDABLE:
      return {
        ... state,
        [action.kind]: {
          ... state[action.kind],
          isSendable: action.isSendable
        }
      }
    case ActionTypes.SOCKET_MESSAGE:
      if (
        action.payload['@id'] === Message.PLAYER_MESSAGE &&
        action.payload['@context'].includes(Contexts.CHAT) &&
        action.payload.chatIsMine
      ) {
        const kind: InputChannel = Channels[action.payload.intensionalDisclosureRange]
        const isSendable = action.payload.chatCounter < action.payload.chatLimit

        return {
          ... state,
          [kind]: {
            ... state[kind],
            isSendable,
            postCount: action.payload.chatCounter,
            postCountLimit: action.payload.chatLimit
          }
        }
      } else if (
        action.payload['@context'].includes(Contexts.BASE) &&
        action.payload['@context'].includes(Contexts.ROLE) &&
        action.payload['@context'].includes(Contexts.AGENT)
      ) {
        const role = action.payload.role.filter(r => r.roleIsMine)[0]

        if (
          role.numberOfAgents > 1 &&
          AVAILABLE_FOR_LIMITED_CHAT.includes(trimBaseUri(role['@id']))
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

