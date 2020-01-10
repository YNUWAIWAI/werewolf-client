/*
  'https://werewolf.world/village/schema/0.3/receipt/receivedChatMessage.json'
*/
import {Avatar} from '../avatar'
import {Base} from '../base'
import {PayloadType} from '../../payload'
import {Village} from '../village'

export interface ReceivedChatMessage {
  clientTimestamp: Base['clientTimestamp']
  serverTimestamp: Base['serverTimestamp']
  token: Avatar['token']
  type: PayloadType.receivedChatMessage
  villageId: Village['id']
}
