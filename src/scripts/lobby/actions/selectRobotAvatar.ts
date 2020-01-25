import {SelectRobotAvatar} from '../constants/ActionTypes'
import {lobby} from '../types'

export type SelectRobotAvatar$AutorizationRequestAccepted = {
  accessToken: lobby.Token
  type: SelectRobotAvatar.AUTHORIZATION_REQUEST_ACCEPTED
}
const autorizationRequestAccepted = (accessToken: lobby.Token): SelectRobotAvatar$AutorizationRequestAccepted => ({
  accessToken,
  type: SelectRobotAvatar.AUTHORIZATION_REQUEST_ACCEPTED
})

export type SelectRobotAvatar$ChangeCheckbox = {
  id: string
  type: SelectRobotAvatar.CHANGE_CHECKBOX
}
const changeCheckbox = (id: string): SelectRobotAvatar$ChangeCheckbox => ({
  id,
  type: SelectRobotAvatar.CHANGE_CHECKBOX
})

export type SelectRobotAvatar$Delete = {
  type: SelectRobotAvatar.DELETE
}
const deleteAvatar = (): SelectRobotAvatar$Delete => ({
  type: SelectRobotAvatar.DELETE
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

export type SelectRobotAvatar$UpdateAvatarImage = {
  image: string
  token: lobby.Token
  type: SelectRobotAvatar.UPDATE_AVATAR_IMAGE
}
const updateAvatarImage = (token: lobby.Token) => (image: string): SelectRobotAvatar$UpdateAvatarImage => ({
  image,
  token,
  type: SelectRobotAvatar.UPDATE_AVATAR_IMAGE
})

export type SelectRobotAvatar$UpdateAvatarLanguage = {
  language: lobby.Language
  token: lobby.Token
  type: SelectRobotAvatar.UPDATE_AVATAR_LANGUAGE
}
const updateAvatarLanguage = (token: lobby.Token) => (language: lobby.Language): SelectRobotAvatar$UpdateAvatarLanguage => ({
  language,
  token,
  type: SelectRobotAvatar.UPDATE_AVATAR_LANGUAGE
})

export type SelectRobotAvatar$UpdateAvatarName = {
  name: string
  token: lobby.Token
  type: SelectRobotAvatar.UPDATE_AVATAR_NAME
}
const updateAvatarName = (token: lobby.Token) => (name: string): SelectRobotAvatar$UpdateAvatarName => ({
  name,
  token,
  type: SelectRobotAvatar.UPDATE_AVATAR_NAME
})

export const selectRobotAvatar = {
  autorizationRequestAccepted,
  changeCheckbox,
  deleteAvatar,
  hoverAvatar,
  renewAvatarToken,
  updateAvatarImage,
  updateAvatarLanguage,
  updateAvatarName
}
