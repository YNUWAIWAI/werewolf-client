import * as ActionTypes from '../constants/ActionTypes'
import {SocketMessage, Tick} from '../actions'

export interface State {
  readonly start: DOMHighResTimeStamp
  readonly time: DOMHighResTimeStamp
}
type Action =
  | SocketMessage
  | Tick

export const initialState = {
  start: new Date().getTime(),
  time: 0
}
const roles = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.global.TICK:
      return {
        start: action.start,
        time: action.time
      }
    default:
      return state
  }
}

export default roles
