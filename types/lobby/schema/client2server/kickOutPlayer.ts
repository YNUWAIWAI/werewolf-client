/*
  'https://werewolf.world/lobby/schema/0.3/client2server/kickOutPlayer.json'
*/
import {Avatar} from '../../../village/schema'
import {PayloadType} from '../../payload'

export interface KickOutPlayer {
  players: {
    token: Avatar['token']
  }[]
  token: Avatar['token']
  type: PayloadType.kickOutPlayer
}
