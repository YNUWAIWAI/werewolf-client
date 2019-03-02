/* global village */
/* eslint sort-keys: 0 */
const json: village.Payload$systemMessage = {
  '@context': [
    village.BaseContext.Base,
    village.BaseContext.VotingResult
  ],
  '@id': 'https://licos.online/state/0.2/village#3/systemMessage',

  'village': {
    '@context': village.Context.Village,
    '@id': 'https://licos.online/state/0.2/village',
    'chatSettings': {
      characterLimit: 140,
      limit: 10
    },
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
  'directionality': village.Directionality.serverToClient,
  'intensionalDisclosureRange': village.Channel.private,
  'extensionalDisclosureRange': [],

  'votingResultsSummary': [],
  'votingResultsDetails': [],

  'agent': [
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#0',
      'isMine': false,
      'name': {
        'en': 'Gert',
        'ja': 'ゲルト'
      },
      'image': 'https://werewolf.world/image/0.2/Gert.jpg',
      'id': 0,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#0/update',
        'phase': village.Phase.morning,
        'date': 1
      },
      'isAChoice': false
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#1',
      'isMine': true,
      'name': {
        'en': 'Walter',
        'ja': 'ヴァルター'
      },
      'image': 'https://werewolf.world/image/0.2/Walter.jpg',
      'id': 1,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#1/update',
        'phase': village.Phase.morning,
        'date': 1
      },
      'isAChoice': false
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#2',
      'isMine': false,
      'name': {
        'en': 'Moritz',
        'ja': 'モーリッツ'
      },
      'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
      'id': 2,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#2/update',
        'phase': village.Phase.morning,
        'date': 1
      },
      'isAChoice': false
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#3',
      'isMine': false,
      'name': {
        'en': 'Simson',
        'ja': 'ジムゾン'
      },
      'image': 'https://werewolf.world/image/0.2/Simson.jpg',
      'id': 3,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#3/update',
        'phase': village.Phase.morning,
        'date': 1
      },
      'isAChoice': false
    }
  ],

  'role': [
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#master',
      'isMine': false,
      'name': {
        'en': 'Master',
        'ja': 'マスター'
      },
      'image': 'https://werewolf.world/image/0.2/master.jpg',
      'numberOfAgents': 1,
      'board': []
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#villager',
      'isMine': true,
      'name': {
        'en': 'Villager',
        'ja': '村人'
      },
      'image': 'https://werewolf.world/image/0.2/villager.jpg',
      'numberOfAgents': 3,
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#1',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#1/agent#1',
            'id': 1,
            'name': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'image': 'https://werewolf.world/image/0.2/Walter.jpg'
          },
          'polarity': village.Polarity.positive,
          'phase': village.Phase.morning,
          'date': 1
        }
      ]
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#seer',
      'isMine': false,
      'name': {
        'en': 'Seer',
        'ja': '占い師'
      },
      'image': 'https://werewolf.world/image/0.2/seer.jpg',
      'numberOfAgents': 0,
      'board': []
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#medium',
      'isMine': false,
      'name': {
        'en': 'Medium',
        'ja': '霊媒師'
      },
      'image': 'https://werewolf.world/image/0.2/medium.jpg',
      'numberOfAgents': 0,
      'board': []
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
      'isMine': false,
      'name': {
        'en': 'Hunter',
        'ja': '狩人'
      },
      'image': 'https://werewolf.world/image/0.2/hunter.jpg',
      'numberOfAgents': 0,
      'board': []
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#mason',
      'isMine': false,
      'name': {
        'en': 'Mason',
        'ja': '共有者'
      },
      'image': 'https://werewolf.world/image/0.2/mason.jpg',
      'numberOfAgents': 0,
      'board': []
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#madman',
      'isMine': false,
      'name': {
        'en': 'Madman',
        'ja': '狂人'
      },
      'image': 'https://werewolf.world/image/0.2/madman.jpg',
      'numberOfAgents': 0,
      'board': []
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
      'isMine': false,
      'name': {
        'en': 'Werewolf',
        'ja': '人狼'
      },
      'image': 'https://werewolf.world/image/0.2/werewolf.jpg',
      'numberOfAgents': 1,
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#werewolf/board#1',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#werewolf/board#1/agent#1',
            'id': 1,
            'name': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'image': 'https://werewolf.world/image/0.2/Walter.jpg'
          },
          'polarity': village.Polarity.negative,
          'phase': village.Phase.morning,
          'date': 1
        }
      ]
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#werehamster',
      'isMine': false,
      'name': {
        'en': 'Werehamster',
        'ja': 'ハムスター人間'
      },
      'image': 'https://werewolf.world/image/0.2/werehamster.jpg',
      'numberOfAgents': 0,
      'board': []
    }
  ]
}

export default json
