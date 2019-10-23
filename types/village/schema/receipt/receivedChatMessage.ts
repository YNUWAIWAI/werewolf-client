/*
  'https://werewolf.world/village/schema/0.3/invitation/receivedChatMessage.json'
*/
import {
  Avatar,
  Base,
  PayloadBase,
  PayloadType,
  Village
} from '../..'

export interface ReceivedChatMessage extends PayloadBase {
  clientTimestamp: Base['clientTimestamp']
  serverTimestamp: Base['serverTimestamp']
  token: Avatar['token']
  type: PayloadType.receivedChatMessage
  villageId: Village['id']
}
