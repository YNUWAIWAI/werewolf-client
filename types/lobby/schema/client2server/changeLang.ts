/*
  'https://werewolf.world/lobby/schema/0.3/client2server/changeLang.json'
*/
import {
  PayloadBase,
  PayloadType
} from '../../payload'
import {
  Language
} from '../..'

export interface ChangeLang extends PayloadBase {
  lang: Language
  type: PayloadType.changeLang
}
