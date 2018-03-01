import * as ActionTypes from '../constants/ActionTypes'
import * as Message from '../constants/Message'
import * as Contexts from '../constants/Contexts'
import {receiveChat} from '../actions'

const initialState = {
  items: []
}
const chat = (state = initialState, action) => {
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

