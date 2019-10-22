/*
  'https://werewolf.world/lobby/schema/0.3/server2client/lobby.json'
*/
import {
  PayloadType,
  Village
} from '../..'

export interface Lobby {
  error: string | null
  lobby: Lobby
  type: PayloadType.lobby
  villages: Village[]
}
