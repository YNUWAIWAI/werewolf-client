import * as ActionTypes from '../constants/ActionTypes'
import {
  AvatarImageSelect,
  Confirmation,
  CreateNewHumanAvatar,
  CreateNewRobotAvatar,
  SelectHumanAvatar,
  SelectRobotAvatar,
  SupportSelect,
  WaitingPage
} from '../actions'
import {lobby} from '../types'

export interface State {
  readonly type: lobby.ModalType
  readonly visible: boolean
}
type Action =
  | AvatarImageSelect.CloseModal
  | Confirmation.SelectNo
  | Confirmation.SelectYes
  | CreateNewHumanAvatar.ShowAvatarImageSelect
  | CreateNewRobotAvatar.ShowAvatarImageSelect
  | CreateNewRobotAvatar.ShowSupportSelect
  | SelectHumanAvatar.ShowAvatarImageSelect
  | SelectRobotAvatar.ShowAvatarImageSelect
  | SupportSelect.CloseModal
  | WaitingPage.ConfirmKickOutPlayer

export const initialState: State = {
  type: lobby.ModalType.confirmation,
  visible: false
}
const modal = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.Confirmation.SELECT_NO:
    case ActionTypes.Confirmation.SELECT_YES:
      return {
        type: lobby.ModalType.confirmation,
        visible: false
      }
    case ActionTypes.AvatarImageSelect.CLOSE_MODAL:
      return {
        type: lobby.ModalType.avatarImageSelect,
        visible: false
      }
    case ActionTypes.SelectHumanAvatar.SHOW_AVATAR_IMAGE_SELECT:
    case ActionTypes.SelectRobotAvatar.SHOW_AVATAR_IMAGE_SELECT:
    case ActionTypes.CreateNewHumanAvatar.SHOW_AVATAR_IMAGE_SELECT:
    case ActionTypes.CreateNewRobotAvatar.SHOW_AVATAR_IMAGE_SELECT:
      return {
        type: lobby.ModalType.avatarImageSelect,
        visible: true
      }
    case ActionTypes.CreateNewRobotAvatar.SHOW_SUPPORT_SELECT:
      return {
        type: lobby.ModalType.supportSelect,
        visible: true
      }
    case ActionTypes.SupportSelect.CLOSE_MODAL:
      return {
        type: lobby.ModalType.supportSelect,
        visible: false
      }
    case ActionTypes.WaitingPage.CONFIRM_KICK_OUT_PLAYER:
      return {
        type: lobby.ModalType.confirmation,
        visible: true
      }
    default:
      return state
  }
}

export default modal
