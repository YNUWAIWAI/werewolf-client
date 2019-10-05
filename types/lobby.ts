/* eslint no-unused-vars: 0, @typescript-eslint/no-unused-vars: 0 */
export const enum Avatar {
  fixed = 'fixed',
  random = 'random',
  unspecified = 'unspecified'
}
export const enum Member {
  A = 'A',
  B = 'B',
  C = 'C'
}
export const enum Lobby {
  audience = 'onymous audience',
  human = 'human player',
  robot = 'robot player'
}
export const enum PingStatus {
  danger = 'danger',
  safe = 'safe',
  warning = 'warning'
}
export const enum Language {
  en = 'en',
  fr = 'fr',
  it = 'it',
  ja = 'ja'
}
export interface Village {
  avatar: Avatar
  comment: string | null
  hostPlayer: HostPlayer
  id: number
  idForSearching: number
  name: string
  playerSetting: PlayerSetting
  roleSetting: RoleSetting
}
export interface HostPlayer {
  isAnonymous: boolean
  isHuman: boolean
  name: string
}
export interface PlayerSetting {
  current: number
  human: Human
  number: number
  robot: Robot
}
export interface Robot {
  current: number
  min: number
}
export interface Human {
  current: number
  max: number
}
export const enum RoleId {
  hunter = 'hunter',
  madman = 'madman',
  mason = 'mason',
  medium = 'medium',
  seer = 'seer',
  villager = 'villager',
  werehamster = 'werehamster',
  werewolf = 'werewolf'
}
export type RoleSetting = {
  [key in RoleId]: number
}
export interface Cast {
  [numberOfPlayers: string]: {
    [member in Member]: RoleSetting
  }
}
export type Token = string
export interface WaitingPlayer {
  avatarImage: string
  isAnonymous: boolean
  isHost: boolean
  isMe: boolean
  name: string
  token: Token
}
export interface PingResult {
  ping: string
  status: PingStatus
  token: Token
}
export type Payload =
  | Payload$advancedSearch
  | Payload$avatar
  | Payload$buildVillage
  | Payload$changeLang
  | Payload$changeUserEmail
  | Payload$changeUserName
  | Payload$changeUserPassword
  | Payload$enterLobby
  | Payload$getAvatar
  | Payload$getSettings
  | Payload$idSearch
  | Payload$kickOutPlayer
  | Payload$leaveWaitingPage
  | Payload$lobby
  | Payload$play
  | Payload$played
  | Payload$ping
  | Payload$pong
  | Payload$searchResult
  | Payload$selectVillage
  | Payload$settings
  | Payload$watingPage

export const enum PayloadType {
  advancedSearch = 'advancedSearch',
  avatar = 'avatar',
  buildVillage = 'buildVillage',
  changeLang = 'changeLang',
  changeUserEmail = 'changeUserEmail',
  changeUserName = 'changeUserName',
  changeUserPassword = 'changeUserPassword',
  enterLobby = 'enterLobby',
  getAvatar = 'getAvatar',
  getSettings = 'getSettings',
  idSearch = 'idSearch',
  kickOutPlayer = 'kickOutPlayer',
  leaveWaitingPage = 'leaveWaitingPage',
  lobby = 'lobby',
  ping = 'ping',
  play = 'play',
  played = 'played',
  pong = 'pong',
  searchResult = 'searchResult',
  selectVillage = 'selectVillage',
  settings = 'settings',
  waitingPage = 'waitingPage'
}
export interface PayloadBase {
  type: PayloadType
}
export interface Payload$advancedSearch extends PayloadBase {
  avatar: Avatar
  comment: string | null
  hostName: string | null
  lobby: Lobby
  maximum: number | null
  minimum: number | null
  token: Token
  type: PayloadType.advancedSearch
  villageName: string | null
}
export interface Payload$avatar extends PayloadBase {
  image: string
  lang: Language
  name: string
  token: Token
  type: PayloadType.avatar
}
export interface Payload$buildVillage extends PayloadBase {
  avatar: Avatar
  comment: string | null
  hostPlayer: HostPlayer
  id: number
  idForSearching: number
  name: string
  playerSetting: PlayerSetting
  roleSetting: RoleSetting
  token: Token
  type: PayloadType.buildVillage
}
export interface Payload$changeLang extends PayloadBase {
  lang: Language
  type: PayloadType.changeLang
}
export interface Payload$changeUserEmail extends PayloadBase {
  type: PayloadType.changeUserEmail
  userEmail: string
}
export interface Payload$changeUserName extends PayloadBase {
  type: PayloadType.changeUserName
  userName: string
}
export interface Payload$changeUserPassword extends PayloadBase {
  type: PayloadType.changeUserPassword
  userPassword: string
}
export interface Payload$enterLobby extends PayloadBase {
  lobby: Lobby
  page: number
  token: Token
  type: PayloadType.enterLobby
}
export interface Payload$getAvatar extends PayloadBase {
  token: Token
  type: PayloadType.getAvatar
}
export interface Payload$getSettings extends PayloadBase {
  type: PayloadType.getSettings
}
export interface Payload$idSearch extends PayloadBase {
  idForSearching: number
  lobby: Lobby
  token: Token
  type: PayloadType.idSearch
}
export interface Payload$kickOutPlayer extends PayloadBase {
  players: {
    token: Token
  }[]
  token: Token
  type: PayloadType.kickOutPlayer
}
export interface Payload$leaveWaitingPage extends PayloadBase {
  lobby: Lobby
  token: Token
  type: PayloadType.leaveWaitingPage
  villageId: number
}
export interface Payload$lobby extends PayloadBase {
  error: string | null
  lobby: Lobby
  type: PayloadType.lobby
  villages: Village[]
}
export interface Payload$play extends PayloadBase {
  token: Token
  type: PayloadType.play
  villageId: number
}
export interface Payload$played extends PayloadBase {
  lang: Language
  type: PayloadType.played
}
export interface Payload$ping extends PayloadBase {
  id: string
  results: PingResult[]
  type: PayloadType.ping
}
export interface Payload$pong extends PayloadBase {
  id: string
  token: Token
  type: PayloadType.pong
}
export interface Payload$searchResult extends PayloadBase {
  error: string | null
  type: PayloadType.searchResult
  villages: Village[]
}
export interface Payload$selectVillage extends PayloadBase {
  token: Token
  type: PayloadType.selectVillage
  villageId: number
}
export interface Payload$settings extends PayloadBase {
  lang: Language
  type: PayloadType.settings
  userEmail: string
  userName: string
}
export interface Payload$watingPage extends PayloadBase {
  error: string | null
  players: WaitingPlayer[]
  type: PayloadType.waitingPage
  village: Village
}
