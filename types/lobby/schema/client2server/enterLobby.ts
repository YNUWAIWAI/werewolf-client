/*
  'https://werewolf.world/lobby/schema/0.3/client2server/enterLobby.json'
*/
import {
  LobbyType,
  PayloadBase,
  PayloadType,
  Token
} from '../..'

export interface EnterType extends PayloadBase {
  lobby: LobbyType
  page: number
  token: Token
  type: PayloadType.enterLobby
}
