import * as ActionTypes from '../constants/ActionTypes'
import {
  SelectVillage,
  SubmitLogout,
  Transition
} from '../actions'

export const enum Content {
  AdvancedSearch = 'AdvancedSearch',
  BuildVillage = 'BuildVillage',
  ConnectingToRobotPlayer = 'ConnectingToRobotPlayer',
  History = 'History',
  IdSearch = 'IdSearch',
  LobbyForAudience = 'LobbyForAudience',
  LobbyForHumanPlayer = 'LobbyForHumanPlayer',
  LobbyForRobotPlayer = 'LobbyForRobotPlayer',
  Main = 'Main',
  Settings = 'Settings',
  WaitingForPlayers = 'WaitingForPlayers'
}
export interface State {
  readonly content: Content
}
type Action =
  | SelectVillage
  | SubmitLogout
  | Transition

export const initialState = {
  content: Content.Main
}
const app = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.App.SELECT_VILLAGE:
    case ActionTypes.Target.BUILD_VILLAGE:
      return {
        content: Content.WaitingForPlayers
      }
    case ActionTypes.Target.SHOW_ADVANCED_SEARCH:
      return {
        content: Content.AdvancedSearch
      }
    case ActionTypes.Target.SHOW_BUILD_VILLAGE:
      return {
        content: Content.BuildVillage
      }
    case ActionTypes.Target.SHOW_CONNECTING_TO_ROBOT_PLAYER:
      return {
        content: Content.ConnectingToRobotPlayer
      }
    case ActionTypes.Target.SHOW_HISTORY:
      return {
        content: Content.History
      }
    case ActionTypes.Target.SHOW_ID_SEARCH:
      return {
        content: Content.IdSearch
      }
    case ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE:
      return {
        content: Content.LobbyForAudience
      }
    case ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER:
      return {
        content: Content.LobbyForHumanPlayer
      }
    case ActionTypes.Target.SHOW_LOBBY_FOR_ROBOT_PLAYER:
      return {
        content: Content.LobbyForRobotPlayer
      }
    case ActionTypes.Target.SHOW_MAIN:
      return {
        content: Content.Main
      }
    case ActionTypes.Target.SHOW_SETTINGS:
      return {
        content: Content.Settings
      }
    default:
      return state
  }
}

export default app
