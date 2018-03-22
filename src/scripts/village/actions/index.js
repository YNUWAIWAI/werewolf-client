// @flow
import * as types from '../constants/ActionTypes'

export const socket = {
  close: (event: CloseEvent) => ({
    event,
    type: types.SOCKET_CLOSE
  }),
  error: (event: Event) => ({
    event,
    type: types.SOCKET_ERROR
  }),
  message: (event: MessageEvent) => ({
    payload: JSON.parse(event.data),
    type: types.SOCKET_MESSAGE
  }),
  open: (event: Event) => ({
    event,
    type: types.SOCKET_OPEN
  }),
  send: (payload: Object) => ({
    payload,
    type: types.SOCKET_SEND
  })
}

export const toggleObfucator = (visible: boolean) => ({
  type: types.TOGGLE_OBFUCATOR,
  visible
})

export const postChat = ({kind, text}: {kind: InputChannel, text: string}) => ({
  kind,
  text,
  type: types.POST_CHAT
})

export const handleBoardClick = (nextState: BoardState, playerId: number, roleId: RoleId) => ({
  nextState,
  playerId,
  roleId,
  type: types.CHANGE_PREDICTION_BOARD
})

export const selectOption = (agentId: number) => ({
  agentId,
  type: types.SELECT_OPTION
})

export const selectNo = () => ({
  type: types.SELECT_NO
})

export const selectYes = (agentId: number) => ({
  agentId,
  type: types.SELECT_YES
})

export const handleClickHideButton = (hide: boolean) => ({
  hide,
  type: types.CLICK_HIDE_BUTTON
})

export type SocketClose = $ReadOnly<$Call<typeof socket.close, *>>
export type SocketError = $ReadOnly<$Call<typeof socket.error, *>>
export type SocketMessage = $ReadOnly<$Call<typeof socket.message, *>>
export type SocketOpen = $ReadOnly<$Call<typeof socket.open, *>>
export type SocketSend = $ReadOnly<$Call<typeof socket.send, *>>
export type ToggleObfucator = $ReadOnly<$Call<typeof toggleObfucator, *>>
export type PostChat = $ReadOnly<$Call<typeof postChat, *>>
export type ChangePredictionBoard = $ReadOnly<$Call<typeof handleBoardClick, *, *, *>>
export type SelectOption = $ReadOnly<$Call<typeof selectOption, *>>
export type SelectNo = $ReadOnly<$Call<typeof selectNo, *>>
export type SelectYes = $ReadOnly<$Call<typeof selectYes, *>>
export type ClickHideButton = $ReadOnly<$Call<typeof handleClickHideButton, *>>
