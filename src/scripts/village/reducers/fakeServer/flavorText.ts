import {Character} from '../../constants/Character'
import {ImagePath} from '../../constants/ImagePath'
import {VERSION} from '../../constants/Version'
import {village} from '../../types'

export const flavorText: village.Payload$FlavorTextMessage = {
  '@context': [
    village.BaseContext.Base,
    village.BaseContext.FlavorText
  ],
  '@id': `https://licos.online/state/${VERSION}/village#3/flavorTextMessage`,
  'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
  'day': 0,
  'directionality': village.Directionality.serverToClient,
  'extensionalDisclosureRange': [],
  'flavorText': [
    {
      '@context': [
        village.BaseContext.Base,
        village.BaseContext.Chat
      ],
      '@id': `https://licos.online/state/${VERSION}/village#3/chatMessage`,
      'character': {
        '@context': village.Context.Character,
        '@id': `https://licos.online/state/${VERSION}/village#3/character`,
        'id': 1,
        'image': ImagePath.Character.j,
        'name': Character.j
      },
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'counter': 0,
      'day': 1,
      'directionality': village.Directionality.serverToClient,
      'extensionalDisclosureRange': [],
      'id': 1,
      'intensionalDisclosureRange': village.Channel.public,
      'interval': '5s',
      'isFromServer': true,
      'isMine': false,
      'isOver': false,
      'maxLengthOfUnicodeCodePoints': 140,
      'maxNumberOfChatMessages': 10,
      'phase': village.Phase.morning,
      'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
      'phaseTimeLimit': 600,
      'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
      'text': {
        '@language': village.Language.ja,
        '@value': '最初のフレーバーテキストです'
      },
      'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
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
    },
    {
      '@context': [
        village.BaseContext.Base,
        village.BaseContext.Chat
      ],
      '@id': `https://licos.online/state/${VERSION}/village#3/chatMessage`,
      'character': {
        '@context': village.Context.Character,
        '@id': `https://licos.online/state/${VERSION}/village#3/character`,
        'id': 1,
        'image': ImagePath.Character.j,
        'name': Character.j
      },
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'counter': 0,
      'day': 1,
      'directionality': village.Directionality.serverToClient,
      'extensionalDisclosureRange': [],
      'id': 2,
      'intensionalDisclosureRange': village.Channel.public,
      'interval': '5s',
      'isFromServer': true,
      'isMine': false,
      'isOver': false,
      'maxLengthOfUnicodeCodePoints': 140,
      'maxNumberOfChatMessages': 10,
      'phase': village.Phase.morning,
      'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
      'phaseTimeLimit': 600,
      'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
      'text': {
        '@language': village.Language.ja,
        '@value': '２番目のフレーバーテキストです'
      },
      'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
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
  ],
  'intensionalDisclosureRange': village.Channel.public,
  'phase': village.Phase.flavorText,
  'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
  'phaseTimeLimit': 600,
  'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
  'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
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
