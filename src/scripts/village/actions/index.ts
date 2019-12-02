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

export type ActivateNextButton = {
  type: ActionTypes.App.ACTIVATE_NEXT_BUTTON
  villageId: number
}
export const activateNextButton = (villageId: number): ActivateNextButton => ({
  type: ActionTypes.App.ACTIVATE_NEXT_BUTTON,
  villageId
})

export type ChangeDay = {
  language: village.Language
  type: ActionTypes.App.CHANGE_LANGUAGE
}
export const changeLanguage = (language: village.Language): ChangeDay => ({
  language,
  type: ActionTypes.App.CHANGE_LANGUAGE
})

export type ChangeLanguage = {
  from: number
  to: number
  type: ActionTypes.App.CHANGE_DAY
}
export const changeDay = ({from, to}: {from: number, to: number}): ChangeLanguage => ({
  from,
  to,
  type: ActionTypes.App.CHANGE_DAY
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

export type ChangePredictionBoard = {
  type: ActionTypes.Navigation
}
export const clickNavigationButton = (type: ActionTypes.Navigation): ChangePredictionBoard => ({
  type
})

export type ClickHideButton = {
  type: ActionTypes.App.DEACTIVATE_NEXT_BUTTON
}
export const deactivateNextButton = (): ClickHideButton => ({
  type: ActionTypes.App.DEACTIVATE_NEXT_BUTTON
})

export type ClickNavigationButton = {
  characterId: village.CharacterId
  nextState: village.BoardState
  roleId: village.RoleId
  type: ActionTypes.App.CHANGE_PREDICTION_BOARD
}
export const handleBoardClick = (item: {nextState: village.BoardState, characterId: village.CharacterId, roleId: village.RoleId}): ClickNavigationButton => ({
  characterId: item.characterId,
  nextState: item.nextState,
  roleId: item.roleId,
  type: ActionTypes.App.CHANGE_PREDICTION_BOARD
})

export type DeactivateNextButton = {
  hide: boolean
  type: ActionTypes.App.CLICK_HIDE_BUTTON
}
export const handleClickHideButton = (hide: boolean): DeactivateNextButton => ({
  hide,
  type: ActionTypes.App.CLICK_HIDE_BUTTON
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

export type SocketClose = ReturnType<typeof socket.close>
export type SocketError = ReturnType<typeof socket.error>
export type SocketMessage = ReturnType<typeof socket.message>
export type SocketOpen = ReturnType<typeof socket.open>
export type SocketSend = ReturnType<typeof socket.send>

