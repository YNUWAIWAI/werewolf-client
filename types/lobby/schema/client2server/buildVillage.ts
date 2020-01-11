/*
  'https://werewolf.world/lobby/schema/0.3/client2server/buildVillage.json'
*/
import {
  Avatar,
  RoleId
} from '../..'
import {
  Avatar as AvatarSchema,
  Village
} from '../../../village/schema'
import {PayloadType} from '../../payload'

interface HostPlayer {
  isAnonymous: boolean
  isHuman: boolean
  name: AvatarSchema['name']
}
interface Human {
  current: number
  max: number
}
interface Robot {
  current: number
  min: number
}
interface PlayerSetting {
  current: number
  human: Human
  number: number
  robot: Robot
}
type RoleSetting = {
  [key in RoleId]: number
}

export interface BuildVillage {
  avatar: Avatar
  comment: string | null
  hostPlayer: HostPlayer
  id: Village['id']
  idForSearching: number
  name: Village['name']
  playerSetting: PlayerSetting
  roleSetting: RoleSetting
  token: AvatarSchema['token']
  type: PayloadType.buildVillage
}
