import * as ActionTypes from '../constants/ActionTypes'
import {Message$SystemMessage} from '../actions'
import {strToRoleId} from '../util'
import {village} from '../types'

export interface State {
  readonly character?: {
    '@id': string
    id: village.Payload$CharacterId
    image: string
    name: village.LanguageMap
  }
  readonly role?: {
    '@id': string
    id: village.RoleId
    name: village.LanguageMap
    image: string
  }
}
type Action =
  | Message$SystemMessage

export const initialState = {}
const mine = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.Message.SYSTEM_MESSAGE: {
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
    default:
      return state
  }
}

export default mine
