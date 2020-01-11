/*
  'https://werewolf.world/lobby/schema/0.3/client2server/stopRobotPlayer.json'
*/
import {Avatar} from '../../../village/schema'
import {PayloadType} from '../../payload'

export interface StopRobotPlayer {
  token: Avatar['token']
  type: PayloadType.stopRobotPlayer
}
