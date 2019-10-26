import * as ActionTypes from '../constants/ActionTypes'
import {
  ChangePhase,
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
import {village} from '../types'

export interface State {
  readonly loading: boolean
  readonly visible: boolean
}
type Action =
  | ChangePhase
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
    case ActionTypes.App.CHANGE_PHASE:
      if (action.to === village.Phase.result || action.from === village.Phase.result) {
        return state
      }

      return {
        ... state,
        visible: false
      }
    case ActionTypes.App.HIDE_RESULT:
    case ActionTypes.App.SELECT_NO:
    case ActionTypes.App.SELECT_YES:
      return {
        ... state,
        visible: false
      }
    case ActionTypes.App.SELECT_OPTION:
    case ActionTypes.Navigation.SHOW_RESULT:
      return {
        loading: false,
        visible: true
      }
    case ActionTypes.Socket.CLOSE:
    case ActionTypes.Socket.ERROR:
      return {
        loading: true,
        visible: true
      }
    case ActionTypes.Socket.MESSAGE:
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
