// @flow
import * as types from '../constants/ActionTypes'
import {type Action} from '.'
import type {Middleware} from 'redux'
import type {ReducerState} from '../reducers'
import {socket as socketAction} from '../actions'

const socketMiddleware: ({url: string, retryLimit?: number}) => Middleware<ReducerState, Action> = option => store => next => action => {
  const retryLimit = option.retryLimit || 5
  const connectWebSocket = (url => {
    let socket
    let retryCount = 0

    return () => new Promise((resolve, reject) => {
      if (socket) {
        resolve(socket)
      }
      if (retryCount >= retryLimit) {
        reject('Exceeded retry limit')
      }
      socket = new WebSocket(url)
      socket.onopen = event => {
        console.info('WebSocket Connected ', event)
        store.dispatch(socketAction.open(event))
        retryCount += 1
        resolve(socket)
      }
      socket.onclose = event => {
        console.warn('WebSocket Disconnected ', event)
        socket = null
        store.dispatch(socketAction.close(event))
        reject(event)
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
  })(option.url)

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
      connectWebSocket()
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
