// @flow
import * as ActionTypes from '../constants/ActionTypes'
import * as Contexts from '../constants/Contexts'
import type {AgentStatus, Language, Payload$Result, Result as TResult, Team} from 'village'
import type {HideResult, SocketMessage} from '../actions'
import {getPlayableAgents, getRoleId, getTeam, idGenerater} from '../util'
import {RESULT} from '../constants/Phase'

const getAgentId = idGenerater('agent')

type Agents = {
  [string]: {
    +agentImage: string,
    +agentId: number,
    +agentName: { [Language]: string },
    +avatarImage: string,
    +avatarName: string,
    +result: TResult,
    +roleImage: string,
    +roleName: { [Language]: string },
    +status: AgentStatus
  }
}
type Summary = {
  +kind: 'audience',
  +loserTeam: Set<Team>,
  +winnerTeam: Team
} | {
  +kind: 'player',
  +loserTeam: Set<Team>,
  +myTeam: Team,
  +result: 'win' | 'lose',
  +winnerTeam: Team
}
export type State = {
  +agents: Agents,
  +allIds: string[],
  +losers: string[],
  +me: ?string,
  +summary: Summary,
  +visible: boolean,
  +winners: string[]
}
type Action =
  | SocketMessage
  | HideResult
  | {type: 'SHOW_RESULT'}

export const initialState = {
  agents: {},
  allIds: [],
  losers: [],
  me: null,
  summary: {
    kind: 'audience',
    winnerTeam: 'villager'
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
    case ActionTypes.socket.MESSAGE:
      if (
        action.payload['@context'].includes(Contexts.BASE) &&
        action.payload['@context'].includes(Contexts.VOTING_RESULT) &&
        action.payload.phase === RESULT
      ) {
        const payload: Payload$Result = action.payload
        const agents: Agents = {}
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
              avatarImage: a.avatar.image,
              avatarName: a.avatar.name,
              result: a.result,
              roleImage: a.role.image,
              roleName: a.role.name,
              status: a.status
            }
            if (a.result === 'win') {
              winners.push(agentId)
            }
            if (a.result === 'lose') {
              losers.push(agentId)
            }
            if (a.isMine) {
              me = agentId
            }
            allIds.push(agentId)
          })
        const summary: Summary = (() => {
          if (winners.length === 0) {
            throw Error('Unexpected Result: no winners')
          }
          const winnerTeam = getTeam(getRoleId(agents[winners[0]].roleName.en))
          const loserTeam = new Set(losers.map(loser => getTeam(getRoleId(agents[loser].roleName.en))))

          if (me) {
            return {
              kind: 'player',
              loserTeam,
              myTeam: getTeam(getRoleId(agents[me].roleName.en)),
              result: agents[me].result,
              winnerTeam
            }
          }

          return {
            kind: 'audience',
            loserTeam,
            winnerTeam
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
