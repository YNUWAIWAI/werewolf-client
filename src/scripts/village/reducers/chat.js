// @flow
import * as ActionTypes from '../constants/ActionTypes'
import * as Contexts from '../constants/Contexts'
import * as Message from '../constants/Message'
import type {SocketMessage} from '../actions'

export type State = {
  +items: Array<{
    id?: number,
    image: string,
    intensionalDisclosureRange: Channel,
    isMine: boolean,
    name: { [Language]: string },
    phaseStartTime: string,
    phaseTimeLimit: number,
    serverTimestamp: string,
    text: string
  }>
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
            {
              id: action.payload.chatId,
              image: action.payload.chatAgent.chatAgentImage,
              intensionalDisclosureRange: action.payload.intensionalDisclosureRange,
              isMine: action.payload.chatIsMine,
              name: action.payload.chatAgent.chatAgentName,
              phaseStartTime: action.payload.phaseStartTime,
              phaseTimeLimit: action.payload.phaseTimeLimit,
              serverTimestamp: action.payload.serverTimestamp,
              text: action.payload.chatText
            }
          ]
        }
      }

      return state
    default:
      return state
  }
}

export default chat

