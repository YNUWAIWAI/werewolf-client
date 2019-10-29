/*
  'https://werewolf.world/lobby/schema/0.3/client2server/idSearch.json'
*/
import {
  LobbyType,
  Token
} from '../..'
import {
  PayloadBase,
  PayloadType
} from '../../payload'

export interface IdSearch extends PayloadBase {
  idForSearching: number
  lobby: LobbyType
  token: Token
  type: PayloadType.idSearch
}
