/*
  'https://werewolf.world/lobby/schema/0.3/client2server/authorizationRequestAccepted.json'
*/
import {Avatar} from '../../../village/schema'
import {PayloadType} from '../../payload'

export interface AuthorizationRequestAccepted {
  accessToken: Avatar['token']
  type: PayloadType.authorizationRequestAccepted
}
