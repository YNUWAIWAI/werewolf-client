/*
  'https://werewolf.world/lobby/schema/0.3/client2server/getSettings.json'
*/
import {
  PayloadBase,
  PayloadType
} from '../../payload'

export interface GetSettings extends PayloadBase {
  type: PayloadType.getSettings
}
