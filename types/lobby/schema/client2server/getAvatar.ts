/*
  'https://werewolf.world/lobby/schema/0.3/client2server/getAvatar.json'
*/
import {
  PayloadBase,
  PayloadType
} from '../../payload'
import {
  Token
} from '../..'

export interface GetAvatar extends PayloadBase {
  token: Token
  type: PayloadType.getAvatar
}
