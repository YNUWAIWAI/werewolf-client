import {Character} from '../../constants/Character'
import {ImagePath} from '../../constants/ImagePath'
import {Role} from '../../constants/Role'
import {VERSION} from '../../constants/Version'
import {village} from '../../types'

export const result: village.Payload$SystemMessage = {
  '@context': [
    village.BaseContext.Base,
    village.BaseContext.VotingResult
  ],
  '@id': `https://licos.online/state/${VERSION}/village#3/systemMessage`,
  'character': [
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#15`,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#15/avatar`,
        'image': ImagePath.Character.r,
        'name': 'Sato0',
        'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
      },
      'id': 15,
      'image': ImagePath.Character.a,
      'isMine': false,
      'name': Character.a,
      'result': village.Result.win,
      'role': {
        '@context': village.Context.Role,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#15/role`,
        'image': ImagePath.Role.villager,
        'name': Role.villager
      },
      'status': village.CharacterStatus.alive
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#1/avatar`,
        'image': ImagePath.Character.r,
        'name': 'Suzuki',
        'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
      },
      'id': 1,
      'image': ImagePath.Character.b,
      'isMine': true,
      'name': Character.b,
      'result': village.Result.win,
      'role': {
        '@context': village.Context.Role,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#1/role`,
        'image': ImagePath.Role.seer,
        'name': Role.seer
      },
      'status': village.CharacterStatus.alive
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#2`,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#2/avatar`,
        'image': ImagePath.Character.r,
        'name': 'Takahashi',
        'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3302'
      },
      'id': 2,
      'image': ImagePath.Character.c,
      'isMine': false,
      'name': Character.c,
      'result': village.Result.lose,
      'role': {
        '@context': village.Context.Role,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#2/role`,
        'image': ImagePath.Role.werewolf,
        'name': Role.werewolf
      },
      'status': village.CharacterStatus.alive
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#3`,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#3/avatar`,
        'image': ImagePath.Character.r,
        'name': 'Tanaka',
        'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3303'
      },
      'id': 3,
      'image': ImagePath.Character.d,
      'isMine': false,
      'name': Character.d,
      'result': village.Result.win,
      'role': {
        '@context': village.Context.Role,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#3/role`,
        'image': ImagePath.Role.hunter,
        'name': Role.hunter
      },
      'status': village.CharacterStatus.alive
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#4`,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#4/avatar`,
        'image': ImagePath.Character.r,
        'name': 'Ito00',
        'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3304'
      },
      'id': 4,
      'image': ImagePath.Character.e,
      'isMine': false,
      'name': Character.e,
      'result': village.Result.win,
      'role': {
        '@context': village.Context.Role,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#4/role`,
        'image': ImagePath.Role.medium,
        'name': Role.medium
      },
      'status': village.CharacterStatus.alive
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#5`,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#5/avatar`,
        'image': ImagePath.Character.r,
        'name': 'Watanabe',
        'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3305'
      },
      'id': 5,
      'image': ImagePath.Character.f,
      'isMine': false,
      'name': Character.f,
      'result': village.Result.lose,
      'role': {
        '@context': village.Context.Role,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#5/role`,
        'image': ImagePath.Role.werehamster,
        'name': Role.werehamster
      },
      'status': village.CharacterStatus.deathByFear
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#6`,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#6/avatar`,
        'image': ImagePath.Character.r,
        'name': 'Yamamoto',
        'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3306'
      },
      'id': 6,
      'image': ImagePath.Character.g,
      'isMine': false,
      'name': Character.g,
      'result': village.Result.lose,
      'role': {
        '@context': village.Context.Role,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#6/role`,
        'image': ImagePath.Role.madman,
        'name': Role.madman
      },
      'status': village.CharacterStatus.deathByExecution
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#7`,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#7/avatar`,
        'image': ImagePath.Character.r,
        'name': 'Nakamura',
        'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3307'
      },
      'id': 7,
      'image': ImagePath.Character.h,
      'isMine': false,
      'name': Character.h,
      'result': village.Result.lose,
      'role': {
        '@context': village.Context.Role,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#7/role`,
        'image': ImagePath.Role.werewolf,
        'name': Role.werewolf
      },
      'status': village.CharacterStatus.unnaturalDeath
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#8`,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#8/avatar`,
        'image': ImagePath.Character.r,
        'name': 'Kobayashi',
        'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3308'
      },
      'id': 8,
      'image': ImagePath.Character.i,
      'isMine': false,
      'name': Character.i,
      'result': village.Result.win,
      'role': {
        '@context': village.Context.Role,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#8/role`,
        'image': ImagePath.Role.villager,
        'name': Role.villager
      },
      'status': village.CharacterStatus.unnaturalDeath
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#9`,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#9/avatar`,
        'image': ImagePath.Character.r,
        'name': 'Yoshida',
        'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3309'
      },
      'id': 9,
      'image': ImagePath.Character.j,
      'isMine': false,
      'name': Character.j,
      'result': village.Result.win,
      'role': {
        '@context': village.Context.Role,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#9/role`,
        'image': ImagePath.Role.villager,
        'name': Role.villager
      },
      'status': village.CharacterStatus.unnaturalDeath
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#10`,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#10/avatar`,
        'image': ImagePath.Character.r,
        'name': 'Yamada',
        'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3310'
      },
      'id': 10,
      'image': ImagePath.Character.k,
      'isMine': false,
      'name': Character.k,
      'result': village.Result.win,
      'role': {
        '@context': village.Context.Role,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#10/role`,
        'image': ImagePath.Role.mason,
        'name': Role.mason
      },
      'status': village.CharacterStatus.unnaturalDeath
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#11`,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#11/avatar`,
        'image': ImagePath.Character.r,
        'name': 'Sasaki',
        'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3311'
      },
      'id': 11,
      'image': ImagePath.Character.l,
      'isMine': false,
      'name': Character.l,
      'result': village.Result.win,
      'role': {
        '@context': village.Context.Role,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#11/role`,
        'image': ImagePath.Role.mason,
        'name': Role.mason
      },
      'status': village.CharacterStatus.unnaturalDeath
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#12`,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#12/avatar`,
        'image': ImagePath.Character.r,
        'name': 'yamaguchi',
        'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3312'
      },
      'id': 12,
      'image': ImagePath.Character.m,
      'isMine': false,
      'name': Character.m,
      'result': village.Result.win,
      'role': {
        '@context': village.Context.Role,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#12/role`,
        'image': ImagePath.Role.villager,
        'name': Role.villager
      },
      'status': village.CharacterStatus.deathByAttack
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#13`,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#13/avatar`,
        'image': ImagePath.Character.r,
        'name': 'matsumoto',
        'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3313'
      },
      'id': 13,
      'image': ImagePath.Character.n,
      'isMine': false,
      'name': Character.n,
      'result': village.Result.win,
      'role': {
        '@context': village.Context.Role,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#13/role`,
        'image': ImagePath.Role.villager,
        'name': Role.villager
      },
      'status': village.CharacterStatus.alive
    },
    {
      '@context': village.Context.Character,
      '@id': `https://licos.online/state/${VERSION}/village#3/character#14`,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#14/avatar`,
        'image': ImagePath.Character.r,
        'name': 'inoue',
        'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3314'
      },
      'id': 14,
      'image': ImagePath.Character.o,
      'isMine': false,
      'name': Character.o,
      'result': village.Result.win,
      'role': {
        '@context': village.Context.Role,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#14/role`,
        'image': ImagePath.Role.villager,
        'name': Role.villager
      },
      'status': village.CharacterStatus.alive
    }
  ],
  'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
  'day': -1,
  'directionality': village.Directionality.serverToClient,
  'extensionalDisclosureRange': [],
  'intensionalDisclosureRange': village.Channel.private,
  'phase': village.Phase.result,
  'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
  'phaseTimeLimit': -1,
  'role': [
    {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#3/role#villager`,
      'character': [
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#villager/character#15`,
          'id': 15,
          'image': ImagePath.Character.a,
          'name': Character.a
        },
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#villager/character#8`,
          'id': 8,
          'image': ImagePath.Character.h,
          'name': Character.h
        },
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#villager/character#9`,
          'id': 9,
          'image': ImagePath.Character.i,
          'name': Character.i
        },
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#villager/character#12`,
          'id': 12,
          'image': ImagePath.Character.l,
          'name': Character.l
        },
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#villager/character#13`,
          'id': 13,
          'image': ImagePath.Character.m,
          'name': Character.m
        },
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#villager/character#14`,
          'id': 14,
          'image': ImagePath.Character.n,
          'name': Character.n
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
      'character': [
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#seer/character#1`,
          'id': 1,
          'image': ImagePath.Character.a,
          'name': Character.a
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
      'character': [
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#medium/character#4`,
          'id': 4,
          'image': ImagePath.Character.d,
          'name': Character.d
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
      'character': [
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#hunter/character#3`,
          'id': 3,
          'image': ImagePath.Character.c,
          'name': Character.c
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
      'character': [
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#mason/character#10`,
          'id': 10,
          'image': ImagePath.Character.j,
          'name': Character.j
        },
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#mason/character#11`,
          'id': 11,
          'image': ImagePath.Character.k,
          'name': Character.k
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
      'character': [
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#madman/character#6`,
          'id': 6,
          'image': ImagePath.Character.f,
          'name': Character.f
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
      'character': [
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#werewolf/character#2`,
          'id': 2,
          'image': ImagePath.Character.b,
          'name': Character.b
        },
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#werewolf/character#7`,
          'id': 7,
          'image': ImagePath.Character.g,
          'name': Character.g
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
      'character': [
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#werehamster/character#5`,
          'id': 5,
          'image': ImagePath.Character.e,
          'name': Character.e
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
