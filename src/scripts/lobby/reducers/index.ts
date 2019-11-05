import advancedSearch, {State as AdvancedSearchState} from './advancedSearch'
import buildVillage, {State as BuildVillageState} from './buildVillage'
import connectingToRobotPlayer, {State as ConnectingToRobotPlayerState} from './connectingToRobotPlayer'
import history, {State as HistoryState} from './history'
import idSearch, {State as IdSearchState} from './idSearch'
import language, {State as LanguageState} from './language'
import lobbyForAudience, {State as LobbyForAudienceState} from './lobbyForAudience'
import lobbyForHumanPlayer, {State as LobbyForHumanPlayerState} from './lobbyForHumanPlayer'
import lobbyForRobotPlayer, {State as LobbyForRobotPlayerState} from './lobbyForRobotPlayer'
import main, {State as MainState} from './main'
import modal, {State as ModalState} from './modal'
import obfucator, {State as ObfucatorState} from './obfucator'
import ping, {State as PingState} from './ping'
import settings, {State as SettingsState} from './settings'
import token, {State as TokenState} from './token'
import waitingForPlayers, {State as WaitingForPlayersState} from './waitingForPlayers'
import {combineReducers} from 'redux'

export interface ReducerState {
  advancedSearch: AdvancedSearchState
  buildVillage: BuildVillageState
  connectingToRobotPlayer: ConnectingToRobotPlayerState
  history: HistoryState
  idSearch: IdSearchState
  language: LanguageState
  lobbyForAudience: LobbyForAudienceState
  lobbyForHumanPlayer: LobbyForHumanPlayerState
  lobbyForRobotPlayer: LobbyForRobotPlayerState
  main: MainState
  modal: ModalState
  obfucator: ObfucatorState
  ping: PingState
  settings: SettingsState
  token: TokenState
  waitingForPlayers: WaitingForPlayersState
}

const reducer = combineReducers({
  advancedSearch,
  buildVillage,
  connectingToRobotPlayer,
  history,
  idSearch,
  language,
  lobbyForAudience,
  lobbyForHumanPlayer,
  lobbyForRobotPlayer,
  main,
  modal,
  obfucator,
  ping,
  settings,
  token,
  waitingForPlayers
})

export default reducer
