// @flow
import * as ActionTypes from '../constants/ActionTypes'
import * as Contexts from '../constants/Contexts'
import * as Message from '../constants/Message'
import type {SocketMessage} from '../actions'

export type State = {
  +items: Array<{
    +id?: number,
    +image: string,
    +intensionalDisclosureRange: Channel,
    +isMine: boolean,
    +name: { [Language]: string },
    +phaseStartTime: string,
    +phaseTimeLimit: number,
    +serverTimestamp: string,
    +text: string
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
        const payload: Payload<*, *, Chat> = action.payload

        return {
          items: [
            ... state.items,
            {
              id: payload.chatId,
              image: payload.chatAgent.chatAgentImage,
              intensionalDisclosureRange: payload.intensionalDisclosureRange,
              isMine: payload.chatIsMine,
              name: payload.chatAgent.chatAgentName,
              phaseStartTime: payload.phaseStartTime,
              phaseTimeLimit: payload.phaseTimeLimit,
              serverTimestamp: payload.serverTimestamp,
              text: payload.chatText
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

