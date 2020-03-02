import * as ActionTypes from '../constants/ActionTypes'
import {
  ConfirmKickOutPlayer,
  SelectAvatarImage,
  SelectHumanAvatar,
  SelectNo,
  SelectRobotAvatar,
  SelectYes
} from '../actions'
import {lobby} from '../types'

export interface State {
  readonly type: lobby.ModalType
  readonly visible: boolean
}
type Action =
  | ConfirmKickOutPlayer
  | SelectAvatarImage.CloseModal
  | SelectHumanAvatar.ShowAvatarImageSelect
  | SelectNo
  | SelectRobotAvatar.ShowAvatarImageSelect
  | SelectYes

export const initialState: State = {
  type: lobby.ModalType.confirmation,
  visible: false
}
const modal = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.App.CONFIRM_KICK_OUT_PLAYER:
      return {
        type: lobby.ModalType.confirmation,
        visible: true
      }
    case ActionTypes.Confirmation.SELECT_NO:
    case ActionTypes.Confirmation.SELECT_YES:
      return {
        type: lobby.ModalType.confirmation,
        visible: false
      }
    case ActionTypes.SelectAvatarImage.CLOSE_MODAL:
      return {
        type: lobby.ModalType.avatarImageSelect,
        visible: false
      }
    case ActionTypes.SelectHumanAvatar.SHOW_AVATAR_IMAGE_SELECT:
    case ActionTypes.SelectRobotAvatar.SHOW_AVATAR_IMAGE_SELECT:
      return {
        type: lobby.ModalType.avatarImageSelect,
        visible: true
      }
    default:
      return state
  }
}

export default modal
