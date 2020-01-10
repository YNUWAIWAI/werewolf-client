import {Character} from '../../constants/Character'
import {ImagePath} from '../../constants/ImagePath'
import {Role} from '../../constants/Role'
import {VERSION} from '../../constants/Version'
import {village} from '../../types'

export const firstMorning4: village.Payload$SystemMessage = {
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
      'isAChoice': false,
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
      'isAChoice': false,
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
      'isAChoice': false,
      'isMine': false,
      'name': Character.d,
      'status': village.CharacterStatus.alive,
      'update': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#4/update`,
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
          'polarity': village.Polarity.positive
        }
      ],
      'image': ImagePath.Role.villager,
      'isMine': true,
      'name': Role.villager,
      'numberOfPlayers': 3
    },
    {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
      'board': [],
      'image': ImagePath.Role.seer,
      'isMine': false,
      'name': Role.seer,
      'numberOfPlayers': 0
    },
    {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#3/role#medium`,
      'board': [],
      'image': ImagePath.Role.medium,
      'isMine': false,
      'name': Role.medium,
      'numberOfPlayers': 0
    },
    {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#3/role#hunter`,
      'board': [],
      'image': ImagePath.Role.hunter,
      'isMine': false,
      'name': Role.hunter,
      'numberOfPlayers': 0
    },
    {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#3/role#mason`,
      'board': [],
      'image': ImagePath.Role.mason,
      'isMine': false,
      'name': Role.mason,
      'numberOfPlayers': 0
    },
    {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#3/role#madman`,
      'board': [],
      'image': ImagePath.Role.madman,
      'isMine': false,
      'name': Role.madman,
      'numberOfPlayers': 0
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
      'numberOfPlayers': 1
    },
    {
      '@context': village.Context.Role,
      '@id': `https://licos.online/state/${VERSION}/village#3/role#werehamster`,
      'board': [],
      'image': ImagePath.Role.werehamster,
      'isMine': false,
      'name': Role.werehamster,
      'numberOfPlayers': 0
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
    'totalNumberOfPlayers': 4
  },
  'votingResultsDetails': [],
  'votingResultsSummary': []
}
