/*
  'https://werewolf.world/lobby/schema/0.3/client2server/changeLang.json'
*/
import {
  Language,
  PayloadBase,
  PayloadType
} from '../..'

export interface ChangeLang extends PayloadBase {
  lang: Language
  type: PayloadType.changeLang
}
