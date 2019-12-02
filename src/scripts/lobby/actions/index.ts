import * as ActionTypes from '../constants/ActionTypes'
import {lobby} from '../types'

export * from './advancedSearch'
export * from './buildVillage'
export * from './idSearch'
export * from './selectHumanAvatar'
export * from './selectRobotAvatar'
export * from './socket'

export const changeLanguage = (language: lobby.Language): {language: lobby.Language, type: ActionTypes.App.CHANGE_LANGUAGE} => ({
  language,
  type: ActionTypes.App.CHANGE_LANGUAGE
})
export const changeLobby = (lobby: lobby.LobbyType): {lobby: lobby.LobbyType, type: ActionTypes.App.CHANGE_LOBBY} => ({
  lobby,
  type: ActionTypes.App.CHANGE_LOBBY
})
export const changeToken = ({lobby, token}: {lobby: lobby.LobbyType, token: string}): {lobby: lobby.LobbyType, token: string, type: ActionTypes.App.CHANGE_TOKEN} => ({
  lobby,
  token,
  type: ActionTypes.App.CHANGE_TOKEN
})
export const changeUserEmail = (userEmail: string): {type: ActionTypes.App.CHANGE_USER_EMAIL, userEmail: string} => ({
  type: ActionTypes.App.CHANGE_USER_EMAIL,
  userEmail
})
export const changeUserName = (userName: string): {userName: string, type: ActionTypes.App.CHANGE_USER_NAME} => ({
  type: ActionTypes.App.CHANGE_USER_NAME,
  userName
})
export const changeUserPassword = (userPassword: string): {userPassword: string, type: ActionTypes.App.CHANGE_USER_PASSWORD} => ({
  type: ActionTypes.App.CHANGE_USER_PASSWORD,
  userPassword
})
export const confirmKickOutPlayer = (values: {name: string, token: lobby.Token}): {name: string, token: lobby.Token, type: ActionTypes.App.CONFIRM_KICK_OUT_PLAYER} => ({
  name: values.name,
  token: values.token,
  type: ActionTypes.App.CONFIRM_KICK_OUT_PLAYER
})
type HoverAvatarScope =
  | ActionTypes.Scope.SelectHumanAvatar
  | ActionTypes.Scope.SelectRobotAvatar
type HoverAvatarType =
  | {
    id: string
    type: ActionTypes.SelectHumanAvatar.HOVER_AVATAR
  }
  | {
    id: string
    type: ActionTypes.SelectRobotAvatar.HOVER_AVATAR
  }
export const hoverAvatar = (scope: HoverAvatarScope) => (id: string): HoverAvatarType => {
  if (scope === ActionTypes.Scope.SelectHumanAvatar) {
    return {
      id,
      type: ActionTypes[scope].HOVER_AVATAR
    }
  }

  return {
    id,
    type: ActionTypes[scope].HOVER_AVATAR
  }
}
export const kickOutPlayer = (): {type: ActionTypes.App.KICK_OUT_PLAYER} => ({
  type: ActionTypes.App.KICK_OUT_PLAYER
})
export const selectNo = (): {type: ActionTypes.App.SELECT_NO} => ({
  type: ActionTypes.App.SELECT_NO
})
export const selectVillage = (id: number): {id: number, type: ActionTypes.App.SELECT_VILLAGE} => ({
  id,
  type: ActionTypes.App.SELECT_VILLAGE
})
export const selectYes = (): {type: ActionTypes.App.SELECT_YES} => ({
  type: ActionTypes.App.SELECT_YES
})
export const showVillage = (): {type: ActionTypes.App.SHOW_VILLAGE} => ({
  type: ActionTypes.App.SHOW_VILLAGE
})
export const submitLogout = (): {type: ActionTypes.App.LOGOUT} => ({
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
export const transition = (target: Target): {type: Target} => ({
  type: target
})

export type ChangeLanguage = ReturnType<typeof changeLanguage>
export type ChangeLobby = ReturnType<typeof changeLobby>
export type ChangeToken = ReturnType<typeof changeToken>
export type ChangeUserEmail = ReturnType<typeof changeUserEmail>
export type ChangeUserName = ReturnType<typeof changeUserName>
export type ChangeUserPassword = ReturnType<typeof changeUserPassword>
export type ConfirmKickOutPlayer = ReturnType<typeof confirmKickOutPlayer>
export type KickOutPlayer = ReturnType<typeof kickOutPlayer>
export type SelectNo = ReturnType<typeof selectNo>
export type SelectVillage = ReturnType<typeof selectVillage>
export type SelectYes = ReturnType<typeof selectYes>
export type ShowVillage = ReturnType<typeof showVillage>
export type SubmitLogout = ReturnType<typeof submitLogout>
export type SelectHumanAvatar$HoverAvatar = ReturnType<ReturnType<typeof hoverAvatar>>
export type SelectRobotAvatar$HoverAvatar = ReturnType<ReturnType<typeof hoverAvatar>>
export type Transition = ReturnType<typeof transition>
