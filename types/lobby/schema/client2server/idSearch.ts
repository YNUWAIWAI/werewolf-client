/*
  'https://werewolf.world/lobby/schema/0.3/client2server/idSearch.json'
*/
import {
  Lobby,
  PayloadBase,
  PayloadType,
  Token
} from '../..'

export interface IdSearch extends PayloadBase {
  idForSearching: number
  lobby: Lobby
  token: Token
  type: PayloadType.idSearch
}
