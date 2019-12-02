import * as ActionTypes from '../constants/ActionTypes'
import {Middleware} from '.'
import {just} from '../util'
import {socket} from '../actions'
import {village} from '../types'

const flavorText: Middleware = store => next => action => {
  switch (action.type) {
    case ActionTypes.Message.FLAVOR_TEXT_MESSAGE: {
      action.payload.flavorText.forEach((value, index) => {
        const interval = just(value.interval) * 1000

        setTimeout(() => {
          store.dispatch(socket.message(value as village.Payload$ChatMessage))
        }, interval * index)
      })

      return next(action)
    }
    default:
      return next(action)
  }
}

export default flavorText
