// @flow
import * as ActionTypes from '../constants/ActionTypes'
import * as Contexts from '../constants/Contexts'
import type {SocketMessage} from '../actions'
import {UNPLAYABLE_ROLE} from '../constants/Role'

export type State = Role[]
type Action =
  | SocketMessage

const initialState = []
const roles = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SOCKET_MESSAGE:
      if (action.payload['@context'].includes(Contexts.ROLE)) {
        return action.payload.role.filter(r => !UNPLAYABLE_ROLE.includes(r['@id']))
      }

      return state
    default:
      return state
  }
}

export default roles
