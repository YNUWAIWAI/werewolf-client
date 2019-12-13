import * as ActionTypes from '../constants/ActionTypes'
import {Message$SystemMessage} from '../actions'
import {strToRoleId} from '../util'
import {village} from '../types'

export interface SuggestedData {
  readonly id: village.LanguageMap['en']
  readonly name: village.LanguageMap
}
export interface State {
  readonly data: SuggestedData[]
}
type Action =
  | Message$SystemMessage

export const initialState: State = {
  data: []
}

const suggest = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.Message.SYSTEM_MESSAGE: {
      const payload = action.payload

      if (
        payload.character &&
        payload.role
      ) {
        const character = payload.character.map(item => ({
          id: item.name.en,
          name: item.name
        }))
        const role = payload.role.map(item => ({
          id: strToRoleId(item.name.en),
          name: item.name
        }))
        const data = [
          ... character,
          ... role
        ].sort((a, b) => {
          if (a.id > b.id) {
            return 1
          }

          return -1
        })

        return {
          ... state,
          data
        }
      }

      return state
    }
    default:
      return state
  }
}

export default suggest
