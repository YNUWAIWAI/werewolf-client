/*
  'https://werewolf.world/lobby/schema/0.3/client2server/ready.json'
*/
import {
  Avatar,
  Village
} from '../../../village/schema'
import {PayloadType} from '../../payload'

export interface Ready {
  token: Avatar['token']
  type: PayloadType.ready
  villageId: Village['id']
}
