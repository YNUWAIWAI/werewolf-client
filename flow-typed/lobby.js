// @flow
declare module 'lobby' {
  declare type Avatar = 'fixed' | 'random'
  declare type Member = 'A' | 'B' | 'C'
  declare type Lobby = 'anonymous audience' | 'human player' | 'onymous audience' | 'robot player'
  declare type Village = {
    avatar: string,
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
    avatarImage: ?string,
    isAnonymous: boolean,
    isHost: boolean,
    isMe: boolean,
    name: string,
    token: string
  }
  declare type Target =
    | 'BUILD_VILLAGE'
    | 'LEAVE_WAITING_PAGE'
    | 'PLAY_GAME'
    | 'REFRESH'
    | 'SEARCH_FOR_A_VILLAGE'
    | 'SEARCH_FOR_A_VILLAGE_IN_SESSION'
    | 'SEARCH_FOR_AN_OLD_VILLAGE'
    | 'SHOW_BUILD_VILLAGE'
    | 'SHOW_CONNECTING_TO_ROBOT_PLAYER'
    | 'SHOW_HISTORY'
    | 'SHOW_LOBBY_FOR_AUDIENCE'
    | 'SHOW_LOBBY_FOR_HUMAN_PLAYER'
    | 'SHOW_LOBBY_FOR_ROBOT_PLAYER'
    | 'SHOW_MAIN'
    | 'SHOW_SETTINGS'
  declare type MenuItem = {
    text: string,
    types: Target[]
  }
  declare type TMenuItem = MenuItem
  declare type PingResult = {
    ping: string,
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
  declare type Payload$Lobby = Payload<{
    villages: Village[]
  }>
  declare type Payload$Ping = Payload<{
    id: string,
    results: PingResult[]
  }>
  declare type Payload$WatingPage = Payload<{
    village: Village,
    players: WaitingPlayer[]
  }>
}
