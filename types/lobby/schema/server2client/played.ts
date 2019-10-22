/*
  'https://werewolf.world/lobby/schema/0.3/server2client/played.json'
*/
import {
  Language,
  PayloadType
} from '../..'

export interface Played {
  lang: Language
  type: PayloadType.played
}
