import * as actions from '../actions'
import {applyMiddleware} from 'redux'
import client2server from './client2server'
import config from '../../../../config'
import flavorText from './flavorText'
import indexedDB from './indexedDB'
import logger from './logger'
import socket from './socket'
import timeWatcher from './timeWatcher'

type Action =
  | actions.ChangeDate
  | actions.ChangeLanguage
  | actions.ChangePhase
  | actions.ChangePredictionBoard
  | actions.ClickHideButton
  | actions.HideResult
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
  | {type: 'PROLOGUE'}
| {type: 'indexedDB/INIT'}
  | {type: 'socket/INI'}

export type Middleware = (store: MiddlewareAPI<Dispatch<Action>, ReducerState>) => (next: Dispatch<Action>) => (action: Action) => Action

const elem = document.getElementById('script')

if (!elem || !elem.dataset || !elem.dataset.url) {
  throw Error('Not found data-url attribute.')
}
const url = elem.dataset.url
const middleware =
  config.env === 'production' ?
    applyMiddleware(
      socket({
        url
      }),
      client2server,
      flavorText,
      indexedDB,
      timeWatcher
    ) :
    applyMiddleware(
      socket({
        url
      }),
      client2server,
      flavorText,
      indexedDB,
      logger,
      timeWatcher
    )

export default middleware