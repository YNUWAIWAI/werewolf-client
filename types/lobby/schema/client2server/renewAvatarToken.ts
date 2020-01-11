/*
  'https://werewolf.world/lobby/schema/0.3/server2client/renewAvatarToken.json'
*/
import {Avatar} from '../../../village/schema'
import {PayloadType} from '../../payload'

export interface RenewAvatarToken {
  token: Avatar['token']
  type: PayloadType.renewAvatarToken
}
