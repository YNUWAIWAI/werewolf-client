import * as ActionTypes from '../constants/ActionTypes'
import {
  ConfirmKickOutPlayer,
  SelectNo,
  SelectYes,
  SocketClose,
  SocketError,
  SocketOpen
} from '../actions'

export interface State {
  readonly loading: boolean
  readonly visible: boolean
}
type Action =
  | ConfirmKickOutPlayer
  | SelectNo
  | SelectYes
  | SocketClose
  | SocketError
  | SocketOpen

export const initialState: State = {
  loading: true,
  visible: true
}

const obfucator = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.App.CONFIRM_KICK_OUT_PLAYER:
      return {
        loading: false,
        visible: true
      }
    case ActionTypes.App.SELECT_NO:
    case ActionTypes.App.SELECT_YES:
      return {
        loading: false,
        visible: false
      }
    case ActionTypes.Socket.CLOSE:
    case ActionTypes.Socket.ERROR:
      return {
        loading: true,
        visible: true
      }
    case ActionTypes.Socket.OPEN:
      return {
        loading: false,
        visible: false
      }
    default:
      return state
  }
}

export default obfucator
