/* eslint no-console: 0 */
import * as ActionTypes from '../constants/ActionTypes'
import {Middleware} from '.'
import {socket as socketAction} from '../actions'

const connectWebSocket = (() => {
  let socket: WebSocket
  const timeout = 600000

  return (url: string, store: Parameters<Middleware>[0]) => new Promise<WebSocket>((resolve, reject) => {
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
          store.dispatch(socketAction.message(JSON.parse(event.data)))
        }
      }
    }

    setTimeout(reject, timeout, 'timeout')
    wait()
  })
})()

interface Option {
  readonly url: string
}

const socketMiddleware: (optoin: Option) => Middleware = option => store => next => action => {
  switch (action.type) {
    case ActionTypes.App.INIT:
      connectWebSocket(option.url, store)
        .catch(reason => {
          console.error(reason)
        })

      return next(action)
    case ActionTypes.Socket.OPEN:
      return next(action)
    case ActionTypes.Socket.CLOSE:
      return next(action)
    case ActionTypes.Socket.ERROR:
      return next(action)
    case ActionTypes.Socket.MESSAGE:
      return next(action)
    case ActionTypes.Socket.SEND:
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
