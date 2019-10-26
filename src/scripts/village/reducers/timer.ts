import * as ActionTypes from '../constants/ActionTypes'
import {SocketMessage, Tick} from '../actions'
import {village} from '../types'

export interface State {
  readonly phaseStartTime: number // unixtime
  readonly phaseTimeLimit: number // ms
  readonly start: DOMHighResTimeStamp
  readonly time: DOMHighResTimeStamp
}
type Action =
  | SocketMessage
  | Tick

export const initialState = {
  phaseStartTime: 0,
  phaseTimeLimit: 0,
  start: 0,
  time: 0
}
const timer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.App.TICK:
      return {
        ... state,
        start: action.start,
        time: action.time
      }
    case ActionTypes.Socket.MESSAGE:
      if (
        action.payload['@payload'] === village.Message.systemMessage ||
        (action.payload['@payload'] === village.Message.flavorTextMessage && action.payload.day === 0)
      ) {
        return {
          ... state,
          phaseStartTime: new Date(action.payload.phaseStartTime).getTime(),
          phaseTimeLimit: action.payload.phaseTimeLimit * 1000
        }
      }

      return state
    default:
      return state
  }
}

export default timer
