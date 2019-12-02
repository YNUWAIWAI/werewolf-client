/* eslint no-console: 0 */
import * as ActionTypes from '../constants/ActionTypes'
import {Middleware} from '.'
import {message as messageAction} from '../actions'
import {strToMessage} from '../util'
import {village} from '../types'

const message: Middleware = store => next => action => {
  if (action.type !== ActionTypes.Socket.MESSAGE) {
    return next(action)
  }

  const payload = action.payload
  const id = payload['@id']

  if (typeof id === 'undefined') {
    switch (payload.type) {
      case village.PayloadType.nextGameInvitation: {
        store.dispatch(messageAction.nextGameInvitation(payload))

        return next(action)
      }
      case village.PayloadType.nextGameInvitationIsClosed: {
        store.dispatch(messageAction.nextGameInvitationIsClosed(payload))

        return next(action)
      }
      default:
        throw Error('Unkonown Message')
    }
  }
  const messageType = strToMessage(id)

  switch (messageType) {
    case village.Message.boardMessage: {
      store.dispatch(messageAction.boardMessage(payload))

      return next(action)
    }
    case village.Message.chatMessage: {
      store.dispatch(messageAction.chatMessage(payload))

      return next(action)
    }
    case village.Message.errorMessage: {
      store.dispatch(messageAction.errorMessage(payload))

      return next(action)
    }
    case village.Message.flavorTextMessage: {
      store.dispatch(messageAction.flavorTextMessage(payload))

      return next(action)
    }
    case village.Message.scrollMessage: {
      store.dispatch(messageAction.scrollMessage(payload))

      return next(action)
    }
    case village.Message.systemMessage: {
      store.dispatch(messageAction.systemMessage(payload))

      return next(action)
    }
    case village.Message.voteMessage: {
      store.dispatch(messageAction.voteMessage(payload))

      return next(action)
    }
    default:
      throw Error('Unkonown Message')
  }
}

export default message
