// @flow
import * as ActionTypes from '../constants/ActionTypes'
import * as Contexts from '../constants/Contexts'
import type {AgentStatus, Language, Payload, ReusltAgent, TResult} from 'village'
import {getMyAgent, getPlayableAgents, idGenerater} from '../util'
import {RESULTS} from '../constants/Phase'
import type {SocketMessage, HideReuslt} from '../actions'

const getAgentId = idGenerater('agent')

export type State = {
  +agents: {
    [string]: {
      +agentImage: string,
      +agentId: number,
      +agentName: { [Language]: string },
      +result: TResult,
      +roleImage: string,
      +roleName: { [Language]: string },
      +status: AgentStatus,
      +userAvatar: string,
      +userName: string
    }
  },
  +allIds: string[],
  +losers: string[],
  +me: ?string,
  +summary: {
    +isPlayer: boolean,
    +result: TResult | '',
    +role: string
  },
  +visible: boolean,
  +winners: string[]
}
type Action =
  | SocketMessage
  | HideReuslt
  | {type: 'SHOW_RESULT'}

export const initialState = {
  agents: {},
  allIds: [],
  losers: [],
  me: null,
  summary: {
    isPlayer: true,
    result: '',
    role: ''
  },
  visible: false,
  winners: []
}
const result = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SHOW_RESULT:
      return {
        ... state,
        visible: true
      }
    case ActionTypes.HIDE_RESULT:
      return {
        ... state,
        visible: false
      }
    case ActionTypes.SOCKET_MESSAGE:
      if (
        action.payload['@context'].includes(Contexts.BASE) &&
        action.payload['@context'].includes(Contexts.AGENT) &&
        action.payload['@context'].includes(Contexts.ROLE) &&
        action.payload.phase === RESULTS
      ) {
        const payload: Payload<ReusltAgent, *, *> = action.payload
        const agents = {}
        const allIds = []
        const losers = []
        let me
        const winners = []

        getPlayableAgents(payload.agent)
          .forEach(a => {
            const agentId = getAgentId()

            agents[agentId] = {
              agentId: a.id,
              agentImage: a.image,
              agentName: a.name,
              result: a.result,
              roleImage: a.role.roleImage,
              roleName: a.role.roleName,
              status: a.status,
              userAvatar: a.userAvatar,
              userName: a.userName
            }
            if (a.result === 'win') {
              winners.push(agentId)
            }
            if (a.result === 'lose') {
              losers.push(agentId)
            }
            if (a.agentIsMine) {
              me = agentId
            }
            allIds.push(agentId)
          })
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
          allIds,
          losers,
          me,
          summary,
          visible: true,
          winners
        }
      }

      return state
    default:
      return state
  }
}

export default result
