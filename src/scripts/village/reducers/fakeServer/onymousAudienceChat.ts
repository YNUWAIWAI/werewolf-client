import {ImagePath} from '../../constants/ImagePath'
import {village} from '../../types'

export const onymousAudienceChat: village.Payload$ChatMessage = {
  '@context': [
    village.BaseContext.Base,
    village.BaseContext.Chat
  ],
  '@id': 'https://licos.online/state/0.2/village#3/chatMessage',
  'avatar': {
    '@context': village.Context.Avatar,
    '@id': 'https://licos.online/state/0.2/village#3/avatar',
    'image': ImagePath.Agent120x120.y,
    'name': 'Katoh',
    'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV'
  },
  'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
  'day': 1,
  'directionality': village.Directionality.serverToClient,
  'extensionalDisclosureRange': [],
  'intensionalDisclosureRange': village.Channel.onymousAudience,
  'isFromServer': true,
  'isMine': true,
  'isOver': false,
  'maxLengthOfUnicodeCodePoints': 140,
  'phase': village.Phase.morning,
  'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
  'phaseTimeLimit': 600,
  'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
  'text': {
    '@language': village.Language.ja,
    '@value': '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。'
  },
  'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
  'village': {
    '@context': village.Context.Village,
    '@id': 'https://licos.online/state/0.2/village',
    'chatSettings': {
      '@context': village.Context.ChatSettings,
      '@id': 'https://licos.online/state/0.2/village#3/chatSettings',
      'maxLengthOfUnicodeCodePoints': 140,
      'maxNumberOfChatMessages': 10
    },
    'id': 3,
    'lang': village.Language.ja,
    'name': '横国の森の奥にある時代に取り残された小さな村',
    'totalNumberOfCharacters': 15
  }
}
