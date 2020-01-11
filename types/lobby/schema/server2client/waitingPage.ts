/*
  'https://werewolf.world/lobby/schema/0.3/server2client/watingPage.json'
*/
import {
  Village,
  WaitingPlayer
} from '../..'
import {PayloadType} from '../../payload'

export interface WaitingPage {
  error: string | null
  players: WaitingPlayer[]
  type: PayloadType.waitingPage
  village: Village
}
