/*
  'https://werewolf.world/lobby/schema/0.3/server2client/watingPage.json'
*/
import {
  PayloadType,
  Village,
  WaitingPlayer
} from '../..'

export interface WatingPage {
  error: string | null
  players: WaitingPlayer[]
  type: PayloadType.waitingPage
  village: Village
}

