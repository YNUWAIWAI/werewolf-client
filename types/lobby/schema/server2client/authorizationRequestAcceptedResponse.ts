/*
  'https://werewolf.world/lobby/schema/0.3/server2client/authorizationRequestAcceptedResponse.json'
*/
import {PayloadType} from '../../payload'
import {Token} from '../..'

export interface AuthorizationRequestAcceptedResponse {
  accessToken: Token
  response: 'authorized'
  type: PayloadType.authorizationRequestAcceptedResponse
}
