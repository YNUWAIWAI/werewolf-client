/*
  'https://werewolf.world/lobby/schema/0.3/client2server/changeAvatar.json'
*/
import {
  Avatar,
  Village
} from '../../../village/schema'
import {LobbyType} from '../..'
import {PayloadType} from '../../payload'

export interface ChangeAvatar {
  image: Avatar['image'] | null
  language: Village['language'] | null
  lobby: LobbyType
  name: Avatar['name'] | null
  token: Avatar['token']
  type: PayloadType.changeAvatar
}
