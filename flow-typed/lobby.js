// @flow
declare module 'lobby' {
  declare type Avatar = 'fixed' | 'random'
  declare type Member = 'A' | 'B' | 'C'
  declare type Village = {
    avatar: string,
    comment: ?string,
    hostPlayer: HostPlayer,
    id: number,
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
  declare type Target =
    | 'BUILD_VILLAGE'
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
    type: Target
  }
  declare type TMenuItem = MenuItem
  declare type PayLoad$Lobby = {
    error: ?string,
    type: string,
    villages: Village[]
  }
}
