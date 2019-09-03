import * as ActionTypes from '../constants/ActionTypes'
import * as village from 'types/village'
import {SocketMessage} from '../actions'
import {strToRoleId} from '../util'

export interface State {
  readonly agent?: {
    '@id': village.Agent['@id']
    id: village.Agent['id']
    image: village.Agent['image']
    name: village.Agent['name']
  }
  readonly role?: {
    '@id': village.Role['@id']
    id: village.RoleId
    name: village.Role['name']
    image: village.Role['image']
  }
}
type Action =
  | SocketMessage

export const initialState = {}
const mine = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.socket.MESSAGE:
      if (action.payload['@payload'] === village.Message.systemMessage) {
        const payload = action.payload
        const agent = (() => {
          if (typeof payload.agent === 'undefined') {
            return payload.agent
          }

          const maybe = payload.agent.find(a => a.isMine)

          if (typeof maybe === 'undefined') {
            return maybe
          }

          return {
            '@id': maybe['@id'],
            'id': maybe.id,
            'image': maybe.image,
            'name': maybe.name
          }
        })()
        const role = (() => {
          if (typeof payload.role === 'undefined') {
            return payload.role
          }

          const maybe = payload.role.find(r => r.isMine)

          if (typeof maybe === 'undefined') {
            return maybe
          }

          return {
            '@id': maybe['@id'],
            'id': strToRoleId(maybe.name.en),
            'image': maybe.image,
            'name': maybe.name
          }
        })()

        return {
          agent,
          role
        }
      }

      return state
    default:
      return state
  }
}

export default mine
