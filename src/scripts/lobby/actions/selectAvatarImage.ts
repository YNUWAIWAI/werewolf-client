import * as ActionTypes from '../constants/ActionTypes'

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace SelectAvatarImage {
  type CloseModal = {
    type: ActionTypes.SelectAvatarImage.CLOSE_MODAL
  }
  type SelectAvatar = {
    image: string
    type: ActionTypes.SelectAvatarImage.SELECT_AVATAR
  }
}

const closeModal = (): SelectAvatarImage.CloseModal => ({
  type: ActionTypes.SelectAvatarImage.CLOSE_MODAL
})

const selectAvatar = (image: string): SelectAvatarImage.SelectAvatar => ({
  image,
  type: ActionTypes.SelectAvatarImage.SELECT_AVATAR
})

export const selectAvatarImage = {
  closeModal,
  selectAvatar
}
