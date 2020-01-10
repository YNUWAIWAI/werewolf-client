/*
  'https://werewolf.world/lobby/schema/0.3/client2server/changeLang.json'
*/
import {Language} from '../..'
import {PayloadType} from '../../payload'

export interface ChangeLanguage {
  language: Language
  type: PayloadType.changeLang
}
