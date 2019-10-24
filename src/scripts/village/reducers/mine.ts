import * as ActionTypes from '../constants/ActionTypes'
import {SocketMessage} from '../actions'
import {strToRoleId} from '../util'
import {village} from '../types'

export interface State {
  readonly character?: {
    '@id': village.Character['@id']
    id: village.Character['id']
    image: village.Character['image']
    name: village.Character['name']
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
        const character = (() => {
          if (typeof payload.character === 'undefined') {
            return payload.character
          }

          const maybe = payload.character.find(c => c.isMine)

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
          character,
          role
        }
      }

      return state
    default:
      return state
  }
}

export default mine
