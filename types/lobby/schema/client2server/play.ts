/*
  'https://werewolf.world/lobby/schema/0.3/client2server/play.json'
*/
import {
  Avatar,
  Village
} from '../../../village/schema'
import {PayloadType} from '../../payload'

export interface Play {
  token: Avatar['token']
  type: PayloadType.play
  villageId: Village['id']
}
