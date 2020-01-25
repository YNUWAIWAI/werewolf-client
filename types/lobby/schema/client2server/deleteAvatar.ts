/*
  'https://werewolf.world/lobby/schema/0.3/client2server/deleteAvatar.json'
*/
import {Avatar} from '../../../village/schema'
import {PayloadType} from '../../payload'

export interface DeleteAvatar {
  token: Avatar['token'][]
  type: PayloadType.deleteAvatar
}
