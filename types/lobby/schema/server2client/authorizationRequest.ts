/*
  'https://werewolf.world/lobby/schema/0.3/server2client/authorizationRequest.json'
*/
import {Avatar} from '../../../village/schema'
import {PayloadType} from '../../payload'

export interface AuthorizationRequest {
  accessToken: Avatar['token']
  type: PayloadType.authorizationRequest
}
