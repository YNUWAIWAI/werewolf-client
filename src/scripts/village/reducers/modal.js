import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
  visible: false
}
const modal = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SELECT_OPTION:
      return {
        id: action.agentId,
        visible: true
      }
    case ActionTypes.SELECT_NO:
    case ActionTypes.SELECT_YES:
      return {
        visible: false
      }
    default:
      return state
  }
}

export default modal
