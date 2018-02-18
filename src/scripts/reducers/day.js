import * as ActionTypes from '../constants/ActionTypes'
import * as Message from '../constants/Message'
import {setDay} from '../actions'

const initialState = {
  date: 0,
  phase: 'day conversation'
}

const day = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SOCKET_MESSAGE:
      if (action.payload['@id'] === Message.SYSTEM_MESSAGE) {
        return setDay(action.payload)
      }

      return state
    default:
      return state
  }
}

export default day
