/*
  'https://werewolf.world/lobby/schema/0.3/client2server/advancedSearch.json'
*/
import {
  Avatar,
  Lobby,
  PayloadBase,
  PayloadType,
  Token
} from '../..'

export interface AdvancedSearch extends PayloadBase {
  avatar: Avatar
  comment: string | null
  hostName: string | null
  lobby: Lobby
  maximum: number | null
  minimum: number | null
  token: Token
  type: PayloadType.advancedSearch
  villageName: string | null
}
