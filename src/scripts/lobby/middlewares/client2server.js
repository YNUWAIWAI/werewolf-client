import * as types from '../constants/ActionTypes'
import {socket} from '../actions'

const client2server = store => next => action => {
  return next(action)
}

export default client2server
