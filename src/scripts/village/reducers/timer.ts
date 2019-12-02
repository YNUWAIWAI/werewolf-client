import * as ActionTypes from '../constants/ActionTypes'
import {
  Message$FlavorTextMessage,
  Message$SystemMessage,
  Tick
} from '../actions'

export interface State {
  readonly phaseStartTime: number // unixtime
  readonly phaseTimeLimit: number // ms
  readonly start: DOMHighResTimeStamp
  readonly time: DOMHighResTimeStamp
}
type Action =
  | Message$SystemMessage
  | Message$FlavorTextMessage
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
    case ActionTypes.Message.FLAVOR_TEXT_MESSAGE:
      if (action.payload.day === 0) {
        return {
          ... state,
          phaseStartTime: new Date(action.payload.phaseStartTime).getTime(),
          phaseTimeLimit: action.payload.phaseTimeLimit * 1000
        }
      }

      return state
    case ActionTypes.Message.SYSTEM_MESSAGE:
      return {
        ... state,
        phaseStartTime: new Date(action.payload.phaseStartTime).getTime(),
        phaseTimeLimit: action.payload.phaseTimeLimit * 1000
      }
    default:
      return state
  }
}

export default timer
