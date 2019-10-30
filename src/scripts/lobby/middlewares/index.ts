/* eslint no-process-env: 0 */
import * as ActionTypes from '../constants/ActionTypes'
import * as actions from '../actions'
import {
  Dispatch,
  MiddlewareAPI,
  applyMiddleware
} from 'redux'
import {ReducerState} from '../reducers'
import client2server from './client2server'
import indexedDB from './indexedDB'
import logger from './logger'
import socket from './socket'
import windowLocation from './windowLocation'

type Action =
  | actions.AdvancedSearch$ChangeAvatar
  | actions.AdvancedSearch$ChangeCheckbox
  | actions.AdvancedSearch$ChangeComment
  | actions.AdvancedSearch$ChangeHostName
  | actions.AdvancedSearch$ChangeMaximum
  | actions.AdvancedSearch$ChangeMinimum
  | actions.AdvancedSearch$ChangeValidity
  | actions.AdvancedSearch$ChangeVillageName
  | actions.BuildVillage$ChangeAvatar
  | actions.BuildVillage$ChangeComment
  | actions.BuildVillage$ChangeMember
  | actions.BuildVillage$ChangeNumberOfPlayers
  | actions.BuildVillage$ChangeNumberOfRobots
  | actions.BuildVillage$ChangeValidity
  | actions.BuildVillage$ChangeVillageName
  | actions.ChangeLanguage
  | actions.ChangeLobby
  | actions.ChangeToken
  | actions.ChangeUserEmail
  | actions.ChangeUserName
  | actions.ChangeUserPassword
  | actions.IdSearch$ChangeSearchId
  | actions.IdSearch$ChangeValidity
  | actions.KickOutPlayer
  | actions.SelectVillage
  | actions.ShowVillage
  | actions.SocketClose
  | actions.SocketError
  | actions.SocketMessage
  | actions.SocketOpen
  | actions.SocketSend
  | actions.SubmitLogout
  | actions.Transition
  | {type: ActionTypes.IndexedDB.INIT}
  | {type: ActionTypes.Socket.INIT}

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
      indexedDB,
      windowLocation
    ) :
    applyMiddleware(
      socket({
        url
      }),
      client2server,
      indexedDB,
      logger,
      windowLocation
    )

export default middleware
