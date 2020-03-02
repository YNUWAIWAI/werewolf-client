import * as ActionTypes from '../constants/ActionTypes'
import {
  SelectHumanAvatar$ShowAvatarImageSelect,
  SelectRobotAvatar$ShowAvatarImageSelect,
} from '../actions'
import {AvatarImageList} from '../constants/AvatarImageList'

export interface State {
  readonly imageList: string[]
  readonly selectedImage: string
  readonly token: string
}
type Action =
  | SelectHumanAvatar$ShowAvatarImageSelect
  | SelectRobotAvatar$ShowAvatarImageSelect

export const initialState: State = {
  imageList: AvatarImageList,
  selectedImage: '',
  token: ''
}
const avatarImageList = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SelectHumanAvatar.SHOW_AVATAR_IMAGE_SELECT:
    case ActionTypes.SelectRobotAvatar.SHOW_AVATAR_IMAGE_SELECT:
      return {
        ... state,
        selectedImage: action.image,
        token: action.token
      }
    default:
      return state
  }
}

export default avatarImageList
