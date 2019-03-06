/* global village */
const json: village.Payload$systemMessage = {
  '@context': [
    village.BaseContext.Base,
    village.BaseContext.VotingResult
  ],
  '@id': 'https://licos.online/state/0.2/village#3/systemMessage',
  'agent': [
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#0',
      'id': 0,
      'image': 'https://werewolf.world/image/0.2/Gert.jpg',
      'isAChoice': false,
      'isMine': false,
      'name': {
        'en': 'Gert',
        'ja': 'ゲルト'
      },
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#0/update',
        'date': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#1',
      'id': 1,
      'image': 'https://werewolf.world/image/0.2/Walter.jpg',
      'isAChoice': false,
      'isMine': true,
      'name': {
        'en': 'Walter',
        'ja': 'ヴァルター'
      },
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#1/update',
        'date': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#2',
      'id': 2,
      'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
      'isAChoice': false,
      'isMine': false,
      'name': {
        'en': 'Moritz',
        'ja': 'モーリッツ'
      },
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#2/update',
        'date': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#3',
      'id': 3,
      'image': 'https://werewolf.world/image/0.2/Simson.jpg',
      'isAChoice': false,
      'isMine': false,
      'name': {
        'en': 'Simson',
        'ja': 'ジムゾン'
      },
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#3/update',
        'date': 1,
        'phase': village.Phase.morning
      }
    }
  ],
  'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
  'date': 1,
  'directionality': village.Directionality.serverToClient,
  'extensionalDisclosureRange': [],
  'intensionalDisclosureRange': village.Channel.private,
  'phase': village.Phase.morning,
  'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
  'phaseTimeLimit': 600,
  'role': [
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#master',
      'board': [],
      'image': 'https://werewolf.world/image/0.2/master.jpg',
      'isMine': false,
      'name': {
        'en': 'Master',
        'ja': 'マスター'
      },
      'numberOfAgents': 1
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#villager',
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#1',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#1/agent#1',
            'id': 1,
            'image': 'https://werewolf.world/image/0.2/Walter.jpg',
            'name': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': 'https://werewolf.world/image/0.2/villager.jpg',
      'isMine': true,
      'name': {
        'en': 'Villager',
        'ja': '村人'
      },
      'numberOfAgents': 3
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#seer',
      'board': [],
      'image': 'https://werewolf.world/image/0.2/seer.jpg',
      'isMine': false,
      'name': {
        'en': 'Seer',
        'ja': '占い師'
      },
      'numberOfAgents': 0
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#medium',
      'board': [],
      'image': 'https://werewolf.world/image/0.2/medium.jpg',
      'isMine': false,
      'name': {
        'en': 'Medium',
        'ja': '霊媒師'
      },
      'numberOfAgents': 0
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
      'board': [],
      'image': 'https://werewolf.world/image/0.2/hunter.jpg',
      'isMine': false,
      'name': {
        'en': 'Hunter',
        'ja': '狩人'
      },
      'numberOfAgents': 0
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#mason',
      'board': [],
      'image': 'https://werewolf.world/image/0.2/mason.jpg',
      'isMine': false,
      'name': {
        'en': 'Mason',
        'ja': '共有者'
      },
      'numberOfAgents': 0
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#madman',
      'board': [],
      'image': 'https://werewolf.world/image/0.2/madman.jpg',
      'isMine': false,
      'name': {
        'en': 'Madman',
        'ja': '狂人'
      },
      'numberOfAgents': 0
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#werewolf/board#1',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#werewolf/board#1/agent#1',
            'id': 1,
            'image': 'https://werewolf.world/image/0.2/Walter.jpg',
            'name': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': 'https://werewolf.world/image/0.2/werewolf.jpg',
      'isMine': false,
      'name': {
        'en': 'Werewolf',
        'ja': '人狼'
      },
      'numberOfAgents': 1
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#werehamster',
      'board': [],
      'image': 'https://werewolf.world/image/0.2/werehamster.jpg',
      'isMine': false,
      'name': {
        'en': 'Werehamster',
        'ja': 'ハムスター人間'
      },
      'numberOfAgents': 0
    }
  ],
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
  },
  'votingResultsDetails': [],
  'votingResultsSummary': []
}

export default json
