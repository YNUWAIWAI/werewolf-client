/*
  'https://werewolf.world/lobby/schema/0.3/client2server/ready.json'
*/
import {
  PayloadType,
  Token
} from '../..'

export interface Ready {
  token: Token
  type: PayloadType.ready
  villageId: number
}
