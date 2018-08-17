// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {ChangeToken, Transition} from '../actions'
import type {Lobby} from 'lobby'

export type State = {
  'human player': string,
  +'lobby': Lobby | '',
  'onymous audience': string,
  'robot player': string
}
type Action =
  | ChangeToken
  | Transition

export const initialState = {
  'human player': '',
  'lobby': '',
  'onymous audience': '',
  'robot player': ''
}

const token = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.CHANGE_TOKEN:
      return {
        ... state,
        [action.lobby]: action.token
      }
    case ActionTypes.SHOW_LOBBY_FOR_AUDIENCE:
      return {
        ... state,
        lobby: 'onymous audience'
      }
    case ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER:
      return {
        ... state,
        lobby: 'human player'
      }
    case ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER:
      return {
        ... state,
        lobby: 'robot player'
      }
    default:
      return state
  }
}

export default token
