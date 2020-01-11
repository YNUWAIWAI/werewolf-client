/*
  'https://werewolf.world/lobby/schema/0.3/client2server/selectVillage.json'
*/
import {
  Avatar,
  Village
} from '../../../village/schema'
import {PayloadType} from '../../payload'

export interface SelectVillage {
  token: Avatar['token']
  type: PayloadType.selectVillage
  villageId: Village['id']
}
