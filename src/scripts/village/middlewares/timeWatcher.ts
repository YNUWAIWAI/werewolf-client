import * as ActionTypes from '../constants/ActionTypes'
import {
  changeDay,
  changePhase
} from '../actions'
import {Middleware} from '.'

const timeWatcher: Middleware = store => next => action => {
  switch (action.type) {
    case ActionTypes.Message.BOARD_MESSAGE:
    case ActionTypes.Message.CHAT_MESSAGE:
    case ActionTypes.Message.ERROR_MESSAGE:
    case ActionTypes.Message.FLAVOR_TEXT_MESSAGE:
    case ActionTypes.Message.SCROLL_MESSAGE:
    case ActionTypes.Message.SYSTEM_MESSAGE:
    case ActionTypes.Message.VOTE_MESSAGE: {
      const base = store.getState().base

      if (action.payload.day !== base.day) {
        store.dispatch(changeDay({
          from: base.day,
          to: action.payload.day
        }))
      }
      if (action.payload.phase !== base.phase) {
        store.dispatch(changePhase({
          from: base.phase,
          to: action.payload.phase
        }))
      }

      return next(action)
    }
    default:
      return next(action)
  }
}

export default timeWatcher
