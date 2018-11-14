// @flow
import * as ActionTypes from '../constants/ActionTypes'
import * as Contexts from '../constants/Contexts'
import type {Agent, Payload$agent} from 'village'
import {getMyAgent, getPlayableAgents} from '../util'
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
      if (action.payload['@context'].includes(Contexts.AGENT)) {
        const payload: Payload$agent = action.payload
        const mine = getMyAgent(payload.agent)

        return {
          all: payload.agent,
          mine
        }
      }

      return state
    default:
      return state
  }
}

export default agents
