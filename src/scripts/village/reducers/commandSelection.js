// @flow
import * as ActionTypes from '../constants/ActionTypes'
import * as Contexts from '../constants/Contexts'
import type {ChangePhase, SelectYes, SocketMessage} from '../actions'
import type {Language, Payload, VoteAgent} from 'village'
import {VOTING_PHASE} from '../constants/Phase'

export type State = {
  +agents: {
    +id: number,
    +image: string,
    +name: { [Language]: string }
  }[],
  +fixed: boolean
}
type Action =
 | ChangePhase
 | SocketMessage
 | SelectYes

export const initialState = {
  agents: [],
  fixed: false
}
const commandSelection = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.CHANGE_PHASE:
      return {
        ... state,
        fixed: false
      }
    case ActionTypes.SELECT_YES: {
      const agentId = action.agentId

      return {
        agents: state.agents.filter(agent => agent.id === agentId),
        fixed: true
      }
    }
    case ActionTypes.socket.MESSAGE:
      if (
        action.payload['@context'].includes(Contexts.AGENT) &&
        VOTING_PHASE.includes(action.payload.phase)
      ) {
        const payload: Payload<VoteAgent, *, *> = action.payload
        const agents = payload.agent
          .filter(a => a.agentIsMine)
          .map(a => ({
            id: a.id,
            image: a.image,
            name: a.name
          }))

        return {
          ... state,
          agents
        }
      }

      return state
    default:
      return state
  }
}

export default commandSelection

