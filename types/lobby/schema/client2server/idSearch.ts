/*
  'https://werewolf.world/lobby/schema/0.3/client2server/idSearch.json'
*/
import {Avatar} from '../../../village/schema'
import {LobbyType} from '../..'
import {PayloadType} from '../../payload'

export interface IdSearch {
  idForSearching: number
  lobby: LobbyType
  token: Avatar['token']
  type: PayloadType.idSearch
}
