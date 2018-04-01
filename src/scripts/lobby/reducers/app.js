// @flow
import * as ActionTypes from '../constants/ActionTypes'
import BuildVillage from '../containers/BuildVillageContainer'
import ConnectingToRobotPlayer from '../containers/ConnectingToRobotPlayerContainer'
import History from '../containers/HistoryContainer'
import LobbyForAudience from '../containers/LobbyForAudienceContainer'
import LobbyForHumanPlayer from '../containers/LobbyForHumanPlayerContainer'
import LobbyForRobotPlayer from '../containers/LobbyForRobotPlayerContainer'
import Main from '../containers/MainContainer'
import type {SelectVillage} from '../actions'
import Settings from '../containers/SettingsContainer'
import WaitingForPlayers from '../containers/WaitingForPlayersContainer'

export type State = {
  content: React$ComponentType<*>
}
type Action =
  | SelectVillage
  | {type: typeof ActionTypes.SHOW_BUILD_VILLAGE}
  | {type: typeof ActionTypes.SHOW_CONNECTING_TO_ROBOT_PLAYER}
  | {type: typeof ActionTypes.SHOW_LOBBY_FOR_AUDIENCE}
  | {type: typeof ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER}
  | {type: typeof ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER}
  | {type: typeof ActionTypes.SHOW_MAIN}
  | {type: typeof ActionTypes.SHOW_SETTINGS}

const initialState = {
  content: Main
}
const app = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SELECT_A_VILLAGE:
      return {
        content: WaitingForPlayers
      }
    case ActionTypes.SHOW_BUILD_VILLAGE:
      return {
        content: BuildVillage
      }
    case ActionTypes.SHOW_CONNECTING_TO_ROBOT_PLAYER:
      return {
        content: ConnectingToRobotPlayer
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
