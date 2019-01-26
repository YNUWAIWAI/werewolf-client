/* global village */
/* eslint sort-keys: 0 */
const json: village.Payload$playerMessage = {
  '@context': [
    village.BaseContext.Base,
    village.BaseContext.Chat
  ],
  '@id': 'https://licos.online/state/0.2/village#3/playerMessage',

  'village': {
    '@context': village.Context.Village,
    '@id': 'https://licos.online/state/0.2/village',
    'id': 3,
    'lang': village.Language.ja,
    'name': '横国の森の奥にある時代に取り残された小さな村',
    'totalNumberOfAgents': 15
  },
  'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
  'phase': village.Phase.morning,
  'date': 1,
  'phaseTimeLimit': 600,
  'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
  'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
  'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
  'directionality': village.Directionality.clientToServer,
  'intensionalDisclosureRange': village.Channel.anonymousAudience,
  'extensionalDisclosureRange': [],

  'isMine': true,
  'text': {
    '@value': '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
    '@language': village.Language.ja
  },
  'characterLimit': 140,
  'isOver': false
}

export default json
