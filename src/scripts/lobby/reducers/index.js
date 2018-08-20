// @flow
import advancedSearch, {type State as AdvancedSearchState} from './advancedSearch'
import app, {type State as AppState} from './app'
import buildVillage, {type State as BuildVillageState} from './buildVillage'
import connectingToRobotPlayer, {type State as ConnectingToRobotPlayerState} from './connectingToRobotPlayer'
import history, {type State as HistoryState} from './history'
import idSearch, {type State as IdSearchState} from './idSearch'
import lobbyForAudience, {type State as LobbyForAudienceState} from './lobbyForAudience'
import lobbyForHumanPlayer, {type State as LobbyForHumanPlayerState} from './lobbyForHumanPlayer'
import lobbyForRobotPlayer, {type State as LobbyForRobotPlayerState} from './lobbyForRobotPlayer'
import main, {type State as MainState} from './main'
import ping, {type State as PingState} from './ping'
import settings, {type State as SettingsState} from './settings'
import token, {type State as TokenState} from './token'
import waitingForPlayers, {type State as WaitingForPlayersState} from './waitingForPlayers'
import {combineReducers} from 'redux'

export type ReducerState = {
  advancedSearch: AdvancedSearchState,
  app: AppState,
  buildVillage: BuildVillageState,
  connectingToRobotPlayer: ConnectingToRobotPlayerState,
  history: HistoryState,
  idSearch: IdSearchState,
  lobbyForAudience: LobbyForAudienceState,
  lobbyForHumanPlayer: LobbyForHumanPlayerState,
  lobbyForRobotPlayer: LobbyForRobotPlayerState,
  main: MainState,
  ping: PingState,
  settings: SettingsState,
  token: TokenState,
  waitingForPlayers: WaitingForPlayersState
}

const reducer = combineReducers({
  advancedSearch,
  app,
  buildVillage,
  connectingToRobotPlayer,
  history,
  idSearch,
  lobbyForAudience,
  lobbyForHumanPlayer,
  lobbyForRobotPlayer,
  main,
  ping,
  settings,
  token,
  waitingForPlayers
})

export default reducer
