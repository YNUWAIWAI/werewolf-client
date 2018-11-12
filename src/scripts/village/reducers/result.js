// @flow
import * as ActionTypes from '../constants/ActionTypes'
import * as Contexts from '../constants/Contexts'
import type {AgentStatus, Language, Payload, ReusltAgent, Result as TResult, Team} from 'village'
import type {HideResult, SocketMessage} from '../actions'
import {getPlayableAgents, getRoleId, getTeam, idGenerater} from '../util'
import {RESULT} from '../constants/Phase'
import {WEREHAMSTER} from '../constants/Role'

const getAgentId = idGenerater('agent')

type Agents = {
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
  +werehamster: {
    exists: boolean,
    isWin: boolean
  },
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
  werehamster: {
    exists: false,
    isWin: false
  },
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
        action.payload['@context'].includes(Contexts.AGENT) &&
        action.payload['@context'].includes(Contexts.ROLE) &&
        action.payload.phase === RESULT
      ) {
        const payload: Payload<ReusltAgent, *, *> = action.payload
        const agents: Agents = {}
        const allIds = []
        const losers = []
        let me
        const werehamster = {
          exists: false,
          isWin: false
        }
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
            if (a.role['@id'] === WEREHAMSTER) {
              werehamster.exists = true
              werehamster.isWin = a.result === 'win'
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
          werehamster,
          winners
        }
      }

      return state
    default:
      return state
  }
}

export default result
