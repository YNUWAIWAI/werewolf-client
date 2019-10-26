/* eslint no-console: 0 */
import * as ActionTypes from '../constants/ActionTypes'
import {Middleware} from '.'

const logger: Middleware = store => next => action => {
  if (action.type === ActionTypes.TICK) {
    return next(action)
  }
  console.group(action.type)
  console.info('dispatching', action)
  console.log('next state', store.getState())
  console.groupEnd()

  return next(action)
}

export default logger
