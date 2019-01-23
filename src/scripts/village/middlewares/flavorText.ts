import * as ActionTypes from '../constants/ActionTypes'
import {Middleware} from '.'
import {just} from '../util'

const flavorText: Middleware = store => next => action => {
  switch (action.type) {
    case ActionTypes.socket.MESSAGE: {
      if (action.payload['@payload'] === village.Message.flavorTextMessage) {
        const payload = action.payload

        payload.flavorText.forEach((value, index) => {
          const match = (/(\d+)s/).exec(just(value.interval))
          let interval: number

          if (match && match[1]) {
            interval = Number(match[1]) * 1000
          } else {
            interval = 5000
          }

          setTimeout(() => {
            store.dispatch({
              payload: value,
              type: ActionTypes.socket.MESSAGE
            })
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
