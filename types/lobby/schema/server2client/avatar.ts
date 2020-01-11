/*
  'https://werewolf.world/lobby/schema/0.3/server2client/avatar.json'
*/
import {
  Avatar as AvatarSchema,
  Village
} from '../../../village/schema'
import {PayloadType} from '../../payload'

export interface Avatar {
  image: string
  language: Village['language']
  name: string
  token: AvatarSchema['token']
  type: PayloadType.avatar
}
