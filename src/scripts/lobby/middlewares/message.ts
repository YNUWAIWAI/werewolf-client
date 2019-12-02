import * as ActionTypes from '../constants/ActionTypes'
import {Middleware} from '.'
import {lobby} from '../types'
import {message as messageAction} from '../actions'

const message: Middleware = store => next => action => {
  if (action.type !== ActionTypes.Socket.MESSAGE) {
    return next(action)
  }

  const payload = action.payload

  switch (payload.type) {
    case lobby.PayloadType.avatar: {
      store.dispatch(messageAction.avatar(payload))

      return next(action)
    }
    case lobby.PayloadType.lobby: {
      store.dispatch(messageAction.lobby(payload))

      return next(action)
    }
    case lobby.PayloadType.ping: {
      store.dispatch(messageAction.ping(payload))

      return next(action)
    }
    case lobby.PayloadType.played: {
      store.dispatch(messageAction.played(payload))

      return next(action)
    }
    case lobby.PayloadType.searchResult: {
      store.dispatch(messageAction.searchResult(payload))

      return next(action)
    }
    case lobby.PayloadType.settings: {
      store.dispatch(messageAction.settings(payload))

      return next(action)
    }
    case lobby.PayloadType.waitingPage: {
      store.dispatch(messageAction.waitingPage(payload))

      return next(action)
    }
    default:
      throw Error('Unkonown Message')
  }
}

export default message
