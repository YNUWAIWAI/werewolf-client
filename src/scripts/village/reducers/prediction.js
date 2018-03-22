// @flow
import * as ActionTypes from '../constants/ActionTypes'
import * as Contexts from '../constants/Contexts'
import type {ChangePredictionBoard, SocketMessage} from '../actions'
import {MEDIUM, ORDERED_ROLE_LIST, SEER, UNPLAYABLE_ROLE} from '../constants/Role'
import {DAY_CONVERSATION} from '../constants/Phase'
import {UNPLAYABLE_AGENT} from '../constants/Agent'
import {trimBaseUri} from '../module/util'

export type State = {
  +playerStatus: Array<{
    +id: number,
    +image: string,
    +name: string,
    +status: AgentStatus
  }>,
  +roleStatus: Array<{
    +id: RoleId,
    +image: string,
    +numberOfAgents: number,
    +tooltip: string
  }>,
  +table: {
    [agentId: number]: {
      [roleId: RoleId]: {
        +date: number,
        +state: BoardState
      }
    }
  }
}
type PlayerStatus = $PropertyType<State, 'playerStatus'>
type RoleStatus = $PropertyType<State, 'roleStatus'>
type Table = $PropertyType<State, 'table'>
type Action =
  | SocketMessage
  | ChangePredictionBoard

const updatePredictionTable = (roles: Role[], table: Table): Table => {
  if (roles.some(role =>
    role.roleIsMine &&
    [ SEER, MEDIUM ].includes(role['@id'])
  )) {
    roles.forEach(role => {
      const roleId = trimBaseUri(role['@id'])

      role.board.forEach(b => {
        const agentId = b.boardAgent.boardAgentId

        table[agentId][roleId].state = b.boardPolarity === 'positive' ? 'fix' : 'fill'
        table[agentId][roleId].date = b.boardDate
      })
    })
  }

  return table
}

const initPredictionTable = (agents: Agent[], roles: Role[]): Table => {
  const table: Table = {}

  agents.forEach(agent => {
    table[agent.id] = {}
    roles.forEach(role => {
      const roleId: RoleId = trimBaseUri(role['@id'])

      if (agent.agentIsMine && role.roleIsMine) {
        table[agent.id][roleId] = {
          date: 1,
          state: 'fix'
        }
      } else if (agent.agentIsMine && !role.roleIsMine) {
        table[agent.id][roleId] = {
          date: 1,
          state: 'fill'
        }
      } else if (!agent.agentIsMine && role.roleIsMine && role.numberOfAgents === 1) {
        table[agent.id][roleId] = {
          date: 1,
          state: 'fill'
        }
      } else {
        table[agent.id][roleId] = {
          date: 1,
          state: '?'
        }
      }
    })
  })

  return updatePredictionTable(roles, table)
}

const initialState = {
  playerStatus: [],
  roleStatus: [],
  table: {}
}

const prediction = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SOCKET_MESSAGE:
      if (
        action.payload['@context'].includes(Contexts.AGENT) &&
        action.payload['@context'].includes(Contexts.BASE) &&
        action.payload['@context'].includes(Contexts.ROLE)
      ) {
        const agents = action.payload.agent
          .filter(agent => !UNPLAYABLE_AGENT.includes(agent['@id']))
        const roles = action.payload.role
          .filter(role => !UNPLAYABLE_ROLE.includes(role['@id']))
          .sort((r1, r2) => ORDERED_ROLE_LIST.indexOf(r1['@id']) > ORDERED_ROLE_LIST.indexOf(r2['@id']))
        const table = action.payload.date === 1 && action.payload.phase === DAY_CONVERSATION ? initPredictionTable(agents, roles) : updatePredictionTable(roles, state.table)
        const roleStatus: RoleStatus = roles.map(role => ({
          id: trimBaseUri(role['@id']),
          image: role.image,
          numberOfAgents: role.numberOfAgents,
          tooltip: role.name.ja
        }))
        const playerStatus: PlayerStatus = agents.map(agent => ({
          id: agent.id,
          image: agent.image,
          name: agent.name.ja,
          status: agent.status
        }))

        return {
          ... state,
          playerStatus,
          roleStatus,
          table
        }
      }

      return state
    case ActionTypes.CHANGE_PREDICTION_BOARD: {
      return {
        ... state,
        table: {
          ... state.table,
          [action.playerId]: {
            ... state.table[action.playerId],
            [action.roleId]: {
              ... state.table[action.playerId][action.roleId],
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
