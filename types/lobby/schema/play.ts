/*
  'https://werewolf.world/lobby/schema/0.3/play.json'
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
