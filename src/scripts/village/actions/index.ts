import * as ActionTypes from '../constants/ActionTypes'
import {village} from '../types'

export * from './socket'
export * from './message'

export type ActivateNextButton = {
  type: ActionTypes.App.ACTIVATE_NEXT_BUTTON
  villageId: number
}
export const activateNextButton = (villageId: number): ActivateNextButton => ({
  type: ActionTypes.App.ACTIVATE_NEXT_BUTTON,
  villageId
})

export type ChangeDay = {
  from: number
  to: number
  type: ActionTypes.App.CHANGE_DAY
}
export const changeDay = ({from, to}: {from: number, to: number}): ChangeDay => ({
  from,
  to,
  type: ActionTypes.App.CHANGE_DAY
})

export type ChangeLanguage = {
  language: village.Language
  type: ActionTypes.App.CHANGE_LANGUAGE
}
export const changeLanguage = (language: village.Language): ChangeLanguage => ({
  language,
  type: ActionTypes.App.CHANGE_LANGUAGE
})

export type ClickNavigationButton = {
  type: ActionTypes.Navigation
}
export const clickNavigationButton = (type: ActionTypes.Navigation): ClickNavigationButton => ({
  type
})

export type ChangePhase = {
  from: village.Phase
  to: village.Phase
  type: ActionTypes.App.CHANGE_PHASE
}
export const changePhase = ({from, to}: {from: village.Phase, to: village.Phase}): ChangePhase => ({
  from,
  to,
  type: ActionTypes.App.CHANGE_PHASE
})

export type ClickHideButton = {
  hide: boolean
  type: ActionTypes.App.CLICK_HIDE_BUTTON
}
export const handleClickHideButton = (hide: boolean): ClickHideButton => ({
  hide,
  type: ActionTypes.App.CLICK_HIDE_BUTTON
})

export type DeactivateNextButton = {
  type: ActionTypes.App.DEACTIVATE_NEXT_BUTTON
}
export const deactivateNextButton = (): DeactivateNextButton => ({
  type: ActionTypes.App.DEACTIVATE_NEXT_BUTTON
})

export type ChangePredictionBoard = {
  characterId: village.CharacterId
  nextState: village.BoardState
  roleId: village.RoleId
  type: ActionTypes.App.CHANGE_PREDICTION_BOARD
}
export const handleBoardClick = (item: {nextState: village.BoardState, characterId: village.CharacterId, roleId: village.RoleId}): ChangePredictionBoard => ({
  characterId: item.characterId,
  nextState: item.nextState,
  roleId: item.roleId,
  type: ActionTypes.App.CHANGE_PREDICTION_BOARD
})

export type HidePredictionSpec = {
  type: ActionTypes.App.HIDE_PREDICTION_SPEC
}
export const hidePredictionSpec = (): HidePredictionSpec => ({
  type: ActionTypes.App.HIDE_PREDICTION_SPEC
})

export type HideResult = {
  type: ActionTypes.App.HIDE_RESULT
}
export const hideResult = (): HideResult => ({
  type: ActionTypes.App.HIDE_RESULT
})

export type PostChat = {
  channel: village.InputChannel
  text: string
  type: ActionTypes.App.POST_CHAT
}
export const postChat = ({channel, text}: {channel: village.InputChannel, text: string}): PostChat => ({
  channel,
  text,
  type: ActionTypes.App.POST_CHAT
})

export type Ready = {
  token: string
  type: ActionTypes.App.READY
  villageId: number
}
export const ready = ({token, villageId}: {token: string, villageId: number}): Ready => ({
  token,
  type: ActionTypes.App.READY,
  villageId
})

export type SelectNo = {
  type: ActionTypes.App.SELECT_NO
}
export const selectNo = (): SelectNo => ({
  type: ActionTypes.App.SELECT_NO
})

export type SelectOption = {
  characterId: village.CharacterId
  type: ActionTypes.App.SELECT_OPTION
}
export const selectOption = (characterId: village.CharacterId): SelectOption => ({
  characterId,
  type: ActionTypes.App.SELECT_OPTION
})

export type SelectYes = {
  characterId: village.CharacterId
  type: ActionTypes.App.SELECT_YES
}
export const selectYes = (characterId: village.CharacterId): SelectYes => ({
  characterId,
  type: ActionTypes.App.SELECT_YES
})

export type StarChat = {
  id: village.ChatId
  isMarked: boolean
  type: ActionTypes.App.STAR
}
export const starChat = (item: {id: village.ChatId, isMarked: boolean}): StarChat => ({
  id: item.id,
  isMarked: item.isMarked,
  type: ActionTypes.App.STAR
})

export type ShowLobby = {
  type: ActionTypes.App.SHOW_LOBBY
}
export const showLobby = (): ShowLobby => ({
  type: ActionTypes.App.SHOW_LOBBY
})

export type ShowPredictionSpec = {
  role: village.RoleId
  type: ActionTypes.App.SHOW_PREDICTION_SPEC
}
export const showPredictionSpec = (role: village.RoleId): ShowPredictionSpec => ({
  role,
  type: ActionTypes.App.SHOW_PREDICTION_SPEC
})

export type Tick = {
  start: number
  time: number
  type: ActionTypes.App.TICK
}
export const tick = ({start, time}: {start: number, time: number}): Tick => ({
  start,
  time,
  type: ActionTypes.App.TICK
})
