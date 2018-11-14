// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {Agent$SystemMessage as Agent, Payload$systemMessage} from 'village'
import {getMyAgent, trimBaseUri} from '../util'
import {SYSTEM_MESSAGE} from '../constants/Message'
import type {SocketMessage} from '../actions'

export type State = {
  +all: Agent[],
  +mine?: Agent
}
type Action =
  | SocketMessage

export const initialState = {
  all: []
}
const agents = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.socket.MESSAGE:
      if (trimBaseUri(action.payload['@id']) === trimBaseUri(SYSTEM_MESSAGE)) {
        const payload: Payload$systemMessage = action.payload

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
