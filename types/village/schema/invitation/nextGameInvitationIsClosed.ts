/*
  'https://werewolf.world/village/schema/0.3/invitation/nextGameInvitationIsClosed.json'
*/
import {
  PayloadBase,
  PayloadType
} from '../..'

export interface NextGameInvitationIsClosed extends PayloadBase {
  type: PayloadType.nextGameInvitationIsClosed
}
