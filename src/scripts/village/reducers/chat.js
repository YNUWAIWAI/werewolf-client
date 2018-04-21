// @flow
import * as ActionTypes from '../constants/ActionTypes'
import * as Contexts from '../constants/Contexts'
import * as Message from '../constants/Message'
import type {Channel, Chat, Language, Payload} from 'village'
import type {SocketMessage} from '../actions'

const getChatId = (() => {
  let chatId

  return () => {
    if (chatId === undefined) {
      chatId = -1
    }
    chatId += 1

    return `chat${chatId}`
  }
})()

export type State = {
  +allIds: string[],
  +byId: {
    [string]: {
      +id: number,
      +image: string,
      +intensionalDisclosureRange: Channel,
      +isMine: boolean,
      +name: { [Language]: string },
      +phaseStartTime: string,
      +phaseTimeLimit: number,
      +serverTimestamp: string,
      +text: string
    }
  }
}
type Action =
  | SocketMessage

export const initialState = {
  allIds: [],
  byId: {}
}
const chat = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SOCKET_MESSAGE:
      if (
        action.payload['@id'] === Message.PLAYER_MESSAGE &&
        action.payload['@context'].includes(Contexts.CHAT)
      ) {
        const payload: Payload<*, *, Chat> = action.payload
        const chatId = getChatId()

        return {
          allIds: [ chatId , ... state.allIds ],
          byId: {
            ... state.byId,
            [chatId]: {
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
          }
        }
      }

      return state
    default:
      return state
  }
}

export default chat

