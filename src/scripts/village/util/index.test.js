// @flow
import {
  getMyAgent,
  getMyRole,
  getPlayableAgents,
  getPlayableRoles,
  idGenerater,
  just,
  spaceSeparatedToCamelCase,
  trimBaseUri,
  xor
} from './index'

test('getMyAgent', () => {
  const agents = [
    {
      '@id': 'https://werewolf.world/resource/0.1/Gert',
      'agentIsMine': false,
      'id': 0,
      'image': 'https://werewolf.world/image/0.1/Gert.jpg',
      'isAChoice': false,
      'name': {
        'en': 'Gert',
        'ja': 'ゲルト'
      },
      'status': 'alive',
      'statusUpdateDate': 1,
      'statusUpdatePhase': 'day conversation'
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Walter',
      'agentIsMine': true,
      'id': 1,
      'image': 'https://werewolf.world/image/0.1/Walter.jpg',
      'isAChoice': false,
      'name': {
        'en': 'Walter',
        'ja': 'ヴァルター'
      },
      'status': 'alive',
      'statusUpdateDate': 1,
      'statusUpdatePhase': 'day conversation'
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Catalina',
      'agentIsMine': false,
      'id': 10,
      'image': 'https://werewolf.world/image/0.1/Catalina.jpg',
      'isAChoice': false,
      'name': {
        'en': 'Catalina',
        'ja': 'カタリナ'
      },
      'status': 'alive',
      'statusUpdateDate': 1,
      'statusUpdatePhase': 'day conversation'
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Otto',
      'agentIsMine': false,
      'id': 11,
      'image': 'https://werewolf.world/image/0.1/Otto.jpg',
      'isAChoice': false,
      'name': {
        'en': 'Otto',
        'ja': 'オットー'
      },
      'status': 'alive',
      'statusUpdateDate': 1,
      'statusUpdatePhase': 'day conversation'
    }
  ]

  expect(getMyAgent(agents)).toEqual({
    '@id': 'https://werewolf.world/resource/0.1/Walter',
    'agentIsMine': true,
    'id': 1,
    'image': 'https://werewolf.world/image/0.1/Walter.jpg',
    'isAChoice': false,
    'name': {
      'en': 'Walter',
      'ja': 'ヴァルター'
    },
    'status': 'alive',
    'statusUpdateDate': 1,
    'statusUpdatePhase': 'day conversation'
  })
})
test('getMyRole', () => {
  const roles = [
    {
      '@id': 'https://werewolf.world/resource/0.1/master',
      'board': [],
      'image': 'https://werewolf.world/image/0.1/master.jpg',
      'name': {
        'en': 'Master',
        'ja': 'マスター'
      },
      'numberOfAgents': 1,
      'roleIsMine': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/villager',
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg',
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            }
          },
          'boardDate': 1,
          'boardPhase': 'day conversation',
          'boardPolarity': 'negative'
        }
      ],
      'image': 'https://werewolf.world/image/0.1/villager.jpg',
      'name': {
        'en': 'Villager',
        'ja': '村人'
      },
      'numberOfAgents': 6,
      'roleIsMine': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/seer',
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg',
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            }
          },
          'boardDate': 1,
          'boardPhase': 'day conversation',
          'boardPolarity': 'positive'
        }
      ],
      'image': 'https://werewolf.world/image/0.1/seer.jpg',
      'name': {
        'en': 'Seer',
        'ja': '占い師'
      },
      'numberOfAgents': 1,
      'roleIsMine': true
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/medium',
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg',
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            }
          },
          'boardDate': 1,
          'boardPhase': 'day conversation',
          'boardPolarity': 'negative',
        }
      ],
      'image': 'https://werewolf.world/image/0.1/medium.jpg',
      'name': {
        'en': 'Medium',
        'ja': '霊媒師'
      },
      'numberOfAgents': 1,
      'roleIsMine': false
    }
  ]

  expect(getMyRole(roles)).toEqual({
    '@id': 'https://werewolf.world/resource/0.1/seer',
    'board': [
      {
        'boardAgent': {
          '@id': 'https://werewolf.world/resource/0.1/Walter',
          'boardAgentId': 1,
          'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg',
          'boardAgentName': {
            'en': 'Walter',
            'ja': 'ヴァルター'
          }
        },
        'boardDate': 1,
        'boardPhase': 'day conversation',
        'boardPolarity': 'positive'
      }
    ],
    'image': 'https://werewolf.world/image/0.1/seer.jpg',
    'name': {
      'en': 'Seer',
      'ja': '占い師'
    },
    'numberOfAgents': 1,
    'roleIsMine': true
  })
})
test('getPlayableAgents', () => {
  const agents = [
    {
      '@id': 'https://werewolf.world/resource/0.1/Gert',
      'agentIsMine': false,
      'id': 0,
      'image': 'https://werewolf.world/image/0.1/Gert.jpg',
      'isAChoice': false,
      'name': {
        'en': 'Gert',
        'ja': 'ゲルト'
      },
      'status': 'alive',
      'statusUpdateDate': 1,
      'statusUpdatePhase': 'day conversation'
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Walter',
      'agentIsMine': true,
      'id': 1,
      'image': 'https://werewolf.world/image/0.1/Walter.jpg',
      'isAChoice': false,
      'name': {
        'en': 'Walter',
        'ja': 'ヴァルター'
      },
      'status': 'alive',
      'statusUpdateDate': 1,
      'statusUpdatePhase': 'day conversation'
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Catalina',
      'agentIsMine': false,
      'id': 10,
      'image': 'https://werewolf.world/image/0.1/Catalina.jpg',
      'isAChoice': false,
      'name': {
        'en': 'Catalina',
        'ja': 'カタリナ'
      },
      'status': 'alive',
      'statusUpdateDate': 1,
      'statusUpdatePhase': 'day conversation'
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Otto',
      'agentIsMine': false,
      'id': 11,
      'image': 'https://werewolf.world/image/0.1/Otto.jpg',
      'isAChoice': false,
      'name': {
        'en': 'Otto',
        'ja': 'オットー'
      },
      'status': 'alive',
      'statusUpdateDate': 1,
      'statusUpdatePhase': 'day conversation'
    }
  ]

  expect(getPlayableAgents(agents)).toEqual([
    {
      '@id': 'https://werewolf.world/resource/0.1/Walter',
      'agentIsMine': true,
      'id': 1,
      'image': 'https://werewolf.world/image/0.1/Walter.jpg',
      'isAChoice': false,
      'name': {
        'en': 'Walter',
        'ja': 'ヴァルター'
      },
      'status': 'alive',
      'statusUpdateDate': 1,
      'statusUpdatePhase': 'day conversation'
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Otto',
      'agentIsMine': false,
      'id': 11,
      'image': 'https://werewolf.world/image/0.1/Otto.jpg',
      'isAChoice': false,
      'name': {
        'en': 'Otto',
        'ja': 'オットー'
      },
      'status': 'alive',
      'statusUpdateDate': 1,
      'statusUpdatePhase': 'day conversation'
    }
  ])
})
test('getPlayableRoles', () => {
  const roles = [
    {
      '@id': 'https://werewolf.world/resource/0.1/master',
      'board': [],
      'image': 'https://werewolf.world/image/0.1/master.jpg',
      'name': {
        'en': 'Master',
        'ja': 'マスター'
      },
      'numberOfAgents': 1,
      'roleIsMine': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/villager',
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg',
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            }
          },
          'boardDate': 1,
          'boardPhase': 'day conversation',
          'boardPolarity': 'negative'
        }
      ],
      'image': 'https://werewolf.world/image/0.1/villager.jpg',
      'name': {
        'en': 'Villager',
        'ja': '村人'
      },
      'numberOfAgents': 6,
      'roleIsMine': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/seer',
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg',
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            }
          },
          'boardDate': 1,
          'boardPhase': 'day conversation',
          'boardPolarity': 'positive'
        }
      ],
      'image': 'https://werewolf.world/image/0.1/seer.jpg',
      'name': {
        'en': 'Seer',
        'ja': '占い師'
      },
      'numberOfAgents': 1,
      'roleIsMine': true
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/medium',
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg',
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            }
          },
          'boardDate': 1,
          'boardPhase': 'day conversation',
          'boardPolarity': 'negative'
        }
      ],
      'image': 'https://werewolf.world/image/0.1/medium.jpg',
      'name': {
        'en': 'Medium',
        'ja': '霊媒師'
      },
      'numberOfAgents': 1,
      'roleIsMine': false
    }
  ]

  expect(getPlayableRoles(roles)).toEqual([
    {
      '@id': 'https://werewolf.world/resource/0.1/villager',
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg',
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            }
          },
          'boardDate': 1,
          'boardPhase': 'day conversation',
          'boardPolarity': 'negative'
        }
      ],
      'image': 'https://werewolf.world/image/0.1/villager.jpg',
      'name': {
        'en': 'Villager',
        'ja': '村人'
      },
      'numberOfAgents': 6,
      'roleIsMine': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/seer',
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg',
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            }
          },
          'boardDate': 1,
          'boardPhase': 'day conversation',
          'boardPolarity': 'positive'
        }
      ],
      'image': 'https://werewolf.world/image/0.1/seer.jpg',
      'name': {
        'en': 'Seer',
        'ja': '占い師'
      },
      'numberOfAgents': 1,
      'roleIsMine': true
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/medium',
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg',
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
          },
          'boardDate': 1,
          'boardPhase': 'day conversation',
          'boardPolarity': 'negative'
        }
      ],
      'image': 'https://werewolf.world/image/0.1/medium.jpg',
      'name': {
        'en': 'Medium',
        'ja': '霊媒師'
      },
      'numberOfAgents': 1,
      'roleIsMine': false
    }
  ])
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
