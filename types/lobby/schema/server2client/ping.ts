/*
  'https://werewolf.world/lobby/schema/0.3/server2client/ping.json'
*/
import {
  PayloadType,
  PingResult
} from '../..'

export interface Ping {
  id: string
  results: PingResult[]
  type: PayloadType.ping
}
