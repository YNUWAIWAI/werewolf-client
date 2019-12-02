import * as ActionTypes from '../constants/ActionTypes'
import {village} from '../types'

export type SocketClose = {
  event: CloseEvent
  type: ActionTypes.Socket.CLOSE
}
const close = (event: CloseEvent): SocketClose => ({
  event,
  type: ActionTypes.Socket.CLOSE
})

export type SocketError = {
  event: Event
  type: ActionTypes.Socket.ERROR
}
const error = (event: Event): SocketError => ({
  event,
  type: ActionTypes.Socket.ERROR
})

export type SocketMessage = {
  payload: village.Payload
  type: ActionTypes.Socket.MESSAGE
}
const message = (payload: village.Payload): SocketMessage => ({
  payload,
  type: ActionTypes.Socket.MESSAGE
})

export type SocketOpen = {
  event: Event
  type: ActionTypes.Socket.OPEN
}
const open = (event: Event): SocketOpen => ({
  event,
  type: ActionTypes.Socket.OPEN
})

export type SocketSend = {
  payload: village.Payload
  type: ActionTypes.Socket.SEND
}
const send = (payload: village.Payload): SocketSend => ({
  payload,
  type: ActionTypes.Socket.SEND
})

export const socket = {
  close,
  error,
  message,
  open,
  send
}
