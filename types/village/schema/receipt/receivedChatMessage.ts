/*
  'https://werewolf.world/village/schema/0.3/invitation/receivedChatMessage.json'
*/
import {
  PayloadBase,
  PayloadType
} from '../../payload'
import {Avatar} from '../avatar'
import {Base} from '../base'
import {Village} from '../village'

export interface ReceivedChatMessage extends PayloadBase {
  clientTimestamp: Base['clientTimestamp']
  serverTimestamp: Base['serverTimestamp']
  token: Avatar['token']
  type: PayloadType.receivedChatMessage
  villageId: Village['id']
}
