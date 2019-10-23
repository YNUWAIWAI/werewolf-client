import {Agent} from '../../constants/Agent'
import {ImagePath} from '../../constants/ImagePath'
import {Role} from '../../constants/Role'
import {village} from '../../types'

export const firstMorning2: village.Payload$SystemMessage = {
  '@context': [
    village.BaseContext.Base,
    village.BaseContext.VotingResult
  ],
  '@id': 'https://licos.online/state/0.2/village#3/systemMessage',
  'character': [
    {
      '@context': village.Context.Character,
      '@id': 'https://licos.online/state/0.2/village#3/character#1',
      'id': 1,
      'image': ImagePath.Agent.a,
      'isAChoice': false,
      'isMine': true,
      'name': Agent.a,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/character#1/update',
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': 'https://licos.online/state/0.2/village#3/character#2',
      'id': 2,
      'image': ImagePath.Agent.b,
      'isAChoice': false,
      'isMine': false,
      'name': Agent.b,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/character#2/update',
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': 'https://licos.online/state/0.2/village#3/character#3',
      'id': 3,
      'image': ImagePath.Agent.c,
      'isAChoice': false,
      'isMine': false,
      'name': Agent.c,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/character#3/update',
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': 'https://licos.online/state/0.2/village#3/character#4',
      'id': 4,
      'image': ImagePath.Agent.d,
      'isAChoice': false,
      'isMine': false,
      'name': Agent.d,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/character#4/update',
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': 'https://licos.online/state/0.2/village#3/character#5',
      'id': 5,
      'image': ImagePath.Agent.e,
      'isAChoice': false,
      'isMine': false,
      'name': Agent.e,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/character#5/update',
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': 'https://licos.online/state/0.2/village#3/character#6',
      'id': 6,
      'image': ImagePath.Agent.f,
      'isAChoice': false,
      'isMine': false,
      'name': Agent.f,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/character#6/update',
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': 'https://licos.online/state/0.2/village#3/character#7',
      'id': 7,
      'image': ImagePath.Agent.g,
      'isAChoice': false,
      'isMine': false,
      'name': Agent.g,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/character#7/update',
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': 'https://licos.online/state/0.2/village#3/character#8',
      'id': 8,
      'image': ImagePath.Agent.h,
      'isAChoice': false,
      'isMine': false,
      'name': Agent.h,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/character#8/update',
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': 'https://licos.online/state/0.2/village#3/character#9',
      'id': 9,
      'image': ImagePath.Agent.i,
      'isAChoice': false,
      'isMine': false,
      'name': Agent.i,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/character#9/update',
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': 'https://licos.online/state/0.2/village#3/character#10',
      'id': 10,
      'image': ImagePath.Agent.j,
      'isAChoice': false,
      'isMine': false,
      'name': Agent.j,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/character#10/update',
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': 'https://licos.online/state/0.2/village#3/character#11',
      'id': 11,
      'image': ImagePath.Agent.k,
      'isAChoice': false,
      'isMine': false,
      'name': Agent.k,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/character#11/update',
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': 'https://licos.online/state/0.2/village#3/character#12',
      'id': 12,
      'image': ImagePath.Agent.l,
      'isAChoice': false,
      'isMine': false,
      'name': Agent.l,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/character#12/update',
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': 'https://licos.online/state/0.2/village#3/character#13',
      'id': 13,
      'image': ImagePath.Agent.m,
      'isAChoice': false,
      'isMine': false,
      'name': Agent.m,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/character#13/update',
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': 'https://licos.online/state/0.2/village#3/character#14',
      'id': 14,
      'image': ImagePath.Agent.n,
      'isAChoice': false,
      'isMine': false,
      'name': Agent.n,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/character#14/update',
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': 'https://licos.online/state/0.2/village#3/character#15',
      'id': 15,
      'image': ImagePath.Agent.o,
      'isAChoice': true,
      'isMine': false,
      'name': Agent.o,
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/character#14/update',
        'day': 1,
        'phase': village.Phase.morning
      }
    }
  ],
  'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
  'day': 1,
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
      'numberOfCharacters': 1
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#villager',
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#1',
          'character': {
            '@context': village.Context.Character,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#1/agent#1',
            'id': 1,
            'image': ImagePath.Agent.a,
            'name': Agent.a
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': ImagePath.Role.villager,
      'isMine': false,
      'name': Role.villager,
      'numberOfCharacters': 6
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#seer',
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1',
          'character': {
            '@context': village.Context.Character,
            '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1/agent#1',
            'id': 1,
            'image': ImagePath.Agent.a,
            'name': Agent.a
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.positive
        }
      ],
      'image': ImagePath.Role.seer,
      'isMine': true,
      'name': Role.seer,
      'numberOfCharacters': 2
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#medium',
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#medium/board#1',
          'character': {
            '@context': village.Context.Character,
            '@id': 'https://licos.online/state/0.2/village#3/role#medium/board#1/agent#1',
            'id': 1,
            'image': ImagePath.Agent.a,
            'name': Agent.a
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': ImagePath.Role.medium,
      'isMine': false,
      'name': Role.medium,
      'numberOfCharacters': 1
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#hunter/board#1',
          'character': {
            '@context': village.Context.Character,
            '@id': 'https://licos.online/state/0.2/village#3/role#hunter/board#1/agent#1',
            'id': 1,
            'image': ImagePath.Agent.a,
            'name': Agent.a
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': ImagePath.Role.hunter,
      'isMine': false,
      'name': Role.hunter,
      'numberOfCharacters': 1
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#mason',
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#mason/board#1',
          'character': {
            '@context': village.Context.Character,
            '@id': 'https://licos.online/state/0.2/village#3/role#mason/board#1/agent#1',
            'id': 1,
            'image': ImagePath.Agent.a,
            'name': Agent.a
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': ImagePath.Role.mason,
      'isMine': false,
      'name': Role.mason,
      'numberOfCharacters': 2
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#madman',
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#madman/board#1',
          'character': {
            '@context': village.Context.Character,
            '@id': 'https://licos.online/state/0.2/village#3/role#madman/board#1/agent#1',
            'id': 1,
            'image': ImagePath.Agent.a,
            'name': Agent.a
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': ImagePath.Role.madman,
      'isMine': false,
      'name': Role.madman,
      'numberOfCharacters': 1
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#werewolf/board#1',
          'character': {
            '@context': village.Context.Character,
            '@id': 'https://licos.online/state/0.2/village#3/role#werewolf/board#1/agent#1',
            'id': 1,
            'image': ImagePath.Agent.a,
            'name': Agent.a
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': ImagePath.Role.werewolf,
      'isMine': false,
      'name': Role.werewolf,
      'numberOfCharacters': 2
    },
    {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#werehamster',
      'board': [],
      'image': ImagePath.Role.werehamster,
      'isMine': false,
      'name': Role.werehamster,
      'numberOfCharacters': 0
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
      'maxLengthOfUnicodeCodePoints': 140,
      'maxNumberOfChatMessages': 10
    },
    'id': 3,
    'lang': village.Language.ja,
    'name': '横国の森の奥にある時代に取り残された小さな村',
    'totalNumberOfCharacters': 15
  },
  'votingResultsDetails': [],
  'votingResultsSummary': []
}
