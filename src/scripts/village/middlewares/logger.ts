/* eslint no-console: 0 */
import {Dispatch, Middleware} from 'redux'
import {Action} from '.'
import {ReducerState} from '../reducers'

const logger: Middleware<{}, ReducerState, Dispatch<Action>> = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  console.log('next state', store.getState())
  console.groupEnd()

  return next(action)
}

export default logger
