/*
  'https://werewolf.world/village/schema/0.3/receipt/receivedFlavorTextMessage.json'
*/
import {Avatar} from '../avatar'
import {PayloadType} from '../../payload'
import {Time} from '../time'
import {Village} from '../village'

export interface ReceivedFlavorTextMessage {
  day: Time['day']
  phase: Time['phase']
  token: Avatar['token']
  type: PayloadType.receivedFlavorTextMessage
  villageId: Village['id']
}
