/*
  'https://werewolf.world/village/schema/0.3/invitation/nextGameInvitation.json'
*/
import {
  PayloadBase,
  PayloadType,
  Village
} from '../..'

export interface NextGameInvitation extends PayloadBase {
  type: PayloadType.nextGameInvitation
  villageId: Village['id']
}
