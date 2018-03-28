// @flow
import * as types from '../constants/ActionTypes'
import type {DispatchAPI, Middleware} from 'redux'
import {socket as socketAction, toggleObfucator} from '../actions'
import {type Action} from '.'
import type {ReducerState} from '../reducers'

let socket
let retryCount = 0
let isReady = false

const socketMiddleware: ({url: string, retry?: number}) => Middleware<ReducerState, Action, DispatchAPI<Action>> = option => store => next => action => {
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
      if (isReady) {
        store.dispatch(toggleObfucator(true))
        isReady = false
      }
      store.dispatch(socketAction.close(event))
    }
    socket.onerror = error => {
      console.error('WebSocket Error ', error)
      socket = null
      if (isReady) {
        store.dispatch(toggleObfucator(true))
        isReady = false
      }
      store.dispatch(socketAction.error(error))
    }
    socket.onmessage = event => {
      if (!isReady) {
        store.dispatch(toggleObfucator(false))
        isReady = true
      }
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
