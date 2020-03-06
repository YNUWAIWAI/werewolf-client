import * as ActionTypes from '../constants/ActionTypes'
import {
  ChangeVolume,
  Mute,
  Unmute
} from '../actions'

export type State = {
  muted: boolean
  volume: number
}
type Action =
  | ChangeVolume
  | Mute
  | Unmute

export const initialState: State = {
  muted: true,
  volume: 1
}
const sound = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.App.CHANGE_VOLUME:
      return {
        muted: false,
        volume: action.volume
      }
    case ActionTypes.App.MUTE:
      return {
        ... state,
        muted: true
      }
    case ActionTypes.App.UNMUTE:
      return {
        ... state,
        muted: false
      }
    default:
      return state
  }
}

export default sound
