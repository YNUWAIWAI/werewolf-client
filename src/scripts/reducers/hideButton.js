import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
  isHide: false
}
const hideButton = (state = initialState, action) => {
  if (action.type === ActionTypes.CLICK_HIDE_BUTTON) {
    return {
      isHide: action.isHide
    }
  }

  return state
}

export default hideButton
