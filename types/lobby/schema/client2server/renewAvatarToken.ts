/*
  'https://werewolf.world/lobby/schema/0.3/server2client/renewAvatarToken.json'
*/
import {PayloadType} from '../../payload'
import {Token} from '../..'

export interface RenewAvatarToken {
  token: Token
  type: PayloadType.renewAvatarToken
}
