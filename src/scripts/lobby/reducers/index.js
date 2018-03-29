// @flow
import app from './app'
import buildVillage from './buildVillage'
import {combineReducers} from 'redux'
import connectingToRobotPlayer from './connectingToRobotPlayer'
import history from './history'
import lobbyForAudience from './lobbyForAudience'
import lobbyForHumanPlayer from './lobbyForHumanPlayer'
import lobbyForRobotPlayer from './lobbyForRobotPlayer'
import main, {type State as MainState} from './main'
import settings, {type State as SettingsState} from './settings'
import waitingForPlayers from './waitingForPlayers'

const reducer = combineReducers({
  app,
  buildVillage,
  connectingToRobotPlayer,
  history,
  lobbyForAudience,
  lobbyForHumanPlayer,
  lobbyForRobotPlayer,
  main,
  settings,
  waitingForPlayers
})

export default reducer

export type ReducerState = {
  app: */*AppState*/,
  buildVillage: */*BuildVillageState*/,
  connectingToRobotPlayer: */*ConnectingToRobotPlayerState*/,
  history: */*HistoryState*/,
  lobbyForAudience: */*LobbyForAudienceState*/,
  lobbyForHumanPlayer: */*LobbyForHumanPlayerState*/,
  lobbyForRobotPlayer: */*LobbyForRobotPlayerState*/,
  main: MainState,
  settings: SettingsState,
  waitingForPlayers: */*WaitingForPlayersState*/
}
