/*
  'https://werewolf.world/lobby/schema/0.3/client2server/leaveWaitingPage.json'
*/
import {
  Lobby,
  PayloadType,
  Token
} from '../..'

export interface LeaveWaitingPage {
  lobby: Lobby
  token: Token
  type: PayloadType.leaveWaitingPage
  villageId: number
}
