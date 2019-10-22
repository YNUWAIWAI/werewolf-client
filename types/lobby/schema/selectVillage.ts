/*
  'https://werewolf.world/lobby/schema/0.3/client2server/selectVillage.json'
*/
import {
  PayloadType,
  Token
} from '..'

export interface SelectVillage {
  token: Token
  type: PayloadType.selectVillage
  villageId: number
}
