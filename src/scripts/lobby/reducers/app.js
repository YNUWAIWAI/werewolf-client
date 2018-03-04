import * as ActionTypes from '../constants/ActionTypes'
import BuildVillage from '../containers/BuildVillageContainer'
import History from '../containers/HistoryContainer'
import LobbyForAudience from '../containers/LobbyForAudienceContainer'
import LobbyForHumanPlayer from '../containers/LobbyForHumanPlayerContainer'
import LobbyForRobotPlayer from '../containers/LobbyForRobotPlayerContainer'
import Main from '../containers/MainContainer'
import Settings from '../containers/SettingsContainer'

const initialState = {
  content: Main
}

const app = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_BUILD_VILLAGE:
      return {
        content: BuildVillage
      }
    case ActionTypes.SHOW_HISTORY:
      return {
        content: History
      }
    case ActionTypes.SHOW_LOBBY_FOR_AUDIENCE:
      return {
        content: LobbyForAudience
      }
    case ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER:
      return {
        content: LobbyForHumanPlayer
      }
    case ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER:
      return {
        content: LobbyForRobotPlayer
      }
    case ActionTypes.SHOW_MAIN:
      return {
        content: Main
      }
    case ActionTypes.SHOW_SETTINGS:
      return {
        content: Settings
      }
    default:
      return state
  }
}

export default app
