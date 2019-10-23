/*
  'https://werewolf.world/lobby/schema/0.3/server2client/ping.json'
*/
import {
  PayloadBase,
  PayloadType,
  PingResult
} from '../..'

export interface Ping extends PayloadBase {
  id: string
  results: PingResult[]
  type: PayloadType.ping
}
