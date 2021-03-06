/* eslint no-console: 0 */
import * as ActionTypes from '../constants/ActionTypes'
import {History} from 'history'
import {Middleware} from '.'
import {changeLobby} from '../actions'
import {lobby} from '../types'
import {matchPath} from 'react-router'

const enum LobbyType {
  audience = 'audience',
  human = 'human',
  robot = 'robot'
}

export const getLobbyType = (pathname: string) => {
  const match = matchPath<{lobbyType: LobbyType}>(pathname, {
    exact: false,
    path: '/:lobbyType',
    strict: false
  })

  if (match) {
    return match.params.lobbyType
  }

  return null
}
const router: (history: History) => Middleware = history => store => next => action => {
  switch (action.type) {
    case ActionTypes.App.INIT: {
      const lobbyType = getLobbyType(history.location.pathname)

      switch (lobbyType) {
        case LobbyType.audience:
          store.dispatch(changeLobby(lobby.LobbyType.onymousAudience))

          return next(action)
        case LobbyType.human:
          store.dispatch(changeLobby(lobby.LobbyType.human))

          return next(action)
        case LobbyType.robot:
          store.dispatch(changeLobby(lobby.LobbyType.robot))

          return next(action)
        default:
          return next(action)
      }
    }
    case ActionTypes.App.SELECT_VILLAGE:
    case ActionTypes.BuildVillage.BUILD: {
      const lobbyType = getLobbyType(history.location.pathname)

      if (lobbyType) {
        history.replace(`/${lobbyType}/waitingForPlayers`)
      } else {
        history.replace('/')
      }

      return next(action)
    }
    case ActionTypes.App.SHOW_ADVANCED_SEARCH: {
      const lobbyType = getLobbyType(history.location.pathname)

      if (lobbyType) {
        history.push(`/${lobbyType}/advancedSearch`)
      } else {
        history.push('/')
      }

      return next(action)
    }
    case ActionTypes.App.SHOW_BUILD_VILLAGE: {
      const lobbyType = getLobbyType(history.location.pathname)

      if (lobbyType) {
        history.push(`/${lobbyType}/buildVillage`)
      } else {
        history.push('/')
      }

      return next(action)
    }
    case ActionTypes.App.SHOW_CREATE_NEW_AVATAR: {
      const lobbyType = getLobbyType(history.location.pathname)

      if (lobbyType) {
        history.push(`/${lobbyType}/createNewAvatar`)
      } else {
        history.push('/')
      }

      return next(action)
    }
    case ActionTypes.App.SHOW_HISTORY:
      history.push('/history')

      return next(action)
    case ActionTypes.App.SHOW_ID_SEARCH: {
      const lobbyType = getLobbyType(history.location.pathname)

      if (lobbyType) {
        history.push(`/${lobbyType}/idSearch`)
      } else {
        history.push('/')
      }

      return next(action)
    }
    case ActionTypes.App.SHOW_LOBBY_FOR_AUDIENCE:
      history.push('/audience/lobby')

      return next(action)
    case ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER:
      history.push('/human/lobby')

      return next(action)
    case ActionTypes.App.SHOW_LOBBY_FOR_ROBOT_PLAYER:
      history.push('/robot/lobby')

      return next(action)
    case ActionTypes.App.SHOW_MAIN:
      history.push('/')

      return next(action)
    case ActionTypes.App.SHOW_SELECT_HUMAN_AVATAR:
      history.push('/human/selectAvatar')

      return next(action)
    case ActionTypes.App.SHOW_SELECT_ROBOT_AVATAR:
      history.push('/robot/selectAvatar')

      return next(action)
    case ActionTypes.App.SHOW_SETTINGS:
      history.push('/settings')

      return next(action)
    default:

      return next(action)
  }
}

export default router
