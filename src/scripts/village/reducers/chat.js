// @flow
import * as ActionTypes from '../constants/ActionTypes'
import * as Contexts from '../constants/Contexts'
import * as Message from '../constants/Message'
import type {SocketMessage} from '../actions'

export type State = {
  +items: Chat[]
}
type Action =
  | SocketMessage

const initialState = {
  items: []
}
const chat = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SOCKET_MESSAGE:
      if (
        action.payload['@id'] === Message.PLAYER_MESSAGE &&
        action.payload['@context'].includes(Contexts.CHAT)
      ) {
        return {
          items: [
            ... state.items,
            action.payload
          ]
        }
      }

      return state
    default:
      return state
  }
}

export default chat

