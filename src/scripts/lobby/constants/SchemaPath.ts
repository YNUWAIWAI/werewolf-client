import {VERSION} from './Version'

const LOBBY_BASE = `https://werewolf.world/lobby/schema/${VERSION}`
const CLIENT2SERVER = `${LOBBY_BASE}/client2server`
const client2server = {
  advancedSearch: `${CLIENT2SERVER}/advancedSearch.json`,
  authorizationRequestAccepted: `${CLIENT2SERVER}/authorizationRequestAccepted.json`,
  buildVillage: `${CLIENT2SERVER}/buildVillage.json`,
  changeLanguage: `${CLIENT2SERVER}/changeLanguage.json`,
  changeUserEmail: `${CLIENT2SERVER}/changeUserEmail.json`,
  changeUserName: `${CLIENT2SERVER}/changeUserName.json`,
  changeUserPassword: `${CLIENT2SERVER}/changeUserPassword.json`,
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
  selectVillage: `${CLIENT2SERVER}/selectVillage.json`
}
const SERVER2CLIENT = `${LOBBY_BASE}/server2client`
const server2client = {
  authorizationRequest: `${SERVER2CLIENT}/authorizationRequest.json`,
  authorizationRequestAcceptedResponse: `${SERVER2CLIENT}/authorizationRequestAcceptedResponse.json`,
  avatar: `${SERVER2CLIENT}/avatar.json`,
  lobby: `${SERVER2CLIENT}/lobby.json`,
  newAvatarToken: `${SERVER2CLIENT}/newAvatarToken.json`,
  ping: `${SERVER2CLIENT}/ping.json`,
  played: `${SERVER2CLIENT}/played.json`,
  searchResult: `${SERVER2CLIENT}/searchResult.json`,
  settings: `${SERVER2CLIENT}/settings.json`,
  waitingPage: `${SERVER2CLIENT}/waitingPage.json`
}

export const LOBBY_SCHEMA = {
  client2server,
  server2client
}
export {VILLAGE_SCHEMA} from '../../village/constants/SchemaPath'
