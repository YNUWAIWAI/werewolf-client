import * as actions from '../actions'
import {applyMiddleware} from 'redux'
import client2server from './client2server'
import config from '../../../../config'
import indexedDB from './indexedDB'
import logger from './logger'
import socket from './socket'

export type Action =
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
  | actions.BuildVillage$ChangeHostName
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
  | actions.SocketClose
  | actions.SocketError
  | actions.SocketMessage
  | actions.SocketOpen
  | actions.SocketSend
  | actions.Transition
  | {type: 'indexedDB/INIT'}
  | {type: 'socket/INIT'}

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
      indexedDB
    ) :
    applyMiddleware(
      socket({
        url
      }),
      client2server,
      indexedDB,
      logger
    )

export default middleware