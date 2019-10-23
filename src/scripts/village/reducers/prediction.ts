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
import {village} from '../types'

export interface State {
  readonly playerStatus: {
    readonly allIds: village.CharacterId[]
    readonly byId: {
      [id in village.CharacterId]: {
        readonly '@id': string
        readonly id: village.CharacterId
        readonly image: string
        readonly name: village.LanguageMap
        readonly status: village.AgentStatus
      }
    }
  }
  readonly roleStatus: {
    readonly allIds: village.RoleId[]
    readonly byId: Partial<{
      [id in village.RoleId]: {
        readonly '@id': string
        readonly id: village.RoleId
        readonly image: string
        readonly name: village.LanguageMap
        readonly numberOfAgents: number
      }
    }>
  }
  readonly spec: {
    readonly role: village.RoleId
    readonly visible: boolean
  }
  readonly table: {
    [agentId in village.CharacterId]: Partial<{
      [roleId in village.RoleId]: {
        readonly day: number
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
type Characters = NonNullable<village.Payload$SystemMessage['character']>
type Roles = NonNullable<village.Payload$SystemMessage['role']>

const updatePredictionTable = (roles: Roles, table: Table): Table => {
  roles
    .filter(role => role.numberOfCharacters > 0)
    .forEach(role => {
      if (typeof role.board === 'undefined') {
        return
      }
      const roleId = strToRoleId(role.name.en)

      role.board.forEach(b => {
        const characterId = String(b.character.id)

        switch (b.polarity) {
          case village.Polarity.circle:
            table[characterId][roleId] = {
              day: b.day,
              fixed: false,
              state: village.BoardState.CIRCLE
            }
            break
          case village.Polarity.cross:
            table[characterId][roleId] = {
              day: b.day,
              fixed: false,
              state: village.BoardState.CROSS
            }
            break
          case village.Polarity.negative:
            table[characterId][roleId] = {
              day: b.day,
              fixed: true,
              state: village.BoardState.FILL
            }
            break
          case village.Polarity.positive:
            table[characterId][roleId] = {
              day: b.day,
              fixed: true,
              state: village.BoardState.CIRCLE
            }
            break
          case village.Polarity.triangle:
            table[characterId][roleId] = {
              day: b.day,
              fixed: false,
              state: village.BoardState.TRIANGLE
            }
            break
          case village.Polarity.question:
          default:
            table[characterId][roleId] = {
              day: b.day,
              fixed: false,
              state: village.BoardState.QUESTION
            }
        }
      })
    })

  return table
}

const initPredictionTable = (characters: Characters, roles: Roles): Table => {
  const table: Table = {}

  characters.forEach(character => {
    const characterId = String(character.id)

    table[characterId] = {}
    roles
      .filter(role => role.numberOfCharacters > 0)
      .forEach(role => {
        const roleId = strToRoleId(role.name.en)

        table[characterId][roleId] = {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      })
  })

  return updatePredictionTable(roles, table)
}

const getRoleStatus = (roles: Roles): RoleStatus => {
  const allIds: RoleStatus['allIds'] = []
  const byId: RoleStatus['byId'] = {}

  roles
    .filter(role => role.numberOfCharacters > 0)
    .forEach(role => {
      const id = strToRoleId(role.name.en)

      allIds.push(id)
      byId[id] = {
        '@id': role['@id'],
        id,
        'image': role.image,
        'name': role.name,
        'numberOfAgents': role.numberOfCharacters
      }
    })

  return {
    allIds,
    byId
  }
}

const getPlayerStatus = (characters: Characters): PlayerStatus => {
  const allIds: PlayerStatus['allIds'] = []
  const byId: PlayerStatus['byId'] = {}

  characters
    .forEach(character => {
      allIds.push(String(character.id))
      byId[character.id] = {
        '@id': character['@id'],
        'id': String(character.id),
        'image': character.image,
        'name': character.name,
        'status': strToAgentStatus(character.status)
      }
    })

  return {
    allIds,
    byId
  }
}

export const initialState = {
  playerStatus: {
    allIds: [],
    byId: {}
  },
  roleStatus: {
    allIds: [],
    byId: {}
  },
  spec: {
    role: village.RoleId.villager,
    visible: false
  },
  table: {}
}

const prediction = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.socket.MESSAGE:
      switch (action.payload['@payload']) {
        case village.Message.systemMessage: {
          const payload = action.payload

          if (payload.day === 0) {
            return state
          }
          if (!payload.character || !payload.role) {
            return state
          }
          const characters = payload.character
          const roles = getPlayableRoles(payload.role)
            .sort((r1, r2) => ORDERED_ROLE_LIST.indexOf(strToRoleId(r1.name.en)) - ORDERED_ROLE_LIST.indexOf(strToRoleId(r2.name.en)))
          const table = (() => {
            if (payload.day === 1 && payload.phase === village.Phase.morning) {
              return initPredictionTable(characters, roles)
            }

            return updatePredictionTable(roles, state.table)
          })()

          return {
            ... state,
            playerStatus: getPlayerStatus(characters),
            roleStatus: getRoleStatus(roles),
            table
          }
        }
        default:
          return state
      }
    case ActionTypes.global.CHANGE_PREDICTION_BOARD: {
      const characterId = String(action.characterId)

      return {
        ... state,
        table: {
          ... state.table,
          [action.characterId]: {
            ... state.table[characterId],
            [action.roleId]: {
              ... state.table[characterId][action.roleId],
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
          role: action.role,
          visible: true
        }
      }
    }
    default:
      return state
  }
}

export default prediction
