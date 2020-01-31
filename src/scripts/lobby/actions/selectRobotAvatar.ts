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

export type SelectRobotAvatar$ChangeAvatarImage = {
  image: string
  token: lobby.Token
  type: SelectRobotAvatar.CHANGE_AVATAR_IMAGE
}
const changeAvatarImage = (token: lobby.Token) => (image: string): SelectRobotAvatar$ChangeAvatarImage => ({
  image,
  token,
  type: SelectRobotAvatar.CHANGE_AVATAR_IMAGE
})

export type SelectRobotAvatar$ChangeAvatarLanguage = {
  language: lobby.Language
  token: lobby.Token
  type: SelectRobotAvatar.CHANGE_AVATAR_LANGUAGE
}
const changeAvatarLanguage = (token: lobby.Token) => (language: lobby.Language): SelectRobotAvatar$ChangeAvatarLanguage => ({
  language,
  token,
  type: SelectRobotAvatar.CHANGE_AVATAR_LANGUAGE
})

export type SelectRobotAvatar$ChangeAvatarName = {
  name: string
  token: lobby.Token
  type: SelectRobotAvatar.CHANGE_AVATAR_NAME
}
const changeAvatarName = (token: lobby.Token) => (name: string): SelectRobotAvatar$ChangeAvatarName => ({
  name,
  token,
  type: SelectRobotAvatar.CHANGE_AVATAR_NAME
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

export type SelectRobotAvatar$RunInTheBackround = {
  type: SelectRobotAvatar.RUN_IN_THE_BACKGROUND
}
const runInTheBackground = (): SelectRobotAvatar$RunInTheBackround => ({
  type: SelectRobotAvatar.RUN_IN_THE_BACKGROUND
})

export type SelectRobotAvatar$StopAvatar = {
  token: lobby.Token[]
  type: SelectRobotAvatar.STOP
}
const stopAvatar = (token: lobby.Token[]): SelectRobotAvatar$StopAvatar => ({
  token,
  type: SelectRobotAvatar.STOP
})

export const selectRobotAvatar = {
  autorizationRequestAccepted,
  changeAvatarImage,
  changeAvatarLanguage,
  changeAvatarName,
  changeCheckbox,
  deleteAvatar,
  hoverAvatar,
  renewAvatarToken,
  runInTheBackground,
  stopAvatar
}
