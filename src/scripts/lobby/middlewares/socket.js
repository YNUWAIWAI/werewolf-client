// @flow
import * as types from '../constants/ActionTypes'
import {type Action} from '.'
import type {Middleware} from 'redux'
import type {ReducerState} from '../reducers'
import {socket as socketAction} from '../actions'

const connectWebSocket = (() => {
  let socket

  return (url, store) => new Promise((resolve, reject) => {
    const wait = () => {
      if (socket && (socket.readyState === WebSocket.OPEN || socket.readyState === WebSocket.CONNECTING)) {
        if (socket.readyState === WebSocket.OPEN) {
          resolve(socket)
        } else {
          setTimeout(wait, 0)
        }
      } else {
        socket = new WebSocket(url)
        socket.onopen = event => {
          console.info('WebSocket Connected ', event)
          store.dispatch(socketAction.open(event))
          resolve(socket)
        }
        socket.onclose = event => {
          console.warn(`WebSocket Disconnected code: ${event.code} wasClean: ${String(event.wasClean)} reason: ${event.reason}`)
          store.dispatch(socketAction.close(event))
          setTimeout(wait, 1000)
        }
        socket.onerror = error => {
          console.error('WebSocket Error ', error)
          store.dispatch(socketAction.error(error))
          setTimeout(wait, 1000)
        }
        socket.onmessage = event => {
          store.dispatch(socketAction.message(event))
        }
      }
    }

    setTimeout(reject, 10000, 'timeout')
    wait()

    return
  })
})()
const socketMiddleware: ({url: string}) => Middleware<ReducerState, Action> = option => store => next => action => {
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
      connectWebSocket(option.url, store)
        .then(socket => {
          socket.send(JSON.stringify(action.payload))
        })
        .catch(reason => {
          console.error(reason)
        })

      return next(action)
    default:
      return next(action)
  }
}

export default socketMiddleware
