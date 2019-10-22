/*
  'https://werewolf.world/lobby/schema/0.3/client2server/changeUserPassword.json'
*/
import {
  PayloadType
} from '../..'

export interface ChangeUserPassword {
  type: PayloadType.changeUserPassword
  userPassword: string
}
