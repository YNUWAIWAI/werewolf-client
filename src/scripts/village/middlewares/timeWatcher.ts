import {changeDate, changePhase} from '../actions'
import {Middleware} from '.'
import {socket} from '../constants/ActionTypes'

const timeWatcher: Middleware = store => next => action => {
  if (action.type === socket.MESSAGE) {
    const base = store.getState().base

    if (action.payload.date !== base.date) {
      store.dispatch(changeDate({
        from: base.date,
        to: action.payload.date
      }))
    }
    if (action.payload.phase !== village.Phase.flavorText && action.payload.phase !== base.phase) {
      store.dispatch(changePhase({
        from: base.phase,
        to: action.payload.phase
      }))
    }
  }

  return next(action)
}

export default timeWatcher
