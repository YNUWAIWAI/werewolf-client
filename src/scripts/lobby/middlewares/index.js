// @flow
import * as actions from '../actions'
import * as ActionTypes from '../constants/ActionTypes'
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
  | actions.ChangeVillageName
  | actions.SocketClose
  | actions.SocketError
  | actions.SocketMessage
  | actions.SocketOpen
  | actions.SocketSend
  | {type: typeof ActionTypes.BUILD_VILLAGE}
  | {type: typeof ActionTypes.SHOW_BUILD_VILLAGE}
  | {type: typeof ActionTypes.SHOW_CONNECTING_TO_ROBOT_PLAYER}
  | {type: typeof ActionTypes.SHOW_HISTORY}
  | {type: typeof ActionTypes.SHOW_LOBBY_FOR_AUDIENCE}
  | {type: typeof ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER}
  | {type: typeof ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER}
  | {type: typeof ActionTypes.SHOW_MAIN}
  | {type: typeof ActionTypes.SHOW_SETTINGS}
  | {type: typeof ActionTypes.SHOW_BUILD_VILLAGE}
  | {type: typeof ActionTypes.SHOW_CONNECTING_TO_ROBOT_PLAYER}

// const elem = document.getElementById('script')

// if (!elem || !elem.dataset || !elem.dataset.url) {
//   throw Error('Not found data-url attribute.')
// }
// const url = elem.dataset.url
const middleware = applyMiddleware(
  // socket({
  //   url
  // }),
  client2server,
  logger
)

export default middleware
