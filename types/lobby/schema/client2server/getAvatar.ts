/*
  'https://werewolf.world/lobby/schema/0.3/client2server/getAvatar.json'
*/
import {Avatar} from '../../../village/schema'
import {PayloadType} from '../../payload'

export interface GetAvatar {
  token: Avatar['token']
  type: PayloadType.getAvatar
}
