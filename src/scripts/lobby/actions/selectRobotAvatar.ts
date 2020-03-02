import * as ActionTypes from '../constants/ActionTypes'
import {lobby} from '../types'

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace SelectRobotAvatar {
  export type AutorizationRequestAccepted = {
    accessToken: lobby.Token
    type: ActionTypes.SelectRobotAvatar.AUTHORIZATION_REQUEST_ACCEPTED
  }
  export type ChangeAvatarImage = {
    image: string
    token: lobby.Token
    type: ActionTypes.SelectRobotAvatar.CHANGE_AVATAR_IMAGE
  }
  export type ChangeAvatarLanguage = {
    language: lobby.Language
    token: lobby.Token
    type: ActionTypes.SelectRobotAvatar.CHANGE_AVATAR_LANGUAGE
  }
  export type ChangeAvatarName = {
    name: string
    token: lobby.Token
    type: ActionTypes.SelectRobotAvatar.CHANGE_AVATAR_NAME
  }
  export type ChangeCheckbox = {
    id: string
    type: ActionTypes.SelectRobotAvatar.CHANGE_CHECKBOX
  }
  export type Delete = {
    type: ActionTypes.SelectRobotAvatar.DELETE
  }
  export type HoverAvatar = {
    id: string
    type: ActionTypes.SelectRobotAvatar.HOVER_AVATAR
  }
  export type RenewAvatarToken = {
    token: lobby.Token
    type: ActionTypes.SelectRobotAvatar.RENEW_AVATAR_TOKEN
  }
  export type RunInTheBackround = {
    type: ActionTypes.SelectRobotAvatar.RUN_IN_THE_BACKGROUND
  }
  export type ShowAvatarImageSelect = {
    image: string
    token: lobby.Token
    type: ActionTypes.SelectRobotAvatar.SHOW_AVATAR_IMAGE_SELECT
  }
  export type StopAvatar = {
    token: lobby.Token[]
    type: ActionTypes.SelectRobotAvatar.STOP
  }
}

const autorizationRequestAccepted = (accessToken: lobby.Token): SelectRobotAvatar.AutorizationRequestAccepted => ({
  accessToken,
  type: ActionTypes.SelectRobotAvatar.AUTHORIZATION_REQUEST_ACCEPTED
})
const changeAvatarImage = (token: lobby.Token) => (image: string): SelectRobotAvatar.ChangeAvatarImage => ({
  image,
  token,
  type: ActionTypes.SelectRobotAvatar.CHANGE_AVATAR_IMAGE
})
const changeAvatarLanguage = (token: lobby.Token) => (language: lobby.Language): SelectRobotAvatar.ChangeAvatarLanguage => ({
  language,
  token,
  type: ActionTypes.SelectRobotAvatar.CHANGE_AVATAR_LANGUAGE
})
const changeAvatarName = (token: lobby.Token) => (name: string): SelectRobotAvatar.ChangeAvatarName => ({
  name,
  token,
  type: ActionTypes.SelectRobotAvatar.CHANGE_AVATAR_NAME
})
const changeCheckbox = (id: string): SelectRobotAvatar.ChangeCheckbox => ({
  id,
  type: ActionTypes.SelectRobotAvatar.CHANGE_CHECKBOX
})
const deleteAvatar = (): SelectRobotAvatar.Delete => ({
  type: ActionTypes.SelectRobotAvatar.DELETE
})
const hoverAvatar = (id: string): SelectRobotAvatar.HoverAvatar => ({
  id,
  type: ActionTypes.SelectRobotAvatar.HOVER_AVATAR
})
const renewAvatarToken = (token: lobby.Token): SelectRobotAvatar.RenewAvatarToken => ({
  token,
  type: ActionTypes.SelectRobotAvatar.RENEW_AVATAR_TOKEN
})
const runInTheBackground = (): SelectRobotAvatar.RunInTheBackround => ({
  type: ActionTypes.SelectRobotAvatar.RUN_IN_THE_BACKGROUND
})
const showAvatarImageSelect = (token: lobby.Token) => (image: string): SelectRobotAvatar.ShowAvatarImageSelect => ({
  image,
  token,
  type: ActionTypes.SelectRobotAvatar.SHOW_AVATAR_IMAGE_SELECT
})
const stopAvatar = (token: lobby.Token[]): SelectRobotAvatar.StopAvatar => ({
  token,
  type: ActionTypes.SelectRobotAvatar.STOP
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
  showAvatarImageSelect,
  stopAvatar
}
