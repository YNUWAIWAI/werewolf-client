// @flow
import * as types from '../constants/ActionTypes'
import type {BoardState, C2SPayload, InputChannel, Payload, RoleId} from 'village'

export const socket = {
  close: (event: CloseEvent): {event: CloseEvent, type: 'SOCKET:CLOSE'} => ({
    event,
    type: types.SOCKET_CLOSE
  }),
  error: (event: Event): {event: Event, type: 'SOCKET:ERROR'} => ({
    event,
    type: types.SOCKET_ERROR
  }),
  message: (event: MessageEvent): {payload: Payload<*, *, *>, type: 'SOCKET:MESSAGE'} => ({
    payload: JSON.parse(event.data),
    type: types.SOCKET_MESSAGE
  }),
  open: (event: Event): {event: Event, type: 'SOCKET:OPEN'} => ({
    event,
    type: types.SOCKET_OPEN
  }),
  send: (payload: C2SPayload<*>): {payload: C2SPayload<*>, type: 'SOCKET:SEND'} => ({
    payload,
    type: types.SOCKET_SEND
  })
}

export const closeReuslt = (): {type: 'CLOSE_RESULT'} => ({
  type: types.CLOSE_RESULT
})

export const handleBoardClick = (nextState: BoardState, playerId: number, roleId: RoleId): {nextState: BoardState, playerId: number, roleId: RoleId, type: 'CHANGE_PREDICTION_BOARD'} => ({
  nextState,
  playerId,
  roleId,
  type: types.CHANGE_PREDICTION_BOARD
})

export const handleClickHideButton = (hide: boolean): {hide: boolean, type: 'CLICK_HIDE_BUTTON'} => ({
  hide,
  type: types.CLICK_HIDE_BUTTON
})

export const postChat = ({kind, text}: {kind: InputChannel, text: string}): {kind: InputChannel, text: string, type: 'POST_CHAT'} => ({
  kind,
  text,
  type: types.POST_CHAT
})

export const selectNo = (): {type: 'SELECT_NO'} => ({
  type: types.SELECT_NO
})

export const selectOption = (agentId: number): {agentId: number, type: 'SELECT_OPTION'} => ({
  agentId,
  type: types.SELECT_OPTION
})

export const selectYes = (agentId: number): {agentId: number, type: 'SELECT_YES'} => ({
  agentId,
  type: types.SELECT_YES
})

export const toggleObfucator = (visible: boolean): {visible: boolean, type: 'TOGGLE_OBFUCATOR'} => ({
  type: types.TOGGLE_OBFUCATOR,
  visible
})

export type SocketClose = $Call<typeof socket.close, *>
export type SocketError = $Call<typeof socket.error, *>
export type SocketMessage = $Call<typeof socket.message, *>
export type SocketOpen = $Call<typeof socket.open, *>
export type SocketSend = $Call<typeof socket.send, *>
export type ClickHideButton = $Call<typeof handleClickHideButton, *>
export type CloseReuslt = $Call<typeof closeReuslt>
export type ChangePredictionBoard = $Call<typeof handleBoardClick, *, *, *>
export type PostChat = $Call<typeof postChat, *>
export type SelectOption = $Call<typeof selectOption, *>
export type SelectNo = $Call<typeof selectNo, *>
export type SelectYes = $Call<typeof selectYes, *>
export type ToggleObfucator = $Call<typeof toggleObfucator, *>
