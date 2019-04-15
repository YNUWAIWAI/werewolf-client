/* eslint no-unused-vars: 0, @typescript-eslint/no-unused-vars: 0 */
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
    audience = 'onymous audience',
    human = 'human player',
    robot = 'robot player'
  }
  const enum PingStatus {
    danger = 'danger',
    safe = 'safe',
    warning = 'warning'
  }
  const enum Language {
    en = 'en',
    fr = 'fr',
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
    ping = 'ping',
    play = 'play',
    played = 'played',
    pong = 'pong',
    searchResult = 'searchResult',
    selectVillage = 'selectVillage',
    settings = 'settings',
    waitingPage = 'waitingPage'
  }
  interface PayloadBase {
    type: PayloadType
  }
  interface Payload$advancedSearch extends PayloadBase {
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
  interface Payload$avatar extends PayloadBase {
    image: string
    lang: Language
    name: string
    token: Token
    type: PayloadType.avatar
  }
  interface Payload$buildVillage extends PayloadBase {
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
  interface Payload$changeLang extends PayloadBase {
    lang: Language
    type: PayloadType.changeLang
  }
  interface Payload$changeUserEmail extends PayloadBase {
    type: PayloadType.changeUserEmail
    userEmail: string
  }
  interface Payload$changeUserName extends PayloadBase {
    type: PayloadType.changeUserName
    userName: string
  }
  interface Payload$changeUserPassword extends PayloadBase {
    type: PayloadType.changeUserPassword
    userPassword: string
  }
  interface Payload$enterLobby extends PayloadBase {
    lobby: Lobby
    page: number
    token: Token
    type: PayloadType.enterLobby
  }
  interface Payload$getAvatar extends PayloadBase {
    token: Token
    type: PayloadType.getAvatar
  }
  interface Payload$getSettings extends PayloadBase {
    type: PayloadType.getSettings
  }
  interface Payload$idSearch extends PayloadBase {
    idForSearching: number
    lobby: Lobby
    token: Token
    type: PayloadType.idSearch
  }
  interface Payload$kickOutPlayer extends PayloadBase {
    players: {
      token: Token
    }[]
    token: Token
    type: PayloadType.kickOutPlayer
  }
  interface Payload$leaveWaitingPage extends PayloadBase {
    lobby: Lobby
    token: Token
    type: PayloadType.leaveWaitingPage
    villageId: number
  }
  interface Payload$lobby extends PayloadBase {
    error: string | null
    lobby: Lobby
    type: PayloadType.lobby
    villages: Village[]
  }
  interface Payload$play extends PayloadBase {
    token: Token
    type: PayloadType.play
    villageId: number
  }
  interface Payload$played extends PayloadBase {
    lang: Language
    type: PayloadType.played
  }
  interface Payload$ping extends PayloadBase {
    id: string
    results: PingResult[]
    type: PayloadType.ping
  }
  interface Payload$pong extends PayloadBase {
    id: string
    token: Token
    type: PayloadType.pong
  }
  interface Payload$searchResult extends PayloadBase {
    error: string | null
    type: PayloadType.searchResult
    villages: Village[]
  }
  interface Payload$selectVillage extends PayloadBase {
    token: Token
    type: PayloadType.selectVillage
    villageId: number
  }
  interface Payload$settings extends PayloadBase {
    lang: Language
    type: PayloadType.settings
    userEmail: string
    userName: string
  }
  interface Payload$watingPage extends PayloadBase {
    error: string | null
    players: WaitingPlayer[]
    type: PayloadType.waitingPage
    village: Village
  }
}
