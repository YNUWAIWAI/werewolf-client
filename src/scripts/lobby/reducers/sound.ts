import * as ActionTypes from '../constants/ActionTypes'
import {ChangeVolume} from '../actions'

export type State = {
  volume: number
}
type Action =
  | ChangeVolume

export const initialState: State = {
  volume: 1
}
const sound = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.App.CHANGE_VOLUME:
      return {
        volume: action.volume
      }
    default:
      return state
  }
}

export default sound
