/*
  'https://werewolf.world/village/schema/0.3/invitation/receivedSystemMessage.json'
*/
import {Avatar} from '../avatar'
import {PayloadType} from '../../payload'
import {Time} from '../time'
import {Village} from '../village'

export interface ReceivedSystemMessage {
  day: Time['day']
  phase: Time['phase']
  token: Avatar['token']
  type: PayloadType.receivedSystemMessage
  villageId: Village['id']
}
