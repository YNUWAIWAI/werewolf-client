/* eslint no-process-env: 0 */
import * as actions from '../actions'
import {
  Dispatch,
  MiddlewareAPI,
  applyMiddleware
} from 'redux'
import {History} from 'history'
import {ReducerState} from '../reducers'
import audio from './audio'
import client2server from './client2server'
import {composeWithDevTools} from 'redux-devtools-extension'
import indexedDB from './indexedDB'
import logger from './logger'
import message from './message'
import router from './router'
import socket from './socket'
import windowLocation from './windowLocation'

type Action =
  | actions.AvatarImageSelect.SelectAvatar
  | actions.BuildVillage.ChangeAvatar
  | actions.BuildVillage.ChangeComment
  | actions.BuildVillage.ChangeMember
  | actions.BuildVillage.ChangeNumberOfPlayers
  | actions.BuildVillage.ChangeNumberOfRobots
  | actions.BuildVillage.ChangeVillageName
  | actions.ChangeLobby
  | actions.ChangeToken
  | actions.ChangeVolume
  | actions.IdSearch.ChangeSearchId
  | actions.IdSearch.ChangeValidity
  | actions.Init
  | actions.Message.Avatar
  | actions.Message.Lobby
  | actions.Message.Ping
  | actions.Message.Played
  | actions.Message.SearchResult
  | actions.Message.Settings
  | actions.Message.WaitingPage
  | actions.SelectRobotAvatar.AutorizationRequestAccepted
  | actions.SelectRobotAvatar.ChangeAvatarImage
  | actions.SelectRobotAvatar.ChangeAvatarLanguage
  | actions.SelectRobotAvatar.ChangeAvatarName
  | actions.SelectRobotAvatar.Delete
  | actions.SelectRobotAvatar.RenewAvatarToken
  | actions.SelectRobotAvatar.RunInTheBackround
  | actions.SelectRobotAvatar.StopAvatar
  | actions.SelectVillage
  | actions.Settings.ChangeLanguage
  | actions.Settings.ChangeUserEmail
  | actions.Settings.ChangeUserName
  | actions.Settings.ChangeUserPassword
  | actions.Settings.SubmitLogout
  | actions.ShowVillage
  | actions.Socket.Close
  | actions.Socket.Error
  | actions.Socket.Message
  | actions.Socket.Open
  | actions.Socket.Send
  | actions.ToggleMute
  | actions.Transition
  | actions.WaitingPage.KickOutPlayer

export type Middleware = (store: MiddlewareAPI<Dispatch<Action>, ReducerState>) => (next: Dispatch<Action>) => (action: Action) => Action

interface Options {
  history: History
  url: string
}
export const createMiddleware = ({history, url}: Options) => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(
      audio,
      socket({
        url
      }),
      router(history),
      client2server,
      indexedDB,
      message,
      windowLocation
    )
  }

  return composeWithDevTools(
    applyMiddleware(
      audio,
      socket({
        url
      }),
      router(history),
      client2server,
      indexedDB,
      logger,
      message,
      windowLocation
    )
  )
}
export const createRouterMiddleware = (history: Options['history']) => applyMiddleware(
  audio,
  router(history),
  logger,
  windowLocation
)
