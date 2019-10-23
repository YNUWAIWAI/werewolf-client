/*
  'https://werewolf.world/lobby/schema/0.3/client2server/ready.json'
*/
import {
  PayloadBase,
  PayloadType,
  Token
} from '../..'

export interface Ready extends PayloadBase {
  token: Token
  type: PayloadType.ready
  villageId: number
}
