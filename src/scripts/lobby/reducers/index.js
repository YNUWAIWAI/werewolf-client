// @flow
import app from './app'
import buildVillage from './buildVillage'
import {combineReducers} from 'redux'
import connectingToRobotPlayer from './connectingToRobotPlayer'
import history, {type State as HistoryState} from './history'
import lobbyForAudience, {type State as LobbyForAudienceState} from './lobbyForAudience'
import lobbyForHumanPlayer, {type State as LobbyForHumanPlayerState} from './lobbyForHumanPlayer'
import lobbyForRobotPlayer, {type State as LobbyForRobotPlayerState} from './lobbyForRobotPlayer'
import main, {type State as MainState} from './main'
import settings, {type State as SettingsState} from './settings'
import waitingForPlayers, {type State as WaitingForPlayersState} from './waitingForPlayers'

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
  history: HistoryState,
  lobbyForAudience: LobbyForAudienceState,
  lobbyForHumanPlayer: LobbyForHumanPlayerState,
  lobbyForRobotPlayer: LobbyForRobotPlayerState,
  main: MainState,
  settings: SettingsState,
  waitingForPlayers: WaitingForPlayersState
}
