/*
  'https://werewolf.world/lobby/schema/0.3/client2server/leaveWaitingPage.json'
*/
import {
  Avatar,
  Village
} from '../../../village/schema'
import {LobbyType} from '../..'
import {PayloadType} from '../../payload'

export interface LeaveWaitingPage {
  lobby: LobbyType
  token: Avatar['token']
  type: PayloadType.leaveWaitingPage
  villageId: Village['id']
}
