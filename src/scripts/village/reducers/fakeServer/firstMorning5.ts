/* global village */
const json: village.Payload$systemMessage = {
  '@context': [
    village.BaseContext.Base,
    village.BaseContext.VotingResult
  ],
  '@id': 'https://licos.online/state/0.2/village#29/systemMessage',
  'agent': [
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#29/agent#7',
      'id': 7,
      'image': 'https://werewolf.world/image/0.2/adil.jpg',
      'isAChoice': true,
      'isMine': false,
      'name': {
        'en': 'Adil'
      },
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#29/agent#7/update',
        'date': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#29/agent#5',
      'id': 5,
      'image': 'https://werewolf.world/image/0.2/fernando.jpg',
      'isAChoice': true,
      'isMine': false,
      'name': {
        'en': 'Fernando'
      },
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#29/agent#5/update',
        'date': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#29/agent#2',
      'id': 2,
      'image': 'https://werewolf.world/image/0.2/gavriil.jpg',
      'isAChoice': true,
      'isMine': false,
      'name': {
        'en': 'Gavriil'
      },
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#29/agent#2/update',
        'date': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#29/agent#4',
      'id': 4,
      'image': 'https://werewolf.world/image/0.2/henrik.jpg',
      'isAChoice': true,
      'isMine': false,
      'name': {
        'en': 'Henrik'
      },
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#29/agent#4/update',
        'date': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#29/agent#6',
      'id': 6,
      'image': 'https://werewolf.world/image/0.2/jasmin.jpg',
      'isAChoice': true,
      'isMine': false,
      'name': {
        'en': 'Jasmin'
      },
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#29/agent#6/update',
        'date': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#29/agent#3',
      'id': 3,
      'image': 'https://werewolf.world/image/0.2/oliwia.jpg',
      'isAChoice': true,
      'isMine': false,
      'name': {
        'en': 'Oliwia'
      },
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#29/agent#3/update',
        'date': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#29/agent#0',
      'id': 0,
      'image': 'https://werewolf.world/image/0.2/ryan.jpg',
      'isAChoice': false,
      'isMine': true,
      'name': {
        'en': 'Ryan'
      },
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#29/agent#0/update',
        'date': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#29/agent#1',
      'id': 1,
      'image': 'https://werewolf.world/image/0.2/susan.jpg',
      'isAChoice': true,
      'isMine': false,
      'name': {
        'en': 'Susan'
      },
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#29/agent#1/update',
        'date': 1,
        'phase': village.Phase.morning
      }
    }
  ],
  'clientTimestamp': '2019-02-02T17:31:19.865+09:00',
  'date': 1,
  'directionality': village.Directionality.serverToClient,
  'extensionalDisclosureRange': [],
  'intensionalDisclosureRange': village.Channel.public,
  'phase': village.Phase.morning,
  'phaseStartTime': '2019-02-02T17:31:19.865+09:00',
  'phaseTimeLimit': 10,
  'role': [
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#29/role#madman',
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#madman/board#0',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#madman/board#0/agent#0',
            'id': 0,
            'image': 'https://werewolf.world/image/0.2/ryan.jpg',
            'name': {
              'en': 'Ryan'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#6',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#6/agent#6',
            'id': 6,
            'image': 'https://werewolf.world/image/0.2/jasmin.jpg',
            'name': {
              'en': 'Jasmin'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': 'https://werewolf.world/image/0.2/madman.jpg',
      'isMine': false,
      'name': {
        'en': 'Madman'
      },
      'numberOfAgents': 1
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#29/role#mason',
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#0',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#0/agent#0',
            'id': 0,
            'image': 'https://werewolf.world/image/0.2/ryan.jpg',
            'name': {
              'en': 'Ryan'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.positive
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#1',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#1/agent#1',
            'id': 1,
            'image': 'https://werewolf.world/image/0.2/susan.jpg',
            'name': {
              'en': 'Susan'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#2',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#2/agent#2',
            'id': 2,
            'image': 'https://werewolf.world/image/0.2/gavriil.jpg',
            'name': {
              'en': 'Gavriil'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#3',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#3/agent#3',
            'id': 3,
            'image': 'https://werewolf.world/image/0.2/oliwia.jpg',
            'name': {
              'en': 'Oliwia'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#4',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#4/agent#4',
            'id': 4,
            'image': 'https://werewolf.world/image/0.2/henrik.jpg',
            'name': {
              'en': 'Henrik'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#5',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#5/agent#5',
            'id': 5,
            'image': 'https://werewolf.world/image/0.2/fernando.jpg',
            'name': {
              'en': 'Fernando'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#6',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#6/agent#6',
            'id': 6,
            'image': 'https://werewolf.world/image/0.2/jasmin.jpg',
            'name': {
              'en': 'Jasmin'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.positive
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#7',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#7/agent#7',
            'id': 7,
            'image': 'https://werewolf.world/image/0.2/adil.jpg',
            'name': {
              'en': 'Adil'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': 'https://werewolf.world/image/0.2/mason.jpg',
      'isMine': true,
      'name': {
        'en': 'Mason'
      },
      'numberOfAgents': 2
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#29/role#medium',
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#medium/board#0',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#medium/board#0/agent#0',
            'id': 0,
            'image': 'https://werewolf.world/image/0.2/ryan.jpg',
            'name': {
              'en': 'Ryan'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#6',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#6/agent#6',
            'id': 6,
            'image': 'https://werewolf.world/image/0.2/jasmin.jpg',
            'name': {
              'en': 'Jasmin'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': 'https://werewolf.world/image/0.2/medium.jpg',
      'isMine': false,
      'name': {
        'en': 'Medium'
      },
      'numberOfAgents': 1
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#29/role#seer',
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#seer/board#0',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#seer/board#0/agent#0',
            'id': 0,
            'image': 'https://werewolf.world/image/0.2/ryan.jpg',
            'name': {
              'en': 'Ryan'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#6',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#6/agent#6',
            'id': 6,
            'image': 'https://werewolf.world/image/0.2/jasmin.jpg',
            'name': {
              'en': 'Jasmin'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': 'https://werewolf.world/image/0.2/seer.jpg',
      'isMine': false,
      'name': {
        'en': 'Seer'
      },
      'numberOfAgents': 1
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#29/role#villager',
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#villager/board#0',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#villager/board#0/agent#0',
            'id': 0,
            'image': 'https://werewolf.world/image/0.2/ryan.jpg',
            'name': {
              'en': 'Ryan'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#1',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#1/agent#1',
            'id': 1,
            'image': 'https://werewolf.world/image/0.2/susan.jpg',
            'name': {
              'en': 'Susan'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.circle
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#2',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#2/agent#2',
            'id': 2,
            'image': 'https://werewolf.world/image/0.2/gavriil.jpg',
            'name': {
              'en': 'Gavriil'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.cross
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#3',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#3/agent#3',
            'id': 3,
            'image': 'https://werewolf.world/image/0.2/oliwia.jpg',
            'name': {
              'en': 'Oliwia'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.question
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#4',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#4/agent#4',
            'id': 4,
            'image': 'https://werewolf.world/image/0.2/henrik.jpg',
            'name': {
              'en': 'Henrik'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.triangle
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#6',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#6/agent#6',
            'id': 6,
            'image': 'https://werewolf.world/image/0.2/jasmin.jpg',
            'name': {
              'en': 'Jasmin'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': 'https://werewolf.world/image/0.2/villager.jpg',
      'isMine': false,
      'name': {
        'en': 'Villager'
      },
      'numberOfAgents': 1
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#29/role#werewolf',
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#werewolf/board#0',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#werewolf/board#0/agent#0',
            'id': 0,
            'image': 'https://werewolf.world/image/0.2/ryan.jpg',
            'name': {
              'en': 'Ryan'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#6',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#6/agent#6',
            'id': 6,
            'image': 'https://werewolf.world/image/0.2/jasmin.jpg',
            'name': {
              'en': 'Jasmin'
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
        'en': 'Werewolf'
      },
      'numberOfAgents': 2
    }
  ],
  'serverTimestamp': '2019-02-02T17:31:19.865+09:00',
  'token': '13bc61d8-9fce-492b-a528-ca8682ae1746',
  'village': {
    '@context': village.Context.Village,
    '@id': 'https://licos.online/state/0.2/village',
    'chatSettings': {
      '@context': village.Context.ChatSettings,
      '@id': 'https://licos.online/state/0.2/village#3/chatSettings',
      'characterLimit': 140,
      'limit': 10
    },
    'id': 29,
    'lang': village.Language.en,
    'name': 'Doubtful Village',
    'totalNumberOfAgents': 8
  },
  'votingResultsDetails': [],
  'votingResultsSummary': []
}

export default json
