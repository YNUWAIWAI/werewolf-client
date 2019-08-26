/* global village */
import {Agent} from '../../constants/Agent'
import {ImagePath} from '../../constants/ImagePath'
import {Role} from '../../constants/Role'

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
      'image': ImagePath.Agent.a,
      'isAChoice': true,
      'isMine': false,
      'name': Agent.a,
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
      'image': ImagePath.Agent.f,
      'isAChoice': true,
      'isMine': false,
      'name': Agent.f,
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
      'image': ImagePath.Agent.g,
      'isAChoice': true,
      'isMine': false,
      'name': Agent.g,
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
      'image': ImagePath.Agent.h,
      'isAChoice': true,
      'isMine': false,
      'name': Agent.h,
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
      'image': ImagePath.Agent.j,
      'isAChoice': true,
      'isMine': false,
      'name': Agent.j,
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
      'image': ImagePath.Agent.o,
      'isAChoice': true,
      'isMine': false,
      'name': Agent.o,
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
      'image': ImagePath.Agent.r,
      'isAChoice': false,
      'isMine': true,
      'name': Agent.r,
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
      'image': ImagePath.Agent.s,
      'isAChoice': true,
      'isMine': false,
      'name': Agent.s,
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
      '@id': 'https://licos.online/state/0.2/village#3/role#master',
      'board': [],
      'image': ImagePath.Role.master,
      'isMine': false,
      'name': Role.master,
      'numberOfAgents': 1
    },
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
            'image': ImagePath.Agent.r,
            'name': Agent.r
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
            'image': ImagePath.Agent.j,
            'name': Agent.j
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
      '@id': 'https://licos.online/state/0.2/village#29/role#mason',
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#mason/board#0',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#mason/board#0/agent#0',
            'id': 0,
            'image': ImagePath.Agent.r,
            'name': Agent.r
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
            'image': ImagePath.Agent.s,
            'name': Agent.s
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
            'image': ImagePath.Agent.g,
            'name': Agent.g
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
            'image': ImagePath.Agent.o,
            'name': Agent.o
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
            'image': ImagePath.Agent.h,
            'name': Agent.h
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
            'image': ImagePath.Agent.f,
            'name': Agent.f
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
            'image': ImagePath.Agent.j,
            'name': Agent.j
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
            'image': ImagePath.Agent.a,
            'name': Agent.a
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': ImagePath.Role.mason,
      'isMine': true,
      'name': Role.mason,
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
            'image': ImagePath.Agent.r,
            'name': Agent.r
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
            'image': ImagePath.Agent.j,
            'name': Agent.j
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
      '@id': 'https://licos.online/state/0.2/village#29/role#seer',
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village29/role#seer/board#0',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#29/role#seer/board#0/agent#0',
            'id': 0,
            'image': ImagePath.Agent.r,
            'name': Agent.r
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
            'image': ImagePath.Agent.j,
            'name': Agent.j
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': ImagePath.Role.seer,
      'isMine': false,
      'name': Role.seer,
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
            'image': ImagePath.Agent.r,
            'name': Agent.r
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
            'image': ImagePath.Agent.s,
            'name': Agent.s
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
            'image': ImagePath.Agent.g,
            'name': Agent.g
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
            'image': ImagePath.Agent.o,
            'name': Agent.o
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
            'image': ImagePath.Agent.h,
            'name': Agent.h
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
            'image': ImagePath.Agent.j,
            'name': Agent.j
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': ImagePath.Role.villager,
      'isMine': false,
      'name': Role.villager,
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
            'image': ImagePath.Agent.r,
            'name': Agent.r
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
            'image': ImagePath.Agent.j,
            'name': Agent.j
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
