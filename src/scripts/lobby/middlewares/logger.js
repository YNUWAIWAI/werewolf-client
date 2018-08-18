// @flow

import type {Action} from '.'
import type {Middleware} from 'redux'
import type {ReducerState} from '../reducers'

const logger: Middleware<ReducerState, Action> = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  console.log('next state', store.getState())
  console.groupEnd()

  return next(action)
}

export default logger
