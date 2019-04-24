/* global village */
import * as ActionTypes from '../constants/ActionTypes'
import {
  ChangePredictionBoard,
  HidePredictionSpec,
  ShowPredictionSpec,
  SocketMessage
} from '../actions'
import {
  getPlayableRoles,
  strToAgentStatus,
  strToRoleId
} from '../util'
import {ORDERED_ROLE_LIST} from '../constants/Role'

export interface State {
  readonly playerStatus: {
    readonly '@id': string
    readonly id: number
    readonly image: string
    readonly name: village.LanguageMap
    readonly status: village.AgentStatus
  }[]
  readonly roleStatus: {
    readonly '@id': string
    readonly id: village.RoleId
    readonly image: string
    readonly name: village.LanguageMap
    readonly numberOfAgents: number
  }[]
  readonly spec: {
    readonly role: village.RoleId
    readonly visible: boolean
  }
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
  | ChangePredictionBoard
  | HidePredictionSpec
  | ShowPredictionSpec
  | SocketMessage
type Agents = NonNullable<village.Payload$systemMessage['agent']>
type Roles = NonNullable<village.Payload$systemMessage['role']>

const updatePredictionTable = (roles: Roles, table: Table): Table => {
  roles
    .filter(role => role.numberOfAgents > 0)
    .forEach(role => {
      if (typeof role.board === 'undefined') {
        return
      }
      const roleId = strToRoleId(role.name.en)

      role.board.forEach(b => {
        const agentId = String(b.agent.id)

        switch (b.polarity) {
          case village.Polarity.circle:
            table[agentId][roleId] = {
              date: b.date,
              fixed: false,
              state: village.BoardState.CIRCLE
            }
            break
          case village.Polarity.cross:
            table[agentId][roleId] = {
              date: b.date,
              fixed: false,
              state: village.BoardState.CROSS
            }
            break
          case village.Polarity.negative:
            table[agentId][roleId] = {
              date: b.date,
              fixed: true,
              state: village.BoardState.FILL
            }
            break
          case village.Polarity.positive:
            table[agentId][roleId] = {
              date: b.date,
              fixed: true,
              state: village.BoardState.CIRCLE
            }
            break
          case village.Polarity.triangle:
            table[agentId][roleId] = {
              date: b.date,
              fixed: false,
              state: village.BoardState.TRIANGLE
            }
            break
          case village.Polarity.question:
          default:
            table[agentId][roleId] = {
              date: b.date,
              fixed: false,
              state: village.BoardState.QUESTION
            }
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

  return updatePredictionTable(roles, table)
}

export const initialState = {
  playerStatus: [],
  roleStatus: [],
  spec: {
    role: village.RoleId.villager,
    visible: false
  },
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

          return updatePredictionTable(roles, state.table)
        })()
        const roleStatus: RoleStatus =
          roles
            .filter(role => role.numberOfAgents > 0)
            .map(role => ({
              '@id': role['@id'],
              'id': strToRoleId(role.name.en),
              'image': role.image,
              'name': role.name,
              'numberOfAgents': role.numberOfAgents
            }))
        const playerStatus: PlayerStatus =
          agents
            .map(agent => ({
              '@id': agent['@id'],
              'id': agent.id,
              'image': agent.image,
              'name': agent.name,
              'status': strToAgentStatus(agent.status)
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
    case ActionTypes.global.HIDE_PREDICTION_SPEC: {
      return {
        ... state,
        spec: {
          ... state.spec,
          visible: false
        }
      }
    }
    case ActionTypes.global.SHOW_PREDICTION_SPEC: {
      return {
        ... state,
        spec: {
          role: state.spec.role,
          visible: false
        }
      }
    }
    default:
      return state
  }
}

export default prediction
