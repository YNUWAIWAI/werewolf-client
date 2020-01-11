/*
  'https://werewolf.world/lobby/schema/0.3/server2client/humanPlayerSelectionPage.json'
*/
import {
  Avatar,
  Village
} from '../../../village/schema'
import {PayloadType} from '../../payload'

interface HumanAvatar {
  image: Avatar['image']
  language: Village['language']
  name: Avatar['name']
  token: Avatar['token']
}

export interface HumanPlayerSelectionPage {
  avatar: HumanAvatar[]
  type: PayloadType.humanPlayerSelectionPage
}
