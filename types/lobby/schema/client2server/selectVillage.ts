/*
  'https://werewolf.world/lobby/schema/0.3/client2server/selectVillage.json'
*/
import {
  PayloadBase,
  PayloadType
} from '../../payload'
import {
  Token
} from '../..'

export interface SelectVillage extends PayloadBase {
  token: Token
  type: PayloadType.selectVillage
  villageId: number
}
