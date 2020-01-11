/*
  'https://werewolf.world/lobby/schema/0.3/client2server/advancedSearch.json'
*/
import {
  Avatar,
  LobbyType
} from '../..'
import {Avatar as AvatarSchema} from '../../../village/schema'
import {PayloadType} from '../../payload'

export interface AdvancedSearch {
  avatar: Avatar
  comment: string | null
  hostName: string | null
  lobby: LobbyType
  maximum: number | null
  minimum: number | null
  token: AvatarSchema['token']
  type: PayloadType.advancedSearch
  villageName: string | null
}
