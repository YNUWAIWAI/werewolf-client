import * as ActionTypes from '../constants/ActionTypes'
import {SelectVillage, Transition} from '../actions'
import AdvancedSearch from '../containers/AdvancedSearchContainer'
import BuildVillage from '../containers/BuildVillageContainer'
import ConnectingToRobotPlayer from '../containers/ConnectingToRobotPlayerContainer'
import History from '../containers/HistoryContainer'
import IdSearch from '../containers/IdSearchContainer'
import LobbyForAudience from '../containers/LobbyForAudienceContainer'
import LobbyForHumanPlayer from '../containers/LobbyForHumanPlayerContainer'
import LobbyForRobotPlayer from '../containers/LobbyForRobotPlayerContainer'
import Main from '../containers/MainContainer'
import Settings from '../containers/SettingsContainer'
import WaitingForPlayers from '../containers/WaitingForPlayersContainer'

export interface State {
  readonly content: React.ComponentType<any>
}
type Action =
  | SelectVillage
  | Transition

export const initialState = {
  content: Main
}
const app = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.global.SELECT_VILLAGE:
    case ActionTypes.Target.BUILD_VILLAGE:
      return {
        content: WaitingForPlayers
      }
    case ActionTypes.Target.SHOW_ADVANCED_SEARCH:
      return {
        content: AdvancedSearch
      }
    case ActionTypes.Target.SHOW_BUILD_VILLAGE:
      return {
        content: BuildVillage
      }
    case ActionTypes.Target.SHOW_CONNECTING_TO_ROBOT_PLAYER:
      return {
        content: ConnectingToRobotPlayer
      }
    case ActionTypes.Target.SHOW_CREDITS:
      window.location.assign(`${window.location.origin}/credits`)

      return state
    case ActionTypes.Target.SHOW_HOW_TO_PLAY:
      window.location.assign(`${window.location.origin}/how-to-play`)

      return state
    case ActionTypes.Target.SHOW_HISTORY:
      return {
        content: History
      }
    case ActionTypes.Target.SHOW_ID_SEARCH:
      return {
        content: IdSearch
      }
    case ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE:
      return {
        content: LobbyForAudience
      }
    case ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER:
      return {
        content: LobbyForHumanPlayer
      }
    case ActionTypes.Target.SHOW_LOBBY_FOR_ROBOT_PLAYER:
      return {
        content: LobbyForRobotPlayer
      }
    case ActionTypes.Target.SHOW_MAIN:
      return {
        content: Main
      }
    case ActionTypes.Target.SHOW_SETTINGS:
      return {
        content: Settings
      }
    default:
      return state
  }
}

export default app
