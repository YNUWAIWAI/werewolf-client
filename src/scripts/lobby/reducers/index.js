// @flow
import app, {type State as AppState} from './app'
import buildVillage, {type State as BuildVillageState} from './buildVillage'
import connectingToRobotPlayer, {type State as ConnectingToRobotPlayerState} from './connectingToRobotPlayer'
import history, {type State as HistoryState} from './history'
import lobbyForAudience, {type State as LobbyForAudienceState} from './lobbyForAudience'
import lobbyForHumanPlayer, {type State as LobbyForHumanPlayerState} from './lobbyForHumanPlayer'
import lobbyForRobotPlayer, {type State as LobbyForRobotPlayerState} from './lobbyForRobotPlayer'
import main, {type State as MainState} from './main'
import settings, {type State as SettingsState} from './settings'
import waitingForPlayers, {type State as WaitingForPlayersState} from './waitingForPlayers'
import {combineReducers} from 'redux'

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
  app: AppState,
  buildVillage: BuildVillageState,
  connectingToRobotPlayer: ConnectingToRobotPlayerState,
  history: HistoryState,
  lobbyForAudience: LobbyForAudienceState,
  lobbyForHumanPlayer: LobbyForHumanPlayerState,
  lobbyForRobotPlayer: LobbyForRobotPlayerState,
  main: MainState,
  settings: SettingsState,
  waitingForPlayers: WaitingForPlayersState
}
