import * as ActionTypes from '../constants/ActionTypes'
import {
  AvatarImageSelect,
  CreateNewHumanAvatar,
  SelectHumanAvatar,
  SelectRobotAvatar
} from '../actions'
import {AvatarImageList} from '../constants/AvatarImageList'

export interface State {
  readonly imageList: string[]
  readonly scope: ActionTypes.Scope.SelectHumanAvatar | ActionTypes.Scope.SelectRobotAvatar | ActionTypes.Scope.CreateNewHumanAvatar
  readonly selectedImage: string
  readonly token: string
}
type Action =
  | AvatarImageSelect.SelectAvatar
  | CreateNewHumanAvatar.ShowAvatarImageSelect
  | SelectHumanAvatar.ShowAvatarImageSelect
  | SelectRobotAvatar.ShowAvatarImageSelect

export const initialState: State = {
  imageList: AvatarImageList,
  scope: ActionTypes.Scope.SelectHumanAvatar,
  selectedImage: '',
  token: ''
}
const avatarImageSelect = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.AvatarImageSelect.SELECT_AVATAR:
      return {
        ... state,
        selectedImage: action.image
      }
    case ActionTypes.CreateNewHumanAvatar.SHOW_AVATAR_IMAGE_SELECT:
      return {
        ... state,
        scope: ActionTypes.Scope.CreateNewHumanAvatar,
        selectedImage: action.image,
        token: ''
      }
    case ActionTypes.SelectHumanAvatar.SHOW_AVATAR_IMAGE_SELECT:
      return {
        ... state,
        scope: ActionTypes.Scope.SelectHumanAvatar,
        selectedImage: action.image,
        token: action.token
      }
    case ActionTypes.SelectRobotAvatar.SHOW_AVATAR_IMAGE_SELECT:
      return {
        ... state,
        scope: ActionTypes.Scope.SelectRobotAvatar,
        selectedImage: action.image,
        token: action.token
      }
    default:
      return state
  }
}

export default avatarImageSelect
