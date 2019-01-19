import * as ActionTypes from '../constants/ActionTypes'
import {SocketMessage} from '../actions'
import {getMyAgent} from '../util'

export interface State {
  readonly all: village.Agent[]
  readonly mine?: village.Agent
}
type Action =
  | SocketMessage

export const initialState = {
  all: []
}
const agents = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.socket.MESSAGE:
      if (action.payload['@payload'] === village.Message.systemMessage) {
        const payload = action.payload

        if (payload.agent) {
          const all = payload.agent
          const mine = getMyAgent(all)

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

export default agents
