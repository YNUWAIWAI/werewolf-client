/* eslint no-process-env: 0 */
import * as actions from '../actions'
import {
  Dispatch,
  MiddlewareAPI,
  applyMiddleware
} from 'redux'
import {History} from 'history'
import {ReducerState} from '../reducers'
import client2server from './client2server'
import {composeWithDevTools} from 'redux-devtools-extension'
import indexedDB from './indexedDB'
import logger from './logger'
import message from './message'
import router from './router'
import socket from './socket'
import windowLocation from './windowLocation'

type Action =
  | actions.AdvancedSearch.ChangeAvatar
  | actions.AdvancedSearch.ChangeCheckbox
  | actions.AdvancedSearch.ChangeComment
  | actions.AdvancedSearch.ChangeHostName
  | actions.AdvancedSearch.ChangeMaximum
  | actions.AdvancedSearch.ChangeMinimum
  | actions.AdvancedSearch.ChangeValidity
  | actions.AdvancedSearch.ChangeVillageName
  | actions.BuildVillage.ChangeAvatar
  | actions.BuildVillage.ChangeComment
  | actions.BuildVillage.ChangeMember
  | actions.BuildVillage.ChangeNumberOfPlayers
  | actions.BuildVillage.ChangeNumberOfRobots
  | actions.BuildVillage.ChangeValidity
  | actions.BuildVillage.ChangeVillageName
  | actions.ChangeLobby
  | actions.ChangeToken
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
  | actions.SelectAvatarImage.SelectAvatar
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
  router(history),
  logger
)
