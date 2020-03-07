import * as ActionTypes from '../constants/ActionTypes'
import {
  ChangeVolume,
  ToggleMute
} from '../actions'

export type State = {
  muted: boolean
  volume: number
}
type Action =
  | ChangeVolume
  | ToggleMute

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
    case ActionTypes.App.TOGGLE_MUTE:
      return {
        ... state,
        muted: action.muted
      }
    default:
      return state
  }
}

export default sound
