import {VERSION} from './Version'

const LOBBY_BASE = `https://werewolf.world/lobby/schema/${VERSION}`
const CLIENT2SERVER = `${LOBBY_BASE}/client2server`
const client2server = {
  advancedSearch: `${CLIENT2SERVER}/advancedSearch.json`,
  authorizationRequestAccepted: `${CLIENT2SERVER}/authorizationRequestAccepted.json`,
  buildVillage: `${CLIENT2SERVER}/buildVillage.json`,
  changeAvatar: `${CLIENT2SERVER}/changeAvatar.json`,
  changeLanguage: `${CLIENT2SERVER}/changeLanguage.json`,
  changeUserEmail: `${CLIENT2SERVER}/changeUserEmail.json`,
  changeUserName: `${CLIENT2SERVER}/changeUserName.json`,
  changeUserPassword: `${CLIENT2SERVER}/changeUserPassword.json`,
  createHumanPlayer: `${CLIENT2SERVER}/createHumanPlayer.json`,
  createOnymousAudience: `${CLIENT2SERVER}/createOnymousAudience.json`,
  createRobotPlayer: `${CLIENT2SERVER}/createRobotPlayer.json`,
  deleteAvatar: `${CLIENT2SERVER}/deleteAvatar.json`,
  enterLobby: `${CLIENT2SERVER}/enterLobby.json`,
  getAvatar: `${CLIENT2SERVER}/getAvatar.json`,
  getSettings: `${CLIENT2SERVER}/getSettings.json`,
  idSearch: `${CLIENT2SERVER}/idSearch.json`,
  kickOutPlayer: `${CLIENT2SERVER}/kickOutPlayer.json`,
  leaveWaitingPage: `${CLIENT2SERVER}/leaveWaitingPage.json`,
  play: `${CLIENT2SERVER}/play.json`,
  pong: `${CLIENT2SERVER}/pong.json`,
  ready: `${CLIENT2SERVER}/ready.json`,
  renewAvatarToken: `${CLIENT2SERVER}/renewAvatarToken.json`,
  runRobotPlayerInTheBackground: `${CLIENT2SERVER}/runRobotPlayerInTheBackground.json`,
  selectVillage: `${CLIENT2SERVER}/selectVillage.json`,
  stopRobotPlayer: `${CLIENT2SERVER}/stopRobotPlayer.json`
}
const SERVER2CLIENT = `${LOBBY_BASE}/server2client`
const server2client = {
  authorizationRequest: `${SERVER2CLIENT}/authorizationRequest.json`,
  authorizationRequestAcceptedResponse: `${SERVER2CLIENT}/authorizationRequestAcceptedResponse.json`,
  avatar: `${SERVER2CLIENT}/avatar.json`,
  humanPlayerSelectionPage: `${SERVER2CLIENT}/humanPlayerSelectionPage.json`,
  lobby: `${SERVER2CLIENT}/lobby.json`,
  onymousAudienceSelectionPage: `${SERVER2CLIENT}/onymousAudienceSelectionPage.json`,
  ping: `${SERVER2CLIENT}/ping.json`,
  played: `${SERVER2CLIENT}/played.json`,
  robotPlayerSelectionPage: `${SERVER2CLIENT}/robotPlayerSelectionPage.json`,
  searchResult: `${SERVER2CLIENT}/searchResult.json`,
  settings: `${SERVER2CLIENT}/settings.json`,
  waitingPage: `${SERVER2CLIENT}/waitingPage.json`
}

export const LOBBY_SCHEMA = {
  client2server,
  server2client
}
export {VILLAGE_SCHEMA} from '../../village/constants/SchemaPath'
