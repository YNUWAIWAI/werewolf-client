/* global village */
import * as ActionTypes from '../constants/ActionTypes'
import {
  ClickNavigationButton,
  HideResult,
  SelectNo,
  SelectOption,
  SelectYes,
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
  | ClickNavigationButton
  | HideResult
  | SelectNo
  | SelectOption
  | SelectYes
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
    case ActionTypes.global.HIDE_RESULT:
    case ActionTypes.global.SELECT_NO:
    case ActionTypes.global.SELECT_YES:
      return {
        ... state,
        visible: false
      }
    case ActionTypes.global.SELECT_OPTION:
    case ActionTypes.Navigation.SHOW_RESULT:
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
    case ActionTypes.socket.MESSAGE:
      if (
        action.payload['@payload'] === village.Message.systemMessage &&
        action.payload.phase === village.Phase.result
      ) {
        return {
          loading: false,
          visible: true
        }
      }

      return state
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
