import * as ActionTypes from '../constants/ActionTypes'
import {Middleware} from '.'
import {just} from '../util'
import {socket} from '../actions'
import {village} from '../types'

const flavorText: Middleware = store => next => action => {
  switch (action.type) {
    case ActionTypes.socket.MESSAGE: {
      if (action.payload['@payload'] === village.Message.flavorTextMessage) {
        const payload = action.payload

        payload.flavorText.forEach((value, index) => {
          const match = (/(?<interval>\d+)s/).exec(just(value.interval))
          let interval: number

          if (match && match.groups) {
            interval = Number(match.groups.interval) * 1000
          } else {
            interval = 5000
          }

          setTimeout(() => {
            store.dispatch(socket.message(value))
          }, interval * index)
        })
      }

      return next(action)
    }
    default:
      return next(action)
  }
}

export default flavorText
