import * as ActionTypes from '../constants/ActionTypes'
import {
  HideResult,
  SelectNo,
  SelectOption,
  SelectYes,
  SocketClose,
  SocketError,
  SocketOpen,
  Target
} from '../actions'

export interface State {
  readonly loading: boolean
  readonly visible: boolean
}
type Action =
  | HideResult
  | SelectNo
  | SelectOption
  | SelectYes
  | SocketClose
  | SocketError
  | SocketOpen
  | Target

export const initialState: State = {
  loading: true,
  visible: true
}

const obfucator = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.global.HIDE_RESULT:
    case ActionTypes.global.SELECT_NO:
    case ActionTypes.global.SELECT_YES:
      return {
        ... state,
        visible: false
      }
    case ActionTypes.global.SELECT_OPTION:
    case ActionTypes.global.SHOW_RESULT:
      return {
        loading: false,
        visible: true
      }
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
