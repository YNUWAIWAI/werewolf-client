/*
  'https://werewolf.world/lobby/schema/0.3/server2client/settings.json'
*/
import {Language} from '../..'
import {PayloadType} from '../../payload'

export interface Settings {
  language: Language
  type: PayloadType.settings
  userEmail: string
  userName: string
}
