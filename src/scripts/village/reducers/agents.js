// @flow
import * as ActionTypes from '../constants/ActionTypes'
import * as Contexts from '../constants/Contexts'
import type {SocketMessage} from '../actions'
import {UNPLAYABLE_AGENT} from '../constants/Agent'

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
    case ActionTypes.SOCKET_MESSAGE:
      if (action.payload['@context'].includes(Contexts.AGENT)) {
        const payload: Payload<Agent, *, *> = action.payload
        const all = payload.agent.filter(a => !UNPLAYABLE_AGENT.includes(a['@id']))
        const mine = all.filter(a => a.agentIsMine)[0]

        return {
          all,
          mine
        }
      }

      return state
    default:
      return state
  }
}

export default agents
