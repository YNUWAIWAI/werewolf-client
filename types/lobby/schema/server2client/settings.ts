/*
  'https://werewolf.world/lobby/schema/0.3/server2client/settings.json'
*/
import {PayloadType} from '../../payload'
import {Village} from '../../../village/schema'

export interface Settings {
  language: Village['language']
  type: PayloadType.settings
  userEmail: string
  userName: string
}
