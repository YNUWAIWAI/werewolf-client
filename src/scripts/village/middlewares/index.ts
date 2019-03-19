/* eslint no-process-env: 0 */
import * as ActionTypes from '../constants/ActionTypes'
import * as actions from '../actions'
import {Dispatch, MiddlewareAPI, applyMiddleware} from 'redux'
import {ReducerState} from '../reducers'
import client2server from './client2server'
import flavorText from './flavorText'
import indexedDB from './indexedDB'
import logger from './logger'
import socket from './socket'
import timeWatcher from './timeWatcher'
import timer from './timer'
import windowLocation from './windowLocation'

type Action =
  | actions.ActivateNextButton
  | actions.ChangeDate
  | actions.ChangeLanguage
  | actions.ChangePhase
  | actions.ChangePredictionBoard
  | actions.ClickHideButton
  | actions.ClickNavigationButton
  | actions.DeactivateNextButton
  | actions.HideResult
  | actions.PostChat
  | actions.Ready
  | actions.SelectNo
  | actions.SelectOption
  | actions.ShowLobby
  | actions.SelectYes
  | actions.SocketClose
  | actions.SocketError
  | actions.SocketMessage
  | actions.SocketOpen
  | actions.SocketSend
  | actions.Tick
  | {type: ActionTypes.indexedDB.INIT}
  | {type: ActionTypes.socket.INIT}
  | {type: ActionTypes.global.PROLOGUE}

export type Middleware = (store: MiddlewareAPI<Dispatch<Action>, ReducerState>) => (next: Dispatch<Action>) => (action: Action) => Action

const elem = document.getElementById('script')

if (!elem || !elem.dataset || !elem.dataset.url) {
  throw Error('Not found data-url attribute.')
}
const url = elem.dataset.url
const middleware =
  process.env.NODE_ENV === 'production' ?
    applyMiddleware(
      socket({
        url
      }),
      client2server,
      flavorText,
      indexedDB,
      timer,
      timeWatcher,
      windowLocation
    ) :
    applyMiddleware(
      socket({
        url
      }),
      client2server,
      flavorText,
      indexedDB,
      logger,
      timer,
      timeWatcher,
      windowLocation
    )

export default middleware
