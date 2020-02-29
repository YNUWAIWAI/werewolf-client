import * as ActionTypes from '../constants/ActionTypes'
import {ConfirmKickOutPlayer} from '../actions'
import {lobby} from '../types'

export interface State {
  readonly descriptionId: string
  readonly type: string
  readonly values: {
    name: string
    token: lobby.Token
  }
}
type Action =
  | ConfirmKickOutPlayer

export const initialState: State = {
  descriptionId: '@dummy',
  type: '',
  values: {
    name: 'name',
    token: ''
  }
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
        }
      }
    default:
      return state
  }
}

export default modal
