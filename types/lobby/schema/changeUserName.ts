/*
  'https://werewolf.world/lobby/schema/0.3/changeUserName.json'
*/
import {
  PayloadType
} from '..'

export interface ChangeUserName {
  type: PayloadType.changeUserName
  userName: string
}
