/*
  'https://werewolf.world/lobby/schema/0.3/client2server/enterLobby.json'
*/
import {
  LobbyType,
  Token
} from '../..'
import {PayloadType} from '../../payload'

export interface EnterLobby {
  lobby: LobbyType
  page: number
  token: Token
  type: PayloadType.enterLobby
}
