import * as ActionTypes from '../constants/ActionTypes'
import {strToMessage} from '../util'
import {village} from '../types'

export interface SocketMessageReturnType<T> {
  payload: T
  type: ActionTypes.Socket.MESSAGE
}

export const socket = {
  close: (event: CloseEvent): {event: CloseEvent, type: ActionTypes.Socket.CLOSE} => ({
    event,
    type: ActionTypes.Socket.CLOSE
  }),
  error: (event: Event): {event: Event, type: ActionTypes.Socket.ERROR} => ({
    event,
    type: ActionTypes.Socket.ERROR
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
            type: ActionTypes.Socket.MESSAGE
          }

          return action
        }
        case village.PayloadType.nextGameInvitationIsClosed: {
          const action: SocketMessageReturnType<village.Payload$NextGameInvitationIsClosed> = {
            payload: {
              ... payload as village.Payload$NextGameInvitationIsClosed,
              '@payload': village.PayloadType.nextGameInvitationIsClosed
            },
            type: ActionTypes.Socket.MESSAGE
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
          type: ActionTypes.Socket.MESSAGE
        }

        return action
      }
      case village.Message.chatMessage: {
        const action: SocketMessageReturnType<village.Payload$ChatMessage> = {
          payload: {
            ... payload as village.Payload$ChatMessage,
            '@payload': message
          },
          type: ActionTypes.Socket.MESSAGE
        }

        return action
      }
      case village.Message.errorMessage: {
        const action: SocketMessageReturnType<village.Payload$ErrorMessage> = {
          payload: {
            ... payload as village.Payload$ErrorMessage,
            '@payload': message
          },
          type: ActionTypes.Socket.MESSAGE
        }

        return action
      }
      case village.Message.flavorTextMessage: {
        const action: SocketMessageReturnType<village.Payload$FlavorTextMessage> = {
          payload: {
            ... payload as village.Payload$FlavorTextMessage,
            '@payload': message
          },
          type: ActionTypes.Socket.MESSAGE
        }

        return action
      }
      case village.Message.scrollMessage: {
        const action: SocketMessageReturnType<village.Payload$ScrollMessage> = {
          payload: {
            ... payload as village.Payload$ScrollMessage,
            '@payload': message
          },
          type: ActionTypes.Socket.MESSAGE
        }

        return action
      }
      case village.Message.systemMessage: {
        const action: SocketMessageReturnType<village.Payload$SystemMessage> = {
          payload: {
            ... payload as village.Payload$SystemMessage,
            '@payload': message
          },
          type: ActionTypes.Socket.MESSAGE
        }

        return action
      }
      case village.Message.voteMessage: {
        const action: SocketMessageReturnType<village.Payload$VoteMessage> = {
          payload: {
            ... payload as village.Payload$VoteMessage,
            '@payload': message
          },
          type: ActionTypes.Socket.MESSAGE
        }

        return action
      }
      default:
        throw Error('Unkonown Message')
    }
  },
  open: (event: Event): {event: Event, type: ActionTypes.Socket.OPEN} => ({
    event,
    type: ActionTypes.Socket.OPEN
  }),
  send: (payload: village.Payload): {payload: village.Payload, type: ActionTypes.Socket.SEND} => ({
    payload,
    type: ActionTypes.Socket.SEND
  })
}

export const activateNextButton = (villageId: number): {type: ActionTypes.App.ACTIVATE_NEXT_BUTTON, villageId: number} => ({
  type: ActionTypes.App.ACTIVATE_NEXT_BUTTON,
  villageId
})

export const changeLanguage = (language: village.Language): {language: village.Language, type: ActionTypes.App.CHANGE_LANGUAGE} => ({
  language,
  type: ActionTypes.App.CHANGE_LANGUAGE
})

export const changeDay = ({from, to}: {from: number, to: number}): {from: number, to: number, type: ActionTypes.App.CHANGE_DAY} => ({
  from,
  to,
  type: ActionTypes.App.CHANGE_DAY
})

export const changePhase = ({from, to}: {from: village.Phase, to: village.Phase}): {from: village.Phase, to: village.Phase, type: ActionTypes.App.CHANGE_PHASE} => ({
  from,
  to,
  type: ActionTypes.App.CHANGE_PHASE
})

export const clickNavigationButton = (type: ActionTypes.Navigation): {type: ActionTypes.Navigation} => ({
  type
})

export const deactivateNextButton = (): {type: ActionTypes.App.DEACTIVATE_NEXT_BUTTON} => ({
  type: ActionTypes.App.DEACTIVATE_NEXT_BUTTON
})

export const handleBoardClick = ({nextState, characterId, roleId}: {nextState: village.BoardState, characterId: village.CharacterId, roleId: village.RoleId}): {characterId: village.CharacterId, nextState: village.BoardState, roleId: village.RoleId, type: ActionTypes.App.CHANGE_PREDICTION_BOARD} => ({
  characterId,
  nextState,
  roleId,
  type: ActionTypes.App.CHANGE_PREDICTION_BOARD
})

export const handleClickHideButton = (hide: boolean): {hide: boolean, type: ActionTypes.App.CLICK_HIDE_BUTTON} => ({
  hide,
  type: ActionTypes.App.CLICK_HIDE_BUTTON
})

export const hidePredictionSpec = (): {type: ActionTypes.App.HIDE_PREDICTION_SPEC} => ({
  type: ActionTypes.App.HIDE_PREDICTION_SPEC
})

export const hideResult = (): {type: ActionTypes.App.HIDE_RESULT} => ({
  type: ActionTypes.App.HIDE_RESULT
})

export const postChat = ({channel, text}: {channel: village.InputChannel, text: string}): {channel: village.InputChannel, text: string, type: ActionTypes.App.POST_CHAT} => ({
  channel,
  text,
  type: ActionTypes.App.POST_CHAT
})

export const ready = ({token, villageId}: {token: string, villageId: number}): {token: string, type: ActionTypes.App.READY, villageId: number} => ({
  token,
  type: ActionTypes.App.READY,
  villageId
})

export const selectNo = (): {type: ActionTypes.App.SELECT_NO} => ({
  type: ActionTypes.App.SELECT_NO
})

export const selectOption = (characterId: village.CharacterId): {characterId: village.CharacterId, type: ActionTypes.App.SELECT_OPTION} => ({
  characterId,
  type: ActionTypes.App.SELECT_OPTION
})

export const selectYes = (characterId: village.CharacterId): {characterId: village.CharacterId, type: ActionTypes.App.SELECT_YES} => ({
  characterId,
  type: ActionTypes.App.SELECT_YES
})

export const starChat = (item: {id: village.ChatId, isMarked: boolean}): {id: village.ChatId, isMarked: boolean, type: ActionTypes.App.STAR} => ({
  id: item.id,
  isMarked: item.isMarked,
  type: ActionTypes.App.STAR
})

export const showLobby = (): {type: ActionTypes.App.SHOW_LOBBY} => ({
  type: ActionTypes.App.SHOW_LOBBY
})

export const showPredictionSpec = (role: village.RoleId): {role: village.RoleId, type: ActionTypes.App.SHOW_PREDICTION_SPEC} => ({
  role,
  type: ActionTypes.App.SHOW_PREDICTION_SPEC
})

export const tick = ({start, time}: {start: number, time: number}): {start: number, time: number, type: ActionTypes.App.TICK} => ({
  start,
  time,
  type: ActionTypes.App.TICK
})

export type ActivateNextButton = ReturnType<typeof activateNextButton>
export type ChangeDay = ReturnType<typeof changeDay>
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
