/*
  'https://werewolf.world/lobby/schema/0.3/server2client/ping.json'
*/
import {PayloadType} from '../../payload'
import {PingResult} from '../..'

export interface Ping {
  id: string
  results: PingResult[]
  type: PayloadType.ping
}
