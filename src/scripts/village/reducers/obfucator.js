// @flow
import * as ActionTypes from '../constants/ActionTypes'
import {type ToggleObfucator} from '../actions'

type State = {
  +visible: boolean
}
type Action =
  | ToggleObfucator

const initialState = {
  visible: true
}

const obfucator = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.TOGGLE_OBFUCATOR:
      return {
        visible: action.visible
      }
    default:
      return state
  }
}

export default obfucator
