/*
  'https://werewolf.world/lobby/schema/0.3/client2server/pong.json'
*/
import {Avatar} from '../../../village/schema'
import {PayloadType} from '../../payload'

export interface Pong {
  id: Avatar['token']
  token: Avatar['token']
  type: PayloadType.pong
}
