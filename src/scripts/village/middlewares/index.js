// @flow
import * as actions from '../actions'
import {applyMiddleware} from 'redux'
import client2server from './client2server'
import indexedDB from './indexedDB'
import logger from './logger'
import socket from './socket'
import timeWatcher from './timeWatcher'

export type Action =
  | actions.ChangeDate
  | actions.ChangePhase
  | actions.ChangePredictionBoard
  | actions.ClickHideButton
  | actions.PostChat
  | actions.Ready
  | actions.SelectNo
  | actions.SelectOption
  | actions.SelectYes
  | actions.SocketClose
  | actions.SocketError
  | actions.SocketMessage
  | actions.SocketOpen
  | actions.SocketSend
  | actions.ToggleObfucator
  | {type: 'PROLOGUE'}
  | {type: 'indexedDB/INIT'}
  | {type: 'socket/INIT'}

const elem = document.getElementById('script')

if (!elem || !elem.dataset || !elem.dataset.url) {
  throw Error('Not found data-url attribute.')
}
const url = elem.dataset.url
const middleware = applyMiddleware(
  socket({
    url
  }),
  client2server,
  indexedDB,
  logger,
  timeWatcher
)

export default middleware
