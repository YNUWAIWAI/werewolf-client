/* global village */
import * as ActionTypes from '../constants/ActionTypes'
import {ChangePredictionBoard, SocketMessage} from '../actions'
import {
  getPlayableRoles,
  just,
  strToAgentStatus,
  strToRoleId
} from '../util'
import {ORDERED_ROLE_LIST} from '../constants/Role'

export interface State {
  readonly playerStatus: {
    readonly id: number
    readonly image: string
    readonly name: village.LanguageMap
    readonly status: village.AgentStatus
  }[]
  readonly roleStatus: {
    readonly caption: village.LanguageMap
    readonly id: village.RoleId
    readonly image: string
    readonly numberOfAgents: number
  }[]
  readonly table: {
    [agentId in village.AgentId]: Partial<{
      [roleId in village.RoleId]: {
        readonly date: number
        readonly fixed: boolean
        readonly state: village.BoardState
      }
    }>
  }
}
type PlayerStatus = State['playerStatus']
type RoleStatus = State['roleStatus']
type Table = State['table']
type Action =
  | SocketMessage
  | ChangePredictionBoard
type Agents = NonNullable<village.Payload$systemMessage['agent']>
type Roles = NonNullable<village.Payload$systemMessage['role']>

const updatePredictionTable = (agents: Agents, roles: Roles, table: Table): Table => {
  const allAgentId = agents.map(agent => String(agent.id))
  const allRoleId = roles
    .filter(role => role.numberOfAgents > 0)
    .map(role => strToRoleId(role.name.en))

  roles
    .filter(role => role.numberOfAgents > 0)
    .forEach(role => {
      if (typeof role.board === 'undefined') {
        return
      }
      const roleId = strToRoleId(role.name.en)

      role.board.forEach(b => {
        const agentId = String(b.agent.id)
        const state = b.polarity === village.Polarity.positive ? village.BoardState.CIRCLE : village.BoardState.FILL

        table[agentId][roleId] = {
          date: b.date,
          fixed: true,
          state
        }
        const numberOfCircle = allAgentId
          .filter(id => just(table[id][roleId]).state === village.BoardState.CIRCLE)
          .length

        if (numberOfCircle === role.numberOfAgents) {
          allAgentId.forEach(id => {
            if (just(table[id][roleId]).fixed) {
              if (just(table[id][roleId]).state === village.BoardState.CIRCLE) {
                allRoleId.forEach(roleId_ => {
                  if (just(table[id][roleId_]).fixed) {
                    return
                  }
                  table[id][roleId_] = {
                    date: b.date,
                    fixed: true,
                    state: village.BoardState.FILL
                  }
                })
              }

              return
            }
            table[id][roleId] = {
              date: b.date,
              fixed: true,
              state: village.BoardState.FILL
            }
          })
        }
      })
    })

  return table
}

const initPredictionTable = (agents: Agents, roles: Roles): Table => {
  const table: Table = {}

  agents.forEach(agent => {
    const agentId = String(agent.id)

    table[agentId] = {}
    roles
      .filter(role => role.numberOfAgents > 0)
      .forEach(role => {
        const roleId = strToRoleId(role.name.en)

        table[agentId][roleId] = {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      })
  })

  return updatePredictionTable(agents, roles, table)
}

export const initialState = {
  playerStatus: [],
  roleStatus: [],
  table: {}
}

const prediction = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.socket.MESSAGE:
      if (action.payload['@payload'] === village.Message.systemMessage) {
        const payload = action.payload

        if (payload.date === 0) {
          return state
        }
        if (!payload.agent || !payload.role) {
          return state
        }
        const agents = payload.agent
        const roles = getPlayableRoles(payload.role)
          .sort((r1, r2) => ORDERED_ROLE_LIST.indexOf(strToRoleId(r1.name.en)) - ORDERED_ROLE_LIST.indexOf(strToRoleId(r2.name.en)))
        const table = (() => {
          if (payload.date === 1 && payload.phase === village.Phase.morning) {
            return initPredictionTable(agents, roles)
          }

          return updatePredictionTable(agents, roles, state.table)
        })()
        const roleStatus: RoleStatus =
          roles
            .filter(role => role.numberOfAgents > 0)
            .map(role => ({
              caption: role.name,
              id: strToRoleId(role.name.en),
              image: role.image,
              numberOfAgents: role.numberOfAgents
            }))
        const playerStatus: PlayerStatus =
          agents
            .map(agent => ({
              id: agent.id,
              image: agent.image,
              name: agent.name,
              status: strToAgentStatus(agent.status)
            }))

        return {
          ... state,
          playerStatus,
          roleStatus,
          table
        }
      }

      return state
    case ActionTypes.global.CHANGE_PREDICTION_BOARD: {
      const agentId = String(action.playerId)

      return {
        ... state,
        table: {
          ... state.table,
          [action.playerId]: {
            ... state.table[agentId],
            [action.roleId]: {
              ... state.table[agentId][action.roleId],
              state: action.nextState
            }
          }
        }
      }
    }
    default:
      return state
  }
}

export default prediction
