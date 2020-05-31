import * as ActionTypes from '../constants/ActionTypes'
import {Init} from '../actions'
import {MenuItemProps as MenuItem} from '../components/organisms/Menu'

export interface State {
  readonly menuItems: MenuItem[]
}
type Action =
  | Init

export const initialState: State = {
  menuItems: [
    {
      id: 'Menu.lobbyForAudience',
      types: [ActionTypes.App.SHOW_LOBBY_FOR_AUDIENCE]
    },
    {
      id: 'Menu.lobbyForRobotPlayer',
      types: [ActionTypes.App.SHOW_LOBBY_FOR_ROBOT_PLAYER]
    },
    {
      id: 'Menu.lobbyForHumanPlayer',
      types: [ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER]
    },
    {
      id: 'Menu.history',
      types: [ActionTypes.App.SHOW_HISTORY]
    },
    {
      id: 'Menu.settings',
      types: [ActionTypes.App.SHOW_SETTINGS]
    },
    {
      id: 'Menu.howToPlay',
      types: [ActionTypes.App.SHOW_HOW_TO_PLAY]
    },
    {
      id: 'Menu.credits',
      types: [ActionTypes.App.SHOW_CREDITS]
    }
  ]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const main = (state: State = initialState, action: Action): State => state

export default main
