/*
  'https://werewolf.world/lobby/schema/0.3/client2server/changeUserName.json'
*/
import {
  PayloadBase,
  PayloadType
} from '../../payload'

export interface ChangeUserName extends PayloadBase {
  type: PayloadType.changeUserName
  userName: string
}
