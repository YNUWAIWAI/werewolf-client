// @flow
import * as ActionTypes from '../constants/ActionTypes'
import * as Contexts from '../constants/Contexts'
import type {SocketMessage} from '../actions'
import {UNPLAYABLE_ROLE} from '../constants/Role'

export type State = {
  +all: Role[],
  +mine?: Role
}
type Action =
  | SocketMessage

export const initialState = {
  all: []
}
const roles = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SOCKET_MESSAGE:
      if (action.payload['@context'].includes(Contexts.ROLE)) {
        const all = action.payload.role.filter(r => !UNPLAYABLE_ROLE.includes(r['@id']))
        const mine = all.filter(r => r.roleIsMine)[0]

        return {
          all,
          mine
        }
      }

      return state
    default:
      return state
  }
}

export default roles
