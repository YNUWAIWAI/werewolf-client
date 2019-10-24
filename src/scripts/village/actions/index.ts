import * as ActionTypes from '../constants/ActionTypes'
import {strToMessage} from '../util'
import {village} from '../types'

export interface SocketMessageReturnType<T> {
  payload: T
  type: ActionTypes.socket.MESSAGE
}

export const socket = {
  close: (event: CloseEvent): {event: CloseEvent, type: ActionTypes.socket.CLOSE} => ({
    event,
    type: ActionTypes.socket.CLOSE
  }),
  error: (event: Event): {event: Event, type: ActionTypes.socket.ERROR} => ({
    event,
    type: ActionTypes.socket.ERROR
  }),
  message: (payload: village.Payload) => {
    if (typeof payload['@id'] === 'undefined') {
      switch (payload.type) {
        case village.PayloadType.nextGameInvitation: {
          const action: SocketMessageReturnType<village.Payload$NextGameInvitation> = {
            payload: {
              ... payload as village.Payload$NextGameInvitation,
              '@payload': village.PayloadType.nextGameInvitation
            },
            type: ActionTypes.socket.MESSAGE
          }

          return action
        }
        case village.PayloadType.nextGameInvitationIsClosed: {
          const action: SocketMessageReturnType<village.Payload$NextGameInvitationIsClosed> = {
            payload: {
              ... payload as village.Payload$NextGameInvitationIsClosed,
              '@payload': village.PayloadType.nextGameInvitationIsClosed
            },
            type: ActionTypes.socket.MESSAGE
          }

          return action
        }
        default:
          throw Error('Unkonown Message')
      }
    }
    const message = strToMessage(payload['@id'])

    switch (message) {
      case village.Message.boardMessage: {
        const action: SocketMessageReturnType<village.Payload$BoardMessage> = {
          payload: {
            ... payload as village.Payload$BoardMessage,
            '@payload': message
          },
          type: ActionTypes.socket.MESSAGE
        }

        return action
      }
      case village.Message.chatMessage: {
        const action: SocketMessageReturnType<village.Payload$ChatMessage> = {
          payload: {
            ... payload as village.Payload$ChatMessage,
            '@payload': message
          },
          type: ActionTypes.socket.MESSAGE
        }

        return action
      }
      case village.Message.errorMessage: {
        const action: SocketMessageReturnType<village.Payload$ErrorMessage> = {
          payload: {
            ... payload as village.Payload$ErrorMessage,
            '@payload': message
          },
          type: ActionTypes.socket.MESSAGE
        }

        return action
      }
      case village.Message.flavorTextMessage: {
        const action: SocketMessageReturnType<village.Payload$FlavorTextMessage> = {
          payload: {
            ... payload as village.Payload$FlavorTextMessage,
            '@payload': message
          },
          type: ActionTypes.socket.MESSAGE
        }

        return action
      }
      case village.Message.scrollMessage: {
        const action: SocketMessageReturnType<village.Payload$ScrollMessage> = {
          payload: {
            ... payload as village.Payload$ScrollMessage,
            '@payload': message
          },
          type: ActionTypes.socket.MESSAGE
        }

        return action
      }
      case village.Message.systemMessage: {
        const action: SocketMessageReturnType<village.Payload$SystemMessage> = {
          payload: {
            ... payload as village.Payload$SystemMessage,
            '@payload': message
          },
          type: ActionTypes.socket.MESSAGE
        }

        return action
      }
      case village.Message.voteMessage: {
        const action: SocketMessageReturnType<village.Payload$VoteMessage> = {
          payload: {
            ... payload as village.Payload$VoteMessage,
            '@payload': message
          },
          type: ActionTypes.socket.MESSAGE
        }

        return action
      }
      default:
        throw Error('Unkonown Message')
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

export const activateNextButton = (villageId: number): {type: ActionTypes.global.ACTIVATE_NEXT_BUTTON, villageId: number} => ({
  type: ActionTypes.global.ACTIVATE_NEXT_BUTTON,
  villageId
})

export const changeLanguage = (language: village.Language): {language: village.Language, type: ActionTypes.global.CHANGE_LANGUAGE} => ({
  language,
  type: ActionTypes.global.CHANGE_LANGUAGE
})

export const changeDate = ({from, to}: {from: number, to: number}): {from: number, to: number, type: ActionTypes.global.CHANGE_DAY} => ({
  from,
  to,
  type: ActionTypes.global.CHANGE_DAY
})

export const changePhase = ({from, to}: {from: village.Phase, to: village.Phase}): {from: village.Phase, to: village.Phase, type: ActionTypes.global.CHANGE_PHASE} => ({
  from,
  to,
  type: ActionTypes.global.CHANGE_PHASE
})

export const clickNavigationButton = (type: ActionTypes.Navigation): {type: ActionTypes.Navigation} => ({
  type
})

export const deactivateNextButton = (): {type: ActionTypes.global.DEACTIVATE_NEXT_BUTTON} => ({
  type: ActionTypes.global.DEACTIVATE_NEXT_BUTTON
})

export const handleBoardClick = ({nextState, characterId, roleId}: {nextState: village.BoardState, characterId: village.CharacterId, roleId: village.RoleId}): {characterId: village.CharacterId, nextState: village.BoardState, roleId: village.RoleId, type: ActionTypes.global.CHANGE_PREDICTION_BOARD} => ({
  characterId,
  nextState,
  roleId,
  type: ActionTypes.global.CHANGE_PREDICTION_BOARD
})

export const handleClickHideButton = (hide: boolean): {hide: boolean, type: ActionTypes.global.CLICK_HIDE_BUTTON} => ({
  hide,
  type: ActionTypes.global.CLICK_HIDE_BUTTON
})

export const hidePredictionSpec = (): {type: ActionTypes.global.HIDE_PREDICTION_SPEC} => ({
  type: ActionTypes.global.HIDE_PREDICTION_SPEC
})

export const hideResult = (): {type: ActionTypes.global.HIDE_RESULT} => ({
  type: ActionTypes.global.HIDE_RESULT
})

export const postChat = ({channel, text}: {channel: village.InputChannel, text: string}): {channel: village.InputChannel, text: string, type: ActionTypes.global.POST_CHAT} => ({
  channel,
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

export const selectOption = (characterId: village.CharacterId): {characterId: village.CharacterId, type: ActionTypes.global.SELECT_OPTION} => ({
  characterId,
  type: ActionTypes.global.SELECT_OPTION
})

export const selectYes = (characterId: village.CharacterId): {characterId: village.CharacterId, type: ActionTypes.global.SELECT_YES} => ({
  characterId,
  type: ActionTypes.global.SELECT_YES
})

export const starChat = (item: {id: village.ChatId, isMarked: boolean}): {id: village.ChatId, isMarked: boolean, type: ActionTypes.global.STAR} => ({
  id: item.id,
  isMarked: item.isMarked,
  type: ActionTypes.global.STAR
})

export const showLobby = (): {type: ActionTypes.global.SHOW_LOBBY} => ({
  type: ActionTypes.global.SHOW_LOBBY
})

export const showPredictionSpec = (role: village.RoleId): {role: village.RoleId, type: ActionTypes.global.SHOW_PREDICTION_SPEC} => ({
  role,
  type: ActionTypes.global.SHOW_PREDICTION_SPEC
})

export const tick = ({start, time}: {start: number, time: number}): {start: number, time: number, type: ActionTypes.global.TICK} => ({
  start,
  time,
  type: ActionTypes.global.TICK
})

export type ActivateNextButton = ReturnType<typeof activateNextButton>
export type ChangeDate = ReturnType<typeof changeDate>
export type ChangeLanguage = ReturnType<typeof changeLanguage>
export type ChangePhase = ReturnType<typeof changePhase>
export type ChangePredictionBoard = ReturnType<typeof handleBoardClick>
export type ClickHideButton = ReturnType<typeof handleClickHideButton>
export type ClickNavigationButton = ReturnType<typeof clickNavigationButton>
export type DeactivateNextButton = ReturnType<typeof deactivateNextButton>
export type HidePredictionSpec = ReturnType<typeof hidePredictionSpec>
export type HideResult = ReturnType<typeof hideResult>
export type PostChat = ReturnType<typeof postChat>
export type Ready = ReturnType<typeof ready>
export type SelectNo = ReturnType<typeof selectNo>
export type SelectOption = ReturnType<typeof selectOption>
export type SelectYes = ReturnType<typeof selectYes>
export type ShowLobby = ReturnType<typeof showLobby>
export type ShowPredictionSpec = ReturnType<typeof showPredictionSpec>
export type SocketClose = ReturnType<typeof socket.close>
export type SocketError = ReturnType<typeof socket.error>
export type SocketMessage = ReturnType<typeof socket.message>
export type SocketOpen = ReturnType<typeof socket.open>
export type SocketSend = ReturnType<typeof socket.send>
export type StarChat = ReturnType<typeof starChat>
export type Tick = ReturnType<typeof tick>
