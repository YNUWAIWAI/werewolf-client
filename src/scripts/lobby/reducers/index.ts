import advancedSearch, {State as AdvancedSearchState} from './advancedSearch'
import audio, {State as AudioState} from './audio'
import avatarImageList, {State as AvatarImageListState} from './avatarImageList'
import buildVillage, {State as BuildVillageState} from './buildVillage'
import confirmation, {State as Confirmation} from './confirmation'
import createNewHumanAvatar, {State as CreateNewHumanAvatar} from './createNewHumanAvatar'
import createNewRobotAvatar, {State as CreateNewRobotAvatar} from './createNewRobotAvatar'
import createNewRobotAvatarSupport, {State as CreateNewRobotAvatarSupport} from './createNewRobotAvatarSupport'
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
import selectHumanAvatar, {State as SelectHumanAvatar} from './selectHumanAvatar'
import selectRobotAvatar, {State as SelectRobotAvatar} from './selectRobotAvatar'
import settings, {State as SettingsState} from './settings'
import theme, {State as ThemeState} from './theme'
import token, {State as TokenState} from './token'
import waitingForPlayers, {State as WaitingForPlayersState} from './waitingForPlayers'
import {combineReducers} from 'redux'

export interface ReducerState {
  advancedSearch: AdvancedSearchState
  audio: AudioState
  avatarImageList: AvatarImageListState
  buildVillage: BuildVillageState
  confirmation: Confirmation
  createNewHumanAvatar: CreateNewHumanAvatar
  createNewRobotAvatar: CreateNewRobotAvatar
  createNewRobotAvatarSupport: CreateNewRobotAvatarSupport
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
  selectHumanAvatar: SelectHumanAvatar
  selectRobotAvatar: SelectRobotAvatar
  settings: SettingsState
  theme: ThemeState
  token: TokenState
  waitingForPlayers: WaitingForPlayersState
}

const reducer = combineReducers({
  advancedSearch,
  audio,
  avatarImageList,
  buildVillage,
  confirmation,
  createNewHumanAvatar,
  createNewRobotAvatar,
  createNewRobotAvatarSupport,
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
  selectHumanAvatar,
  selectRobotAvatar,
  settings,
  theme,
  token,
  waitingForPlayers
})

export default reducer
