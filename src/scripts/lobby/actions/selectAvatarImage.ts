import {SelectAvatarImage} from '../constants/ActionTypes'

export type SelectAvatarImage$SelectAvatar = {
  image: string
  type: SelectAvatarImage.SELECT_AVATAR
}
const selectAvatar = (image: string): SelectAvatarImage$SelectAvatar => ({
  image,
  type: SelectAvatarImage.SELECT_AVATAR
})

export const selectAvatarImage = {
  selectAvatar
}
