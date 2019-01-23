import * as ActionTypes from '../constants/ActionTypes'
import {SelectNo, SelectOption, SelectYes} from '../actions'

export interface State {
  readonly id: number
  readonly visible: boolean
}
type Action =
  | SelectNo
  | SelectOption
  | SelectYes

export const initialState: State = {
  id: -1,
  visible: false
}
const modal = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.global.SELECT_OPTION:
      return {
        id: action.agentId,
        visible: true
      }
    case ActionTypes.global.SELECT_NO:
    case ActionTypes.global.SELECT_YES:
      return {
        id: -1,
        visible: false
      }
    default:
      return state
  }
}

export default modal
