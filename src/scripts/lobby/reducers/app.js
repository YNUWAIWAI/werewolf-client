import * as ActionTypes from '../constants/ActionTypes'
import History from '../containers/HistoryContainer'
import LobbyForAudience from '../containers/LobbyForAudienceContainer'
import LobbyForHumanPlayer from '../containers/LobbyForHumanPlayerContainer'
import LobbyForRobotPlayer from '../containers/LobbyForRobotPlayerContainer'
import Main from '../containers/MainContainer'
import Setting from '../containers/SettingContainer'

const initialState = {
  content: Main
}

const app = (state = initialState, action) => {
  switch (action.type) {
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
    case ActionTypes.SHOW_SETTING:
      return {
        content: Setting
      }
    default:
      return state
  }
}

export default app
