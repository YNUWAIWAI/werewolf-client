// @flow
import * as ActionTypes from '../constants/ActionTypes'
import * as Contexts from '../constants/Contexts'
import type {Payload$systemMessage, Role$SystemMessage as Role} from 'village'
import {getMyRole, getPlayableRoles} from '../util'
import type {SocketMessage} from '../actions'

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
    case ActionTypes.socket.MESSAGE:
      if (action.payload['@context'].includes(Contexts.ROLE)) {
        const payload: Payload$systemMessage = action.payload

        if (payload.role) {
          const all = getPlayableRoles(payload.role)
          const mine = getMyRole(all)

          return {
            all,
            mine
          }
        }
      }

      return state
    default:
      return state
  }
}

export default roles
