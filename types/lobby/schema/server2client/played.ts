/*
  'https://werewolf.world/lobby/schema/0.3/server2client/played.json'
*/
import {Language} from '../..'
import {PayloadType} from '../../payload'

export interface Played {
  language: Language
  type: PayloadType.played
}
