import * as ActionTypes from '../constants/ActionTypes'
import {Middleware} from '.'
import {tick} from '../actions'

const timer: Middleware = store => next => action => {
  switch (action.type) {
    case ActionTypes.App.INIT:
      setInterval(
        () => {
          store.dispatch(tick({
            start: performance.timing.navigationStart,
            time: performance.now()
          }))
        },
        200
      )

      return next(action)
    default:
      return next(action)
  }
}

export default timer
