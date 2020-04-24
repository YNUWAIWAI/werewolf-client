import * as ActionTypes from '../constants/ActionTypes'
import {
  CreateNewRobotAvatar
} from '../actions'
import {lobby} from '../types'

export interface State {
  readonly data: {
    readonly [key in '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15']: {
      readonly [key in lobby.Member]: boolean
    }
  }
}
type Action =
  | CreateNewRobotAvatar.ShowAvatarImageSelect
  | CreateNewRobotAvatar.ChangeAutomation
  | CreateNewRobotAvatar.ChangeAvatarLangauge
  | CreateNewRobotAvatar.ChangeAvatarName

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
    default:
      return state
  }
}

export default createNewRobotAvatarSupport
