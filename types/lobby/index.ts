import {Avatar as AvatarScehma} from '../village/schema'
import {BuildVillage} from './schema'

export {
  Payload,
  PayloadType,
  Payload$AdvancedSearch,
  Payload$BuildVillage,
  Payload$Avatar,
  Payload$ChangeLanguage,
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
  Payload$WaitingPage
} from './payload'
export {Language} from '../village'
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
export type Village = Omit<BuildVillage, 'token' | 'type'>
export interface Cast {
  [numberOfPlayers: string]: {
    [member in Member]: BuildVillage['roleSetting']
  }
}
export type Token = AvatarScehma['token']
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
  token: AvatarScehma['token']
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
export const enum AvatarStatus {
  awaitingAuthorization = 'awaiting authorization',
  awaitingCommunicationTest = 'awaiting communication test',
  connected = 'connected',
  runningInTheBackground = 'running in the background',
  runningInTheForeground = 'running in the foreground'
}
