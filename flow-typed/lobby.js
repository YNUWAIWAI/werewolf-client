// @flow

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
declare type MenuItem = {
  text: string,
  type: string
}
declare type TMenuItem = MenuItem
