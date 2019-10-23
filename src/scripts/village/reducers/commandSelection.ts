import * as ActionTypes from '../constants/ActionTypes'
import {ChangePhase, SelectYes, SocketMessage} from '../actions'
import {VOTING_PHASE} from '../constants/Phase'
import {just} from '../util'
import {village} from '../types'

export interface State {
  readonly allIds: village.AgentId[]
  readonly byId: {
    [id in village.AgentId]: {
      readonly '@id': string
      readonly id: village.AgentId
      readonly image: string
      readonly name: village.LanguageMap
    }
  }
  readonly fixed: boolean
}
type Action =
 | ChangePhase
 | SocketMessage
 | SelectYes

export const initialState: State = {
  allIds: [],
  byId: {},
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
      return {
        ... state,
        allIds: state.allIds.filter(agentId => agentId === action.agentId),
        fixed: true
      }
    }
    case ActionTypes.socket.MESSAGE:
      if (
        action.payload['@payload'] === village.Message.systemMessage &&
        VOTING_PHASE.includes(action.payload.phase)
      ) {
        const byId: State['byId'] = {}
        const allIds = just(action.payload.agent)
          .filter(a => just(a.isAChoice))
          .map(a => {
            const agentId = String(a.id)

            byId[agentId] = {
              '@id': a['@id'],
              'id': agentId,
              'image': a.image,
              'name': a.name
            }

            return agentId
          })

        return {
          ... state,
          allIds,
          byId
        }
      }

      return state
    default:
      return state
  }
}

export default commandSelection

