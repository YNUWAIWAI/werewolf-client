/*
  'https://werewolf.world/lobby/schema/0.3/client2server/buildVillage.json'
*/
import {
  Avatar,
  HostPlayer,
  PayloadType,
  PlayerSetting,
  RoleSetting,
  Token
} from '..'

export interface BuildVillage {
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
