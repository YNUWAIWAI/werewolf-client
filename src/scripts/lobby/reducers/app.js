import * as ActionTypes from '../constants/ActionTypes'
import BuildVillage from '../containers/BuildVillageContainer'
import History from '../containers/HistoryContainer'
import LobbyForAudience from '../containers/LobbyForAudienceContainer'
import LobbyForHumanPlayer from '../containers/LobbyForHumanPlayerContainer'
import LobbyForRobotPlayer from '../containers/LobbyForRobotPlayerContainer'
import Main from '../containers/MainContainer'
import Settings from '../containers/SettingsContainer'

const initialState = {
  content: Main,
  type: ActionTypes.SHOW_MAIN
}

const app = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_BUILD_VILLAGE:
      return {
        content: BuildVillage,
        type: action.type
      }
    case ActionTypes.SHOW_HISTORY:
      return {
        content: History,
        type: action.type
      }
    case ActionTypes.SHOW_LOBBY_FOR_AUDIENCE:
      return {
        content: LobbyForAudience,
        type: action.type
      }
    case ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER:
      return {
        content: LobbyForHumanPlayer,
        type: action.type
      }
    case ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER:
      return {
        content: LobbyForRobotPlayer,
        type: action.type
      }
    case ActionTypes.SHOW_MAIN:
      return {
        content: Main,
        type: action.type
      }
    case ActionTypes.SHOW_SETTINGS:
      return {
        content: Settings,
        type: action.type
      }
    default:
      return state
  }
}

export default app
