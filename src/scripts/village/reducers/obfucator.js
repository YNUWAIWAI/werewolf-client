// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {HideResult, SelectNo, SelectOption, SelectYes, ToggleObfucator} from '../actions'

export type State = {
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
  visible: true
}

const obfucator = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.HIDE_RESULT:
      return {
        visible: false
      }
    case ActionTypes.SELECT_NO:
      return {
        visible: false
      }
    case ActionTypes.SELECT_OPTION:
      return {
        visible: true
      }
    case ActionTypes.SELECT_YES:
      return {
        visible: false
      }
    case ActionTypes.SHOW_RESULT:
      return {
        visible: true
      }
    case ActionTypes.TOGGLE_OBFUCATOR:
      return {
        visible: action.visible
      }
    default:
      return state
  }
}

export default obfucator
