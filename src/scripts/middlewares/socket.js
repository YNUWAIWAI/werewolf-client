import * as types from '../constants/ActionTypes'
import {
  ready,
  socket as socketAction,
  wait
} from '../actions'

let socket
let retry = 0

const socketMiddleware = (option = {}) => store => next => action => {
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
      store.dispatch(wait())
      store.dispatch(socketAction.close(event))
    })
    socket.addEventListener('error', error => {
      console.error('WebSocket Error ', error)
      socket = null
      store.dispatch(wait())
      store.dispatch(socketAction.error(error))
    })
    socket.addEventListener('message', event => {
      store.dispatch(ready())
      store.dispatch(socketAction.message(event))
    })
  }

  if (!socket && retry < 5) {
    retry++
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
      socketAction.send(JSON.stringify(action.payload))

      return next(action)
    default:
      return next(action)
  }
}

export default socketMiddleware
