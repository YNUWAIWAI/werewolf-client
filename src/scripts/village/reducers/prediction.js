import * as ActionTypes from '../constants/ActionTypes'
import * as Contexts from '../constants/Contexts'
import {ORDERED_ROLE_LIST, UNPLAYABLE_ROLE, SEER, MEDIUM} from '../constants/Role'
import {UNPLAYABLE_AGENT} from '../constants/Agent'
import {trimBaseUri} from '../module/util'

const updatePredictionTable = (agents, roles, table) => {
  if (roles.some(role =>
    role.roleIsMine &&
    [ SEER, MEDIUM ].includes(role['@id'])
  )) {
    roles.forEach(role => {
      const roleId = trimBaseUri(role['@id'])
      const agentId = role.board.boardAgent.boardAgentId

      table[agentId][roleId].state = role.board.boardPolarity === 'positive' ? 'fix' : 'fill'
      table[agentId][roleId].date = role.board.boardDate
    })
  }

  return table
}

const initPredictionTable = (agents, roles) => {
  const table = {}

  agents.forEach(agent => {
    table[agent.id] = {}
    roles.forEach(role => {
      const roleId = trimBaseUri(role['@id'])

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

  return updatePredictionTable(agents, roles, table)
}

const initialState = {
  playerStatus: [],
  roleStatus: []
}

const prediction = (state = initialState, action) => {
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

        const table = state.table ? updatePredictionTable(agents, roles, state.table) : initPredictionTable(agents, roles)
        const roleStatus = roles.map(role => ({
          id: trimBaseUri(role['@id']),
          image: role.image,
          numberOfAgents: role.numberOfAgents,
          tooltip: role.name.ja
        }))
        const playerStatus = agents.map(agent => ({
          id: agent.id,
          image: agent.image,
          name: agent.name.ja,
          status: agent.status
        }))

        return Object.assign(
          {},
          state,
          {
            playerStatus,
            roleStatus,
            table,
          }
        )
      }

      return state
    case ActionTypes.CHANGE_PREDICTION_BOARD: {
      const nextState = Object.assign(
        {},
        state,
        {
          table: Object.assign(
            {},
            state.table,
            {
              [action.playerId]: Object.assign(
                {},
                state.table[action.playerId],
                {
                  [action.roleId]: Object.assign(
                    {},
                    state.table[action.playerId][action.roleId],
                    {
                      state: action.nextState
                    }
                  )
                }
              )
            }
          )
        }
      )

      return nextState
    }
    default:
      return state
  }
}

export default prediction
