// @flow
import * as ActionTypes from '../constants/ActionTypes'
import * as Contexts from '../constants/Contexts'
import {RESULTS} from '../constants/Phase'
import type {SocketMessage} from '../actions'

export type State = {
  +visible: boolean
}
type Action =
  | SocketMessage

const initialState = {
  visible: false
}
const result = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SOCKET_MESSAGE:
      if (
        action.payload['@context'].includes(Contexts.BASE) &&
        action.payload['@context'].includes(Contexts.AGENT) &&
        action.payload['@context'].includes(Contexts.ROLE) &&
        action.payload.phase === RESULTS
      ) {
        return {
          visible: true
        }
      }

      return state
    default:
      return state
  }
}

export default result
