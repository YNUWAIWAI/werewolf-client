/*
  'https://werewolf.world/lobby/schema/0.3/enterLobby.json'
*/
import {
  Lobby,
  PayloadType,
  Token
} from '..'

export interface EnterLobby {
  lobby: Lobby
  page: number
  token: Token
  type: PayloadType.enterLobby
}
