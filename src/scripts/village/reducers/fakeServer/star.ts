import {Character} from '../../constants/Character'
import {ImagePath} from '../../constants/ImagePath'
import {Role} from '../../constants/Role'
import {VERSION} from '../../constants/Version'
import {village} from '../../types'

export const star: village.Payload$StarMessage = {
  '@context': [
    village.BaseContext.Base,
    village.BaseContext.Star
  ],
  '@id': `https://licos.online/state/${VERSION}/village#3/starMessage`,
  'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
  'day': 2,
  'directionality': village.Directionality.clientToServer,
  'extensionalDisclosureRange': [],
  'intensionalDisclosureRange': village.Channel.private,
  'myCharacter': {
    '@context': village.Context.Character,
    '@id': `https://licos.online/state/${VERSION}/village#3/myCharacter`,
    'id': 1,
    'image': ImagePath.Character.a,
    'name': Character.a,
    'role': {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#1/role`,
      'image': ImagePath.Role.werewolf,
      'name': Role.werewolf
    }
  },
  'phase': village.Phase.morning,
  'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
  'phaseTimeLimit': 600,
  'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
  'star': {
    '@context': village.Context.Star,
    '@id': `https://licos.online/state/${VERSION}/village#3/star`,
    'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
    'isMarked': true,
    'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
    'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
  },
  'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
  'village': {
    '@context': village.Context.Village,
    '@id': `https://licos.online/state/${VERSION}/village`,
    'chatSettings': {
      '@context': village.Context.ChatSettings,
      '@id': `https://licos.online/state/${VERSION}/village#3/chatSettings`,
      'maxLengthOfUnicodeCodePoints': 140,
      'maxNumberOfChatMessages': 10
    },
    'id': 3,
    'language': village.Language.ja,
    'name': '横国の森の奥にある時代に取り残された小さな村',
    'totalNumberOfPlayers': 15
  }
}
