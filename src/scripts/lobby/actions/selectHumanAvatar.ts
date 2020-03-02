import * as ActionTypes from '../constants/ActionTypes'
import {lobby} from '../types'

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace SelectHumanAvatar {
  type ChangeAvatarImage = {
    image: string
    token: lobby.Token
    type: ActionTypes.SelectHumanAvatar.CHANGE_AVATAR_IMAGE
  }
  type ChangeAvatarLanguage = {
    language: lobby.Language
    token: lobby.Token
    type: ActionTypes.SelectHumanAvatar.CHANGE_AVATAR_LANGUAGE
  }
  type ChangeAvatarName = {
    name: string
    token: lobby.Token
    type: ActionTypes.SelectHumanAvatar.CHANGE_AVATAR_NAME
  }
  type ChangeCheckbox = {
    id: string
    type: ActionTypes.SelectHumanAvatar.CHANGE_CHECKBOX
  }
  type HoverAvatar = {
    id: string
    type: ActionTypes.SelectHumanAvatar.HOVER_AVATAR
  }
  type ShowAvatarImageSelect = {
    image: string
    token: lobby.Token
    type: ActionTypes.SelectHumanAvatar.SHOW_AVATAR_IMAGE_SELECT
  }

}

const changeAvatarImage = (token: lobby.Token) => (image: string): SelectHumanAvatar.ChangeAvatarImage => ({
  image,
  token,
  type: ActionTypes.SelectHumanAvatar.CHANGE_AVATAR_IMAGE
})
const changeAvatarLanguage = (token: lobby.Token) => (language: lobby.Language): SelectHumanAvatar.ChangeAvatarLanguage => ({
  language,
  token,
  type: ActionTypes.SelectHumanAvatar.CHANGE_AVATAR_LANGUAGE
})
const changeAvatarName = (token: lobby.Token) => (name: string): SelectHumanAvatar.ChangeAvatarName => ({
  name,
  token,
  type: ActionTypes.SelectHumanAvatar.CHANGE_AVATAR_NAME
})
const changeCheckbox = (id: string): SelectHumanAvatar.ChangeCheckbox => ({
  id,
  type: ActionTypes.SelectHumanAvatar.CHANGE_CHECKBOX
})
const hoverAvatar = (id: string): SelectHumanAvatar.HoverAvatar => ({
  id,
  type: ActionTypes.SelectHumanAvatar.HOVER_AVATAR
})
const showAvatarImageSelect = (token: lobby.Token) => (image: string): SelectHumanAvatar.ShowAvatarImageSelect => ({
  image,
  token,
  type: ActionTypes.SelectHumanAvatar.SHOW_AVATAR_IMAGE_SELECT
})

export const selectHumanAvatar = {
  changeAvatarImage,
  changeAvatarLanguage,
  changeAvatarName,
  changeCheckbox,
  hoverAvatar,
  showAvatarImageSelect
}
