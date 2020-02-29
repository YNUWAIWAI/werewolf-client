import * as ActionTypes from '../constants/ActionTypes'
import {
  ConfirmKickOutPlayer,
  SelectNo,
  SelectYes
} from '../actions'

export interface State {
  readonly type: 'confirmation' | 'avatarImageSelect'
  readonly visible: boolean
}
type Action =
  | ConfirmKickOutPlayer
  | SelectNo
  | SelectYes

export const initialState: State = {
  type: 'confirmation',
  visible: false
}
const modal = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.App.CONFIRM_KICK_OUT_PLAYER:
      return {
        type: 'confirmation',
        visible: true
      }
    case ActionTypes.App.SELECT_NO:
      return {
        type: 'confirmation',
        visible: false
      }
    case ActionTypes.App.SELECT_YES:
      return {
        type: 'confirmation',
        visible: false
      }
    default:
      return state
  }
}

export default modal
