// @flow
/* eslint sort-keys: 0 */
export default {
  '@context': [
    'https://werewolf.world/context/0.2/base.jsonld',
    'https://werewolf.world/context/0.2/chat.jsonld'
  ],
  '@id': 'https://werewolf.world/resource/0.2/playerMessage',
  'villageId': 3,
  'villageName': '横国の森の奥にある時代に取り残された小さな村',
  'totalNumberOfAgents': 15,
  'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
  'phase': 'morning',
  'date': 1,
  'phaseTimeLimit': 600,
  'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
  'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
  'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
  'directionality': 'server to client',
  'intensionalDisclosureRange': 'public',
  'extensionalDisclosureRange': [],

  'chatAgent': {
    '@id': 'https://werewolf.world/resource/0.2/Walter',
    'chatAgentId': 1,
    'chatAgentName': {
      'en': 'Walter',
      'ja': 'ヴァルター'
    },
    'chatAgentImage': 'https://werewolf.world/image/0.2/Walter.jpg'
  },
  'chatIsMine': true,
  'chatId': 12,
  'chatCounter': 7,
  'chatLimit': 10,
  'chatInterval': '5s',
  'chatText': '>>11\nそれで、あなたは人狼が誰だと思うの？\n\n私はパメラが人狼だと思う。',
  'chatCharacterLimit': 140,
  'chatLanguage': 'ja',
  'chatIsOver': false
}
