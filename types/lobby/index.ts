/* eslint no-unused-vars: 0, @typescript-eslint/no-unused-vars: 0 */
export * from './payload'
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
  // anonymousAudience = 'anonymous audience',
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
