/*
  'https://werewolf.world/lobby/schema/0.3/client2server/play.json'
*/
import {
  PayloadType,
  Token
} from '..'

export interface Play {
  token: Token
  type: PayloadType.play
  villageId: number
}
