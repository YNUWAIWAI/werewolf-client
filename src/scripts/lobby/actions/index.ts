import * as ActionTypes from '../constants/ActionTypes'
import {lobby as Lobby} from '../types'

export * from './advancedSearch'
export * from './buildVillage'
export * from './confirmation'
export * from './idSearch'
export * from './message'
export * from './selectAvatarImage'
export * from './selectHumanAvatar'
export * from './selectRobotAvatar'
export * from './settings'
export * from './socket'

export type ChangeLobby = {
  lobby: Lobby.LobbyType
  type: ActionTypes.App.CHANGE_LOBBY
}
export const changeLobby = (lobby: Lobby.LobbyType): ChangeLobby => ({
  lobby,
  type: ActionTypes.App.CHANGE_LOBBY
})

export type ChangeToken = {
  lobby: Lobby.LobbyType
  token: string
  type: ActionTypes.App.CHANGE_TOKEN
}
export const changeToken = ({lobby, token}: {lobby: Lobby.LobbyType, token: string}): ChangeToken => ({
  lobby,
  token,
  type: ActionTypes.App.CHANGE_TOKEN
})

export type ConfirmKickOutPlayer = {
  name: string
  token: Lobby.Token
  type: ActionTypes.App.CONFIRM_KICK_OUT_PLAYER
}
export const confirmKickOutPlayer = (values: {name: string, token: Lobby.Token}): ConfirmKickOutPlayer => ({
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

export type Init = {
  type: ActionTypes.App.INIT
}
export const init = (): Init => ({
  type: ActionTypes.App.INIT
})

export type SelectVillage = {
  id: number
  type: ActionTypes.App.SELECT_VILLAGE
}
export const selectVillage = (id: number): SelectVillage => ({
  id,
  type: ActionTypes.App.SELECT_VILLAGE
})

export type ShowVillage = {
  type: ActionTypes.App.SHOW_VILLAGE
}
export const showVillage = (): ShowVillage => ({
  type: ActionTypes.App.SHOW_VILLAGE
})

export type Target =
  | ActionTypes.AdvancedSearch.SEARCH
  | ActionTypes.App.LEAVE_WAITING_PAGE
  | ActionTypes.App.PLAY_GAME
  | ActionTypes.App.REFRESH
  | ActionTypes.App.SHOW_ADVANCED_SEARCH
  | ActionTypes.App.SHOW_BUILD_VILLAGE
  | ActionTypes.App.SHOW_CREATE_NEW_AVATAR
  | ActionTypes.App.SHOW_CREDITS
  | ActionTypes.App.SHOW_HISTORY
  | ActionTypes.App.SHOW_HOW_TO_PLAY
  | ActionTypes.App.SHOW_ID_SEARCH
  | ActionTypes.App.SHOW_LOBBY_FOR_AUDIENCE
  | ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER
  | ActionTypes.App.SHOW_LOBBY_FOR_ROBOT_PLAYER
  | ActionTypes.App.SHOW_MAIN
  | ActionTypes.App.SHOW_SELECT_HUMAN_AVATAR
  | ActionTypes.App.SHOW_SELECT_ROBOT_AVATAR
  | ActionTypes.App.SHOW_SETTINGS
  | ActionTypes.App.SHOW_VILLAGE
  | ActionTypes.BuildVillage.BUILD
  | ActionTypes.IdSearch.SEARCH
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
