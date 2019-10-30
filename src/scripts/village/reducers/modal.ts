import * as ActionTypes from '../constants/ActionTypes'
import {
  ChangePhase,
  SelectNo,
  SelectOption,
  SelectYes
} from '../actions'
import {village} from '../types'

export interface State {
  readonly id: village.CharacterId
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
    case ActionTypes.App.SELECT_OPTION:
      return {
        id: action.characterId,
        visible: true
      }
    case ActionTypes.App.CHANGE_PHASE:
    case ActionTypes.App.SELECT_NO:
    case ActionTypes.App.SELECT_YES:
      return {
        ... state,
        visible: false
      }
    default:
      return state
  }
}

export default modal
