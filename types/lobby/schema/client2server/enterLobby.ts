/*
  'https://werewolf.world/lobby/schema/0.3/client2server/enterLobby.json'
*/
import {
  LobbyType,
  Token
} from '../..'
import {
  PayloadBase,
  PayloadType
} from '../../payload'

export interface EnterLobby extends PayloadBase {
  lobby: LobbyType
  page: number
  token: Token
  type: PayloadType.enterLobby
}
