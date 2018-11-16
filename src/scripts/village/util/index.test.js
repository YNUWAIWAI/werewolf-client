// @flow
import {
  getAgent,
  getMyAgent,
  getMyRole,
  getPlayableAgents,
  getPlayableRoles,
  getRole,
  getTeam,
  idGenerater,
  just,
  spaceSeparatedToCamelCase,
  strToMessage,
  strToRoleId,
  trimBaseUri,
  xor
} from './index'

describe('getAgent', () => {
  test('nominal', () => {
    const agents = [
      {
        '@id': 'https://werewolf.world/resource/0.2/Gert',
        'id': 0,
        'image': 'https://werewolf.world/image/0.2/Gert.jpg',
        'isAChoice': false,
        'isMine': false,
        'name': {
          'en': 'Gert',
          'ja': 'ゲルト'
        },
        'status': 'alive',
        'update': {
          'date': 1,
          'phase': 'morning'
        }
      },
      {
        '@id': 'https://werewolf.world/resource/0.2/Walter',
        'id': 1,
        'image': 'https://werewolf.world/image/0.2/Walter.jpg',
        'isAChoice': false,
        'isMine': true,
        'name': {
          'en': 'Walter',
          'ja': 'ヴァルター'
        },
        'status': 'alive',
        'update': {
          'date': 1,
          'phase': 'morning'
        }
      },
      {
        '@id': 'https://werewolf.world/resource/0.2/Catalina',
        'id': 10,
        'image': 'https://werewolf.world/image/0.2/Catalina.jpg',
        'isAChoice': false,
        'isMine': false,
        'name': {
          'en': 'Catalina',
          'ja': 'カタリナ'
        },
        'status': 'alive',
        'update': {
          'date': 1,
          'phase': 'morning'
        }
      },
      {
        '@id': 'https://werewolf.world/resource/0.2/Otto',
        'id': 11,
        'image': 'https://werewolf.world/image/0.2/Otto.jpg',
        'isAChoice': false,
        'isMine': false,
        'name': {
          'en': 'Otto',
          'ja': 'オットー'
        },
        'status': 'alive',
        'update': {
          'date': 1,
          'phase': 'morning'
        }
      }
    ]

    expect(getAgent(agents, 1)).toEqual({
      '@id': 'https://werewolf.world/resource/0.2/Walter',
      'id': 1,
      'image': 'https://werewolf.world/image/0.2/Walter.jpg',
      'isAChoice': false,
      'isMine': true,
      'name': {
        'en': 'Walter',
        'ja': 'ヴァルター'
      },
      'status': 'alive',
      'update': {
        'date': 1,
        'phase': 'morning'
      }
    })
  })
  test('throw Exception', () => {
    const agents = [
      {
        '@id': 'https://werewolf.world/resource/0.2/Gert',
        'id': 0,
        'image': 'https://werewolf.world/image/0.2/Gert.jpg',
        'isAChoice': false,
        'isMine': false,
        'name': {
          'en': 'Gert',
          'ja': 'ゲルト'
        },
        'status': 'alive',
        'update': {
          'date': 1,
          'phase': 'morning'
        }
      }
    ]

    expect(() => getAgent(agents, 1)).toThrow()
  })
})
describe('strToMessage', () => {
  test('boardMessage', () => {
    expect(strToMessage('https://licos.online/state/0.2/village#3/boardMessage')).toBe('boardMessage')
  })
  test('errorMessage', () => {
    expect(strToMessage('https://licos.online/state/0.2/village#3/errorMessage')).toBe('errorMessage')
  })
  test('playerMessage', () => {
    expect(strToMessage('https://licos.online/state/0.2/village#3/playerMessage')).toBe('playerMessage')
  })
  test('scrollMessage', () => {
    expect(strToMessage('https://licos.online/state/0.2/village#3/scrollMessage')).toBe('scrollMessage')
  })
  test('systemMessage', () => {
    expect(strToMessage('https://licos.online/state/0.2/village#3/systemMessage')).toBe('systemMessage')
  })
  test('voteMessage', () => {
    expect(strToMessage('https://licos.online/state/0.2/village#3/voteMessage')).toBe('voteMessage')
  })
  test('throw Exception', () => {
    expect(() => strToMessage('throw Exception')).toThrow()
  })
})
describe('getMyAgent', () => {
  test('nominal', () => {
    const agents = [
      {
        '@id': 'https://werewolf.world/resource/0.2/Gert',
        'id': 0,
        'image': 'https://werewolf.world/image/0.2/Gert.jpg',
        'isAChoice': false,
        'isMine': false,
        'name': {
          'en': 'Gert',
          'ja': 'ゲルト'
        },
        'status': 'alive',
        'update': {
          'date': 1,
          'phase': 'morning'
        }
      },
      {
        '@id': 'https://werewolf.world/resource/0.2/Walter',
        'id': 1,
        'image': 'https://werewolf.world/image/0.2/Walter.jpg',
        'isAChoice': false,
        'isMine': true,
        'name': {
          'en': 'Walter',
          'ja': 'ヴァルター'
        },
        'status': 'alive',
        'update': {
          'date': 1,
          'phase': 'morning'
        }
      },
      {
        '@id': 'https://werewolf.world/resource/0.2/Catalina',
        'id': 10,
        'image': 'https://werewolf.world/image/0.2/Catalina.jpg',
        'isAChoice': false,
        'isMine': false,
        'name': {
          'en': 'Catalina',
          'ja': 'カタリナ'
        },
        'status': 'alive',
        'update': {
          'date': 1,
          'phase': 'morning'
        }
      },
      {
        '@id': 'https://werewolf.world/resource/0.2/Otto',
        'id': 11,
        'image': 'https://werewolf.world/image/0.2/Otto.jpg',
        'isAChoice': false,
        'isMine': false,
        'name': {
          'en': 'Otto',
          'ja': 'オットー'
        },
        'status': 'alive',
        'update': {
          'date': 1,
          'phase': 'morning'
        }
      }
    ]

    expect(getMyAgent(agents)).toEqual({
      '@id': 'https://werewolf.world/resource/0.2/Walter',
      'id': 1,
      'image': 'https://werewolf.world/image/0.2/Walter.jpg',
      'isAChoice': false,
      'isMine': true,
      'name': {
        'en': 'Walter',
        'ja': 'ヴァルター'
      },
      'status': 'alive',
      'update': {
        'date': 1,
        'phase': 'morning'
      }
    })
  })
  test('throw Exception', () => {
    const agents = [
      {
        '@id': 'https://werewolf.world/resource/0.2/Gert',
        'id': 0,
        'image': 'https://werewolf.world/image/0.2/Gert.jpg',
        'isAChoice': false,
        'isMine': false,
        'name': {
          'en': 'Gert',
          'ja': 'ゲルト'
        },
        'status': 'alive',
        'update': {
          'date': 1,
          'phase': 'morning'
        }
      }
    ]

    expect(() => getMyAgent(agents)).toThrow()
  })
})
describe('getRole', () => {
  test('nominal', () => {
    const roles = [
      {
        '@context': 'https://werewolf.world/context/0.2/role.jsonld',
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
        '@context': 'https://werewolf.world/context/0.2/role.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/role#villager',
        'board': [
          {
            '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#1',
            'agent': {
              '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#1/agent#1',
              'id': 1,
              'image': 'https://werewolf.world/image/0.2/Walter.jpg',
              'name': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'date': 1,
            'phase': 'morning',
            'polarity': 'negative'
          }
        ],
        'image': 'https://werewolf.world/image/0.2/villager.jpg',
        'isMine': false,
        'name': {
          'en': 'Villager',
          'ja': '村人'
        },
        'numberOfAgents': 6
      },
      {
        '@context': 'https://werewolf.world/context/0.2/role.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
        'board': [
          {
            '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
            '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1',
            'agent': {
              '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1/agent#1',
              'id': 1,
              'image': 'https://werewolf.world/image/0.2/Walter.jpg',
              'name': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'date': 1,
            'phase': 'morning',
            'polarity': 'positive'
          }
        ],
        'image': 'https://werewolf.world/image/0.2/seer.jpg',
        'isMine': true,
        'name': {
          'en': 'Seer',
          'ja': '占い師'
        },
        'numberOfAgents': 1
      }
    ]

    expect(getRole(roles, 'seer')).toEqual(
      {
        '@context': 'https://werewolf.world/context/0.2/role.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
        'board': [
          {
            '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
            '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1',
            'agent': {
              '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1/agent#1',
              'id': 1,
              'image': 'https://werewolf.world/image/0.2/Walter.jpg',
              'name': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'date': 1,
            'phase': 'morning',
            'polarity': 'positive'
          }
        ],
        'image': 'https://werewolf.world/image/0.2/seer.jpg',
        'isMine': true,
        'name': {
          'en': 'Seer',
          'ja': '占い師'
        },
        'numberOfAgents': 1
      }
    )
  })
  test('throw Exception', () => {
    const roles = [
      {
        '@context': 'https://werewolf.world/context/0.2/role.jsonld',
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
        '@context': 'https://werewolf.world/context/0.2/role.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/role#villager',
        'board': [
          {
            '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#1',
            'agent': {
              '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#1/agent#1',
              'id': 1,
              'image': 'https://werewolf.world/image/0.2/Walter.jpg',
              'name': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'date': 1,
            'phase': 'morning',
            'polarity': 'negative'
          }
        ],
        'image': 'https://werewolf.world/image/0.2/villager.jpg',
        'isMine': false,
        'name': {
          'en': 'Villager',
          'ja': '村人'
        },
        'numberOfAgents': 6
      }
    ]

    expect(() => getRole(roles, 'seer')).toThrow()
  })
})
describe('getMyRole', () => {
  test('nominal', () => {
    const roles = [
      {
        '@context': 'https://werewolf.world/context/0.2/role.jsonld',
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
        '@context': 'https://werewolf.world/context/0.2/role.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/role#villager',
        'board': [
          {
            '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#1',
            'agent': {
              '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#1/agent#1',
              'id': 1,
              'image': 'https://werewolf.world/image/0.2/Walter.jpg',
              'name': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'date': 1,
            'phase': 'morning',
            'polarity': 'negative'
          }
        ],
        'image': 'https://werewolf.world/image/0.2/villager.jpg',
        'isMine': false,
        'name': {
          'en': 'Villager',
          'ja': '村人'
        },
        'numberOfAgents': 6
      },
      {
        '@context': 'https://werewolf.world/context/0.2/role.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
        'board': [
          {
            '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
            '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1',
            'agent': {
              '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1/agent#1',
              'id': 1,
              'image': 'https://werewolf.world/image/0.2/Walter.jpg',
              'name': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'date': 1,
            'phase': 'morning',
            'polarity': 'positive'
          }
        ],
        'image': 'https://werewolf.world/image/0.2/seer.jpg',
        'isMine': true,
        'name': {
          'en': 'Seer',
          'ja': '占い師'
        },
        'numberOfAgents': 1
      }
    ]

    expect(getMyRole(roles)).toEqual(
      {
        '@context': 'https://werewolf.world/context/0.2/role.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
        'board': [
          {
            '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
            '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1',
            'agent': {
              '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1/agent#1',
              'id': 1,
              'image': 'https://werewolf.world/image/0.2/Walter.jpg',
              'name': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'date': 1,
            'phase': 'morning',
            'polarity': 'positive'
          }
        ],
        'image': 'https://werewolf.world/image/0.2/seer.jpg',
        'isMine': true,
        'name': {
          'en': 'Seer',
          'ja': '占い師'
        },
        'numberOfAgents': 1
      }
    )
  })
  test('throw Exception', () => {
    const roles = [
      {
        '@context': 'https://werewolf.world/context/0.2/role.jsonld',
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
        '@context': 'https://werewolf.world/context/0.2/role.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/role#villager',
        'board': [
          {
            '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#1',
            'agent': {
              '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#1/agent#1',
              'id': 1,
              'image': 'https://werewolf.world/image/0.2/Walter.jpg',
              'name': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'date': 1,
            'phase': 'morning',
            'polarity': 'negative'
          }
        ],
        'image': 'https://werewolf.world/image/0.2/villager.jpg',
        'isMine': false,
        'name': {
          'en': 'Villager',
          'ja': '村人'
        },
        'numberOfAgents': 6
      }
    ]

    expect(() => getMyRole(roles)).toThrow()
  })
})
test('getPlayableAgents', () => {
  const agents = [
    {
      '@id': 'https://werewolf.world/resource/0.2/Gert',
      'id': 0,
      'image': 'https://werewolf.world/image/0.2/Gert.jpg',
      'isAChoice': false,
      'isMine': false,
      'name': {
        'en': 'Gert',
        'ja': 'ゲルト'
      },
      'status': 'alive',
      'update': {
        'date': 1,
        'phase': 'morning'
      }
    },
    {
      '@id': 'https://werewolf.world/resource/0.2/Walter',
      'id': 1,
      'image': 'https://werewolf.world/image/0.2/Walter.jpg',
      'isAChoice': false,
      'isMine': true,
      'name': {
        'en': 'Walter',
        'ja': 'ヴァルター'
      },
      'status': 'alive',
      'update': {
        'date': 1,
        'phase': 'morning'
      }
    },
    {
      '@id': 'https://werewolf.world/resource/0.2/Catalina',
      'id': 10,
      'image': 'https://werewolf.world/image/0.2/Catalina.jpg',
      'isAChoice': false,
      'isMine': false,
      'name': {
        'en': 'Catalina',
        'ja': 'カタリナ'
      },
      'status': 'alive',
      'update': {
        'date': 1,
        'phase': 'morning'
      }
    },
    {
      '@id': 'https://werewolf.world/resource/0.2/Otto',
      'id': 11,
      'image': 'https://werewolf.world/image/0.2/Otto.jpg',
      'isAChoice': false,
      'isMine': false,
      'name': {
        'en': 'Otto',
        'ja': 'オットー'
      },
      'status': 'alive',
      'update': {
        'date': 1,
        'phase': 'morning'
      }
    }
  ]

  expect(getPlayableAgents(agents)).toEqual([
    {
      '@id': 'https://werewolf.world/resource/0.2/Gert',
      'id': 0,
      'image': 'https://werewolf.world/image/0.2/Gert.jpg',
      'isAChoice': false,
      'isMine': false,
      'name': {
        'en': 'Gert',
        'ja': 'ゲルト'
      },
      'status': 'alive',
      'update': {
        'date': 1,
        'phase': 'morning'
      }
    },
    {
      '@id': 'https://werewolf.world/resource/0.2/Walter',
      'id': 1,
      'image': 'https://werewolf.world/image/0.2/Walter.jpg',
      'isAChoice': false,
      'isMine': true,
      'name': {
        'en': 'Walter',
        'ja': 'ヴァルター'
      },
      'status': 'alive',
      'update': {
        'date': 1,
        'phase': 'morning'
      }
    },
    {
      '@id': 'https://werewolf.world/resource/0.2/Catalina',
      'id': 10,
      'image': 'https://werewolf.world/image/0.2/Catalina.jpg',
      'isAChoice': false,
      'isMine': false,
      'name': {
        'en': 'Catalina',
        'ja': 'カタリナ'
      },
      'status': 'alive',
      'update': {
        'date': 1,
        'phase': 'morning'
      }
    },
    {
      '@id': 'https://werewolf.world/resource/0.2/Otto',
      'id': 11,
      'image': 'https://werewolf.world/image/0.2/Otto.jpg',
      'isAChoice': false,
      'isMine': false,
      'name': {
        'en': 'Otto',
        'ja': 'オットー'
      },
      'status': 'alive',
      'update': {
        'date': 1,
        'phase': 'morning'
      }
    }
  ])
})
test('getPlayableRoles', () => {
  const roles = [
    {
      '@context': 'https://werewolf.world/context/0.2/role.jsonld',
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
      '@context': 'https://werewolf.world/context/0.2/role.jsonld',
      '@id': 'https://licos.online/state/0.2/village#3/role#villager',
      'board': [
        {
          '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#1',
          'agent': {
            '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#1/agent#1',
            'id': 1,
            'image': 'https://werewolf.world/image/0.2/Walter.jpg',
            'name': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            }
          },
          'date': 1,
          'phase': 'morning',
          'polarity': 'negative'
        }
      ],
      'image': 'https://werewolf.world/image/0.2/villager.jpg',
      'isMine': false,
      'name': {
        'en': 'Villager',
        'ja': '村人'
      },
      'numberOfAgents': 6
    },
    {
      '@context': 'https://werewolf.world/context/0.2/role.jsonld',
      '@id': 'https://licos.online/state/0.2/village#3/role#seer',
      'board': [
        {
          '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
          '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1',
          'agent': {
            '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
            '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1/agent#1',
            'id': 1,
            'image': 'https://werewolf.world/image/0.2/Walter.jpg',
            'name': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            }
          },
          'date': 1,
          'phase': 'morning',
          'polarity': 'positive'
        }
      ],
      'image': 'https://werewolf.world/image/0.2/seer.jpg',
      'isMine': true,
      'name': {
        'en': 'Seer',
        'ja': '占い師'
      },
      'numberOfAgents': 1
    }
  ]

  expect(getPlayableRoles(roles)).toEqual([
    {
      '@context': 'https://werewolf.world/context/0.2/role.jsonld',
      '@id': 'https://licos.online/state/0.2/village#3/role#villager',
      'board': [
        {
          '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#1',
          'agent': {
            '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#1/agent#1',
            'id': 1,
            'image': 'https://werewolf.world/image/0.2/Walter.jpg',
            'name': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            }
          },
          'date': 1,
          'phase': 'morning',
          'polarity': 'negative'
        }
      ],
      'image': 'https://werewolf.world/image/0.2/villager.jpg',
      'isMine': false,
      'name': {
        'en': 'Villager',
        'ja': '村人'
      },
      'numberOfAgents': 6
    },
    {
      '@context': 'https://werewolf.world/context/0.2/role.jsonld',
      '@id': 'https://licos.online/state/0.2/village#3/role#seer',
      'board': [
        {
          '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
          '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1',
          'agent': {
            '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
            '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1/agent#1',
            'id': 1,
            'image': 'https://werewolf.world/image/0.2/Walter.jpg',
            'name': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            }
          },
          'date': 1,
          'phase': 'morning',
          'polarity': 'positive'
        }
      ],
      'image': 'https://werewolf.world/image/0.2/seer.jpg',
      'isMine': true,
      'name': {
        'en': 'Seer',
        'ja': '占い師'
      },
      'numberOfAgents': 1
    }
  ])
})
describe('strToRoleId', () => {
  test('Villager', () => {
    expect(strToRoleId('Villager')).toBe('villager')
  })
  test('Seer', () => {
    expect(strToRoleId('Seer')).toBe('seer')
  })
  test('Medium', () => {
    expect(strToRoleId('Medium')).toBe('medium')
  })
  test('Hunter', () => {
    expect(strToRoleId('Hunter')).toBe('hunter')
  })
  test('Mason', () => {
    expect(strToRoleId('Mason')).toBe('mason')
  })
  test('Madman', () => {
    expect(strToRoleId('Madman')).toBe('madman')
  })
  test('Werewolf', () => {
    expect(strToRoleId('Werewolf')).toBe('werewolf')
  })
  test('Werehamster', () => {
    expect(strToRoleId('Werehamster')).toBe('werehamster')
  })
  test('Unexpected Value', () => {
    expect(() => strToRoleId('Unexpected')).toThrow()
  })
})
describe('getTeam', () => {
  test('Villager', () => {
    expect(getTeam('villager')).toBe('villager')
  })
  test('Seer', () => {
    expect(getTeam('seer')).toBe('villager')
  })
  test('Medium', () => {
    expect(getTeam('medium')).toBe('villager')
  })
  test('Hunter', () => {
    expect(getTeam('hunter')).toBe('villager')
  })
  test('Mason', () => {
    expect(getTeam('mason')).toBe('villager')
  })
  test('Madman', () => {
    expect(getTeam('madman')).toBe('werewolf')
  })
  test('Werewolf', () => {
    expect(getTeam('werewolf')).toBe('werewolf')
  })
  test('Werehamster', () => {
    expect(getTeam('werehamster')).toBe('werehamster')
  })
})
test('idGenerater', () => {
  const generateId = idGenerater('id')

  expect(generateId()).toBe('id0')
  expect(generateId()).toBe('id1')
  expect(generateId()).toBe('id2')
})
test('just', () => {
  expect(just('just')).toBe('just')
  expect(() => just(null)).toThrow()
  expect(() => just(undefined)).toThrow()
})
test('spaceSeparatedToCamelCase', () => {
  expect(spaceSeparatedToCamelCase('space separated')).toBe('spaceSeparated')
  expect(spaceSeparatedToCamelCase('space sepa rated')).toBe('spaceSepaRated')
  expect(spaceSeparatedToCamelCase(' space sepa rated ')).toBe('spaceSepaRated')
})
test('trimBaseUri', () => {
  expect(trimBaseUri('https://werewolf.world/resource/target')).toBe('target')
})
test('xor', () => {
  expect(xor(true, true)).toBe(false)
  expect(xor(false, true)).toBe(true)
  expect(xor(true, false)).toBe(true)
  expect(xor(false, false)).toBe(false)
})
