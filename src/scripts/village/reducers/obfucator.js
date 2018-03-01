import * as ActionTypes from '../constants/ActionTypes'
import {toggleObfucator} from '../actions'

const initialState = {
  visible: true
}

const obfucator = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.WAIT:
      return toggleObfucator(true)
    case ActionTypes.READY:
      return toggleObfucator(false)
    default:
      return state
  }
}

export default obfucator
