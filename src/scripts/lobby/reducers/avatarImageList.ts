import * as ActionTypes from '../constants/ActionTypes'
import {
  SelectAvatarImage,
  SelectHumanAvatar,
  SelectRobotAvatar
} from '../actions'
import {AvatarImageList} from '../constants/AvatarImageList'
import {lobby} from '../types'

export interface State {
  readonly lobby: lobby.LobbyType
  readonly imageList: string[]
  readonly selectedImage: string
  readonly token: string
}
type Action =
  | SelectAvatarImage.SelectAvatar
  | SelectHumanAvatar.ShowAvatarImageSelect
  | SelectRobotAvatar.ShowAvatarImageSelect

export const initialState: State = {
  imageList: AvatarImageList,
  lobby: lobby.LobbyType.human,
  selectedImage: '',
  token: ''
}
const avatarImageList = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SelectAvatarImage.SELECT_AVATAR:
      return {
        ... state,
        selectedImage: action.image
      }
    case ActionTypes.SelectHumanAvatar.SHOW_AVATAR_IMAGE_SELECT:
      return {
        ... state,
        lobby: lobby.LobbyType.human,
        selectedImage: action.image,
        token: action.token
      }
    case ActionTypes.SelectRobotAvatar.SHOW_AVATAR_IMAGE_SELECT:
      return {
        ... state,
        lobby: lobby.LobbyType.robot,
        selectedImage: action.image,
        token: action.token
      }
    default:
      return state
  }
}

export default avatarImageList
