/*
  'https://werewolf.world/lobby/schema/0.3/server2client/settings.json'
*/
import {
  Language,
  PayloadType
} from '../..'

export interface Settings {
  lang: Language
  type: PayloadType.settings
  userEmail: string
  userName: string
}
