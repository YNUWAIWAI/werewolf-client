import * as ActionTypes from '../constants/ActionTypes'
import {Dispatch, Middleware, MiddlewareAPI} from 'redux'
import {Action} from '.'
import {ReducerState} from '../reducers'
import {socket as socketAction} from '../actions'

const connectWebSocket = (() => {
  let socket: WebSocket
  const timeout = 600000

  return (url: string, store: MiddlewareAPI<Dispatch<Action>, ReducerState>) => new Promise((resolve, reject) => {
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

    return
  })
})()

type Option = {
  url: string
}

const socketMiddleware: (optoin: Option) => Middleware<{}, ReducerState, Dispatch<Action>> = option => store => next => action => {
  switch (action.type) {
    case ActionTypes.socket.OPEN:
      return next(action)
    case ActionTypes.socket.CLOSE:
      return next(action)
    case ActionTypes.socket.ERROR:
      return next(action)
    case ActionTypes.socket.INIT:
      connectWebSocket(option.url, store)
        .catch(reason => {
          console.error(reason)
        })

      return next(action)
    case ActionTypes.socket.MESSAGE:
      return next(action)
    case ActionTypes.socket.SEND:
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
