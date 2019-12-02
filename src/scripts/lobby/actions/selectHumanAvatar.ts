import {SelectHumanAvatar} from '../constants/ActionTypes'

export type SelectHumanAvatar$ChangeCheckbox = {
  id: string
  type: SelectHumanAvatar.CHANGE_CHECKBOX
}
const changeCheckbox = (id: string): SelectHumanAvatar$ChangeCheckbox => ({
  id,
  type: SelectHumanAvatar.CHANGE_CHECKBOX
})

export type SelectHumanAvatar$HoverAvatar = {
  id: string
  type: SelectHumanAvatar.HOVER_AVATAR
}
const hoverAvatar = (id: string): SelectHumanAvatar$HoverAvatar => ({
  id,
  type: SelectHumanAvatar.HOVER_AVATAR
})

export const selectHumanAvatar = {
  changeCheckbox,
  hoverAvatar
}
