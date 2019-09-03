import * as village from 'types/village'
import {Agent} from '../../constants/Agent'
import {ImagePath} from '../../constants/ImagePath'
import {Role} from '../../constants/Role'

const json: village.Payload$starMessage = {
  '@context': [
    village.BaseContext.Base,
    village.BaseContext.Star
  ],
  '@id': 'https://licos.online/state/0.2/village#3/starMessage',
  'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
  'date': 2,
  'directionality': village.Directionality.clientToServer,
  'extensionalDisclosureRange': [],
  'intensionalDisclosureRange': village.Channel.private,
  'myAgent': {
    '@context': village.Context.Agent,
    '@id': 'https://licos.online/state/0.2/village#3/myAgent',
    'id': 1,
    'image': ImagePath.Agent.a,
    'name': Agent.a,
    'role': {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/agent#1/role',
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
    '@id': 'https://licos.online/state/0.2/village#3/star',
    'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
    'isMarked': true,
    'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
    'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
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

export default json
