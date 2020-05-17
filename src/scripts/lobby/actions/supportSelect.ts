import * as ActionTypes from '../constants/ActionTypes'
import {lobby} from '../types'

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace SupportSelect {
  type ChangeCheckbox = {
    checked: boolean
    member: lobby.Member
    numberOfPlayers: lobby.NumberOfPlayers
    type: ActionTypes.SupportSelect.CHANGE_CHECKBOX
  }
  type CloseModal = {
    type: ActionTypes.SupportSelect.CLOSE_MODAL
  }
}

const changeCheckbox = (numberOfPlayers: lobby.NumberOfPlayers) => (member: lobby.Member) => (checked: boolean): SupportSelect.ChangeCheckbox => ({
  checked,
  member,
  numberOfPlayers,
  type: ActionTypes.SupportSelect.CHANGE_CHECKBOX
})
const closeModal = (): SupportSelect.CloseModal => ({
  type: ActionTypes.SupportSelect.CLOSE_MODAL
})

export const supportSelect = {
  changeCheckbox,
  closeModal
}
