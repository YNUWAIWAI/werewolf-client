/*
  'https://werewolf.world/lobby/schema/0.3/client2server/leaveWaitingPage.json'
*/
import {
  LobbyType,
  Token
} from '../..'
import {PayloadType} from '../../payload'

export interface LeaveWaitingPage {
  lobby: LobbyType
  token: Token
  type: PayloadType.leaveWaitingPage
  villageId: number
}
