/*
  'https://werewolf.world/lobby/schema/0.3/client2server/createHumanPlayer.json'
*/
import {
  Avatar,
  Village
} from '../../../village/schema'
import {PayloadType} from '../../payload'

export interface CreateHumanPlayer {
  image: Avatar['image']
  language: Village['language']
  name: Avatar['name']
  type: PayloadType.createHumanPlayer
}
