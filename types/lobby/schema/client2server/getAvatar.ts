/*
  'https://werewolf.world/lobby/schema/0.3/client2server/getAvatar.json'
*/
import {
  PayloadType,
  Token
} from '../..'

export interface GetAvatar {
  token: Token
  type: PayloadType.getAvatar
}
