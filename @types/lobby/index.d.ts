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
    | Payload$AdvancedSearch
    | Payload$Avatar
    | Payload$BuildVillage
    | Payload$ChangeLang
    | Payload$ChangeUserEmail
    | Payload$ChangeUserName
    | Payload$ChangeUserPassword
    | Payload$EnterLobby
    | Payload$GetAvatar
    | Payload$GetSettings
    | Payload$IdSearch
    | Payload$KickOutPlayer
    | Payload$LeaveWaitingPage
    | Payload$Lobby
    | Payload$Play
    | Payload$Played
    | Payload$Ping
    | Payload$Pong
    | Payload$SearchResult
    | Payload$SelectVillage
    | Payload$Settings
    | Payload$WatingPage

  const enum PayloadType {
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
    play = 'play',
    played = 'played',
    ping = 'ping',
    pong = 'pong',
    searchResult = 'searchResult',
    selectVillage = 'selectVillage',
    settings = 'settings',
    waitingPage = 'waitingPage'
  }
  interface PayloadBase {
    type: PayloadType
  }
  interface Payload$AdvancedSearch extends PayloadBase {
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
  interface Payload$Avatar extends PayloadBase {
    image: string
    lang: Language
    name: string
    token: Token
    type: PayloadType.avatar
  }
  interface Payload$BuildVillage extends PayloadBase {
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
  interface Payload$ChangeLang extends PayloadBase {
    lang: Language
    type: PayloadType.changeLang
  }
  interface Payload$ChangeUserEmail extends PayloadBase {
    type: PayloadType.changeUserEmail
    userEmail: string
  }
  interface Payload$ChangeUserName extends PayloadBase {
    type: PayloadType.changeUserName
    userName: string
  }
  interface Payload$ChangeUserPassword extends PayloadBase {
    type: PayloadType.changeUserPassword
    userPassword: string
  }
  interface Payload$EnterLobby extends PayloadBase {
    lobby: Lobby
    page: number
    token: Token
    type: PayloadType.enterLobby
  }
  interface Payload$GetAvatar extends PayloadBase {
    token: Token
    type: PayloadType.getAvatar
  }
  interface Payload$GetSettings extends PayloadBase {
    type: PayloadType.getSettings
  }
  interface Payload$IdSearch extends PayloadBase {
    idForSearching: number
    lobby: Lobby
    token: Token
    type: PayloadType.idSearch
  }
  interface Payload$KickOutPlayer extends PayloadBase {
    players: {
      token: Token
    }[]
    token: Token
    type: PayloadType.kickOutPlayer
  }
  interface Payload$LeaveWaitingPage extends PayloadBase {
    lobby: Lobby
    token: Token
    type: PayloadType.leaveWaitingPage
    villageId: number
  }
  interface Payload$Lobby extends PayloadBase {
    error: string | null
    lobby: Lobby
    type: PayloadType.lobby
    villages: Village[]
  }
  interface Payload$Play extends PayloadBase {
    token: Token
    type: PayloadType.play
    villageId: number
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
  interface Payload$Pong extends PayloadBase {
    id: string
    token: Token
    type: PayloadType.pong
  }
  interface Payload$SearchResult extends PayloadBase {
    error: string | null
    type: PayloadType.searchResult
    villages: Village[]
  }
  interface Payload$SelectVillage extends PayloadBase {
    token: Token
    type: PayloadType.selectVillage
    villageId: number
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
