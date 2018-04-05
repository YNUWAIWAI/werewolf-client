// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {Payload$Ping, Payload$WatingPage, PingResult} from 'lobby'
import type {SocketMessage, Transition} from '../actions'

export type State = {
  +myToken: string,
  +results: PingResult[]
}
type Action =
  | SocketMessage
  | Transition

export const initialState = {
  myToken: '',
  results: []
}
const waitingForPlayers = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SOCKET_MESSAGE:
      switch (action.payload.type) {
        case 'waitingPage': {
          const payload: Payload$WatingPage = action.payload
          const me = payload.players.find(v => v.isMe)

          if (me) {
            return {
              ... state,
              myToken: me.token
            }
          }

          return state
        }
        case 'ping': {
          const payload: Payload$Ping = action.payload

          return {
            ... state,
            results: payload.results
          }
        }
        default:
          return state
      }
    default:
      return state
  }
}

export default waitingForPlayers
