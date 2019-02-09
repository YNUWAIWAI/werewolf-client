/* global village */
/* eslint sort-keys: 0 */
const json: village.Payload$systemMessage = {
  'extensionalDisclosureRange': [],
  'phase': village.Phase.morning,
  'date': 1,
  'phaseStartTime': '2019-02-02T17:31:19.865+09:00',
  'serverTimestamp': '2019-02-02T17:31:19.865+09:00',
  'directionality': village.Directionality.serverToClient,
  'phaseTimeLimit': 10,
  'clientTimestamp': '',
  '@context': [
    village.BaseContext.Base,
    village.BaseContext.VotingResult
  ],
  'token': '13bc61d8-9fce-492b-a528-ca8682ae1746',
  'intensionalDisclosureRange': village.Channel.public,
  'votingResultsDetails': [],
  '@id': 'https://licos.online/state/0.2/village#29/systemMessage',
  'village': {
    '@context': village.Context.Village,
    '@id': 'https://licos.online/state/0.2/village',
    'id': 29,
    'name': 'Doubtful Village',
    'totalNumberOfAgents': 8,
    'lang': village.Language.en
  },
  'votingResultsSummary': [],
  'agent': [
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#29/agent#7',
      'id': 7,
      'name': {
        'en': 'Adil'
      },
      'image': 'https://werewolf.world/image/0.2/adil.jpg',
      'isMine': false,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#29/agent#7/update',
        'phase': village.Phase.morning,
        'date': 1
      },
      'isAChoice': true
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#29/agent#5',
      'id': 5,
      'name': {
        'en': 'Fernando'
      },
      'image': 'https://werewolf.world/image/0.2/fernando.jpg',
      'isMine': false,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#29/agent#5/update',
        'phase': village.Phase.morning,
        'date': 1
      },
      'isAChoice': true
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#29/agent#2',
      'id': 2,
      'name': {
        'en': 'Gavriil'
      },
      'image': 'https://werewolf.world/image/0.2/gavriil.jpg',
      'isMine': false,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#29/agent#2/update',
        'phase': village.Phase.morning,
        'date': 1
      },
      'isAChoice': true
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#29/agent#4',
      'id': 4,
      'name': {
        'en': 'Henrik'
      },
      'image': 'https://werewolf.world/image/0.2/henrik.jpg',
      'isMine': false,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#29/agent#4/update',
        'phase': village.Phase.morning,
        'date': 1
      },
      'isAChoice': true
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#29/agent#6',
      'id': 6,
      'name': {
        'en': 'Jasmin'
      },
      'image': 'https://werewolf.world/image/0.2/jasmin.jpg',
      'isMine': false,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#29/agent#6/update',
        'phase': village.Phase.morning,
        'date': 1
      },
      'isAChoice': true
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#29/agent#3',
      'id': 3,
      'name': {
        'en': 'Oliwia'
      },
      'image': 'https://werewolf.world/image/0.2/oliwia.jpg',
      'isMine': false,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#29/agent#3/update',
        'phase': village.Phase.morning,
        'date': 1
      },
      'isAChoice': true
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#29/agent#0',
      'id': 0,
      'name': {
        'en': 'Ryan'
      },
      'image': 'https://werewolf.world/image/0.2/ryan.jpg',
      'isMine': true,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#29/agent#0/update',
        'phase': village.Phase.morning,
        'date': 1
      },
      'isAChoice': false
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#29/agent#1',
      'id': 1,
      'name': {
        'en': 'Susan'
      },
      'image': 'https://werewolf.world/image/0.2/susan.jpg',
      'isMine': false,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#29/agent#1/update',
        'phase': village.Phase.morning,
        'date': 1
      },
      'isAChoice': true
    }
  ],
  'role': [
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#29/role#madman',
      'name': {
        'en': 'Madman'
      },
      'image': 'https://werewolf.world/image/0.2/madman.jpg',
      'isMine': false,
      'numberOfAgents': 1,
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#madman/board#0',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#madman/board#0/agent#0',
            'id': 0,
            'name': {
              'en': 'Ryan'
            },
            'image': 'https://werewolf.world/image/0.2/ryan.jpg'
          },
          'polarity': village.Polarity.negative,
          'phase': village.Phase.morning,
          'date': 1
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#6',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#6/agent#6',
            'id': 6,
            'name': {
              'en': 'Jasmin'
            },
            'image': 'https://werewolf.world/image/0.2/jasmin.jpg'
          },
          'polarity': village.Polarity.negative,
          'phase': village.Phase.morning,
          'date': 1
        }
      ]
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#29/role#mason',
      'name': {
        'en': 'Mason'
      },
      'image': 'https://werewolf.world/image/0.2/mason.jpg',
      'isMine': true,
      'numberOfAgents': 2,
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#0',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#0/agent#0',
            'id': 0,
            'name': {
              'en': 'Ryan'
            },
            'image': 'https://werewolf.world/image/0.2/ryan.jpg'
          },
          'polarity': village.Polarity.positive,
          'phase': village.Phase.morning,
          'date': 1
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#1',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#1/agent#1',
            'id': 1,
            'name': {
              'en': 'Susan'
            },
            'image': 'https://werewolf.world/image/0.2/susan.jpg'
          },
          'polarity': village.Polarity.negative,
          'phase': village.Phase.morning,
          'date': 1
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#2',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#2/agent#2',
            'id': 2,
            'name': {
              'en': 'Gavriil'
            },
            'image': 'https://werewolf.world/image/0.2/gavriil.jpg'
          },
          'polarity': village.Polarity.negative,
          'phase': village.Phase.morning,
          'date': 1
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#3',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#3/agent#3',
            'id': 3,
            'name': {
              'en': 'Oliwia'
            },
            'image': 'https://werewolf.world/image/0.2/oliwia.jpg'
          },
          'polarity': village.Polarity.negative,
          'phase': village.Phase.morning,
          'date': 1
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#4',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#4/agent#4',
            'id': 4,
            'name': {
              'en': 'Henrik'
            },
            'image': 'https://werewolf.world/image/0.2/henrik.jpg'
          },
          'polarity': village.Polarity.negative,
          'phase': village.Phase.morning,
          'date': 1
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#5',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#5/agent#5',
            'id': 5,
            'name': {
              'en': 'Fernando'
            },
            'image': 'https://werewolf.world/image/0.2/fernando.jpg'
          },
          'polarity': village.Polarity.negative,
          'phase': village.Phase.morning,
          'date': 1
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#6',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#6/agent#6',
            'id': 6,
            'name': {
              'en': 'Jasmin'
            },
            'image': 'https://werewolf.world/image/0.2/jasmin.jpg'
          },
          'polarity': village.Polarity.positive,
          'phase': village.Phase.morning,
          'date': 1
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#7',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#7/agent#7',
            'id': 7,
            'name': {
              'en': 'Adil'
            },
            'image': 'https://werewolf.world/image/0.2/adil.jpg'
          },
          'polarity': village.Polarity.negative,
          'phase': village.Phase.morning,
          'date': 1
        }
      ]
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#29/role#medium',
      'name': {
        'en': 'Medium'
      },
      'image': 'https://werewolf.world/image/0.2/medium.jpg',
      'isMine': false,
      'numberOfAgents': 1,
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#medium/board#0',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#medium/board#0/agent#0',
            'id': 0,
            'name': {
              'en': 'Ryan'
            },
            'image': 'https://werewolf.world/image/0.2/ryan.jpg'
          },
          'polarity': village.Polarity.negative,
          'phase': village.Phase.morning,
          'date': 1
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#6',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#6/agent#6',
            'id': 6,
            'name': {
              'en': 'Jasmin'
            },
            'image': 'https://werewolf.world/image/0.2/jasmin.jpg'
          },
          'polarity': village.Polarity.negative,
          'phase': village.Phase.morning,
          'date': 1
        }
      ]
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#29/role#seer',
      'name': {
        'en': 'Seer'
      },
      'image': 'https://werewolf.world/image/0.2/seer.jpg',
      'isMine': false,
      'numberOfAgents': 1,
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#seer/board#0',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#seer/board#0/agent#0',
            'id': 0,
            'name': {
              'en': 'Ryan'
            },
            'image': 'https://werewolf.world/image/0.2/ryan.jpg'
          },
          'polarity': village.Polarity.negative,
          'phase': village.Phase.morning,
          'date': 1
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#6',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#6/agent#6',
            'id': 6,
            'name': {
              'en': 'Jasmin'
            },
            'image': 'https://werewolf.world/image/0.2/jasmin.jpg'
          },
          'polarity': village.Polarity.negative,
          'phase': village.Phase.morning,
          'date': 1
        }
      ]
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#29/role#villager',
      'name': {
        'en': 'Villager'
      },
      'image': 'https://werewolf.world/image/0.2/villager.jpg',
      'isMine': false,
      'numberOfAgents': 1,
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#villager/board#0',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#villager/board#0/agent#0',
            'id': 0,
            'name': {
              'en': 'Ryan'
            },
            'image': 'https://werewolf.world/image/0.2/ryan.jpg'
          },
          'polarity': village.Polarity.negative,
          'phase': village.Phase.morning,
          'date': 1
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#1',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#1/agent#1',
            'id': 1,
            'name': {
              'en': 'Susan'
            },
            'image': 'https://werewolf.world/image/0.2/susan.jpg'
          },
          'polarity': village.Polarity.circle,
          'phase': village.Phase.morning,
          'date': 1
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#2',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#2/agent#2',
            'id': 2,
            'name': {
              'en': 'Gavriil'
            },
            'image': 'https://werewolf.world/image/0.2/gavriil.jpg'
          },
          'polarity': village.Polarity.cross,
          'phase': village.Phase.morning,
          'date': 1
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#3',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#3/agent#3',
            'id': 3,
            'name': {
              'en': 'Oliwia'
            },
            'image': 'https://werewolf.world/image/0.2/oliwia.jpg'
          },
          'polarity': village.Polarity.question,
          'phase': village.Phase.morning,
          'date': 1
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#4',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#4/agent#4',
            'id': 4,
            'name': {
              'en': 'Henrik'
            },
            'image': 'https://werewolf.world/image/0.2/henrik.jpg'
          },
          'polarity': village.Polarity.triangle,
          'phase': village.Phase.morning,
          'date': 1
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#6',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#6/agent#6',
            'id': 6,
            'name': {
              'en': 'Jasmin'
            },
            'image': 'https://werewolf.world/image/0.2/jasmin.jpg'
          },
          'polarity': village.Polarity.negative,
          'phase': village.Phase.morning,
          'date': 1
        }
      ]
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#29/role#werewolf',
      'name': {
        'en': 'Werewolf'
      },
      'image': 'https://werewolf.world/image/0.2/werewolf.jpg',
      'isMine': false,
      'numberOfAgents': 2,
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#werewolf/board#0',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#werewolf/board#0/agent#0',
            'id': 0,
            'name': {
              'en': 'Ryan'
            },
            'image': 'https://werewolf.world/image/0.2/ryan.jpg'
          },
          'polarity': village.Polarity.negative,
          'phase': village.Phase.morning,
          'date': 1
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#6',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#6/agent#6',
            'id': 6,
            'name': {
              'en': 'Jasmin'
            },
            'image': 'https://werewolf.world/image/0.2/jasmin.jpg'
          },
          'polarity': village.Polarity.negative,
          'phase': village.Phase.morning,
          'date': 1
        }
      ]
    }
  ]
}

export default json
