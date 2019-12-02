import * as ActionTypes from '../constants/ActionTypes'
import {strToMessage} from '../util'
import {village} from '../types'

export interface SocketMessageReturnType<T> {
  payload: T
  type: ActionTypes.Socket.MESSAGE
}

export type SocketClose = {
  event: CloseEvent
  type: ActionTypes.Socket.CLOSE
}
const close = (event: CloseEvent): SocketClose => ({
  event,
  type: ActionTypes.Socket.CLOSE
})

export type SocketError = {
  event: Event
  type: ActionTypes.Socket.ERROR
}
const error = (event: Event): SocketError => ({
  event,
  type: ActionTypes.Socket.ERROR
})

const message = (payload: village.Payload) => {
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
  const messageType = strToMessage(payload['@id'])

  switch (messageType) {
    case village.Message.boardMessage: {
      const action: SocketMessageReturnType<village.Payload$BoardMessage> = {
        payload: {
          ... payload as village.Payload$BoardMessage,
          '@payload': messageType
        },
        type: ActionTypes.Socket.MESSAGE
      }

      return action
    }
    case village.Message.chatMessage: {
      const action: SocketMessageReturnType<village.Payload$ChatMessage> = {
        payload: {
          ... payload as village.Payload$ChatMessage,
          '@payload': messageType
        },
        type: ActionTypes.Socket.MESSAGE
      }

      return action
    }
    case village.Message.errorMessage: {
      const action: SocketMessageReturnType<village.Payload$ErrorMessage> = {
        payload: {
          ... payload as village.Payload$ErrorMessage,
          '@payload': messageType
        },
        type: ActionTypes.Socket.MESSAGE
      }

      return action
    }
    case village.Message.flavorTextMessage: {
      const action: SocketMessageReturnType<village.Payload$FlavorTextMessage> = {
        payload: {
          ... payload as village.Payload$FlavorTextMessage,
          '@payload': messageType
        },
        type: ActionTypes.Socket.MESSAGE
      }

      return action
    }
    case village.Message.scrollMessage: {
      const action: SocketMessageReturnType<village.Payload$ScrollMessage> = {
        payload: {
          ... payload as village.Payload$ScrollMessage,
          '@payload': messageType
        },
        type: ActionTypes.Socket.MESSAGE
      }

      return action
    }
    case village.Message.systemMessage: {
      const action: SocketMessageReturnType<village.Payload$SystemMessage> = {
        payload: {
          ... payload as village.Payload$SystemMessage,
          '@payload': messageType
        },
        type: ActionTypes.Socket.MESSAGE
      }

      return action
    }
    case village.Message.voteMessage: {
      const action: SocketMessageReturnType<village.Payload$VoteMessage> = {
        payload: {
          ... payload as village.Payload$VoteMessage,
          '@payload': messageType
        },
        type: ActionTypes.Socket.MESSAGE
      }

      return action
    }
    default:
      throw Error('Unkonown Message')
  }
}

export type SocketMessage = ReturnType<typeof message>

export type SocketOpen = {
  event: Event
  type: ActionTypes.Socket.OPEN
}
const open = (event: Event): SocketOpen => ({
  event,
  type: ActionTypes.Socket.OPEN
})

export type SocketSend = {
  payload: village.Payload
  type: ActionTypes.Socket.SEND
}
const send = (payload: village.Payload): SocketSend => ({
  payload,
  type: ActionTypes.Socket.SEND
})

export const socket = {
  close,
  error,
  message,
  open,
  send
}
