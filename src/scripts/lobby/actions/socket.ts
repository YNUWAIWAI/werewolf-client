import * as ActionTypes from '../constants/ActionTypes'
import {lobby} from '../types'

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace Socket {
  type Close = {
    event: CloseEvent
    type: ActionTypes.Socket.CLOSE
  }
  type Error = {
    event: Event
    type: ActionTypes.Socket.ERROR
  }
  type Message = {
    payload: lobby.Payload
    type: ActionTypes.Socket.MESSAGE
  }
  type Open = {
    event: Event
    type: ActionTypes.Socket.OPEN
  }
  type Send = {
    payload: lobby.Payload
    type: ActionTypes.Socket.SEND
  }
}

const close = (event: CloseEvent): Socket.Close => ({
  event,
  type: ActionTypes.Socket.CLOSE
})
const error = (event: Event): Socket.Error => ({
  event,
  type: ActionTypes.Socket.ERROR
})
const message = (event: MessageEvent): Socket.Message => ({
  payload: JSON.parse(event.data),
  type: ActionTypes.Socket.MESSAGE
})
const open = (event: Event): Socket.Open => ({
  event,
  type: ActionTypes.Socket.OPEN
})
const send = (payload: lobby.Payload): Socket.Send => ({
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
