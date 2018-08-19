// @flow
import * as ActionTypes from '../constants/ActionTypes'
import * as Contexts from '../constants/Contexts'
import type {Agent, AgentId, AgentStatus, BoardState, Language, Payload, Role, RoleId} from 'village'
import type {ChangePredictionBoard, SocketMessage} from '../actions'
import {MEDIUM, ORDERED_ROLE_LIST, SEER, getRoleId} from '../constants/Role'
import {getPlayableAgents, getPlayableRoles} from '../util'
import {DAY_CONVERSATION} from '../constants/Phase'

export type State = {
  +playerStatus: Array<{
    +id: number,
    +image: string,
    +name: { [Language]: string },
    +status: AgentStatus
  }>,
  +roleStatus: Array<{
    +id: RoleId,
    +image: string,
    +numberOfAgents: number,
    +tooltip: { [Language]: string }
  }>,
  +table: {
    [agentId: AgentId]: {
      [roleId: RoleId]: {
        +date: number,
        +fixed: boolean,
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
  roles.forEach(role => {
    if (
      role.roleIsMine &&
      [SEER, MEDIUM].includes(role['@id'])
    ) {
      const roleId = getRoleId(role['@id'])

      role.board.forEach(b => {
        const agentId = String(b.boardAgent.boardAgentId)

        table[agentId][roleId] = {
          date: b.boardDate,
          fixed: true,
          state: b.boardPolarity === 'positive' ? 'O' : 'fill'
        }
      })
    }
  })

  return table
}

const initPredictionTable = (agents: Agent[], roles: Role[]): Table => {
  const table: Table = {}

  agents.forEach(agent => {
    const agentId = String(agent.id)

    table[agentId] = {}
    roles.forEach(role => {
      const roleId: RoleId = getRoleId(role['@id'])

      if (agent.agentIsMine && role.roleIsMine) {
        table[agentId][roleId] = {
          date: 1,
          fixed: true,
          state: 'O'
        }
      } else if (agent.agentIsMine && !role.roleIsMine) {
        table[agentId][roleId] = {
          date: 1,
          fixed: true,
          state: 'fill'
        }
      } else if (!agent.agentIsMine && role.roleIsMine && role.numberOfAgents === 1) {
        table[agentId][roleId] = {
          date: 1,
          fixed: true,
          state: 'fill'
        }
      } else {
        table[agentId][roleId] = {
          date: 1,
          fixed: false,
          state: '?'
        }
      }
    })
  })

  return updatePredictionTable(roles, table)
}

export const initialState = {
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
        const payload: Payload<Agent, Role, *> = action.payload
        const agents = getPlayableAgents(payload.agent)
        const roles = getPlayableRoles(payload.role)
          .sort((r1, r2) => ORDERED_ROLE_LIST.indexOf(r1['@id']) - ORDERED_ROLE_LIST.indexOf(r2['@id']))
        const table = payload.date === 1 && payload.phase === DAY_CONVERSATION ? initPredictionTable(agents, roles) : updatePredictionTable(roles, state.table)
        const roleStatus: RoleStatus = roles.map(role => ({
          id: getRoleId(role['@id']),
          image: role.image,
          numberOfAgents: role.numberOfAgents,
          tooltip: role.name
        }))
        const playerStatus: PlayerStatus = agents.map(agent => ({
          id: agent.id,
          image: agent.image,
          name: agent.name,
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
