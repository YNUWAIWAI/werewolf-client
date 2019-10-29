/*
  'https://werewolf.world/village/schema/0.3/invitation/nextGameInvitation.json'
*/
import {
  PayloadBase,
  PayloadType
} from '../../payload'
import {Village} from '../village'

export interface NextGameInvitation extends PayloadBase {
  type: PayloadType.nextGameInvitation
  villageId: Village['id']
}
