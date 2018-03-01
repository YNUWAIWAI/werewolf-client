import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
  isVisible: false
}
const modal = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SELECT_OPTION:
      return {
        agent: action.agent,
        isVisible: true
      }
    case ActionTypes.SELECT_NO:
    case ActionTypes.SELECT_YES:
      return {
        isVisible: false
      }
    default:
      return state
  }
}

export default modal
