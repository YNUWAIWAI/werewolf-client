import {Action} from '.'
import {Middleware} from 'redux'
import {ReducerState} from '../reducers'

const logger: Middleware<ReducerState, Action> = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  console.log('next state', store.getState())
  console.groupEnd()

  return next(action)
}

export default logger
