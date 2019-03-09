import * as ActionTypes from '../constants/ActionTypes'
import {
  SocketClose,
  SocketError,
  SocketMessage,
  SocketOpen
} from '../actions'

export interface State {
  readonly loading: boolean
  readonly visible: boolean
}
type Action =
  | SocketClose
  | SocketError
  | SocketMessage
  | SocketOpen

export const initialState: State = {
  loading: true,
  visible: true
}

const obfucator = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.socket.CLOSE:
    case ActionTypes.socket.ERROR:
      return {
        loading: true,
        visible: true
      }
    case ActionTypes.socket.OPEN:
      return {
        loading: false,
        visible: false
      }
    default:
      return state
  }
}

export default obfucator
