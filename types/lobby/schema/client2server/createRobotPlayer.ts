/*
  'https://werewolf.world/lobby/schema/0.3/client2server/createRobotPlayer.json'
*/
import {
  Avatar,
  Village
} from '../../../village/schema'
import {PayloadType} from '../../payload'

interface Composition {
  A: boolean
  B: boolean
  C: boolean
}

export interface CreateRobotPlayer {
  image: Avatar['image']
  isFullyAutomated: boolean
  language: Village['language']
  name: Avatar['name']
  support: {
    4: Composition
    5: Composition
    6: Composition
    7: Composition
    8: Composition
    9: Composition
    10: Composition
    11: Composition
    12: Composition
    13: Composition
    14: Composition
    15: Composition
  }
  token: Avatar['token']
  type: PayloadType.createRobotPlayer
}
