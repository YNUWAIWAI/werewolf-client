/*
  'https://werewolf.world/lobby/schema/0.3/server2client/lobby.json'
*/
import {
  LobbyType,
  Village
} from '../..'
import {PayloadType} from '../../payload'

export interface Lobby {
  error: string | null
  lobby: LobbyType
  type: PayloadType.lobby
  villages: Village[]
}
