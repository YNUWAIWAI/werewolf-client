import * as ActionTypes from '../constants/ActionTypes'

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace AvatarImageSelect {
  type CloseModal = {
    type: ActionTypes.AvatarImageSelect.CLOSE_MODAL
  }
  type SelectAvatar = {
    image: string
    type: ActionTypes.AvatarImageSelect.SELECT_AVATAR
  }
}

const closeModal = (): AvatarImageSelect.CloseModal => ({
  type: ActionTypes.AvatarImageSelect.CLOSE_MODAL
})

const selectAvatar = (image: string): AvatarImageSelect.SelectAvatar => ({
  image,
  type: ActionTypes.AvatarImageSelect.SELECT_AVATAR
})

export const avatarImageSelect = {
  closeModal,
  selectAvatar
}
