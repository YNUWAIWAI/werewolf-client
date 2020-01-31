/*
  'https://werewolf.world/lobby/schema/0.3/server2client/renewAvatarToken.json'
*/
import {Avatar} from '../../../village/schema'
import {LobbyType} from '../..'
import {PayloadType} from '../../payload'

export interface RenewAvatarToken {
  lobby: LobbyType
  token: Avatar['token']
  type: PayloadType.renewAvatarToken
}
