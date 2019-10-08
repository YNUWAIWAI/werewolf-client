import * as village from '../../types'
import {Agent} from '../../constants/Agent'
import {ImagePath} from '../../constants/ImagePath'

const json: village.Payload$flavorTextMessage = {
  '@context': [
    village.BaseContext.Base,
    village.BaseContext.FlavorText
  ],
  '@id': 'https://licos.online/state/0.2/village#3/flavorTextMessage',
  'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
  'date': 0,
  'directionality': village.Directionality.serverToClient,
  'extensionalDisclosureRange': [],
  'flavorText': [
    {
      '@context': [
        village.BaseContext.Base,
        village.BaseContext.Chat
      ],
      '@id': 'https://licos.online/state/0.2/village#3/flavorText#1/playerMessage',
      'agent': {
        '@context': village.Context.Agent,
        '@id': 'https://licos.online/state/0.2/village#3/agent',
        'id': 1,
        'image': ImagePath.Agent.j,
        'name': Agent.j
      },
      'characterLimit': 140,
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'counter': 0,
      'date': 1,
      'directionality': village.Directionality.serverToClient,
      'extensionalDisclosureRange': [],
      'id': 1,
      'intensionalDisclosureRange': village.Channel.public,
      'interval': '5s',
      'isMine': false,
      'isOver': false,
      'limit': 10,
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
        '@id': 'https://licos.online/state/0.2/village',
        'chatSettings': {
          '@context': village.Context.ChatSettings,
          '@id': 'https://licos.online/state/0.2/village#3/chatSettings',
          'characterLimit': 140,
          'limit': 10
        },
        'id': 3,
        'lang': village.Language.ja,
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfAgents': 15
      }
    },
    {
      '@context': [
        village.BaseContext.Base,
        village.BaseContext.Chat
      ],
      '@id': 'https://licos.online/state/0.2/village#3/flavorText#1/playerMessage',
      'agent': {
        '@context': village.Context.Agent,
        '@id': 'https://licos.online/state/0.2/village#3/agent',
        'id': 1,
        'image': ImagePath.Agent.j,
        'name': Agent.j
      },
      'characterLimit': 140,
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'counter': 0,
      'date': 1,
      'directionality': village.Directionality.serverToClient,
      'extensionalDisclosureRange': [],
      'id': 2,
      'intensionalDisclosureRange': village.Channel.public,
      'interval': '5s',
      'isMine': false,
      'isOver': false,
      'limit': 10,
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
        '@id': 'https://licos.online/state/0.2/village',
        'chatSettings': {
          '@context': village.Context.ChatSettings,
          '@id': 'https://licos.online/state/0.2/village#3/chatSettings',
          'characterLimit': 140,
          'limit': 10
        },
        'id': 3,
        'lang': village.Language.ja,
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfAgents': 15
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
    '@id': 'https://licos.online/state/0.2/village',
    'chatSettings': {
      '@context': village.Context.ChatSettings,
      '@id': 'https://licos.online/state/0.2/village#3/chatSettings',
      'characterLimit': 140,
      'limit': 10
    },
    'id': 3,
    'lang': village.Language.ja,
    'name': '横国の森の奥にある時代に取り残された小さな村',
    'totalNumberOfAgents': 15
  }
}

export default json
