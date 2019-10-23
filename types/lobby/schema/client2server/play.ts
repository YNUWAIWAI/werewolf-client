/*
  'https://werewolf.world/lobby/schema/0.3/client2server/play.json'
*/
import {
  PayloadBase,
  PayloadType,
  Token
} from '../..'

export interface Play extends PayloadBase{
  token: Token
  type: PayloadType.play
  villageId: number
}
