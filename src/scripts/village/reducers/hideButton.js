// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {ClickHideButton} from '../actions'

export type State = {
  +hide: boolean
}
type Action =
  | ClickHideButton

export const initialState = {
  hide: false
}
const hideButton = (state: State = initialState, action: Action): State => {
  if (action.type === ActionTypes.CLICK_HIDE_BUTTON) {
    return {
      hide: action.hide
    }
  }

  return state
}

export default hideButton
