/*
  'https://werewolf.world/lobby/schema/0.3/client2server/changeUserEmail.json'
*/
import {
  PayloadType
} from '../..'

export interface ChangeUserEmail {
  type: PayloadType.changeUserEmail
  userEmail: string
}
