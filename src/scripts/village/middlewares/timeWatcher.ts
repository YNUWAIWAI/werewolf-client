import * as village from '../types'
import {changeDate, changePhase} from '../actions'
import {Middleware} from '.'
import {socket} from '../constants/ActionTypes'

const timeWatcher: Middleware = store => next => action => {
  if (action.type === socket.MESSAGE) {
    if (
      action.payload['@payload'] === village.Message.boardMessage ||
      action.payload['@payload'] === village.Message.errorMessage ||
      action.payload['@payload'] === village.Message.flavorTextMessage ||
      action.payload['@payload'] === village.Message.playerMessage ||
      action.payload['@payload'] === village.Message.scrollMessage ||
      action.payload['@payload'] === village.Message.systemMessage ||
      action.payload['@payload'] === village.Message.voteMessage
    ) {
      const base = store.getState().base

      if (action.payload.date !== base.date) {
        store.dispatch(changeDate({
          from: base.date,
          to: action.payload.date
        }))
      }
      if (action.payload.phase !== base.phase) {
        store.dispatch(changePhase({
          from: base.phase,
          to: action.payload.phase
        }))
      }
    }
  }

  return next(action)
}

export default timeWatcher
