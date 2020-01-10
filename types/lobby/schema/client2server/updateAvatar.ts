/*
  'https://werewolf.world/lobby/schema/0.3/client2server/updateAvatar.json'
*/
import {
  Avatar,
  Village
} from '../../../village/schema'
import {PayloadType} from '../../payload'

export interface UpdateAvatar {
  image: Avatar['image'] | null
  language: Village['language'] | null
  name: Avatar['name'] | null
  token: Avatar['token']
  type: PayloadType.updateAvatar
}
