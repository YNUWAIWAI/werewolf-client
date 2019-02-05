import * as ActionTypes from '../constants/ActionTypes'
import {ActivateNextButton, DeactivateNextButton} from '../actions'

export const enum Status {
  active = 'active',
  inactive = 'inactive',
  invisible = 'invisible'
}
export interface State {
  readonly status: Status
}
type Action =
  | ActivateNextButton
  | DeactivateNextButton

export const initialState: State = {
  status: Status.inactive
}
const commandNextButton = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.global.ACTIVATE_NEXT_BUTTON:
      return {
        status: Status.active
      }
    case ActionTypes.global.DEACTIVATE_NEXT_BUTTON:
      return {
        status: Status.invisible
      }
    default:
      return state
  }
}

export default commandNextButton
