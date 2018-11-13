// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {
  BoardState,
  C2SPayload,
  InputChannel,
  Language,
  NavigationType,
  Payload,
  Phase,
  ReadyPayload,
  ResultPayload,
  RoleId
} from 'village'

export const socket = {
  close: (event: CloseEvent): {event: CloseEvent, type: 'socket/CLOSE'} => ({
    event,
    type: ActionTypes.socket.CLOSE
  }),
  error: (event: Event): {event: Event, type: 'socket/ERROR'} => ({
    event,
    type: ActionTypes.socket.ERROR
  }),
  message: (event: MessageEvent): {payload: Payload<*, *, *> | ResultPayload, type: 'socket/MESSAGE'} => ({
    payload: JSON.parse(event.data),
    type: ActionTypes.socket.MESSAGE
  }),
  open: (event: Event): {event: Event, type: 'socket/OPEN'} => ({
    event,
    type: ActionTypes.socket.OPEN
  }),
  send: (payload: C2SPayload<*> | ReadyPayload): {payload: C2SPayload<*> | ReadyPayload, type: 'socket/SEND'} => ({
    payload,
    type: ActionTypes.socket.SEND
  })
}

export const changeLanguage = (language: Language): {language: Language, type: 'CHANGE_LANGUAGE'} => ({
  language,
  type: ActionTypes.CHANGE_LANGUAGE
})

export const changeDate = ({from, to}: {from: number, to: number}): {from: number, to: number, type: 'CHANGE_DATE'} => ({
  from,
  to,
  type: ActionTypes.CHANGE_DATE
})

export const changePhase = ({from, to}: {from: Phase, to: Phase}): {from: Phase, to: Phase, type: 'CHANGE_PHASE'} => ({
  from,
  to,
  type: ActionTypes.CHANGE_PHASE
})

export const clickNavigationButton = (type: NavigationType): {type: NavigationType} => ({
  type
})

export const handleBoardClick = (nextState: BoardState, playerId: number, roleId: RoleId): {nextState: BoardState, playerId: number, roleId: RoleId, type: 'CHANGE_PREDICTION_BOARD'} => ({
  nextState,
  playerId,
  roleId,
  type: ActionTypes.CHANGE_PREDICTION_BOARD
})

export const handleClickHideButton = (hide: boolean): {hide: boolean, type: 'CLICK_HIDE_BUTTON'} => ({
  hide,
  type: ActionTypes.CLICK_HIDE_BUTTON
})

export const hideResult = (): {type: 'HIDE_RESULT'} => ({
  type: ActionTypes.HIDE_RESULT
})

export const postChat = ({kind, text}: {kind: InputChannel, text: string}): {kind: InputChannel, text: string, type: 'POST_CHAT'} => ({
  kind,
  text,
  type: ActionTypes.POST_CHAT
})

export const ready = ({token, villageId}: {token: string, villageId: number}): {token: string, type: 'READY', villageId: number} => ({
  token,
  type: ActionTypes.READY,
  villageId
})

export const selectNo = (): {type: 'SELECT_NO'} => ({
  type: ActionTypes.SELECT_NO
})

export const selectOption = (agentId: number): {agentId: number, type: 'SELECT_OPTION'} => ({
  agentId,
  type: ActionTypes.SELECT_OPTION
})

export const selectYes = (agentId: number): {agentId: number, type: 'SELECT_YES'} => ({
  agentId,
  type: ActionTypes.SELECT_YES
})

export const toggleObfucator = (visible: boolean): {visible: boolean, type: 'TOGGLE_OBFUCATOR'} => ({
  type: ActionTypes.TOGGLE_OBFUCATOR,
  visible
})

export type SocketClose = $Call<typeof socket.close, *>
export type SocketError = $Call<typeof socket.error, *>
export type SocketMessage = $Call<typeof socket.message, *>
export type SocketOpen = $Call<typeof socket.open, *>
export type SocketSend = $Call<typeof socket.send, *>
export type ClickHideButton = $Call<typeof handleClickHideButton, *>
export type ClickNavigationButton = $Call<typeof clickNavigationButton, *>
export type ChangePredictionBoard = $Call<typeof handleBoardClick, *, *, *>
export type ChangeDate = $Call<typeof changeDate, *>
export type ChangeLanguage = $Call<typeof changeLanguage, *>
export type ChangePhase = $Call<typeof changePhase, *>
export type HideResult = $Call<typeof hideResult>
export type PostChat = $Call<typeof postChat, *>
export type Ready = $Call<typeof ready, *>
export type SelectOption = $Call<typeof selectOption, *>
export type SelectNo = $Call<typeof selectNo, *>
export type SelectYes = $Call<typeof selectYes, *>
export type ToggleObfucator = $Call<typeof toggleObfucator, *>
