// @flow
import * as ActionTypes from '../constants/ActionTypes'
import * as Contexts from '../constants/Contexts'
import type {SelectYes, SocketMessage} from '../actions'

export type State = {
  +fixed: boolean,
  +phase: Phase | ''
}
type Action =
 | SocketMessage
 | SelectYes

export const initialState = {
  fixed: false,
  phase: ''
}

const commandSelection = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SELECT_YES:
      return {
        ... state,
        fixed: true
      }
    case ActionTypes.SOCKET_MESSAGE:
      if (
        action.payload['@context'].includes(Contexts.BASE) &&
        state.phase !== action.payload.phase
      ) {
        return {
          fixed: false,
          phase: action.payload.phase
        }
      }

      return state
    default:
      return state
  }
}

export default commandSelection

