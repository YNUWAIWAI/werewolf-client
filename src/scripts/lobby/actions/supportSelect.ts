import * as ActionTypes from '../constants/ActionTypes'

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace SupportSelect {
  type CloseModal = {
    type: ActionTypes.SupportSelect.CLOSE_MODAL
  }
  type SelectMember = {
    image: string
    type: ActionTypes.SupportSelect.SELECT_MEMBER
  }
}

const closeModal = (): SupportSelect.CloseModal => ({
  type: ActionTypes.SupportSelect.CLOSE_MODAL
})

const selectMember = (image: string): SupportSelect.SelectMember => ({
  image,
  type: ActionTypes.SupportSelect.SELECT_MEMBER
})

export const supportSelect = {
  closeModal,
  selectMember
}
