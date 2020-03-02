import * as ActionTypes from '../constants/ActionTypes'
import {
  Message,
  Transition
} from '../actions'
import {lobby} from '../types'

export interface State {
  readonly myToken: string
  readonly id: string
  readonly results: lobby.PingResult[]
}
type Action =
  | Message.Ping
  | Message.WaitingPage
  | Transition

export const initialState: State = {
  id: '',
  myToken: '',
  results: []
}
const waitingForPlayers = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.Message.PING: {
      const payload = action.payload

      return {
        ... state,
        id: payload.id,
        results: payload.results
      }
    }
    case ActionTypes.Message.WAITING_PAGE: {
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
    default:
      return state
  }
}

export default waitingForPlayers
