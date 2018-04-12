// @flow
/* eslint sort-keys: 0 */
import {getMyAgent, getMyRole, getPlayableAgents, getPlayableRoles,trimBaseUri, xor} from './index'

test('getPlayableAgents', () => {
  const agents = [
    {
      '@id': 'https://werewolf.world/resource/0.1/Gert',
      'agentIsMine': false,
      'name': {
        'en': 'Gert',
        'ja': 'ゲルト'
      },
      'image': 'https://werewolf.world/image/0.1/Gert.jpg',
      'id': 0,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Walter',
      'agentIsMine': true,
      'name': {
        'en': 'Walter',
        'ja': 'ヴァルター'
      },
      'image': 'https://werewolf.world/image/0.1/Walter.jpg',
      'id': 1,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Catalina',
      'agentIsMine': false,
      'name': {
        'en': 'Catalina',
        'ja': 'カタリナ'
      },
      'image': 'https://werewolf.world/image/0.1/Catalina.jpg',
      'id': 10,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Otto',
      'agentIsMine': false,
      'name': {
        'en': 'Otto',
        'ja': 'オットー'
      },
      'image': 'https://werewolf.world/image/0.1/Otto.jpg',
      'id': 11,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    }
  ]

  expect(getPlayableAgents(agents)).toEqual([
    {
      '@id': 'https://werewolf.world/resource/0.1/Walter',
      'agentIsMine': true,
      'name': {
        'en': 'Walter',
        'ja': 'ヴァルター'
      },
      'image': 'https://werewolf.world/image/0.1/Walter.jpg',
      'id': 1,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Otto',
      'agentIsMine': false,
      'name': {
        'en': 'Otto',
        'ja': 'オットー'
      },
      'image': 'https://werewolf.world/image/0.1/Otto.jpg',
      'id': 11,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    }
  ])
})
test('getMyAgent', () => {
  const agents = [
    {
      '@id': 'https://werewolf.world/resource/0.1/Gert',
      'agentIsMine': false,
      'name': {
        'en': 'Gert',
        'ja': 'ゲルト'
      },
      'image': 'https://werewolf.world/image/0.1/Gert.jpg',
      'id': 0,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Walter',
      'agentIsMine': true,
      'name': {
        'en': 'Walter',
        'ja': 'ヴァルター'
      },
      'image': 'https://werewolf.world/image/0.1/Walter.jpg',
      'id': 1,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Catalina',
      'agentIsMine': false,
      'name': {
        'en': 'Catalina',
        'ja': 'カタリナ'
      },
      'image': 'https://werewolf.world/image/0.1/Catalina.jpg',
      'id': 10,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Otto',
      'agentIsMine': false,
      'name': {
        'en': 'Otto',
        'ja': 'オットー'
      },
      'image': 'https://werewolf.world/image/0.1/Otto.jpg',
      'id': 11,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    }
  ]

  expect(getMyAgent(agents)).toEqual({
    '@id': 'https://werewolf.world/resource/0.1/Walter',
    'agentIsMine': true,
    'name': {
      'en': 'Walter',
      'ja': 'ヴァルター'
    },
    'image': 'https://werewolf.world/image/0.1/Walter.jpg',
    'id': 1,
    'status': 'alive',
    'statusUpdatePhase': 'day conversation',
    'statusUpdateDate': 1,
    'isAChoice': false
  })
})
test('getPlayableRoles', () => {
  const roles = [
    {
      '@id': 'https://werewolf.world/resource/0.1/master',
      'roleIsMine': false,
      'name': {
        'en': 'Master',
        'ja': 'マスター'
      },
      'image': 'https://werewolf.world/image/0.1/master.jpg',
      'numberOfAgents': 1,
      'board': []
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/villager',
      'roleIsMine': false,
      'name': {
        'en': 'Villager',
        'ja': '村人'
      },
      'image': 'https://werewolf.world/image/0.1/villager.jpg',
      'numberOfAgents': 6,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg'
          },
          'boardPolarity': 'negative',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/seer',
      'roleIsMine': true,
      'name': {
        'en': 'Seer',
        'ja': '占い師'
      },
      'image': 'https://werewolf.world/image/0.1/seer.jpg',
      'numberOfAgents': 1,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg'
          },
          'boardPolarity': 'positive',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/medium',
      'roleIsMine': false,
      'name': {
        'en': 'Medium',
        'ja': '霊媒師'
      },
      'image': 'https://werewolf.world/image/0.1/medium.jpg',
      'numberOfAgents': 1,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg'
          },
          'boardPolarity': 'negative',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    }
  ]

  expect(getPlayableRoles(roles)).toEqual([
    {
      '@id': 'https://werewolf.world/resource/0.1/villager',
      'roleIsMine': false,
      'name': {
        'en': 'Villager',
        'ja': '村人'
      },
      'image': 'https://werewolf.world/image/0.1/villager.jpg',
      'numberOfAgents': 6,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg'
          },
          'boardPolarity': 'negative',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/seer',
      'roleIsMine': true,
      'name': {
        'en': 'Seer',
        'ja': '占い師'
      },
      'image': 'https://werewolf.world/image/0.1/seer.jpg',
      'numberOfAgents': 1,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg'
          },
          'boardPolarity': 'positive',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/medium',
      'roleIsMine': false,
      'name': {
        'en': 'Medium',
        'ja': '霊媒師'
      },
      'image': 'https://werewolf.world/image/0.1/medium.jpg',
      'numberOfAgents': 1,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg'
          },
          'boardPolarity': 'negative',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    }
  ])
})
test('getMyRole', () => {
  const roles = [
    {
      '@id': 'https://werewolf.world/resource/0.1/master',
      'roleIsMine': false,
      'name': {
        'en': 'Master',
        'ja': 'マスター'
      },
      'image': 'https://werewolf.world/image/0.1/master.jpg',
      'numberOfAgents': 1,
      'board': []
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/villager',
      'roleIsMine': false,
      'name': {
        'en': 'Villager',
        'ja': '村人'
      },
      'image': 'https://werewolf.world/image/0.1/villager.jpg',
      'numberOfAgents': 6,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg'
          },
          'boardPolarity': 'negative',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/seer',
      'roleIsMine': true,
      'name': {
        'en': 'Seer',
        'ja': '占い師'
      },
      'image': 'https://werewolf.world/image/0.1/seer.jpg',
      'numberOfAgents': 1,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg'
          },
          'boardPolarity': 'positive',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/medium',
      'roleIsMine': false,
      'name': {
        'en': 'Medium',
        'ja': '霊媒師'
      },
      'image': 'https://werewolf.world/image/0.1/medium.jpg',
      'numberOfAgents': 1,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg'
          },
          'boardPolarity': 'negative',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    }
  ]

  expect(getMyRole(roles)).toEqual({
    '@id': 'https://werewolf.world/resource/0.1/seer',
    'roleIsMine': true,
    'name': {
      'en': 'Seer',
      'ja': '占い師'
    },
    'image': 'https://werewolf.world/image/0.1/seer.jpg',
    'numberOfAgents': 1,
    'board': [
      {
        'boardAgent': {
          '@id': 'https://werewolf.world/resource/0.1/Walter',
          'boardAgentId': 1,
          'boardAgentName': {
            'en': 'Walter',
            'ja': 'ヴァルター'
          },
          'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg'
        },
        'boardPolarity': 'positive',
        'boardPhase': 'day conversation',
        'boardDate': 1
      }
    ]
  })
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
