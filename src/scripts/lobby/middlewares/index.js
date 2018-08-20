// @flow
import * as actions from '../actions'
import {applyMiddleware} from 'redux'
import client2server from './client2server'
import logger from './logger'
import socket from './socket'

export type Action =
  | actions.ChangeAvatar
  | actions.ChangeComment
  | actions.ChangeHostName
  | actions.ChangeMember
  | actions.ChangeNumberOfPlayers
  | actions.ChangeNumberOfRobots
  | actions.ChangeSearchId
  | actions.ChangeToken
  | actions.ChangeVillageName
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
