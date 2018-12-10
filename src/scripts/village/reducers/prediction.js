// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {Agent$systemMessage as Agent, AgentId, AgentStatus, BoardState, Language, Payload$systemMessage, Role$systemMessage as Role, RoleId} from 'village'
import type {ChangePredictionBoard, SocketMessage} from '../actions'
import {ORDERED_ROLE_LIST, PREDICTION} from '../constants/Role'
import {
  getPlayableRoles,
  just,
  strToAgentStatus,
  strToMessage,
  strToRoleId
} from '../util'
import {MORNING} from '../constants/Phase'
import {SYSTEM_MESSAGE} from '../constants/Message'

export type State = {
  +playerStatus: Array<{
    +id: number,
    +image: string,
    +name: { [Language]: string },
    +status: AgentStatus
  }>,
  +roleStatus: Array<{
    +caption: { [Language]: string },
    +id: RoleId,
    +image: string,
    +numberOfAgents: number
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
    const roleId = strToRoleId(role.name.en)

    if (
      role.isMine &&
      PREDICTION.includes(roleId) &&
      role.board
    ) {
      role.board.forEach(b => {
        const agentId = String(b.agent.id)

        table[agentId][roleId] = {
          date: b.date,
          fixed: true,
          state: b.polarity === 'positive' ? 'O' : 'fill' // polarity: 'positive' | 'negative'
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
      const roleId = strToRoleId(role.name.en)

      if (agent.isMine && role.isMine) {
        table[agentId][roleId] = {
          date: 1,
          fixed: true,
          state: 'O'
        }
      } else if (agent.isMine && !role.isMine) {
        table[agentId][roleId] = {
          date: 1,
          fixed: true,
          state: 'fill'
        }
      } else if (!agent.isMine && role.isMine && role.numberOfAgents === 1) {
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
    case ActionTypes.socket.MESSAGE:
      if (strToMessage(action.payload['@id']) === SYSTEM_MESSAGE) {
        const payload: Payload$systemMessage = action.payload

        if (payload.date === 0) {
          return state
        }
        const agents = just(payload.agent)
        const roles = getPlayableRoles(just(payload.role))
          .sort((r1, r2) => ORDERED_ROLE_LIST.indexOf(strToRoleId(r1.name.en)) - ORDERED_ROLE_LIST.indexOf(strToRoleId(r2.name.en)))
        const table = (() => {
          if (payload.date === 1 && payload.phase === MORNING) {
            return initPredictionTable(agents, roles)
          }

          return updatePredictionTable(roles, state.table)
        })()
        const roleStatus: RoleStatus = roles.map(role => ({
          caption: role.name,
          id: strToRoleId(role.name.en),
          image: role.image,
          numberOfAgents: role.numberOfAgents
        }))
        const playerStatus: PlayerStatus = agents.map(agent => ({
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
