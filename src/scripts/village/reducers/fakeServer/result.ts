import {Agent} from '../../constants/Agent'
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
      '@id': `https://licos.online/state/${VERSION}/village#3/character#0`,
      'avatar': {
        '@context': village.Context.Avatar,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#0/avatar`,
        'image': ImagePath.Agent.r,
        'name': 'Sato',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV'
      },
      'id': 0,
      'image': ImagePath.Agent.a,
      'isMine': false,
      'name': Agent.a,
      'result': village.Result.win,
      'role': {
        '@context': village.Context.Role,
        '@id': `https://licos.online/state/${VERSION}/village#3/character#0/role`,
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
        'image': ImagePath.Agent.r,
        'name': 'Suzuki',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGI1'
      },
      'id': 1,
      'image': ImagePath.Agent.b,
      'isMine': true,
      'name': Agent.b,
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
        'image': ImagePath.Agent.r,
        'name': 'Takahashi',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGI2'
      },
      'id': 2,
      'image': ImagePath.Agent.c,
      'isMine': false,
      'name': Agent.c,
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
        'image': ImagePath.Agent.r,
        'name': 'Tanaka',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGI3'
      },
      'id': 3,
      'image': ImagePath.Agent.d,
      'isMine': false,
      'name': Agent.d,
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
        'image': ImagePath.Agent.r,
        'name': 'Ito',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGI4'
      },
      'id': 4,
      'image': ImagePath.Agent.e,
      'isMine': false,
      'name': Agent.e,
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
        'image': ImagePath.Agent.r,
        'name': 'Watanabe',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGI5'
      },
      'id': 5,
      'image': 'https://werewolf.world/image/0.3/character_icons/50x50/f_50x50.png',
      'isMine': false,
      'name': Agent.f,
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
        'image': ImagePath.Agent.r,
        'name': 'Yamamoto',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGI6'
      },
      'id': 6,
      'image': ImagePath.Agent.g,
      'isMine': false,
      'name': Agent.g,
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
        'image': ImagePath.Agent.r,
        'name': 'Nakamura',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGI7'
      },
      'id': 7,
      'image': ImagePath.Agent.h,
      'isMine': false,
      'name': Agent.h,
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
        'image': ImagePath.Agent.r,
        'name': 'Kobayashi',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGI8'
      },
      'id': 8,
      'image': ImagePath.Agent.i,
      'isMine': false,
      'name': Agent.i,
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
        'image': ImagePath.Agent.r,
        'name': 'Yoshida',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGI9'
      },
      'id': 9,
      'image': ImagePath.Agent.j,
      'isMine': false,
      'name': Agent.j,
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
        'image': ImagePath.Agent.r,
        'name': 'Yamada',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVG10'
      },
      'id': 10,
      'image': ImagePath.Agent.k,
      'isMine': false,
      'name': Agent.k,
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
        'image': ImagePath.Agent.r,
        'name': 'Sasaki',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVG11'
      },
      'id': 11,
      'image': ImagePath.Agent.l,
      'isMine': false,
      'name': Agent.l,
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
        'image': ImagePath.Agent.r,
        'name': '山口',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVG12'
      },
      'id': 12,
      'image': ImagePath.Agent.m,
      'isMine': false,
      'name': Agent.m,
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
        'image': ImagePath.Agent.r,
        'name': '松本',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVG13'
      },
      'id': 13,
      'image': ImagePath.Agent.n,
      'isMine': false,
      'name': Agent.n,
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
        'image': ImagePath.Agent.r,
        'name': '井上',
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVG14'
      },
      'id': 14,
      'image': ImagePath.Agent.o,
      'isMine': false,
      'name': Agent.o,
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
      '@id': `https://licos.online/state/${VERSION}/village#3/role#master`,
      'board': [],
      'image': ImagePath.Role.master,
      'isMine': false,
      'name': Role.master,
      'numberOfCharacters': 1
    },
    {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#3/role#villager`,
      'character': [
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#villager/character#0`,
          'id': 0,
          'image': ImagePath.Agent.a,
          'name': Agent.a
        },
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#villager/character#8`,
          'id': 8,
          'image': ImagePath.Agent.h,
          'name': Agent.h
        },
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#villager/character#9`,
          'id': 9,
          'image': ImagePath.Agent.i,
          'name': Agent.i
        },
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#villager/character#12`,
          'id': 12,
          'image': ImagePath.Agent.l,
          'name': Agent.l
        },
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#villager/character#13`,
          'id': 13,
          'image': ImagePath.Agent.m,
          'name': Agent.m
        },
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#villager/character#14`,
          'id': 14,
          'image': ImagePath.Agent.n,
          'name': Agent.n
        }
      ],
      'image': ImagePath.Role.villager,
      'isMine': false,
      'name': Role.villager,
      'numberOfCharacters': 6
    },
    {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
      'character': [
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#seer/character#1`,
          'id': 1,
          'image': ImagePath.Agent.a,
          'name': Agent.a
        }
      ],
      'image': ImagePath.Role.seer,
      'isMine': true,
      'name': Role.seer,
      'numberOfCharacters': 1
    },
    {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#3/role#medium`,
      'character': [
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#medium/character#4`,
          'id': 4,
          'image': ImagePath.Agent.d,
          'name': Agent.d
        }
      ],
      'image': ImagePath.Role.medium,
      'isMine': false,
      'name': Role.medium,
      'numberOfCharacters': 1
    },
    {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#3/role#hunter`,
      'character': [
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#hunter/character#3`,
          'id': 3,
          'image': ImagePath.Agent.c,
          'name': Agent.c
        }
      ],
      'image': ImagePath.Role.hunter,
      'isMine': false,
      'name': Role.hunter,
      'numberOfCharacters': 1
    },
    {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#3/role#mason`,
      'character': [
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#mason/character#10`,
          'id': 10,
          'image': ImagePath.Agent.j,
          'name': Agent.j
        },
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#mason/character#11`,
          'id': 11,
          'image': ImagePath.Agent.k,
          'name': Agent.k
        }
      ],
      'image': ImagePath.Role.mason,
      'isMine': false,
      'name': Role.mason,
      'numberOfCharacters': 2
    },
    {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#3/role#madman`,
      'character': [
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#madman/character#6`,
          'id': 6,
          'image': ImagePath.Agent.f,
          'name': Agent.f
        }
      ],
      'image': ImagePath.Role.madman,
      'isMine': false,
      'name': Role.madman,
      'numberOfCharacters': 1
    },
    {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#3/role#werewolf`,
      'character': [
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#werewolf/character#2`,
          'id': 2,
          'image': ImagePath.Agent.b,
          'name': Agent.b
        },
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#werewolf/character#7`,
          'id': 7,
          'image': ImagePath.Agent.g,
          'name': Agent.g
        }
      ],
      'image': ImagePath.Role.werewolf,
      'isMine': false,
      'name': Role.werewolf,
      'numberOfCharacters': 2
    },
    {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#3/role#werehamster`,
      'character': [
        {
          '@context': village.Context.Character,
          '@id': `https://licos.online/state/${VERSION}/village#3/role#werehamster/character#5`,
          'id': 5,
          'image': ImagePath.Agent.e,
          'name': Agent.e
        }
      ],
      'image': ImagePath.Role.werehamster,
      'isMine': false,
      'name': Role.werehamster,
      'numberOfCharacters': 1
    }
  ],
  'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
  'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
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
    'lang': village.Language.ja,
    'name': '横国の森の奥にある時代に取り残された小さな村',
    'totalNumberOfCharacters': 15
  },
  'votingResultsDetails': [],
  'votingResultsSummary': []
}
