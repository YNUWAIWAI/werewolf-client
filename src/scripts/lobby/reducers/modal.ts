import * as ActionTypes from '../constants/ActionTypes'
import {ConfirmKickOutPlayer, SelectNo, SelectYes} from '../actions'
import {lobby} from '../types'

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
    case ActionTypes.App.CONFIRM_KICK_OUT_PLAYER:
      return {
        descriptionId: 'Modal.description(kickOutPlayer)',
        type: ActionTypes.App.CONFIRM_KICK_OUT_PLAYER,
        values: {
          name: action.name,
          token: action.token
        },
        visible: true
      }
    case ActionTypes.App.SELECT_NO:
      return {
        ... state,
        visible: false
      }
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
