import * as ActionTypes from '../constants/ActionTypes'
import {lobby} from '../types'

export * from './advancedSearch'
export * from './buildVillage'
export * from './idSearch'
export * from './selectHumanAvatar'
export * from './selectRobotAvatar'
export * from './socket'

export type ChangeLanguage = {
  language: lobby.Language
  type: ActionTypes.App.CHANGE_LANGUAGE
}
export const changeLanguage = (language: lobby.Language): ChangeLanguage => ({
  language,
  type: ActionTypes.App.CHANGE_LANGUAGE
})

export type ChangeLobby = {
  lobby: lobby.LobbyType
  type: ActionTypes.App.CHANGE_LOBBY
}
export const changeLobby = (lobby: lobby.LobbyType): ChangeLobby => ({
  lobby,
  type: ActionTypes.App.CHANGE_LOBBY
})

export type ChangeToken = {
  lobby: lobby.LobbyType
  token: string
  type: ActionTypes.App.CHANGE_TOKEN
}
export const changeToken = ({lobby, token}: {lobby: lobby.LobbyType, token: string}): ChangeToken => ({
  lobby,
  token,
  type: ActionTypes.App.CHANGE_TOKEN
})

export type ChangeUserEmail = {
  type: ActionTypes.App.CHANGE_USER_EMAIL
  userEmail: string
}
export const changeUserEmail = (userEmail: string): ChangeUserEmail => ({
  type: ActionTypes.App.CHANGE_USER_EMAIL,
  userEmail
})

export type ChangeUserName = {
  userName: string
  type: ActionTypes.App.CHANGE_USER_NAME
}
export const changeUserName = (userName: string): ChangeUserName => ({
  type: ActionTypes.App.CHANGE_USER_NAME,
  userName
})

export type ChangeUserPassword = {
  userPassword: string
  type: ActionTypes.App.CHANGE_USER_PASSWORD
}
export const changeUserPassword = (userPassword: string): ChangeUserPassword => ({
  type: ActionTypes.App.CHANGE_USER_PASSWORD,
  userPassword
})

export type ConfirmKickOutPlayer = {
  name: string
  token: lobby.Token
  type: ActionTypes.App.CONFIRM_KICK_OUT_PLAYER
}
export const confirmKickOutPlayer = (values: {name: string, token: lobby.Token}): ConfirmKickOutPlayer => ({
  name: values.name,
  token: values.token,
  type: ActionTypes.App.CONFIRM_KICK_OUT_PLAYER
})

export type KickOutPlayer = {
  type: ActionTypes.App.KICK_OUT_PLAYER
}
export const kickOutPlayer = (): KickOutPlayer => ({
  type: ActionTypes.App.KICK_OUT_PLAYER
})

export type SelectNo = {
  type: ActionTypes.App.SELECT_NO
}
export const selectNo = (): SelectNo => ({
  type: ActionTypes.App.SELECT_NO
})

export type SelectVillage = {
  id: number
  type: ActionTypes.App.SELECT_VILLAGE
}
export const selectVillage = (id: number): SelectVillage => ({
  id,
  type: ActionTypes.App.SELECT_VILLAGE
})

export type SelectYes = {
  type: ActionTypes.App.SELECT_YES
}
export const selectYes = (): SelectYes => ({
  type: ActionTypes.App.SELECT_YES
})

export type ShowVillage = {
  type: ActionTypes.App.SHOW_VILLAGE
}
export const showVillage = (): ShowVillage => ({
  type: ActionTypes.App.SHOW_VILLAGE
})

export type SubmitLogout = {
  type: ActionTypes.App.LOGOUT
}
export const submitLogout = (): SubmitLogout => ({
  type: ActionTypes.App.LOGOUT
})
export type Target =
  | ActionTypes.App.ADVANCED_SEARCH
  | ActionTypes.App.BUILD_VILLAGE
  | ActionTypes.App.ID_SEARCH
  | ActionTypes.App.LEAVE_WAITING_PAGE
  | ActionTypes.App.PLAY_GAME
  | ActionTypes.App.REFRESH
  | ActionTypes.App.SHOW_ADVANCED_SEARCH
  | ActionTypes.App.SHOW_BUILD_VILLAGE
  | ActionTypes.App.SHOW_CONNECTING_TO_ROBOT_PLAYER
  | ActionTypes.App.SHOW_CREDITS
  | ActionTypes.App.SHOW_HISTORY
  | ActionTypes.App.SHOW_HOW_TO_PLAY
  | ActionTypes.App.SHOW_ID_SEARCH
  | ActionTypes.App.SHOW_LOBBY_FOR_AUDIENCE
  | ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER
  | ActionTypes.App.SHOW_LOBBY_FOR_ROBOT_PLAYER
  | ActionTypes.App.SHOW_MAIN
  | ActionTypes.App.SHOW_SETTINGS
  | ActionTypes.App.SHOW_VILLAGE
  | ActionTypes.SelectHumanAvatar.CREATE
  | ActionTypes.SelectHumanAvatar.DELETE
  | ActionTypes.SelectHumanAvatar.SELECT
  | ActionTypes.SelectRobotAvatar.CREATE
  | ActionTypes.SelectRobotAvatar.DELETE
  | ActionTypes.SelectRobotAvatar.RUN_IN_THE_BACKGROUND
  | ActionTypes.SelectRobotAvatar.RUN_IN_THE_FOREGROUND
  | ActionTypes.SelectRobotAvatar.STOP

export type Transition = {
  type: Target
}
export const transition = (target: Target): Transition => ({
  type: target
})
