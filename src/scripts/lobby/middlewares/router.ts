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
const getLobbyType = (pathname: string) => {
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
          break
        case LobbyType.human:
          store.dispatch(changeLobby(lobby.LobbyType.human))
          break
        case LobbyType.robot:
          store.dispatch(changeLobby(lobby.LobbyType.robot))
          break
        default:
          break
      }
      break
    }
    case ActionTypes.App.SELECT_VILLAGE:
    case ActionTypes.Target.BUILD_VILLAGE: {
      const lobbyType = getLobbyType(history.location.pathname)

      if (lobbyType) {
        history.replace(`/${lobbyType}/waitingForPlayers`)
      } else {
        history.replace('/')
      }
      break
    }
    case ActionTypes.Target.SHOW_ADVANCED_SEARCH: {
      const lobbyType = getLobbyType(history.location.pathname)

      if (lobbyType) {
        history.push(`/${lobbyType}/advancedSearch`)
      } else {
        history.push('/')
      }
      break
    }
    case ActionTypes.Target.SHOW_BUILD_VILLAGE: {
      const lobbyType = getLobbyType(history.location.pathname)

      if (lobbyType) {
        history.push(`/${lobbyType}/buildVillage`)
      } else {
        history.push('/')
      }
      break
    }
    case ActionTypes.Target.SHOW_CONNECTING_TO_ROBOT_PLAYER:
      history.push('/')
      break
    case ActionTypes.Target.SHOW_HISTORY:
      history.push('/history')
      break
    case ActionTypes.Target.SHOW_ID_SEARCH: {
      const lobbyType = getLobbyType(history.location.pathname)

      if (lobbyType) {
        history.push(`/${lobbyType}/idSearch`)
      } else {
        history.push('/')
      }
      break
    }
    case ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE:
      history.push('/audience/lobby')
      break
    case ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER:
      history.push('/human/lobby')
      break
    case ActionTypes.Target.SHOW_LOBBY_FOR_ROBOT_PLAYER:
      history.push('/robot/lobby')
      break
    case ActionTypes.Target.SHOW_MAIN:
      history.push('/')
      break
    case ActionTypes.Target.SHOW_SETTINGS:
      history.push('/settings')
      break
    default:
      break
  }

  return next(action)
}

export default router
