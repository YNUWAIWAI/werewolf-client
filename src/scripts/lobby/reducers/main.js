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
      id: 'Menu.lobbyForAudience',
      types: [ActionTypes.SHOW_LOBBY_FOR_AUDIENCE]
    },
    {
      id: 'Menu.lobbyForRobotPlayer',
      types: [ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER]
    },
    {
      id: 'Menu.lobbyForHumanPlayer',
      types: [ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
    },
    {
      id: 'Menu.history',
      types: [ActionTypes.SHOW_HISTORY]
    },
    {
      id: 'Menu.settings',
      types: [ActionTypes.SHOW_SETTINGS]
    },
    {
      id: 'Menu.howToPlay',
      types: [ActionTypes.SHOW_HOW_TO_PLAY]
    },
    {
      id: 'Menu.credits',
      types: [ActionTypes.SHOW_CREDITS]
    }
  ]
}

const main = (state: State = initialState, action: Action): State => state

export default main
