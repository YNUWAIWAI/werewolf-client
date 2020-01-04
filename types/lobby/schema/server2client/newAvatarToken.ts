/*
  'https://werewolf.world/lobby/schema/0.3/server2client/newAvatarToken.json'
*/
import {PayloadType} from '../../payload'
import {Token} from '../..'

export interface NewAvatarToken {
  token: Token
  type: PayloadType.newAvatarToken
}
