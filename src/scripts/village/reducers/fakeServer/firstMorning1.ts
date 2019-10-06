import * as village from '../../types'
import {Agent} from '../../constants/Agent'
import {ImagePath} from '../../constants/ImagePath'
import {Role} from '../../constants/Role'

const json: village.Payload$systemMessage = {
  '@context': [
    village.BaseContext.Base,
    village.BaseContext.VotingResult
  ],
  '@id': 'https://licos.online/state/0.2/village#3/systemMessage',
  'agent': [
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#1',
      'id': 1,
      'image': ImagePath.Agent.a,
      'isAChoice': false,
      'isMine': true,
      'name': Agent.a,
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
      'image': ImagePath.Agent.b,
      'isAChoice': false,
      'isMine': false,
      'name': Agent.b,
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
      'image': ImagePath.Agent.c,
      'isAChoice': false,
      'isMine': false,
      'name': Agent.c,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#3/update',
        'date': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#4',
      'id': 4,
      'image': ImagePath.Agent.d,
      'isAChoice': false,
      'isMine': false,
      'name': Agent.d,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#4/update',
        'date': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#5',
      'id': 5,
      'image': ImagePath.Agent.e,
      'isAChoice': false,
      'isMine': false,
      'name': Agent.e,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#5/update',
        'date': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#6',
      'id': 6,
      'image': ImagePath.Agent.f,
      'isAChoice': false,
      'isMine': false,
      'name': Agent.f,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#6/update',
        'date': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#7',
      'id': 7,
      'image': ImagePath.Agent.g,
      'isAChoice': false,
      'isMine': false,
      'name': Agent.g,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#7/update',
        'date': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#8',
      'id': 8,
      'image': ImagePath.Agent.h,
      'isAChoice': false,
      'isMine': false,
      'name': Agent.h,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#8/update',
        'date': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#9',
      'id': 9,
      'image': ImagePath.Agent.i,
      'isAChoice': false,
      'isMine': false,
      'name': Agent.i,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#9/update',
        'date': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#10',
      'id': 10,
      'image': ImagePath.Agent.j,
      'isAChoice': false,
      'isMine': false,
      'name': Agent.j,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#10/update',
        'date': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#11',
      'id': 11,
      'image': ImagePath.Agent.k,
      'isAChoice': false,
      'isMine': false,
      'name': Agent.k,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#11/update',
        'date': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#12',
      'id': 12,
      'image': ImagePath.Agent.l,
      'isAChoice': false,
      'isMine': false,
      'name': Agent.l,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#12/update',
        'date': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#13',
      'id': 13,
      'image': ImagePath.Agent.m,
      'isAChoice': false,
      'isMine': false,
      'name': Agent.m,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#13/update',
        'date': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#14',
      'id': 14,
      'image': ImagePath.Agent.n,
      'isAChoice': false,
      'isMine': false,
      'name': Agent.n,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#14/update',
        'date': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#15',
      'id': 15,
      'image': ImagePath.Agent.o,
      'isAChoice': true,
      'isMine': false,
      'name': Agent.o,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#14/update',
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
      'image': ImagePath.Role.master,
      'isMine': false,
      'name': Role.master,
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
            'image': ImagePath.Agent.a,
            'name': Agent.a
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': ImagePath.Role.villager,
      'isMine': false,
      'name': Role.villager,
      'numberOfAgents': 6
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#seer',
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1/agent#1',
            'id': 1,
            'image': ImagePath.Agent.a,
            'name': Agent.a
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.positive
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#2',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#2/agent#2',
            'id': 2,
            'image': ImagePath.Agent.b,
            'name': Agent.b
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#3',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#3/agent#3',
            'id': 3,
            'image': ImagePath.Agent.c,
            'name': Agent.c
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#4',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#4/agent#4',
            'id': 4,
            'image': ImagePath.Agent.d,
            'name': Agent.d
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#5',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#5/agent#5',
            'id': 5,
            'image': ImagePath.Agent.e,
            'name': Agent.e
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#6',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#6/agent#6',
            'id': 6,
            'image': ImagePath.Agent.f,
            'name': Agent.f
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#7',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#7/agent#7',
            'id': 7,
            'image': ImagePath.Agent.g,
            'name': Agent.g
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#8',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#8/agent#8',
            'id': 8,
            'image': ImagePath.Agent.h,
            'name': Agent.h
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#9',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#9/agent#9',
            'id': 9,
            'image': ImagePath.Agent.i,
            'name': Agent.i
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#10',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#10/agent#10',
            'id': 10,
            'image': ImagePath.Agent.j,
            'name': Agent.j
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#11',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#11/agent#11',
            'id': 11,
            'image': ImagePath.Agent.k,
            'name': Agent.k
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#12',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#12/agent#12',
            'id': 12,
            'image': ImagePath.Agent.l,
            'name': Agent.l
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#13',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#13/agent#13',
            'id': 13,
            'image': ImagePath.Agent.m,
            'name': Agent.m
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#14',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#14/agent#14',
            'id': 14,
            'image': ImagePath.Agent.n,
            'name': Agent.n
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#15',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#15/agent#15',
            'id': 15,
            'image': ImagePath.Agent.o,
            'name': Agent.o
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': ImagePath.Role.seer,
      'isMine': true,
      'name': Role.seer,
      'numberOfAgents': 1
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#medium',
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#medium/board#1',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#medium/board#1/agent#1',
            'id': 1,
            'image': ImagePath.Agent.a,
            'name': Agent.a
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': ImagePath.Role.medium,
      'isMine': false,
      'name': Role.medium,
      'numberOfAgents': 1
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#hunter/board#1',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#hunter/board#1/agent#1',
            'id': 1,
            'image': ImagePath.Agent.a,
            'name': Agent.a
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': ImagePath.Role.hunter,
      'isMine': false,
      'name': Role.hunter,
      'numberOfAgents': 1
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#mason',
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#mason/board#1',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#mason/board#1/agent#1',
            'id': 1,
            'image': ImagePath.Agent.a,
            'name': Agent.a
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': ImagePath.Role.mason,
      'isMine': false,
      'name': Role.mason,
      'numberOfAgents': 2
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#madman',
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#madman/board#1',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#madman/board#1/agent#1',
            'id': 1,
            'image': ImagePath.Agent.a,
            'name': Agent.a
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': ImagePath.Role.madman,
      'isMine': false,
      'name': Role.madman,
      'numberOfAgents': 1
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
            'image': ImagePath.Agent.a,
            'name': Agent.a
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': ImagePath.Role.werewolf,
      'isMine': false,
      'name': Role.werewolf,
      'numberOfAgents': 2
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#werehamster',
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#werehamster/board#1',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#werehamster/board#1/agent#1',
            'id': 1,
            'image': ImagePath.Agent.a,
            'name': Agent.a
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': ImagePath.Role.werehamster,
      'isMine': false,
      'name': Role.werehamster,
      'numberOfAgents': 1
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
