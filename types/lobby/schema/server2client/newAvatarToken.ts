/*
  'https://werewolf.world/lobby/schema/0.3/server2client/newAvatarToken.json'
*/
import {Avatar} from '../../../village/schema'
import {PayloadType} from '../../payload'

export interface NewAvatarToken {
  token: Avatar['token']
  type: PayloadType.newAvatarToken
}
