/*
  'https://werewolf.world/lobby/schema/0.3/client2server/enterLobby.json'
*/
import {
  Lobby,
  PayloadBase,
  PayloadType,
  Token
} from '../..'

export interface EnterLobby extends PayloadBase {
  lobby: Lobby
  page: number
  token: Token
  type: PayloadType.enterLobby
}
