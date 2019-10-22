/*
  'https://werewolf.world/lobby/schema/0.3/client2server/idSearch.json'
*/
import {
  Lobby,
  PayloadType,
  Token
} from '../..'

export interface IdSearch {
  idForSearching: number
  lobby: Lobby
  token: Token
  type: PayloadType.idSearch
}
