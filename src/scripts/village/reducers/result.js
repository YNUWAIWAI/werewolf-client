// @flow
import * as ActionTypes from '../constants/ActionTypes'
import * as Contexts from '../constants/Contexts'
import type {AgentStatus, Language, Payload, ReusltAgent, TResult} from 'village'
import {getMyAgent, getPlayableAgents} from '../module/util'
import {RESULTS} from '../constants/Phase'
import type {SocketMessage} from '../actions'

export type State = {
  +agents: Array<{
    +agentImage: string,
    +agentId: number,
    +agentName: { [Language]: string },
    +result: TResult,
    +roleImage: string,
    +roleName: { [Language]: string },
    +status: AgentStatus,
    +userAvatar: string,
    +userName: string
  }>,
  +summary: {
    +isPlayer: boolean,
    +result: TResult | '',
    +role: string
  },
  +visible: boolean
}
type Action =
  | SocketMessage

export const initialState = {
  agents: [],
  summary: {
    isPlayer: true,
    result: '',
    role: ''
  },
  visible: false
}
const result = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SOCKET_MESSAGE:
      if (
        action.payload['@context'].includes(Contexts.BASE) &&
        action.payload['@context'].includes(Contexts.AGENT) &&
        action.payload['@context'].includes(Contexts.ROLE) &&
        action.payload.phase === RESULTS
      ) {
        const payload: Payload<ReusltAgent, *, *> = action.payload
        const agents = getPlayableAgents(payload.agent)
          .map(a => ({
            agentId: a.id,
            agentImage: a.image,
            agentName: a.name,
            result: a.result,
            roleImage: a.role.roleImage,
            roleName: a.role.roleName,
            status: a.status,
            userAvatar: a.userAvatar,
            userName: a.userName
          }))
        const summary = (() => {
          const mine = getMyAgent(payload.agent)

          if (mine) {
            return {
              isPlayer: true,
              result: mine.result,
              role: mine.role['@id']
            }
          }
          const agent = getPlayableAgents(payload.agent)[0]

          return {
            isPlayer: false,
            result: agent.result,
            role: agent.role['@id']
          }
        })()

        return {
          agents,
          summary,
          visible: true
        }
      }

      return state
    default:
      return state
  }
}

export default result
