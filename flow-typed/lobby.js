// @flow

declare type Avatar = 'fixed' | 'random'
declare type Member = 'A' | 'B' | 'C'
declare type Village = {
  name: string,
  id: number,
  hostPlayer: HostPlayer,
  playerSetting: PlayerSetting,
  roleSetting: RoleSetting,
  avatar: string,
  comment: ?string
}
declare type HostPlayer = {
  name: string,
  isAnonymous: boolean
}
declare type PlayerSetting = {
  number: number,
  current: number,
  robot: Robot,
  human: Human
}
declare type Robot = {
  min: number,
  current: number
}
declare type Human = {
  max: number,
  current: number
}
declare type RoleSetting = {
  villager: number,
  werewolf: number,
  seer: number,
  medium: number,
  madman: number,
  hunter: number,
  mason: number,
  werehumster: number
}
declare type MenuItem = {
  text: string,
  type: string
}
