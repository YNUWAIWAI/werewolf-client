/*
  'https://werewolf.world/lobby/schema/0.3/server2client/played.json'
*/
import {PayloadType} from '../../payload'
import {Village} from '../../../village/schema'

export interface Played {
  language: Village['language']
  type: PayloadType.played
}
