/*
  'https://werewolf.world/lobby/schema/0.3/client2server/getSettings.json'
*/
import {PayloadType} from '../../payload'

export interface GetSettings {
  type: PayloadType.getSettings
}
