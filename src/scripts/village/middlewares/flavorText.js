// @flow

import * as ActionTypes from '../constants/ActionTypes'
import type {DispatchAPI, Middleware} from 'redux'
import type {Action} from '.'
import {FLAVOR_TEXT_MESSAGE} from '../constants/Message'
import type {Payload$flavorTextMessage} from 'village'
import type {ReducerState} from '../reducers'
import {strToMessage} from '../util'

const INTERVAL = 5000

const flavorText: Middleware<ReducerState, Action, DispatchAPI<Action>> = store => next => action => {
  switch (action.type) {
    case ActionTypes.socket.MESSAGE: {
      if (strToMessage(action.payload['@id']) === FLAVOR_TEXT_MESSAGE) {
        const payload: Payload$flavorTextMessage = action.payload

        payload.flavorText.forEach((value, index) =>
          setTimeout(() => {
            store.dispatch({
              payload: value,
              type: 'socket/MESSAGE'
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
