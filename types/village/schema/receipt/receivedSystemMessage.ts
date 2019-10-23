/*
  'https://werewolf.world/village/schema/0.3/invitation/receivedSystemMessage.json'
*/
import {
  Avatar,
  PayloadBase,
  PayloadType,
  Time,
  Village
} from '../..'

export interface ReceivedSystemMessage extends PayloadBase {
  day: Time['day']
  phase: Time['phase']
  token: Avatar['token']
  type: PayloadType.receivedSystemMessage
  villageId: Village['id']
}
