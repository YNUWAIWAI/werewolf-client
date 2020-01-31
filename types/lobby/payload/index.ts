import {
  AdvancedSearch,
  AuthorizationRequest,
  AuthorizationRequestAccepted,
  AuthorizationRequestAcceptedResponse,
  Avatar,
  BuildVillage,
  ChangeAvatar,
  ChangeLanguage,
  ChangeUserEmail,
  ChangeUserName,
  ChangeUserPassword,
  CreateHumanPlayer,
  CreateOnymousAudience,
  CreateRobotPlayer,
  DeleteAvatar,
  EnterLobby,
  GetAvatar,
  GetSettings,
  HumanPlayerSelectionPage,
  IdSearch,
  KickOutPlayer,
  LeaveWaitingPage,
  Lobby,
  OnymousAudienceSelectionPage,
  Ping,
  Play,
  Played,
  Pong,
  Ready,
  RenewAvatarToken,
  RobotPlayerSelectionPage,
  RunRobotPlayerInTheBackground,
  SearchResult,
  SelectVillage,
  Settings,
  StopRobotPlayer,
  WaitingPage
} from '../schema'

export const enum PayloadType {
  advancedSearch = 'advancedSearch',
  authorizationRequest = 'authorizationRequest',
  authorizationRequestAccepted = 'authorizationRequestAccepted',
  authorizationRequestAcceptedResponse = 'authorizationRequestAcceptedResponse',
  avatar = 'avatar',
  buildVillage = 'buildVillage',
  changeAvatar = 'changeAvatar',
  changeLanguage = 'changeLanguage',
  changeUserEmail = 'changeUserEmail',
  changeUserName = 'changeUserName',
  changeUserPassword = 'changeUserPassword',
  createHumanPlayer = 'createHumanPlayer',
  createOnymousAudience = 'createOnymousAudience',
  createRobotPlayer = 'createRobotPlayer',
  deleteAvatar = 'deleteAvatar',
  enterLobby = 'enterLobby',
  getAvatar = 'getAvatar',
  getSettings = 'getSettings',
  humanPlayerSelectionPage = 'humanPlayerSelectionPage',
  idSearch = 'idSearch',
  kickOutPlayer = 'kickOutPlayer',
  leaveWaitingPage = 'leaveWaitingPage',
  lobby = 'lobby',
  onymousAudienceSelectionPage = 'onymousAudienceSelectionPage',
  ping = 'ping',
  play = 'play',
  played = 'played',
  pong = 'pong',
  ready = 'ready',
  renewAvatarToken = 'renewAvatarToken',
  robotPlayerSelectionPage = 'robotPlayerSelectionPage',
  runRobotPlayerInTheBackground = 'runRobotPlayerInTheBackground',
  searchResult = 'searchResult',
  selectVillage = 'selectVillage',
  settings = 'settings',
  stopRobotPlayer = 'stopRobotPlayer',
  waitingPage = 'waitingPage'
}
export type Payload =
  | Payload$AdvancedSearch
  | Payload$AuthorizationRequest
  | Payload$AuthorizationRequestAccepted
  | Payload$AuthorizationRequestAcceptedResponse
  | Payload$Avatar
  | Payload$BuildVillage
  | Payload$ChangeAvatar
  | Payload$ChangeLanguage
  | Payload$ChangeUserEmail
  | Payload$ChangeUserName
  | Payload$ChangeUserPassword
  | Payload$CreateHumanPlayer
  | Payload$CreateOnymousAudience
  | Payload$CreateRobotPlayer
  | Payload$DeleteAvatar
  | Payload$EnterLobby
  | Payload$GetAvatar
  | Payload$GetSettings
  | Payload$HumanPlayerSelectionPage
  | Payload$IdSearch
  | Payload$KickOutPlayer
  | Payload$LeaveWaitingPage
  | Payload$Lobby
  | Payload$OnymousAudienceSelectionPage
  | Payload$Ping
  | Payload$Play
  | Payload$Played
  | Payload$Pong
  | Payload$Ready
  | Payload$RenewAvatarToken
  | Payload$RobotPlayerSelectionPage
  | Payload$RunRobotPlayerInTheBackground
  | Payload$SearchResult
  | Payload$SelectVillage
  | Payload$Settings
  | Payload$StopRobotPlayer
  | Payload$WaitingPage

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface Payload$AdvancedSearch extends AdvancedSearch {}
export interface Payload$AuthorizationRequest extends AuthorizationRequest {}
export interface Payload$AuthorizationRequestAccepted extends AuthorizationRequestAccepted {}
export interface Payload$AuthorizationRequestAcceptedResponse extends AuthorizationRequestAcceptedResponse {}
export interface Payload$Avatar extends Avatar {}
export interface Payload$BuildVillage extends BuildVillage {}
export interface Payload$ChangeAvatar extends ChangeAvatar {}
export interface Payload$ChangeLanguage extends ChangeLanguage {}
export interface Payload$ChangeUserEmail extends ChangeUserEmail {}
export interface Payload$ChangeUserName extends ChangeUserName {}
export interface Payload$ChangeUserPassword extends ChangeUserPassword {}
export interface Payload$CreateHumanPlayer extends CreateHumanPlayer {}
export interface Payload$CreateOnymousAudience extends CreateOnymousAudience {}
export interface Payload$CreateRobotPlayer extends CreateRobotPlayer {}
export interface Payload$DeleteAvatar extends DeleteAvatar {}
export interface Payload$EnterLobby extends EnterLobby {}
export interface Payload$GetAvatar extends GetAvatar {}
export interface Payload$GetSettings extends GetSettings {}
export interface Payload$HumanPlayerSelectionPage extends HumanPlayerSelectionPage {}
export interface Payload$IdSearch extends IdSearch {}
export interface Payload$KickOutPlayer extends KickOutPlayer {}
export interface Payload$LeaveWaitingPage extends LeaveWaitingPage {}
export interface Payload$Lobby extends Lobby {}
export interface Payload$OnymousAudienceSelectionPage extends OnymousAudienceSelectionPage {}
export interface Payload$Ping extends Ping {}
export interface Payload$Play extends Play {}
export interface Payload$Played extends Played {}
export interface Payload$Pong extends Pong {}
export interface Payload$Ready extends Ready {}
export interface Payload$RenewAvatarToken extends RenewAvatarToken {}
export interface Payload$RobotPlayerSelectionPage extends RobotPlayerSelectionPage {}
export interface Payload$RunRobotPlayerInTheBackground extends RunRobotPlayerInTheBackground {}
export interface Payload$SearchResult extends SearchResult {}
export interface Payload$SelectVillage extends SelectVillage {}
export interface Payload$Settings extends Settings {}
export interface Payload$StopRobotPlayer extends StopRobotPlayer {}
export interface Payload$WaitingPage extends WaitingPage {}
