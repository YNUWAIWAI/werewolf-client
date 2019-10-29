import {Character} from '../../constants/Character'
import {ImagePath} from '../../constants/ImagePath'
import {Role} from '../../constants/Role'
import {VERSION} from '../../constants/Version'
import {village} from '../../types'

export const firstMorning5: village.Payload$SystemMessage = {
  '@context': [
    village.BaseContext.Base,
    village.BaseContext.VotingResult
  ],
  '@id': `https://licos.online/state/${VERSION}/village#29/systemMessage`,
  'character': [
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#29/character#7`,
      'id': 7,
      'image': ImagePath.Character.a,
      'isAChoice': true,
      'isMine': false,
      'name': Character.a,
      'status': village.CharacterStatus.alive,
      'update': {
        '@id': `https://licos.online/state/${VERSION}/village#29/character#7/update`,
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#29/character#5`,
      'id': 5,
      'image': ImagePath.Character.f,
      'isAChoice': true,
      'isMine': false,
      'name': Character.f,
      'status': village.CharacterStatus.alive,
      'update': {
        '@id': `https://licos.online/state/${VERSION}/village#29/character#5/update`,
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#29/character#2`,
      'id': 2,
      'image': ImagePath.Character.g,
      'isAChoice': true,
      'isMine': false,
      'name': Character.g,
      'status': village.CharacterStatus.alive,
      'update': {
        '@id': `https://licos.online/state/${VERSION}/village#29/character#2/update`,
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#29/character#4`,
      'id': 4,
      'image': ImagePath.Character.h,
      'isAChoice': true,
      'isMine': false,
      'name': Character.h,
      'status': village.CharacterStatus.alive,
      'update': {
        '@id': `https://licos.online/state/${VERSION}/village#29/character#4/update`,
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#29/character#6`,
      'id': 6,
      'image': ImagePath.Character.j,
      'isAChoice': true,
      'isMine': false,
      'name': Character.j,
      'status': village.CharacterStatus.alive,
      'update': {
        '@id': `https://licos.online/state/${VERSION}/village#29/character#6/update`,
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#29/character#3`,
      'id': 3,
      'image': ImagePath.Character.o,
      'isAChoice': true,
      'isMine': false,
      'name': Character.o,
      'status': village.CharacterStatus.alive,
      'update': {
        '@id': `https://licos.online/state/${VERSION}/village#29/character#3/update`,
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#29/character#0`,
      'id': 0,
      'image': ImagePath.Character.r,
      'isAChoice': false,
      'isMine': true,
      'name': Character.r,
      'status': village.CharacterStatus.alive,
      'update': {
        '@id': `https://licos.online/state/${VERSION}/village#29/character#0/update`,
        'day': 1,
        'phase': village.Phase.morning
      }
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#29/character#1`,
      'id': 1,
      'image': ImagePath.Character.s,
      'isAChoice': true,
      'isMine': false,
      'name': Character.s,
      'status': village.CharacterStatus.alive,
      'update': {
        '@id': `https://licos.online/state/${VERSION}/village#29/character#1/update`,
        'day': 1,
        'phase': village.Phase.morning
      }
    }
  ],
  'clientTimestamp': '2019-02-02T17:31:19.865+09:00',
  'day': 1,
  'directionality': village.Directionality.serverToClient,
  'extensionalDisclosureRange': [],
  'intensionalDisclosureRange': village.Channel.public,
  'phase': village.Phase.morning,
  'phaseStartTime': '2019-02-02T17:31:19.865+09:00',
  'phaseTimeLimit': 10,
  'role': [
    {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#3/role#master`,
      'board': [],
      'image': ImagePath.Role.master,
      'isMine': false,
      'name': Role.master,
      'numberOfCharacters': 1
    },
    {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#29/role#madman`,
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village29/role#madman/board#0`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#29/role#madman/board#0/character#0`,
            'id': 0,
            'image': ImagePath.Character.r,
            'name': Character.r
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village29/role#mason/board#6`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#29/role#mason/board#6/character#6`,
            'id': 6,
            'image': ImagePath.Character.j,
            'name': Character.j
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
      '@id': `https://licos.online/state/${VERSION}/village#29/role#mason`,
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village29/role#mason/board#0`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#29/role#mason/board#0/character#0`,
            'id': 0,
            'image': ImagePath.Character.r,
            'name': Character.r
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.positive
        },
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village29/role#mason/board#1`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#29/role#mason/board#1/character#1`,
            'id': 1,
            'image': ImagePath.Character.s,
            'name': Character.s
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village29/role#mason/board#2`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#29/role#mason/board#2/character#2`,
            'id': 2,
            'image': ImagePath.Character.g,
            'name': Character.g
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village29/role#mason/board#3`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#29/role#mason/board#3/character#3`,
            'id': 3,
            'image': ImagePath.Character.o,
            'name': Character.o
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village29/role#mason/board#4`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#29/role#mason/board#4/character#4`,
            'id': 4,
            'image': ImagePath.Character.h,
            'name': Character.h
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village29/role#mason/board#5`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#29/role#mason/board#5/character#5`,
            'id': 5,
            'image': ImagePath.Character.f,
            'name': Character.f
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village29/role#mason/board#6`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#29/role#mason/board#6/character#6`,
            'id': 6,
            'image': ImagePath.Character.j,
            'name': Character.j
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.positive
        },
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village29/role#mason/board#7`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#29/role#mason/board#7/character#7`,
            'id': 7,
            'image': ImagePath.Character.a,
            'name': Character.a
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': ImagePath.Role.mason,
      'isMine': true,
      'name': Role.mason,
      'numberOfCharacters': 2
    },
    {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#29/role#medium`,
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village29/role#medium/board#0`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#29/role#medium/board#0/character#0`,
            'id': 0,
            'image': ImagePath.Character.r,
            'name': Character.r
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village29/role#mason/board#6`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#29/role#mason/board#6/character#6`,
            'id': 6,
            'image': ImagePath.Character.j,
            'name': Character.j
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
      '@id': `https://licos.online/state/${VERSION}/village#29/role#seer`,
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village29/role#seer/board#0`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#29/role#seer/board#0/character#0`,
            'id': 0,
            'image': ImagePath.Character.r,
            'name': Character.r
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village29/role#mason/board#6`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#29/role#mason/board#6/character#6`,
            'id': 6,
            'image': ImagePath.Character.j,
            'name': Character.j
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': ImagePath.Role.seer,
      'isMine': false,
      'name': Role.seer,
      'numberOfCharacters': 1
    },
    {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#29/role#villager`,
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village29/role#villager/board#0`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#29/role#villager/board#0/character#0`,
            'id': 0,
            'image': ImagePath.Character.r,
            'name': Character.r
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village29/role#mason/board#1`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#29/role#mason/board#1/character#1`,
            'id': 1,
            'image': ImagePath.Character.s,
            'name': Character.s
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.circle
        },
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village29/role#mason/board#2`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#29/role#mason/board#2/character#2`,
            'id': 2,
            'image': ImagePath.Character.g,
            'name': Character.g
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.cross
        },
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village29/role#mason/board#3`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#29/role#mason/board#3/character#3`,
            'id': 3,
            'image': ImagePath.Character.o,
            'name': Character.o
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.question
        },
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village29/role#mason/board#4`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#29/role#mason/board#4/character#4`,
            'id': 4,
            'image': ImagePath.Character.h,
            'name': Character.h
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.triangle
        },
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village29/role#mason/board#6`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#29/role#mason/board#6/character#6`,
            'id': 6,
            'image': ImagePath.Character.j,
            'name': Character.j
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        }
      ],
      'image': ImagePath.Role.villager,
      'isMine': false,
      'name': Role.villager,
      'numberOfCharacters': 1
    },
    {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#29/role#werewolf`,
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village29/role#werewolf/board#0`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#29/role#werewolf/board#0/character#0`,
            'id': 0,
            'image': ImagePath.Character.r,
            'name': Character.r
          },
          'day': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.negative
        },
        {
          '@context': village.Context.BoardResult,
          '@id': `https://licos.online/state/${VERSION}/village29/role#mason/board#6`,
          'character': {
            '@context': village.Context.Character,
            '@id': `https://licos.online/state/${VERSION}/village#29/role#mason/board#6/character#6`,
            'id': 6,
            'image': ImagePath.Character.j,
            'name': Character.j
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
    }
  ],
  'serverTimestamp': '2019-02-02T17:31:19.865+09:00',
  'token': '13bc61d8-9fce-492b-a528-ca8682ae1746',
  'village': {
    '@context': village.Context.Village,
    '@id': `https://licos.online/state/${VERSION}/village`,
    'chatSettings': {
      '@context': village.Context.ChatSettings,
      '@id': `https://licos.online/state/${VERSION}/village#3/chatSettings`,
      'maxLengthOfUnicodeCodePoints': 140,
      'maxNumberOfChatMessages': 10
    },
    'id': 29,
    'lang': village.Language.en,
    'name': 'Doubtful Village',
    'totalNumberOfCharacters': 8
  },
  'votingResultsDetails': [],
  'votingResultsSummary': []
}
