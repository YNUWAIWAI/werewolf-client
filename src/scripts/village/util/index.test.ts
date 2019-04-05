/* global village */
import {
  countText,
  getAgent,
  getBaseUri,
  getChannelFromInputChennel,
  getChatChannelFromChannel,
  getInputChannelFromChannel,
  getMyAgent,
  getMyRole,
  getPlayableAgents,
  getPlayableRoles,
  getRole,
  getTeam,
  getText,
  idGenerater,
  just,
  spaceSeparatedToCamelCase,
  strToAgentStatus,
  strToMessage,
  strToRoleId,
  trimBaseUri,
  xor
} from './index'

describe('countText', () => {
  test('text', () => {
    expect(countText('text')).toBe(4)
  })
  test('𠮷田 (surrogate pair)', () => {
    expect(countText('𠮷田')).toBe(2)
  })
})
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
test('getBaseUri', () => {
  expect(getBaseUri('https://licos.online/state/0.2/village#3/boardMessage')).toBe('https://licos.online/state/0.2/village#3')
})
describe('getChannelFromInputChennel', () => {
  describe('inputChannel: \'limited\'', () => {
    test('role: villager', () => {
      expect(() => getChannelFromInputChennel({
        inputChannel: village.InputChannel.limited,
        role: village.RoleId.villager
      })).toThrow()
    })
    test('role: seer', () => {
      expect(getChannelFromInputChennel({
        inputChannel: village.InputChannel.limited,
        role: village.RoleId.seer
      })).toBe('seer')
    })
    test('role: medium', () => {
      expect(() => getChannelFromInputChennel({
        inputChannel: village.InputChannel.limited,
        role: village.RoleId.medium
      })).toThrow()
    })
    test('role: hunter', () => {
      expect(getChannelFromInputChennel({
        inputChannel: village.InputChannel.limited,
        role: village.RoleId.hunter
      })).toBe('hunter')
    })
    test('role: mason', () => {
      expect(() => getChannelFromInputChennel({
        inputChannel: village.InputChannel.limited,
        role: village.RoleId.mason
      })).toThrow()
    })
    test('role: madman', () => {
      expect(() => getChannelFromInputChennel({
        inputChannel: village.InputChannel.limited,
        role: village.RoleId.madman
      })).toThrow()
    })
    test('role: werewolf', () => {
      expect(getChannelFromInputChennel({
        inputChannel: village.InputChannel.limited,
        role: village.RoleId.werewolf
      })).toBe('werewolf')
    })
    test('role: werehamster', () => {
      expect(() => getChannelFromInputChennel({
        inputChannel: village.InputChannel.limited,
        role: village.RoleId.werehamster
      })).toThrow()
    })
  })
  describe('inputChannel: \'public\'', () => {
    test('publicChannel: default value', () => {
      expect(getChannelFromInputChennel({
        inputChannel: village.InputChannel.public
      })).toBe('public')
    })
    test('publicChannel: anonymousAudience', () => {
      expect(getChannelFromInputChennel({
        inputChannel: village.InputChannel.public,
        publicChannel: 'anonymousAudience'
      })).toBe('anonymousAudience')
    })
    test('publicChannel: onymousAudience', () => {
      expect(getChannelFromInputChennel({
        inputChannel: village.InputChannel.public,
        publicChannel: 'onymousAudience'
      })).toBe('onymousAudience')
    })
    test('publicChannel: public', () => {
      expect(getChannelFromInputChennel({
        inputChannel: village.InputChannel.public,
        publicChannel: 'public'
      })).toBe('public')
    })
  })
  test('inputChannel: grave', () => {
    expect(getChannelFromInputChennel({
      inputChannel: village.InputChannel.grave
    })).toBe('grave')
  })
  test('inputChannel: private', () => {
    expect(getChannelFromInputChennel({
      inputChannel: village.InputChannel.private
    })).toBe('private')
  })
})
describe('getChatChannelFromChannel', () => {
  test('anonymousAudience', () => {
    expect(getChatChannelFromChannel(village.Channel.anonymousAudience)).toBe('public')
  })
  test('grave', () => {
    expect(getChatChannelFromChannel(village.Channel.grave)).toBe('grave')
  })
  test('hunter', () => {
    expect(getChatChannelFromChannel(village.Channel.hunter)).toBe('limited')
  })
  test('master', () => {
    expect(getChatChannelFromChannel(village.Channel.master)).toBe('master')
  })
  test('onymousAudience', () => {
    expect(getChatChannelFromChannel(village.Channel.onymousAudience)).toBe('public')
  })
  test('private', () => {
    expect(getChatChannelFromChannel(village.Channel.private)).toBe('private')
  })
  test('public', () => {
    expect(getChatChannelFromChannel(village.Channel.public)).toBe('public')
  })
  test('seer', () => {
    expect(getChatChannelFromChannel(village.Channel.seer)).toBe('limited')
  })
  test('werewolf', () => {
    expect(getChatChannelFromChannel(village.Channel.werewolf)).toBe('limited')
  })
})
describe('getInputChannelFromChannel', () => {
  test('anonymousAudience', () => {
    expect(getInputChannelFromChannel(village.Channel.anonymousAudience)).toBe('public')
  })
  test('grave', () => {
    expect(getInputChannelFromChannel(village.Channel.grave)).toBe('grave')
  })
  test('hunter', () => {
    expect(getInputChannelFromChannel(village.Channel.hunter)).toBe('limited')
  })
  test('master', () => {
    expect(() => getInputChannelFromChannel(village.Channel.master)).toThrow()
  })
  test('onymousAudience', () => {
    expect(getInputChannelFromChannel(village.Channel.onymousAudience)).toBe('public')
  })
  test('private', () => {
    expect(getInputChannelFromChannel(village.Channel.private)).toBe('private')
  })
  test('public', () => {
    expect(getInputChannelFromChannel(village.Channel.public)).toBe('public')
  })
  test('seer', () => {
    expect(getInputChannelFromChannel(village.Channel.seer)).toBe('limited')
  })
  test('werewolf', () => {
    expect(getInputChannelFromChannel(village.Channel.werewolf)).toBe('limited')
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

    expect(getRole(roles, village.RoleId.seer)).toEqual(
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

    expect(() => getRole(roles, village.RoleId.seer)).toThrow()
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
describe('strToAgentStatus', () => {
  test('alive', () => {
    expect(strToAgentStatus('alive')).toBe('alive')
  })
  test('dead', () => {
    expect(strToAgentStatus('dead')).toBe('dead')
  })
  test('death by execution', () => {
    expect(strToAgentStatus('death by execution')).toBe('death by execution')
  })
  test('death by attack', () => {
    expect(strToAgentStatus('death by attack')).toBe('death by attack')
  })
  test('death by fear', () => {
    expect(strToAgentStatus('death by fear')).toBe('death by fear')
  })
  test('unnatural death', () => {
    expect(strToAgentStatus('unnatural death')).toBe('unnatural death')
  })
  test('throw Exception', () => {
    expect(() => strToAgentStatus('throw Exception')).toThrow()
  })
})
describe('strToMessage', () => {
  test('boardMessage', () => {
    expect(strToMessage('https://licos.online/state/0.2/village#3/boardMessage')).toBe('boardMessage')
  })
  test('errorMessage', () => {
    expect(strToMessage('https://licos.online/state/0.2/village#3/errorMessage')).toBe('errorMessage')
  })
  test('flavorTextMessage', () => {
    expect(strToMessage('https://licos.online/state/0.2/village#3/flavorTextMessage')).toBe('flavorTextMessage')
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
describe('strToRoleId', () => {
  test('Villager', () => {
    expect(strToRoleId('Villager')).toBe(village.RoleId.villager)
  })
  test('Seer', () => {
    expect(strToRoleId('Seer')).toBe(village.RoleId.seer)
  })
  test('Medium', () => {
    expect(strToRoleId('Medium')).toBe(village.RoleId.medium)
  })
  test('Hunter', () => {
    expect(strToRoleId('Hunter')).toBe(village.RoleId.hunter)
  })
  test('Mason', () => {
    expect(strToRoleId('Mason')).toBe(village.RoleId.mason)
  })
  test('Madman', () => {
    expect(strToRoleId('Madman')).toBe(village.RoleId.madman)
  })
  test('Werewolf', () => {
    expect(strToRoleId('Werewolf')).toBe(village.RoleId.werewolf)
  })
  test('Werehamster', () => {
    expect(strToRoleId('Werehamster')).toBe(village.RoleId.werehamster)
  })
  test('Unexpected Value', () => {
    expect(() => strToRoleId('Unexpected')).toThrow()
  })
})
describe('getTeam', () => {
  test('Villager', () => {
    expect(getTeam(village.RoleId.villager)).toBe(village.Team.villager)
  })
  test('Seer', () => {
    expect(getTeam(village.RoleId.seer)).toBe(village.Team.villager)
  })
  test('Medium', () => {
    expect(getTeam(village.RoleId.medium)).toBe(village.Team.villager)
  })
  test('Hunter', () => {
    expect(getTeam(village.RoleId.hunter)).toBe(village.Team.villager)
  })
  test('Mason', () => {
    expect(getTeam(village.RoleId.mason)).toBe(village.Team.villager)
  })
  test('Madman', () => {
    expect(getTeam(village.RoleId.madman)).toBe(village.Team.werewolf)
  })
  test('Werewolf', () => {
    expect(getTeam(village.RoleId.werewolf)).toBe(village.Team.werewolf)
  })
  test('Werehamster', () => {
    expect(getTeam(village.RoleId.werehamster)).toBe(village.Team.werehamster)
  })
})
describe('getText', () => {
  test('en', () => {
    const languageMap = {
      en: 'English'
    }

    expect(
      getText(
        {
          language: village.Language.en,
          languageMap
        }
      )
    ).toBe('English')
  })
  test('ja', () => {
    const languageMap = {
      en: 'English',
      ja: '日本語'
    }

    expect(
      getText(
        {
          language: village.Language.ja,
          languageMap
        }
      )
    ).toBe('日本語')
  })
  test('fallback', () => {
    const languageMap = {
      en: 'English'
    }

    expect(
      getText(
        {
          language: village.Language.ja,
          languageMap
        }
      )
    ).toBe('English')
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
