/*
  'https://werewolf.world/lobby/schema/0.3/server2client/settings.json'
*/
import {
  PayloadBase,
  PayloadType
} from '../../payload'
import {
  Language
} from '../..'

export interface Settings extends PayloadBase {
  lang: Language
  type: PayloadType.settings
  userEmail: string
  userName: string
}
