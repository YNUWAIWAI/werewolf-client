/*
  'https://werewolf.world/lobby/schema/0.3/client2server/changeLang.json'
*/
import {PayloadType} from '../../payload'
import {Village} from '../../../village/schema'

export interface ChangeLanguage {
  language: Village['language']
  type: PayloadType.changeLanguage
}
