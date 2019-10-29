/*
  'https://werewolf.world/village/schema/0.3/invitation/receivedSystemMessage.json'
*/
import {
  PayloadBase,
  PayloadType
} from '../../payload'
import {Avatar} from '../avatar'
import {Time} from '../time'
import {Village} from '../village'

export interface ReceivedSystemMessage extends PayloadBase {
  day: Time['day']
  phase: Time['phase']
  token: Avatar['token']
  type: PayloadType.receivedSystemMessage
  villageId: Village['id']
}
