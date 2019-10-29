/*
  'https://werewolf.world/lobby/schema/0.3/client2server/advancedSearch.json'
*/
import {
  Avatar,
  LobbyType,
  Token
} from '../..'
import {
  PayloadBase,
  PayloadType
} from '../../payload'

export interface AdvancedSearch extends PayloadBase {
  avatar: Avatar
  comment: string | null
  hostName: string | null
  lobby: LobbyType
  maximum: number | null
  minimum: number | null
  token: Token
  type: PayloadType.advancedSearch
  villageName: string | null
}
