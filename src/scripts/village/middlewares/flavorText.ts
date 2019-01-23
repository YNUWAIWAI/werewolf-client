import * as ActionTypes from '../constants/ActionTypes'
import {Middleware} from '.'

const INTERVAL = 5000

const flavorText: Middleware = store => next => action => {
  switch (action.type) {
    case ActionTypes.socket.MESSAGE: {
      if (action.payload['@payload'] === village.Message.flavorTextMessage) {
        const payload = action.payload

        payload.flavorText.forEach((value, index) =>
          setTimeout(() => {
            store.dispatch({
              payload: value,
              type: ActionTypes.socket.MESSAGE
            })
          }, INTERVAL * index)
        )
      }

      return next(action)
    }
    default:
      return next(action)
  }
}

export default flavorText
