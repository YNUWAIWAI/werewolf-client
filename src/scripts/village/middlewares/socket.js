import * as types from '../constants/ActionTypes'
import {
  socket as socketAction,
  toggleObfucator
} from '../actions'

let socket
let retryCount = 0
let isReady = false

const socketMiddleware = (option = {}) => store => next => action => {
  if (!option.url) {
    console.error('"option.url" not found.')
  }
  option.retry = option.retry || 5
  const connectWebSocket = url => {
    if (!window.WebSocket || !('WebSocket' in window)) {
      console.log('WebSocket NOT supported by your Browser!')

      return
    }

    socket = new WebSocket(url)

    socket.addEventListener('open', event => {
      console.log('WebSocket Connected ', event)
      store.dispatch(socketAction.open(event))
    })
    socket.addEventListener('close', event => {
      console.warn('WebSocket Disconnected ', event)
      socket = null
      if (isReady) {
        store.dispatch(toggleObfucator(true))
        isReady = false
      }
      store.dispatch(socketAction.close(event))
    })
    socket.addEventListener('error', error => {
      console.error('WebSocket Error ', error)
      socket = null
      if (isReady) {
        store.dispatch(toggleObfucator(true))
        isReady = false
      }
      store.dispatch(socketAction.error(error))
    })
    socket.addEventListener('message', event => {
      if (!isReady) {
        store.dispatch(toggleObfucator(false))
        isReady = true
      }
      store.dispatch(socketAction.message(event))
    })
  }

  if (!socket && retryCount < option.retry) {
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
      socket.send(JSON.stringify(action.payload))

      return next(action)
    default:
      return next(action)
  }
}

export default socketMiddleware
