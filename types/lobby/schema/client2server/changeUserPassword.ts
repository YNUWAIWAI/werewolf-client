/*
  'https://werewolf.world/lobby/schema/0.3/client2server/changeUserPassword.json'
*/
import {
  PayloadBase,
  PayloadType
} from '../../payload'

export interface ChangeUserPassword extends PayloadBase {
  type: PayloadType.changeUserPassword
  userPassword: string
}
