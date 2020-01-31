/*
  'https://werewolf.world/lobby/schema/0.3/client2server/deleteAvatar.json'
*/
import {Avatar} from '../../../village/schema'
import {LobbyType} from '../../'
import {PayloadType} from '../../payload'

export interface DeleteAvatar {
  lobby: LobbyType
  token: Avatar['token'][]
  type: PayloadType.deleteAvatar
}
