export {
  Payload,
  PayloadType,
  Payload$AdvancedSearch,
  Payload$BuildVillage,
  Payload$Avatar,
  Payload$ChangeLang,
  Payload$ChangeUserEmail,
  Payload$ChangeUserName,
  Payload$ChangeUserPassword,
  Payload$EnterLobby,
  Payload$GetAvatar,
  Payload$GetSettings,
  Payload$IdSearch,
  Payload$KickOutPlayer,
  Payload$LeaveWaitingPage,
  Payload$Lobby,
  Payload$Ping,
  Payload$Play,
  Payload$Played,
  Payload$Pong,
  Payload$Ready,
  Payload$SearchResult,
  Payload$SelectVillage,
  Payload$Settings,
  Payload$WatingPage
} from './payload'
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
export const enum LobbyType {
  anonymousAudience = 'anonymous audience',
  onymousAudience = 'onymous audience',
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
export const enum TestStatus {
  notPassed = 'not passed',
  passed = 'passed'
}
export const enum Automation {
  full = 'full',
  semi = 'semi'
}
export const enum Authorized {
  no = 'no',
  yes = 'yes',
  waitForAcceptance = 'wait for acceptance',
}
