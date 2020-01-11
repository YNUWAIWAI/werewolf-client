/*
  'https://werewolf.world/lobby/schema/0.3/server2client/robotPlayerSelectionPage.json'
*/
import {
  Avatar,
  Village
} from '../../../village/schema'
import {AvatarStatus} from '../..'
import {PayloadType} from '../../payload'

interface RobotAvatar {
  image: Avatar['image']
  isAuthorized: boolean
  isFullyAutomated: boolean
  isTestPassed: boolean
  language: Village['language']
  name: Avatar['name']
  status: AvatarStatus
  token: Avatar['token']
}

export interface RobotPlayerSelectionPage {
  avatar: RobotAvatar[]
  type: PayloadType.robotPlayerSelectionPage
}
