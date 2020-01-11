/*
  'https://werewolf.world/lobby/schema/0.3/server2client/authorizationRequestAcceptedResponse.json'
*/
import {Avatar} from '../../../village/schema'
import {PayloadType} from '../../payload'

export interface AuthorizationRequestAcceptedResponse {
  accessToken: Avatar['token']
  response: 'authorized'
  type: PayloadType.authorizationRequestAcceptedResponse
}
