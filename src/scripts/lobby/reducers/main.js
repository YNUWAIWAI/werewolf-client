// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {MenuItem} from 'lobby'
import type {SocketMessage} from '../actions'

export type State = {
  +menuItems: MenuItem[]
}
type Action =
  | SocketMessage

export const initialState = {
  menuItems: [
    {
      text: 'Lobby for Audience',
      types: [ActionTypes.SHOW_LOBBY_FOR_AUDIENCE]
    },
    {
      text: 'Lobby for Robot Player',
      types: [ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER]
    },
    {
      text: 'Lobby for Human Player',
      types: [ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
    },
    {
      text: 'History',
      types: [ActionTypes.SHOW_HISTORY]
    },
    {
      text: 'Settings',
      types: [ActionTypes.SHOW_SETTINGS]
    }
  ]
}

const main = (state: State = initialState, action: Action): State => state

export default main
