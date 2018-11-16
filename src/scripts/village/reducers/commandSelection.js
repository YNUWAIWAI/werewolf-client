// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {ChangePhase, SelectYes, SocketMessage} from '../actions'
import type {Language, Payload$systemMessage} from 'village'
import {strToMessage, just} from '../util'
import {SYSTEM_MESSAGE} from '../constants/Message'
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
        strToMessage(action.payload['@id']) === SYSTEM_MESSAGE &&
        VOTING_PHASE.includes(action.payload.phase)
      ) {
        const payload: Payload$systemMessage = action.payload
        const agents = just(payload.agent)
          .filter(a => just(a.isAChoice))
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

