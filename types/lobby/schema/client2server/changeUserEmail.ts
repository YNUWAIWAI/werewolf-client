/*
  'https://werewolf.world/lobby/schema/0.3/client2server/changeUserEmail.json'
*/
import {
  PayloadBase,
  PayloadType
} from '../..'

export interface ChangeUserEmail extends PayloadBase {
  type: PayloadType.changeUserEmail
  userEmail: string
}
