import * as ActionTypes from '../constants/ActionTypes'
import {SocketMessage} from '../actions'
import {strToRoleId} from '../util'
import {village} from '../types'

export interface State {
  data: {
    id: village.LanguageMap['en']
    name: village.LanguageMap
  }[]
}
type Action =
  | SocketMessage

export const initialState: State = {
  data: []
}

const suggest = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.socket.MESSAGE: {
      const payload = action.payload

      if (
        payload['@payload'] === village.Message.systemMessage &&
        payload.agent &&
        payload.role
      ) {
        const agent = payload.agent.map(item => ({
          id: item.name.en,
          name: item.name
        }))
        const role = payload.role.map(item => ({
          id: strToRoleId(item.name.en),
          name: item.name
        }))
        const data = [
          ... agent,
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
