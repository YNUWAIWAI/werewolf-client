// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {HideResult, SelectNo, SelectOption, SelectYes, ToggleObfucator} from '../actions'

export type State = {
  +loading: boolean,
  +visible: boolean
}
type Action =
  | HideResult
  | SelectNo
  | SelectOption
  | SelectYes
  | ToggleObfucator
  | {type: 'SHOW_RESULT'}

export const initialState = {
  loading: true,
  visible: true
}

const obfucator = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.HIDE_RESULT:
      return {
        ... state,
        visible: false
      }
    case ActionTypes.SELECT_NO:
      return {
        ... state,
        visible: false
      }
    case ActionTypes.SELECT_OPTION:
      return {
        loading: false,
        visible: true
      }
    case ActionTypes.SELECT_YES:
      return {
        ... state,
        visible: false
      }
    case ActionTypes.SHOW_RESULT:
      return {
        loading: false,
        visible: true
      }
    case ActionTypes.TOGGLE_OBFUCATOR:
      return {
        ... state,
        visible: action.visible
      }
    case ActionTypes.socket.CLOSE:
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
