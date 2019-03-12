/* global lobby */
import * as ActionTypes from '../constants/ActionTypes'
import {ConfirmKickOutPlayer, SelectNo, SelectYes} from '../actions'

export interface State {
  readonly descriptionId: string
  readonly type: string
  readonly values: {
    name: string
    token: lobby.Token
  }
  readonly visible: boolean
}
type Action =
  | ConfirmKickOutPlayer
  | SelectNo
  | SelectYes

export const initialState: State = {
  descriptionId: '@dummy',
  type: '',
  values: {
    name: 'name',
    token: ''
  },
  visible: false
}
const modal = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.global.CONFIRM_KICK_OUT_PLAYER:
      return {
        descriptionId: 'Modal.description(kickOutPlayer)',
        type: ActionTypes.global.CONFIRM_KICK_OUT_PLAYER,
        values: {
          name: action.name,
          token: action.token
        },
        visible: true
      }
    case ActionTypes.global.SELECT_NO:
      return {
        ... state,
        visible: false
      }
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