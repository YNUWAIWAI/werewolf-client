/*
  'https://werewolf.world/lobby/schema/0.3/server2client/authorizationRequest.json'
*/
import {PayloadType} from '../../payload'
import {Token} from '../..'

export interface AuthorizationRequest {
  accessToken: Token
  type: PayloadType.authorizationRequest
}
