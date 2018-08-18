// @flow
import * as types from '../constants/ActionTypes'
import {type Action} from '.'
import type {Middleware} from 'redux'
import type {ReducerState} from '../reducers'
import {socket as socketAction} from '../actions'

let socket
let retryCount = 0

const socketMiddleware: ({url: string, retry?: number}) => Middleware<ReducerState, Action> = option => store => next => action => {
  const retry = option.retry || 5
  const connectWebSocket = url => {
    socket = new WebSocket(url)
    socket.onopen = event => {
      console.info('WebSocket Connected ', event)
      store.dispatch(socketAction.open(event))
    }
    socket.onclose = event => {
      console.warn('WebSocket Disconnected ', event)
      socket = null
      store.dispatch(socketAction.close(event))
    }
    socket.onerror = error => {
      console.error('WebSocket Error ', error)
      socket = null
      store.dispatch(socketAction.error(error))
    }
    socket.onmessage = event => {
      store.dispatch(socketAction.message(event))
    }
  }

  if (!socket && retryCount < retry) {
    retryCount += 1
    connectWebSocket(option.url)
  }

  switch (action.type) {
    case types.SOCKET_OPEN:
      return next(action)
    case types.SOCKET_CLOSE:
      return next(action)
    case types.SOCKET_ERROR:
      return next(action)
    case types.SOCKET_MESSAGE:
      return next(action)
    case types.SOCKET_SEND:
      if (socket) {
        socket.send(JSON.stringify(action.payload))
      }

      return next(action)
    default:
      return next(action)
  }
}

export default socketMiddleware
