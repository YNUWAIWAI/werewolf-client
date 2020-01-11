/*
  'https://werewolf.world/lobby/schema/0.3/server2client/ping.json'
*/
import {Avatar} from '../../../village/schema'
import {PayloadType} from '../../payload'
import {PingResult} from '../..'

export interface Ping {
  id: Avatar['token']
  results: PingResult[]
  type: PayloadType.ping
}
