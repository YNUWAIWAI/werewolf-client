/*
  'https://werewolf.world/lobby/schema/0.3/server2client/runRobotPlayerInTheBackground.json'
*/
import {Avatar} from '../../../village/schema'
import {PayloadType} from '../../payload'

export interface RunRobotPlayerInTheBackground {
  token: Avatar['token'][]
  type: PayloadType.runRobotPlayerInTheBackground
}
