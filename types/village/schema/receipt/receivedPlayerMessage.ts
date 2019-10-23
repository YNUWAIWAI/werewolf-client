/*
  'https://werewolf.world/village/schema/0.3/invitation/receivedPlayerMessage.json'
*/
import {
  Avatar,
  Base,
  PayloadBase,
  PayloadType,
  Village
} from '../..'

export interface ReceivedPlayerMessage extends PayloadBase {
  clientTimestamp: Base['clientTimestamp']
  serverTimestamp: Base['serverTimestamp']
  token: Avatar['token']
  type: PayloadType.nextGameInvitationIsClosed
  villageId: Village['id']
}
