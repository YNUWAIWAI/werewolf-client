/*
  'https://werewolf.world/village/schema/0.3/invitation/nextGameInvitation.json'
*/
import {PayloadType} from '../../payload'
import {Village} from '../village'

export interface NextGameInvitation {
  type: PayloadType.nextGameInvitation
  villageId: Village['id']
}
