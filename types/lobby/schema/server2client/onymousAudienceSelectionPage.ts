/*
  'https://werewolf.world/lobby/schema/0.3/server2client/onymousAudienceSelectionPage.json'
*/
import {
  Avatar,
  Village
} from '../../../village/schema'
import {PayloadType} from '../../payload'

interface OnymousAudienceAvatar {
  image: Avatar['image']
  language: Village['language']
  name: Avatar['name']
  token: Avatar['token']
}

export interface OnymousAudienceSelectionPage {
  avatar: OnymousAudienceAvatar[]
  type: PayloadType.onymousAudienceSelectionPage
}
