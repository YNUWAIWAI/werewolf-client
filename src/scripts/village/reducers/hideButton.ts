import * as ActionTypes from '../constants/ActionTypes'
import {ClickHideButton} from '../actions'

export interface State {
  readonly hide: boolean
}
type Action =
  | ClickHideButton

export const initialState: State = {
  hide: false
}
const hideButton = (state: State = initialState, action: Action): State => {
  if (action.type === ActionTypes.global.CLICK_HIDE_BUTTON) {
    return {
      hide: action.hide
    }
  }

  return state
}

export default hideButton
