/*
  'https://werewolf.world/lobby/schema/0.3/changeUserEmail.json'
*/
import {
  PayloadType
} from '..'

export interface ChangeUserEmail {
  type: PayloadType.changeUserEmail
  userEmail: string
}
