import * as ActionTypes from '../constants/ActionTypes'
import * as village from '../types'
import {ChangePhase, SelectNo, SelectOption, SelectYes} from '../actions'

export interface State {
  readonly id: village.AgentId
  readonly visible: boolean
}
type Action =
  | ChangePhase
  | SelectNo
  | SelectOption
  | SelectYes

export const initialState: State = {
  id: '',
  visible: false
}
const modal = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.global.SELECT_OPTION:
      return {
        id: action.agentId,
        visible: true
      }
    case ActionTypes.global.CHANGE_PHASE:
    case ActionTypes.global.SELECT_NO:
    case ActionTypes.global.SELECT_YES:
      return {
        ... state,
        visible: false
      }
    default:
      return state
  }
}

export default modal
