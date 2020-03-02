import {SelectHumanAvatar} from '../constants/ActionTypes'
import {lobby} from '../types'

export type SelectHumanAvatar$ChangeAvatarImage = {
  image: string
  token: lobby.Token
  type: SelectHumanAvatar.CHANGE_AVATAR_IMAGE
}
const changeAvatarImage = (token: lobby.Token) => (image: string): SelectHumanAvatar$ChangeAvatarImage => ({
  image,
  token,
  type: SelectHumanAvatar.CHANGE_AVATAR_IMAGE
})

export type SelectHumanAvatar$ChangeAvatarLanguage = {
  language: lobby.Language
  token: lobby.Token
  type: SelectHumanAvatar.CHANGE_AVATAR_LANGUAGE
}
const changeAvatarLanguage = (token: lobby.Token) => (language: lobby.Language): SelectHumanAvatar$ChangeAvatarLanguage => ({
  language,
  token,
  type: SelectHumanAvatar.CHANGE_AVATAR_LANGUAGE
})

export type SelectHumanAvatar$ChangeAvatarName = {
  name: string
  token: lobby.Token
  type: SelectHumanAvatar.CHANGE_AVATAR_NAME
}
const changeAvatarName = (token: lobby.Token) => (name: string): SelectHumanAvatar$ChangeAvatarName => ({
  name,
  token,
  type: SelectHumanAvatar.CHANGE_AVATAR_NAME
})

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

export type SelectHumanAvatar$ShowAvatarImageSelect = {
  image: string
  token: lobby.Token
  type: SelectHumanAvatar.SHOW_AVATAR_IMAGE_SELECT
}
const showAvatarImageSelect = (token: lobby.Token) => (image: string): SelectHumanAvatar$ShowAvatarImageSelect => ({
  image,
  token,
  type: SelectHumanAvatar.SHOW_AVATAR_IMAGE_SELECT
})

export const selectHumanAvatar = {
  changeAvatarImage,
  changeAvatarLanguage,
  changeAvatarName,
  changeCheckbox,
  hoverAvatar,
  showAvatarImageSelect
}
