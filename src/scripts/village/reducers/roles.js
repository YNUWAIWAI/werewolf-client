// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {Payload$systemMessage, Role$systemMessage as Role} from 'village'
import {strToMessage, getMyRole, getPlayableRoles} from '../util'
import {SYSTEM_MESSAGE} from '../constants/Message'
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
      if (strToMessage(action.payload['@id']) === SYSTEM_MESSAGE) {
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
