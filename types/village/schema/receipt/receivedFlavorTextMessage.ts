/*
  'https://werewolf.world/village/schema/0.3/invitation/receivedFlavorTextMessage.json'
*/
import {
  Avatar,
  PayloadBase,
  PayloadType,
  Time,
  Village
} from '../..'

export interface ReceivedFlavorTextMessage extends PayloadBase {
  day: Time['day']
  phase: Time['phase']
  token: Avatar['token']
  type: PayloadType.nextGameInvitationIsClosed
  villageId: Village['id']
}
