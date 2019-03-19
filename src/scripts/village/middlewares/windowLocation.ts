import * as ActionTypes from '../constants/ActionTypes'
import {Middleware} from '.'

const windowLocation: Middleware = store => next => action => {
  switch (action.type) {
    case ActionTypes.global.PROLOGUE:
      window.onbeforeunload = () => ''

      return next(action)
    case ActionTypes.global.SHOW_LOBBY:
      window.onbeforeunload = null
      window.location.replace(`${window.location.origin}/lobby`)

      return next(action)
    default:
      return next(action)
  }
}

export default windowLocation
