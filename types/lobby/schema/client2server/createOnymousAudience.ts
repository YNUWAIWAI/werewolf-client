/*
  'https://werewolf.world/lobby/schema/0.3/client2server/createOnymousAudience.json'
*/
import {
  Avatar,
  Village
} from '../../../village/schema'
import {PayloadType} from '../../payload'

export interface CreateOnymousAudience {
  image: Avatar['image']
  language: Village['language']
  token: Avatar['token']
  type: PayloadType.createOnymousAudience
}
