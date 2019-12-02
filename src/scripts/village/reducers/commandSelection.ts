import * as ActionTypes from '../constants/ActionTypes'
import {
  ChangePhase,
  Message$SystemMessage,
  SelectYes
} from '../actions'
import {VOTING_PHASE} from '../constants/Phase'
import {just} from '../util'
import {village} from '../types'

export interface State {
  readonly allIds: village.CharacterId[]
  readonly byId: {
    [id in village.CharacterId]: {
      readonly '@id': string
      readonly id: village.CharacterId
      readonly image: string
      readonly name: village.LanguageMap
    }
  }
  readonly fixed: boolean
}
type Action =
 | ChangePhase
 | Message$SystemMessage
 | SelectYes

export const initialState: State = {
  allIds: [],
  byId: {},
  fixed: false
}
const commandSelection = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.App.CHANGE_PHASE:
      return {
        ... state,
        fixed: false
      }
    case ActionTypes.App.SELECT_YES: {
      return {
        ... state,
        allIds: state.allIds.filter(characterId => characterId === action.characterId),
        fixed: true
      }
    }
    case ActionTypes.Message.SYSTEM_MESSAGE:
      if (VOTING_PHASE.includes(action.payload.phase)) {
        const byId: State['byId'] = {}
        const allIds = just(action.payload.character)
          .filter(a => just(a.isAChoice))
          .map(a => {
            const characterId = String(a.id)

            byId[characterId] = {
              '@id': a['@id'],
              'id': characterId,
              'image': a.image,
              'name': a.name
            }

            return characterId
          })

        return {
          ... state,
          allIds,
          byId
        }
      }

      return state
    default:
      return state
  }
}

export default commandSelection

