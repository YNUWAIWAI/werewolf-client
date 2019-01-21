import * as ActionTypes from '../constants/ActionTypes'
import {HideResult, SocketMessage, Target} from '../actions'
import {
  getPlayableAgents,
  getTeam,
  idGenerater,
  just,
  strToAgentStatus,
  strToRoleId
} from '../util'

const getAgentId = idGenerater('agent')

type PlayerSummary = {
  readonly kind: 'player',
  readonly loserTeam: Set<village.Team>,
  readonly myTeam: village.Team,
  readonly result: village.Result,
  readonly winnerTeam: village.Team
}

type AudienceSummary = {
  readonly kind: 'audience',
  readonly loserTeam: Set<village.Team>,
  readonly winnerTeam: village.Team
}

type Summary = PlayerSummary | AudienceSummary

export interface State {
  readonly agents: {
    [id in village.AgentId]: {
      readonly agentImage: string
      readonly agentId: number
      readonly agentName: village.LanguageMap
      readonly avatarImage: string
      readonly avatarName: string
      readonly result: village.Result
      readonly roleImage: string
      readonly roleName: village.LanguageMap
      readonly status: village.AgentStatus
    }
  }
  readonly allIds: string[]
  readonly losers: string[]
  readonly me: string | null
  readonly summary: Summary
  readonly visible: boolean
  readonly winners: string[]
}
type Action =
  | SocketMessage
  | HideResult
  | Target

export const initialState: State = {
  agents: {},
  allIds: [],
  losers: [],
  me: null,
  summary: {
    kind: 'audience',
    loserTeam: new Set(),
    winnerTeam: village.Team.villager
  },
  visible: false,
  winners: []
}
const result = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.global.SHOW_RESULT:
      return {
        ... state,
        visible: true
      }
    case ActionTypes.global.HIDE_RESULT:
      return {
        ... state,
        visible: false
      }
    case ActionTypes.socket.MESSAGE:
      if (
        action.payload['@payload'] === village.Message.systemMessage &&
        action.payload.phase === village.Phase.result
      ) {
        const payload = action.payload
        const agents: State['agents'] = {}
        const allIds: State['allIds'] = []
        const losers: State['losers'] = []
        let me: State['me'] = null
        const winners: State['winners'] = []

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
            if (a.result === village.Result.win) {
              winners.push(agentId)
            }
            if (a.result === village.Result.lose) {
              losers.push(agentId)
            }
            if (a.isMine) {
              me = agentId
            }
            allIds.push(agentId)
          })
        const summary = (() => {
          if (winners.length === 0) {
            throw Error('Unexpected Result: no winners')
          }
          const winnerTeam = getTeam(strToRoleId(agents[winners[0]].roleName.en))
          const loserTeam = new Set(losers.map(loser => getTeam(strToRoleId(agents[loser].roleName.en))))

          if (typeof me === 'string') {
            return <PlayerSummary>{
              kind: 'player',
              loserTeam,
              myTeam: getTeam(strToRoleId(agents[me].roleName.en)),
              result: agents[me].result,
              winnerTeam
            }
          }

          return <AudienceSummary>{
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
