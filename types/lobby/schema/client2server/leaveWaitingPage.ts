/*
  'https://werewolf.world/lobby/schema/0.3/client2server/leaveWaitingPage.json'
*/
import {
  Lobby,
  PayloadBase,
  PayloadType,
  Token
} from '../..'

export interface LeaveWaitingPage extends PayloadBase {
  lobby: Lobby
  token: Token
  type: PayloadType.leaveWaitingPage
  villageId: number
}
