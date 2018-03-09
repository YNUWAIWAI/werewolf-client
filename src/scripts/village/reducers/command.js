import * as ActionTypes from '../constants/ActionTypes'
import {Channels} from '../constants/Channels'
import * as Contexts from '../constants/Contexts'
import * as Message from '../constants/Message'
import {AVAILABLE_FOR_LIMITED_CHAT} from '../constants/Role'
import {trimBaseUri} from '../module/util'

const initialState = {
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

const command = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_IS_SENDABLE:
      return {
        ... state,
        [action.kind]: {
          isSendable: action.isSendable,
          postCount: state[action.kind].postCount,
          postCountLimit: state[action.kind].postCountLimit
        }
      }
    case ActionTypes.SOCKET_MESSAGE:
      if (
        action.payload['@id'] === Message.PLAYER_MESSAGE &&
        action.payload['@context'].includes(Contexts.CHAT) &&
        action.payload.chatIsMine
      ) {
        const kind = Channels[action.payload.intensionalDisclosureRange]
        const isSendable = action.payload.chatCounter < action.payload.chatLimit

        return {
          ... state,
          [kind]: {
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
    case ActionTypes.SELECT_YES:
      return {
        ... state,
        fixed: true
      }
    default:
      return state
  }
}

export default command

