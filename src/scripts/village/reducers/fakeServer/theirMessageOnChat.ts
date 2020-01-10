import {Character} from '../../constants/Character'
import {ImagePath} from '../../constants/ImagePath'
import {VERSION} from '../../constants/Version'
import {village} from '../../types'

export const theirMessageOnChat: village.Payload$ChatMessage = {
  '@context': [
    village.BaseContext.Base,
    village.BaseContext.Chat
  ],
  '@id': `https://licos.online/state/${VERSION}/village#3/chatMessage`,
  'character': {
    '@context': village.Context.Character,
    '@id': `https://licos.online/state/${VERSION}/village#3/character`,
    'id': 1,
    'image': ImagePath.Character.a,
    'name': Character.a
  },
  'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
  'counter': 7,
  'day': 1,
  'directionality': village.Directionality.serverToClient,
  'extensionalDisclosureRange': [],
  'id': 12,
  'intensionalDisclosureRange': village.Channel.public,
  'interval': 5,
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
    '@value': '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。'
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
