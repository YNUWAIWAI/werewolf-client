/*
  'https://werewolf.world/lobby/schema/0.3/client2server/changeUserName.json'
*/
import {PayloadType} from '../../payload'

export interface ChangeUserName {
  type: PayloadType.changeUserName
  userName: string
}
