import * as ActionTypes from '../constants/ActionTypes'

export const socket = {
  close: (event: CloseEvent): {event: CloseEvent, type: ActionTypes.socket.CLOSE} => ({
    event,
    type: ActionTypes.socket.CLOSE
  }),
  error: (event: Event): {event: Event, type: ActionTypes.socket.ERROR} => ({
    event,
    type: ActionTypes.socket.ERROR
  }),
  message: (payload: village.Payload): {payload: village.Payload, type: ActionTypes.socket.MESSAGE} => {
    return {
      payload,
      type: ActionTypes.socket.MESSAGE
    }
  },
  open: (event: Event): {event: Event, type: ActionTypes.socket.OPEN} => ({
    event,
    type: ActionTypes.socket.OPEN
  }),
  send: (payload: village.Payload): {payload: village.Payload, type: ActionTypes.socket.SEND} => ({
    payload,
    type: ActionTypes.socket.SEND
  })
}

export const changeLanguage = (language: village.Language): {language: village.Language, type: ActionTypes.global.CHANGE_LANGUAGE} => ({
  language,
  type: ActionTypes.global.CHANGE_LANGUAGE
})

export const changeDate = ({from, to}: {from: number, to: number}): {from: number, to: number, type: ActionTypes.global.CHANGE_DATE} => ({
  from,
  to,
  type: ActionTypes.global.CHANGE_DATE
})

export const changePhase = ({from, to}: {from: village.Phase, to: village.Phase}): {from: village.Phase, to: village.Phase, type: ActionTypes.global.CHANGE_PHASE} => ({
  from,
  to,
  type: ActionTypes.global.CHANGE_PHASE
})

export const clickNavigationButton = (type: NavigationType): {type: NavigationType} => ({
  type
})

export const handleBoardClick = (nextState: village.BoardState, playerId: number, roleId: village.RoleId): {nextState: village.BoardState, playerId: number, roleId: village.RoleId, type: ActionTypes.global.CHANGE_PREDICTION_BOARD} => ({
  nextState,
  playerId,
  roleId,
  type: ActionTypes.global.CHANGE_PREDICTION_BOARD
})

export const handleClickHideButton = (hide: boolean): {hide: boolean, type: ActionTypes.global.CLICK_HIDE_BUTTON} => ({
  hide,
  type: ActionTypes.global.CLICK_HIDE_BUTTON
})

export const hideResult = (): {type: ActionTypes.global.HIDE_RESULT} => ({
  type: ActionTypes.global.HIDE_RESULT
})

export const postChat = ({kind, text}: {kind: village.InputChannel, text: string}): {kind: village.InputChannel, text: string, type: ActionTypes.global.POST_CHAT} => ({
  kind,
  text,
  type: ActionTypes.global.POST_CHAT
})

export const ready = ({token, villageId}: {token: string, villageId: number}): {token: string, type: ActionTypes.global.READY, villageId: number} => ({
  token,
  type: ActionTypes.global.READY,
  villageId
})

export const selectNo = (): {type: ActionTypes.global.SELECT_NO} => ({
  type: ActionTypes.global.SELECT_NO
})

export const selectOption = (agentId: number): {agentId: number, type: ActionTypes.global.SELECT_OPTION} => ({
  agentId,
  type: ActionTypes.global.SELECT_OPTION
})

export const selectYes = (agentId: number): {agentId: number, type: ActionTypes.global.SELECT_YES} => ({
  agentId,
  type: ActionTypes.global.SELECT_YES
})

export type ChangeDate = ReturnType<typeof changeDate>
export type ChangeLanguage = ReturnType<typeof changeLanguage>
export type ChangePhase = ReturnType<typeof changePhase>
export type ChangePredictionBoard = ReturnType<typeof handleBoardClick>
export type ClickHideButton = ReturnType<typeof handleClickHideButton>
export type ClickNavigationButton = ReturnType<typeof clickNavigationButton>
export type HideResult = ReturnType<typeof hideResult>
export type PostChat = ReturnType<typeof postChat>
export type Ready = ReturnType<typeof ready>
export type SelectNo = ReturnType<typeof selectNo>
export type SelectOption = ReturnType<typeof selectOption>
export type SelectYes = ReturnType<typeof selectYes>
export type SocketClose = ReturnType<typeof socket.close>
export type SocketError = ReturnType<typeof socket.error>
export type SocketMessage = ReturnType<typeof socket.messag>
export type SocketOpen = ReturnType<typeof socket.open>
export type SocketSend = ReturnType<typeof socket.send>
