import * as ActionTypes from '../constants/ActionTypes'
import {getMyRole, getPlayableRoles} from '../util'
import {SocketMessage} from '../actions'

export interface State {
  readonly all: village.Role[]
  readonly mine?: village.Role
}
type Action =
  | SocketMessage

export const initialState = {
  all: []
}
const roles = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.socket.MESSAGE:
      if (action.payload['@payload'] === village.Message.systemMessage) {
        if (action.payload.role) {
          const all = getPlayableRoles(action.payload.role)
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
