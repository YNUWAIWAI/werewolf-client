import * as ActionTypes from '../constants/ActionTypes'
import Channels from '../constants/Channels'
import * as Contexts from '../constants/Contexts'
import * as Message from '../constants/Message'

const initialState = {
  limited: {
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

const commandInput = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_IS_SENDABLE:
      return Object.assign(
        {},
        state,
        {
          [action.kind]: {
            isSendable: action.isSendable,
            postCount: state[action.kind].postCount,
            postCountLimit: state[action.kind].postCountLimit
          }
        }
      )
    case ActionTypes.SOCKET_MESSAGE:
      if (
        action.payload['@id'] === Message.PLAYER_MESSAGE &&
        action.payload['@context'].includes(Contexts.CHAT) &&
        action.payload.chatIsMine
      ) {
        const kind = Channels[action.payload.intensionalDisclosureRange]
        const isSendable = action.payload.chatCounter < action.payload.chatLimit

        return Object.assign(
          {},
          state,
          {
            [kind]: {
              isSendable,
              postCount: action.payload.chatCounter,
              postCountLimit: action.payload.chatLimit
            }
          }
        )
      }

      return state
    default:
      return state
  }
}

export default commandInput

