/* global village */
const json: village.Payload$playerMessage = {
  '@context': [
    village.BaseContext.Base,
    village.BaseContext.Chat
  ],
  '@id': 'https://licos.online/state/0.2/village#3/playerMessage',
  'agent': {
    '@context': village.Context.Agent,
    '@id': 'https://licos.online/state/0.2/village#3/agent',
    'id': 1,
    'image': 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
    'name': {
      'en': 'Adil',
      'ja': 'アーディル'
    }
  },
  'characterLimit': 140,
  'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
  'counter': 7,
  'date': 1,
  'directionality': village.Directionality.serverToClient,
  'extensionalDisclosureRange': [],
  'id': 12,
  'intensionalDisclosureRange': village.Channel.public,
  'interval': '5s',
  'isMine': true,
  'isOver': false,
  'limit': 10,
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
