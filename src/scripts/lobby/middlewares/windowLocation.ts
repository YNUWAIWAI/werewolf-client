import * as ActionTypes from '../constants/ActionTypes'
import {Middleware} from '.'

const windowLocation: Middleware = () => next => action => {
  switch (action.type) {
    case ActionTypes.App.SELECT_VILLAGE:
    case ActionTypes.App.SHOW_SETTINGS:
    case ActionTypes.BuildVillage.BUILD:
      window.onbeforeunload = () => ''

      return next(action)
    case ActionTypes.App.SHOW_CREDITS: {
      const w = window.open('https://werewolfguide.netlify.com/docs/en/credits', 'credits')

      if (w) {
        w.opener = null
      }

      return next(action)
    }
    case ActionTypes.App.SHOW_HOW_TO_PLAY: {
      const w = window.open('https://werewolfguide.netlify.com/docs/en/introduction', 'how-to-play')

      if (w) {
        w.opener = null
      }

      return next(action)
    }
    case ActionTypes.App.SHOW_LOBBY_FOR_AUDIENCE:
    case ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER:
    case ActionTypes.App.SHOW_LOBBY_FOR_ROBOT_PLAYER:
    case ActionTypes.App.SHOW_MAIN:
      window.onbeforeunload = null

      return next(action)
    case ActionTypes.App.SHOW_VILLAGE:
      window.onbeforeunload = null
      window.location.replace(`${window.location.origin}/village`)

      return next(action)
    case ActionTypes.Settings.LOGOUT:
      window.onbeforeunload = null
      window.location.replace(`${window.location.origin}/logout`)

      return next(action)
    default:
      return next(action)
  }
}

export default windowLocation
