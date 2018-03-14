// @flow
import * as ActionTypes from '../constants/ActionTypes'
import {type SelectNo, type SelectOption, type SelectYes} from '../actions'

type State = {
  +id?: number,
  +visible: boolean
}
type Action =
  | SelectNo
  | SelectOption
  | SelectYes

const initialState = {
  visible: false
}
const modal = (state: State = initialState, action: Action): State => {
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
