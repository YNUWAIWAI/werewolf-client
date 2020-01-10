import {Character} from '../../constants/Character'
import {ImagePath} from '../../constants/ImagePath'
import {Role} from '../../constants/Role'
import {VERSION} from '../../constants/Version'
import {village} from '../../types'

export const night: village.Payload$SystemMessage = {
  '@context': [
    village.BaseContext.Base,
    village.BaseContext.VotingResult
  ],
  '@id': `https://licos.online/state/${VERSION}/village#3/systemMessage`,
  'character': [
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
      'id': 1,
      'image': ImagePath.Character.a,
      'isAChoice': false,
      'isMine': true,
      'name': Character.a,
      'status': village.CharacterStatus.alive,
      'update': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#1/update`,
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#2`,
      'id': 2,
      'image': ImagePath.Character.b,
      'isAChoice': true,
      'isMine': false,
      'name': Character.b,
      'status': village.CharacterStatus.alive,
      'update': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#2/update`,
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#3`,
      'id': 3,
      'image': ImagePath.Character.c,
      'isAChoice': true,
      'isMine': false,
      'name': Character.c,
      'status': village.CharacterStatus.alive,
      'update': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#3/update`,
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#4`,
      'id': 4,
      'image': ImagePath.Character.d,
      'isAChoice': true,
      'isMine': false,
      'name': Character.d,
      'status': village.CharacterStatus.alive,
      'update': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#4/update`,
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#5`,
      'id': 5,
      'image': ImagePath.Character.e,
      'isAChoice': true,
      'isMine': false,
      'name': Character.e,
      'status': village.CharacterStatus.alive,
      'update': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#5/update`,
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#6`,
      'id': 6,
      'image': ImagePath.Character.f,
      'isAChoice': true,
      'isMine': false,
      'name': Character.f,
      'status': village.CharacterStatus.alive,
      'update': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#6/update`,
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#7`,
      'id': 7,
      'image': ImagePath.Character.g,
      'isAChoice': true,
      'isMine': false,
      'name': Character.g,
      'status': village.CharacterStatus.alive,
      'update': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#7/update`,
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#8`,
      'id': 8,
      'image': ImagePath.Character.h,
      'isAChoice': false,
      'isMine': false,
      'name': Character.h,
      'status': village.CharacterStatus.dead,
      'update': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#8/update`,
        'day': 1,
        'phase': village.Phase.night
      }
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#9`,
      'id': 9,
      'image': ImagePath.Character.i,
      'isAChoice': true,
      'isMine': false,
      'name': Character.i,
      'status': village.CharacterStatus.alive,
      'update': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#9/update`,
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#10`,
      'id': 10,
      'image': ImagePath.Character.j,
      'isAChoice': true,
      'isMine': false,
      'name': Character.j,
      'status': village.CharacterStatus.alive,
      'update': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#10/update`,
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#11`,
      'id': 11,
      'image': ImagePath.Character.k,
      'isAChoice': true,
      'isMine': false,
      'name': Character.k,
      'status': village.CharacterStatus.alive,
      'update': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#11/update`,
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#12`,
      'id': 12,
      'image': ImagePath.Character.l,
      'isAChoice': true,
      'isMine': false,
      'name': Character.l,
      'status': village.CharacterStatus.alive,
      'update': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#12/update`,
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#13`,
      'id': 13,
      'image': ImagePath.Character.m,
      'isAChoice': true,
      'isMine': false,
      'name': Character.m,
      'status': village.CharacterStatus.alive,
      'update': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#13/update`,
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#14`,
      'id': 14,
      'image': ImagePath.Character.n,
      'isAChoice': true,
      'isMine': false,
      'name': Character.n,
      'status': village.CharacterStatus.alive,
      'update': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#14/update`,
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#15`,
      'id': 15,
      'image': ImagePath.Character.o,
      'isAChoice': true,
      'isMine': false,
      'name': Character.o,
      'status': village.CharacterStatus.alive,
      'update': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#14/update`,
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
  'phase': village.Phase.night,
  'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
  'phaseTimeLimit': 180,
  'role': [
    {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#3/role#villager`,
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#villager/board#1`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#3/role#villager/board#1/character#1`,
            'id': 1,
            'image': ImagePath.Character.a,
            'name': Character.a
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': ImagePath.Role.villager,
      'isMine': false,
      'name': Role.villager,
      'numberOfPlayers': 6
    },
    {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#seer/board#1`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#3/role#seer/board#1/character#1`,
            'id': 1,
            'image': ImagePath.Character.a,
            'name': Character.a
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.positive
        }
      ],
      'image': ImagePath.Role.seer,
      'isMine': true,
      'name': Role.seer,
      'numberOfPlayers': 1
    },
    {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#3/role#medium`,
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#medium/board#1`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#3/role#medium/board#1/character#1`,
            'id': 1,
            'image': ImagePath.Character.a,
            'name': Character.a
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': ImagePath.Role.medium,
      'isMine': false,
      'name': Role.medium,
      'numberOfPlayers': 1
    },
    {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#3/role#hunter`,
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#hunter/board#1`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#3/role#hunter/board#1/character#1`,
            'id': 1,
            'image': ImagePath.Character.a,
            'name': Character.a
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': ImagePath.Role.hunter,
      'isMine': false,
      'name': Role.hunter,
      'numberOfPlayers': 1
    },
    {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#3/role#mason`,
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#mason/board#1`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#3/role#mason/board#1/character#1`,
            'id': 1,
            'image': ImagePath.Character.a,
            'name': Character.a
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': ImagePath.Role.mason,
      'isMine': false,
      'name': Role.mason,
      'numberOfPlayers': 2
    },
    {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#3/role#madman`,
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#madman/board#1`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#3/role#madman/board#1/character#1`,
            'id': 1,
            'image': ImagePath.Character.a,
            'name': Character.a
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': ImagePath.Role.madman,
      'isMine': false,
      'name': Role.madman,
      'numberOfPlayers': 1
    },
    {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#3/role#werewolf`,
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#werewolf/board#1`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#3/role#werewolf/board#1/character#1`,
            'id': 1,
            'image': ImagePath.Character.a,
            'name': Character.a
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': ImagePath.Role.werewolf,
      'isMine': false,
      'name': Role.werewolf,
      'numberOfPlayers': 2
    },
    {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#3/role#werehamster`,
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#werehamster/board#1`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#3/role#werehamster/board#1/character#1`,
            'id': 1,
            'image': ImagePath.Character.a,
            'name': Character.a
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': ImagePath.Role.werehamster,
      'isMine': false,
      'name': Role.werehamster,
      'numberOfPlayers': 1
    }
  ],
  'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
  'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
  'village': {
    '@context': village.Context.Village,
    '@id': `https://licos.online/state/${VERSION}/village`,
    'chatSettings': {
      '@context': village.Context.ChatSettings,
      '@id': `https://licos.online/state/${VERSION}/village#3/chatSettings`,
      'maxLengthOfUnicodeCodePoints': 140,
      'maxNumberOfChatMessages': 10
    },
    'id': 3,
    'language': village.Language.ja,
    'name': '横国の森の奥にある時代に取り残された小さな村',
    'totalNumberOfPlayers': 15
  },
  'votingResultsDetails': [],
  'votingResultsSummary': []
}
