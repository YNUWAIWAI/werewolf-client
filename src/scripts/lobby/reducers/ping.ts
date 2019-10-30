import * as ActionTypes from '../constants/ActionTypes'
import {
  SocketMessage,
  Transition
} from '../actions'
import {lobby} from '../types'

export interface State {
  readonly myToken: string
  readonly id: string
  readonly results: lobby.PingResult[]
}
type Action =
  | SocketMessage
  | Transition

export const initialState: State = {
  id: '',
  myToken: '',
  results: []
}
const waitingForPlayers = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.Socket.MESSAGE:
      switch (action.payload.type) {
        case lobby.PayloadType.waitingPage: {
          const payload = action.payload
          const me = payload.players.find(v => v.isMe)

          if (me) {
            return {
              ... state,
              myToken: me.token
            }
          }

          return state
        }
        case lobby.PayloadType.ping: {
          const payload = action.payload

          return {
            ... state,
            id: payload.id,
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
