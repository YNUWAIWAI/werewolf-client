import * as ActionTypes from '../constants/ActionTypes'
import {Middleware} from '.'
import {just} from '../util'

const flavorText: Middleware = store => next => action => {
  switch (action.type) {
    case ActionTypes.socket.MESSAGE: {
      if (action.payload['@payload'] === village.Message.flavorTextMessage) {
        const payload = action.payload

        payload.flavorText.forEach((value, index) => {
          const [,interval] = (/(\d+)s/).exec(just(value.interval))

          setTimeout(() => {
            store.dispatch({
              payload: value,
              type: ActionTypes.socket.MESSAGE
            })
          }, Number(interval) * index)
        })
      }

      return next(action)
    }
    default:
      return next(action)
  }
}

export default flavorText
