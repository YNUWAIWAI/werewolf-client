// @flow
import * as ActionTypes from '../constants/ActionTypes'
import * as Contexts from '../constants/Contexts'
import type {Language, Payload, VoteAgent} from 'village'
import type {SelectYes, SocketMessage} from '../actions'
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
 | SocketMessage
 | SelectYes

export const initialState = {
  agents: [],
  fixed: false
}
let prev = ''
const commandSelection = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SELECT_YES:
      return {
        ... state,
        fixed: true
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
        const fixed = prev !== payload.phase

        prev = payload.phase

        return {
          agents,
          fixed
        }
      }

      return state
    default:
      return state
  }
}

export default commandSelection

