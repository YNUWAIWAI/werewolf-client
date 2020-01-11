/*
  'https://werewolf.world/lobby/schema/0.3/client2server/enterLobby.json'
*/
import {Avatar} from '../../../village/schema'
import {LobbyType} from '../..'
import {PayloadType} from '../../payload'

export interface EnterLobby {
  lobby: LobbyType
  page: number
  token: Avatar['token']
  type: PayloadType.enterLobby
}
