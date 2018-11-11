// @flow
import * as ActionTypes from '../constants/ActionTypes'
import AdvancedSearch from '../containers/AdvancedSearchContainer'
import BuildVillage from '../containers/BuildVillageContainer'
import ConnectingToRobotPlayer from '../containers/ConnectingToRobotPlayerContainer'
import History from '../containers/HistoryContainer'
import IdSearch from '../containers/IdSearchContainer'
import LobbyForAudience from '../containers/LobbyForAudienceContainer'
import LobbyForHumanPlayer from '../containers/LobbyForHumanPlayerContainer'
import LobbyForRobotPlayer from '../containers/LobbyForRobotPlayerContainer'
import Main from '../containers/MainContainer'
import type {SelectVillage} from '../actions'
import Settings from '../containers/SettingsContainer'
import WaitingForPlayers from '../containers/WaitingForPlayersContainer'

export type State = {
  +content: React$ComponentType<*>
}
type Action =
  | SelectVillage
  | {type: typeof ActionTypes.BUILD_VILLAGE}
  | {type: typeof ActionTypes.SHOW_ADVANCED_SEARCH}
  | {type: typeof ActionTypes.SHOW_BUILD_VILLAGE}
  | {type: typeof ActionTypes.SHOW_CONNECTING_TO_ROBOT_PLAYER}
  | {type: typeof ActionTypes.SHOW_CREDITS}
  | {type: typeof ActionTypes.SHOW_HOW_TO_PLAY}
  | {type: typeof ActionTypes.SHOW_ID_SEARCH}
  | {type: typeof ActionTypes.SHOW_LOBBY_FOR_AUDIENCE}
  | {type: typeof ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER}
  | {type: typeof ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER}
  | {type: typeof ActionTypes.SHOW_MAIN}
  | {type: typeof ActionTypes.SHOW_SETTINGS}

export const initialState = {
  content: Main
}
const app = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SELECT_VILLAGE:
    case ActionTypes.BUILD_VILLAGE:
      return {
        content: WaitingForPlayers
      }
    case ActionTypes.SHOW_ADVANCED_SEARCH:
      return {
        content: AdvancedSearch
      }
    case ActionTypes.SHOW_BUILD_VILLAGE:
      return {
        content: BuildVillage
      }
    case ActionTypes.SHOW_CONNECTING_TO_ROBOT_PLAYER:
      return {
        content: ConnectingToRobotPlayer
      }
    case ActionTypes.SHOW_CREDITS:
      window.location.assign(`${window.location.origin}/credits`)

      return state
    case ActionTypes.SHOW_HOW_TO_PLAY:
      window.location.assign(`${window.location.origin}/how-to-play`)

      return state
    case ActionTypes.SHOW_HISTORY:
      return {
        content: History
      }
    case ActionTypes.SHOW_ID_SEARCH:
      return {
        content: IdSearch
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
