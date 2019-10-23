/*
  'https://werewolf.world/village/schema/0.3/invitation/nextGameInvitation.json'
*/
import {
  PayloadBase,
  PayloadType
} from '../..'

export interface NextGameInvitation extends PayloadBase {
  type: PayloadType.nextGameInvitation
  villageId: number
}
