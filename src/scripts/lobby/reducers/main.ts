import * as ActionTypes from '../constants/ActionTypes'
import {MenuItemProps as MenuItem} from '../components/organisms/Menu'
import {SocketMessage} from '../actions'

export interface State {
   readonly menuItems: MenuItem[]
}
type Action =
  | SocketMessage

export const initialState = {
  menuItems: [
    {
      id: 'Menu.lobbyForAudience',
      types: [ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE]
    },
    {
      id: 'Menu.lobbyForRobotPlayer',
      types: [ActionTypes.Target.SHOW_LOBBY_FOR_ROBOT_PLAYER]
    },
    {
      id: 'Menu.lobbyForHumanPlayer',
      types: [ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
    },
    {
      id: 'Menu.history',
      types: [ActionTypes.Target.SHOW_HISTORY]
    },
    {
      id: 'Menu.settings',
      types: [ActionTypes.Target.SHOW_SETTINGS]
    },
    {
      id: 'Menu.howToPlay',
      types: [ActionTypes.Target.SHOW_HOW_TO_PLAY]
    },
    {
      id: 'Menu.credits',
      types: [ActionTypes.Target.SHOW_CREDITS]
    }
  ]
}

const main = (state: State = initialState, action: Action): State => state

export default main
