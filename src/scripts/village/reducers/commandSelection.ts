import * as ActionTypes from '../constants/ActionTypes'
import {ChangePhase, SelectYes, SocketMessage} from '../actions'
import {just, strToMessage} from '../util'
import {SYSTEM_MESSAGE} from '../constants/Message'
import {VOTING_PHASE} from '../constants/Phase'

export interface State {
  readonly agents: {
    readonly id: number
    readonly image: string
    readonly name: village.LanguageMap
  }[]
  readonly fixed: boolean
}
type Action =
 | ChangePhase
 | SocketMessage
 | SelectYes

export const initialState: State = {
  agents: [],
  fixed: false
}
const commandSelection = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.global.CHANGE_PHASE:
      return {
        ... state,
        fixed: false
      }
    case ActionTypes.global.SELECT_YES: {
      const agentId = action.agentId

      return {
        agents: state.agents.filter(agent => agent.id === agentId),
        fixed: true
      }
    }
    case ActionTypes.socket.MESSAGE:
      if (
        action.payload['@payload'] === village.Message.systemMessage &&
        VOTING_PHASE.includes(action.payload.phase)
      ) {
        const agents = just(action.payload.agent)
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

