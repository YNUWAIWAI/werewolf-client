import {Socket} from '../constants/ActionTypes'
import {lobby} from '../types'

export type SocketClose = {
  event: CloseEvent
  type: Socket.CLOSE
}
const close = (event: CloseEvent): SocketClose => ({
  event,
  type: Socket.CLOSE
})

export type SocketError = {
  event: Event
  type: Socket.ERROR
}
const error = (event: Event): SocketError => ({
  event,
  type: Socket.ERROR
})

export type SocketMessage = {
  payload: lobby.Payload
  type: Socket.MESSAGE
}
const message = (event: MessageEvent): SocketMessage => ({
  payload: JSON.parse(event.data),
  type: Socket.MESSAGE
})

export type SocketOpen = {
  event: Event
  type: Socket.OPEN
}
const open = (event: Event): SocketOpen => ({
  event,
  type: Socket.OPEN
})

export type SocketSend = {
  payload: lobby.Payload
  type: Socket.SEND
}
const send = (payload: lobby.Payload): SocketSend => ({
  payload,
  type: Socket.SEND
})

export const socket = {
  close,
  error,
  message,
  open,
  send
}
