/*
  'https://werewolf.world/lobby/schema/0.3/server2client/watingPage.json'
*/
import {
  PayloadBase,
  PayloadType,
  Village,
  WaitingPlayer
} from '../..'

export interface WatingPage extends PayloadBase {
  error: string | null
  players: WaitingPlayer[]
  type: PayloadType.waitingPage
  village: Village
}

