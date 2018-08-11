// @flow

import type {DispatchAPI, Middleware} from 'redux'
import {changeDate, changePhase} from '../actions'
import type {Action} from '.'
import {BASE} from '../constants/Contexts'
import type {ReducerState} from '../reducers'
import {SOCKET_MESSAGE} from '../constants/ActionTypes'

const timeWatcher: Middleware<ReducerState, Action, DispatchAPI<Action>> = store => next => action => {
  if (action.type === SOCKET_MESSAGE && action.payload['@context'].includes(BASE)) {
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

  return next(action)
}

export default timeWatcher
