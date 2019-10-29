/*
  'https://werewolf.world/lobby/schema/0.3/client2server/pong.json'
*/
import {
  PayloadBase,
  PayloadType
} from '../../payload'
import {
  Token
} from '../..'

export interface Pong extends PayloadBase {
  id: string
  token: Token
  type: PayloadType.pong
}
