import * as ActionTypes from '../constants/ActionTypes'
import {SelectNo, SelectYes, Transition} from '../actions'

export interface State {
  readonly descriptionId: string
  readonly visible: boolean
}
type Action =
  | SelectNo
  | SelectYes
  | Transition

export const initialState: State = {
  descriptionId: 'Modal.description',
  visible: false
}
const modal = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.Target.CONFIRM_KICK_OUT_PLAYER:
      return {
        descriptionId: 'Modal.description',
        visible: true
      }
    default:
      return state
  }
}

export default modal
