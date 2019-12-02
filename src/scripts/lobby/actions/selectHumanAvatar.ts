import {SelectHumanAvatar} from '../constants/ActionTypes'

export type SelectHumanAvatar$ChangeCheckbox = {
  id: string
  type: SelectHumanAvatar.CHANGE_CHECKBOX
}
const changeCheckbox = (id: string): SelectHumanAvatar$ChangeCheckbox => ({
  id,
  type: SelectHumanAvatar.CHANGE_CHECKBOX
})

export const selectHumanAvatar = {
  changeCheckbox
}
