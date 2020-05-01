import * as ActionTypes from '../constants/ActionTypes'
import {
  AvatarImageSelect,
  Confirmation,
  CreateNewHumanAvatar,
  CreateNewRobotAvatar,
  SelectHumanAvatar,
  SelectRobotAvatar,
  Socket,
  SupportSelect,
  WaitingPage
} from '../actions'

export interface State {
  readonly loading: boolean
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
  | Socket.Close
  | Socket.Error
  | Socket.Open
  | SupportSelect.CloseModal
  | WaitingPage.ConfirmKickOutPlayer

export const initialState: State = {
  loading: true,
  visible: true
}

const obfucator = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.AvatarImageSelect.CLOSE_MODAL:
    case ActionTypes.SupportSelect.CLOSE_MODAL:
      return {
        loading: false,
        visible: false
      }
    case ActionTypes.WaitingPage.CONFIRM_KICK_OUT_PLAYER:
    case ActionTypes.CreateNewHumanAvatar.SHOW_AVATAR_IMAGE_SELECT:
    case ActionTypes.CreateNewRobotAvatar.SHOW_AVATAR_IMAGE_SELECT:
    case ActionTypes.CreateNewRobotAvatar.SHOW_SUPPORT_SELECT:
    case ActionTypes.SelectHumanAvatar.SHOW_AVATAR_IMAGE_SELECT:
    case ActionTypes.SelectRobotAvatar.SHOW_AVATAR_IMAGE_SELECT:
      return {
        loading: false,
        visible: true
      }
    case ActionTypes.Confirmation.SELECT_NO:
    case ActionTypes.Confirmation.SELECT_YES:
      return {
        loading: false,
        visible: false
      }
    case ActionTypes.Socket.CLOSE:
    case ActionTypes.Socket.ERROR:
      return {
        loading: true,
        visible: true
      }
    case ActionTypes.Socket.OPEN:
      return {
        loading: false,
        visible: false
      }
    default:
      return state
  }
}

export default obfucator
