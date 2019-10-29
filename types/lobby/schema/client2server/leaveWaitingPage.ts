/*
  'https://werewolf.world/lobby/schema/0.3/client2server/leaveWaitingPage.json'
*/
import {
  LobbyType,
  PayloadBase,
  PayloadType,
  Token
} from '../..'

export interface LeaveWaitingPage extends PayloadBase {
  lobby: LobbyType
  token: Token
  type: PayloadType.leaveWaitingPage
  villageId: number
}
