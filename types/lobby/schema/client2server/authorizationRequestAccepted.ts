/*
  'https://werewolf.world/lobby/schema/0.3/client2server/authorizationRequestAccepted.json'
*/
import {PayloadType} from '../../payload'
import {Token} from '../..'

export interface AuthorizationRequestAccepted {
  accessToken: Token
  type: PayloadType.authorizationRequestAccepted
}
