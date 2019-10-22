/*
  'https://werewolf.world/lobby/schema/0.3/changeLang.json'
*/
import {
  Language,
  PayloadType
} from '..'

export interface ChangeLang {
  lang: Language
  type: PayloadType.changeLang
}
