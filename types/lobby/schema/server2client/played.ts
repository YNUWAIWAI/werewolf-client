/*
  'https://werewolf.world/lobby/schema/0.3/server2client/played.json'
*/
import {
  PayloadBase,
  PayloadType
} from '../../payload'
import {
  Language
} from '../..'

export interface Played extends PayloadBase {
  lang: Language
  type: PayloadType.played
}
