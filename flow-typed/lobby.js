declare module 'lobby' {
  declare type Avatar = 'fixed' | 'random' | 'unspecified'
  declare type Member = 'A' | 'B' | 'C'
  declare type Lobby = 'human player' | 'onymous audience' | 'robot player'
  declare type PingStatus = 'danger' | 'safe' | 'warning'
  declare type Language = 'en' | 'fr' | 'it' | 'ja'
  declare type Village = {
    avatar: Avatar,
    comment: ?string,
    hostPlayer: HostPlayer,
    id: number,
    idForSearching: number,
    name: string,
    playerSetting: PlayerSetting,
    roleSetting: RoleSetting
  }
  declare type HostPlayer = {
    isAnonymous: boolean,
    name: string
  }
  declare type PlayerSetting = {
    current: number,
    human: Human,
    number: number,
    robot: Robot
  }
  declare type Robot = {
    current: number,
    min: number
  }
  declare type Human = {
    current: number,
    max: number
  }
  declare type RoleSetting = {
    hunter: number,
    madman: number,
    mason: number,
    medium: number,
    seer: number,
    villager: number,
    werehumster: number,
    werewolf: number
  }
  declare type WaitingPlayer = {
    avatarImage: string,
    isAnonymous: boolean,
    isHost: boolean,
    isMe: boolean,
    name: string,
    token: string
  }
  declare type Target =
    | 'ADVANCED_SEARCH'
    | 'BUILD_VILLAGE'
    | 'ID_SEARCH'
    | 'LEAVE_WAITING_PAGE'
    | 'PLAY_GAME'
    | 'REFRESH'
    | 'SEARCH_FOR_A_VILLAGE_IN_SESSION'
    | 'SEARCH_FOR_AN_OLD_VILLAGE'
    | 'SHOW_ADVANCED_SEARCH'
    | 'SHOW_BUILD_VILLAGE'
    | 'SHOW_CONNECTING_TO_ROBOT_PLAYER'
    | 'SHOW_HISTORY'
    | 'SHOW_ID_SEARCH'
    | 'SHOW_LOBBY_FOR_AUDIENCE'
    | 'SHOW_LOBBY_FOR_HUMAN_PLAYER'
    | 'SHOW_LOBBY_FOR_ROBOT_PLAYER'
    | 'SHOW_MAIN'
    | 'SHOW_SETTINGS'
  declare type MenuItem = {
    disabled?: boolean,
    id: string,
    isLoading?: boolean,
    types: Target[]
  }
  declare type PingResult = {
    ping: string,
    status: PingStatus,
    token: string
  }
  declare type Payload<T> = {
    error: ?string,
    type: string
  } & T
  declare type Payload$Avatar = Payload<{
    image: string,
    name: string
  }>
  declare type Payload$GetSettings = Payload<{
    lang: Language,
    userEmail: string,
    userName: string
  }>
  declare type Payload$Lobby = Payload<{
    lobby: Lobby,
    villages: Village[]
  }>
  declare type Payload$Ping = Payload<{
    id: string,
    results: PingResult[]
  }>
  declare type Payload$SearchResult = Payload<{
    villages: Village[]
  }>
  declare type Payload$WatingPage = Payload<{
    village: Village,
    players: WaitingPlayer[]
  }>
}
