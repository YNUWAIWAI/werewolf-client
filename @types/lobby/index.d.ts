/* eslint no-unused-vars: 0 */
declare namespace lobby {
  const enum Avatar {
    fixed = 'fixed',
    random = 'random',
    unspecified = 'unspecified'
  }
  const enum Member {
    A = 'A',
    B = 'B',
    C = 'C'
  }
  const enum Lobby {
    human = 'human player',
    audience = 'onymous audience',
    robot = 'robot player'
  }
  const enum PingStatus {
    danger = 'danger',
    safe = 'safe',
    warning = 'warning'
  }
  const enum Language {
    fr = 'fr',
    en = 'en',
    it = 'it',
    ja = 'ja'
  }
  interface Village {
    avatar: Avatar
    comment: string | null
    hostPlayer: HostPlayer
    id: number
    idForSearching: number
    name: string
    playerSetting: PlayerSetting
    roleSetting: RoleSetting
  }
  interface HostPlayer {
    isAnonymous: boolean
    isHuman: boolean
    name: string
  }
  interface PlayerSetting {
    current: number
    human: Human
    number: number
    robot: Robot
  }
  interface Robot {
    current: number
    min: number
  }
  interface Human {
    current: number
    max: number
  }
  const enum RoleId {
    hunter = 'hunter',
    madman = 'madman',
    mason = 'mason',
    medium = 'medium',
    seer = 'seer',
    villager = 'villager',
    werehamster = 'werehamster',
    werewolf = 'werewolf'
  }
  type RoleSetting = {
    [key in RoleId]: number
  }
  interface Cast {
    [numberOfPlayers: string]: {
      [member in Member]: RoleSetting
    }
  }
  type Token = string
  interface WaitingPlayer {
    avatarImage: string
    isAnonymous: boolean
    isHost: boolean
    isMe: boolean
    name: string
    token: Token
  }
  interface PingResult {
    ping: string
    status: PingStatus
    token: Token
  }
  type Payload =
    | Payload$Avatar
    | Payload$Lobby
    | Payload$Played
    | Payload$Ping
    | Payload$SearchResult
    | Payload$Settings
    | Payload$WatingPage

  const enum PayloadType {
    avatar = 'avatar',
    lobby = 'lobby',
    played = 'played',
    ping = 'ping',
    searchResult = 'searchResult',
    settings = 'settings',
    waitingPage = 'waitingPage'
  }
  interface PayloadBase {
    type: PayloadType
  }
  interface Payload$Avatar extends PayloadBase {
    image: string
    lang: Language
    name: string
    token: Token
    type: PayloadType.avatar
  }
  interface Payload$Lobby extends PayloadBase {
    error: string | null
    lobby: Lobby
    type: PayloadType.lobby
    villages: Village[]
  }
  interface Payload$Played extends PayloadBase {
    lang: Language
    type: PayloadType.played
  }
  interface Payload$Ping extends PayloadBase {
    id: string
    results: PingResult[]
    type: PayloadType.ping
  }
  interface Payload$SearchResult extends PayloadBase {
    error: string | null
    type: PayloadType.searchResult
    villages: Village[]
  }
  interface Payload$Settings extends PayloadBase {
    lang: Language
    type: PayloadType.settings
    userEmail: string
    userName: string
  }
  interface Payload$WatingPage extends PayloadBase {
    error: string | null
    players: WaitingPlayer[]
    type: PayloadType.waitingPage
    village: Village
  }
}
