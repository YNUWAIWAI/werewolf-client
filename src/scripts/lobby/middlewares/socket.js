// @flow
import * as types from '../constants/ActionTypes'
import {type Action} from '.'
import type {Middleware} from 'redux'
import type {ReducerState} from '../reducers'
import {socket as socketAction} from '../actions'

const connectWebSocket = (() => {
  let socket

  return (url, store) => new Promise((resolve, reject) => {
    if (socket) {
      console.log(socket.readyState)
      const wait = () => {
        if (socket.readyState !== 1) {
          setTimeout(wait, 0)
        }
      }

      resolve(socket)

      return
    }
    socket = new WebSocket(url)
    socket.onopen = event => {
      console.info('WebSocket Connected ', event)
      store.dispatch(socketAction.open(event))
      resolve(socket)
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
      reject(error)
    }
    socket.onmessage = event => {
      store.dispatch(socketAction.message(event))
    }
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
