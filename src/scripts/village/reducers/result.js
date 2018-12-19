// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {AgentStatus, LanguageMap, Payload$systemMessage, Result as TResult, Team} from 'village'
import type {HideResult, SocketMessage} from '../actions'
import {
  getPlayableAgents,
  getTeam,
  idGenerater,
  just,
  strToAgentStatus,
  strToMessage,
  strToRoleId
} from '../util'
import {RESULT} from '../constants/Phase'
import {SYSTEM_MESSAGE} from '../constants/Message'

const getAgentId = idGenerater('agent')

type Agents = {
  [string]: {
    +agentImage: string,
    +agentId: number,
    +agentName: LanguageMap,
    +avatarImage: string,
    +avatarName: string,
    +result: TResult,
    +roleImage: string,
    +roleName: LanguageMap,
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
    loserTeam: new Set(),
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
        strToMessage(action.payload['@id']) === SYSTEM_MESSAGE &&
        action.payload.phase === RESULT
      ) {
        const payload: Payload$systemMessage = action.payload
        const agents: Agents = {}
        const allIds = []
        const losers = []
        let me
        const winners = []

        getPlayableAgents(just(payload.agent))
          .forEach(a => {
            const agentId = getAgentId()

            agents[agentId] = {
              agentId: a.id,
              agentImage: a.image,
              agentName: a.name,
              avatarImage: just(a.avatar).image,
              avatarName: just(a.avatar).name,
              result: just(a.result),
              roleImage: just(a.role).image,
              roleName: just(a.role).name,
              status: strToAgentStatus(a.status)
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
          const winnerTeam = getTeam(strToRoleId(agents[winners[0]].roleName.en))
          const loserTeam = new Set(losers.map(loser => getTeam(strToRoleId(agents[loser].roleName.en))))

          if (me) {
            return {
              kind: 'player',
              loserTeam,
              myTeam: getTeam(strToRoleId(agents[me].roleName.en)),
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
