/*
  'https://werewolf.world/lobby/schema/0.3/pong.json'
*/
import {
  PayloadType,
  Token
} from '..'

export interface Pong {
  id: string
  token: Token
  type: PayloadType.pong
}
