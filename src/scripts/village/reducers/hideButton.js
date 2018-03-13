import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
  hide: false
}
const hideButton = (state = initialState, action) => {
  if (action.type === ActionTypes.CLICK_HIDE_BUTTON) {
    return {
      hide: action.hide
    }
  }

  return state
}

export default hideButton
