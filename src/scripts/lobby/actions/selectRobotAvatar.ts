import {SelectRobotAvatar} from '../constants/ActionTypes'
import {lobby} from '../types'

export type SelectRobotAvatar$ChangeCheckbox = {
  id: string
  type: SelectRobotAvatar.CHANGE_CHECKBOX
}
const changeCheckbox = (id: string): SelectRobotAvatar$ChangeCheckbox => ({
  id,
  type: SelectRobotAvatar.CHANGE_CHECKBOX
})

export type SelectRobotAvatar$HoverAvatar = {
  id: string
  type: SelectRobotAvatar.HOVER_AVATAR
}
const hoverAvatar = (id: string): SelectRobotAvatar$HoverAvatar => ({
  id,
  type: SelectRobotAvatar.HOVER_AVATAR
})

export type SelectRobotAvatar$RenewAvatarToken = {
  token: lobby.Token
  type: SelectRobotAvatar.RENEW_AVATAR_TOKEN
}
const renewAvatarToken = (token: lobby.Token): SelectRobotAvatar$RenewAvatarToken => ({
  token,
  type: SelectRobotAvatar.RENEW_AVATAR_TOKEN
})

export const selectRobotAvatar = {
  changeCheckbox,
  hoverAvatar,
  renewAvatarToken
}
