// @flow
import * as actions from '../actions'
import {applyMiddleware} from 'redux'
import client2server from './client2server'
import logger from './logger'
import socket from './socket'

export type Action =
  | actions.BuildVillage$ChangeAvatar
  | actions.BuildVillage$ChangeComment
  | actions.BuildVillage$ChangeHostName
  | actions.BuildVillage$ChangeMember
  | actions.BuildVillage$ChangeNumberOfPlayers
  | actions.BuildVillage$ChangeNumberOfRobots
  | actions.ChangeSearchId
  | actions.ChangeToken
  | actions.BuildVillage$ChangeVillageName
  | actions.KickOutPlayer
  | actions.SelectVillage
  | actions.SocketClose
  | actions.SocketError
  | actions.SocketMessage
  | actions.SocketOpen
  | actions.SocketSend
  | actions.Transition

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
  logger
)

export default middleware
