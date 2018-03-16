// @flow
import * as ActionTypes from '../constants/ActionTypes'
import * as Contexts from '../constants/Contexts'
import type {SocketMessage} from '../actions'

export type State = {
  +phase: Phase | '',
  +phaseTimeLimit: number
}
type Action =
  | SocketMessage

const initialState = {
  phase: '',
  phaseTimeLimit: 0
}
const timer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SOCKET_MESSAGE:
      if (
        action.payload['@context'].includes(Contexts.BASE) &&
        state.phase !== action.payload.phase
      ) {
        return {
          phase: action.payload.phase,
          phaseTimeLimit: action.payload.phaseTimeLimit
        }
      }

      return state
    default:
      return state
  }
}

export default timer
