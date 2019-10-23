/*
  'https://werewolf.world/lobby/schema/0.3/server2client/played.json'
*/
import {
  Language,
  PayloadBase,
  PayloadType
} from '../..'

export interface Played extends PayloadBase {
  lang: Language
  type: PayloadType.played
}
