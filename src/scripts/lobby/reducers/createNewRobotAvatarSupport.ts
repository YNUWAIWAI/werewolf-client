import * as ActionTypes from '../constants/ActionTypes'
import {SupportSelect} from '../actions'
import {lobby} from '../types'

export interface State {
  readonly data: {
    readonly [key in lobby.NumberOfPlayers]: {
      readonly [key in lobby.Member]: boolean
    }
  }
}
type Action =
  | SupportSelect.ChangeCheckbox

export const initialState: State = {
  data: {
    '4': {
      A: false,
      B: false,
      C: false
    },
    '5': {
      A: false,
      B: false,
      C: false
    },
    '6': {
      A: false,
      B: false,
      C: false
    },
    '7': {
      A: false,
      B: false,
      C: false
    },
    '8': {
      A: false,
      B: false,
      C: false
    },
    '9': {
      A: false,
      B: false,
      C: false
    },
    '10': {
      A: false,
      B: false,
      C: false
    },
    '11': {
      A: false,
      B: false,
      C: false
    },
    '12': {
      A: false,
      B: false,
      C: false
    },
    '13': {
      A: false,
      B: false,
      C: false
    },
    '14': {
      A: false,
      B: false,
      C: false
    },
    '15': {
      A: false,
      B: false,
      C: false
    }
  }
}
const createNewRobotAvatarSupport = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SupportSelect.CHANGE_CHECKBOX: {
      return {
        data: {
          ... state.data,
          [action.numberOfPlayers]: {
            ... state.data[action.numberOfPlayers],
            [action.member]: action.checked
          }
        }
      }
    }
    default:
      return state
  }
}

export default createNewRobotAvatarSupport
