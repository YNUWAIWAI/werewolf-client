/*
  'https://werewolf.world/lobby/schema/0.3/client2server/ready.json'
*/
import {
  PayloadBase,
  PayloadType
} from '../../payload'
import {
  Token
} from '../..'

export interface Ready extends PayloadBase {
  token: Token
  type: PayloadType.ready
  villageId: number
}
