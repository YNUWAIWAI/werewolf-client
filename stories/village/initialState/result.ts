import * as ActionTypes from '../../../src/scripts/village/constants/ActionTypes'
import {Character} from '../../../src/scripts/village/constants/Character'
import {Content} from '../../../src/scripts/village/reducers/command'
import {ImagePath} from '../../../src/scripts/village/constants/ImagePath'
import {ReducerState} from '../../../src/scripts/village/reducers'
import {Role} from '../../../src/scripts/village/constants/Role'
import {VERSION} from '../../../src/scripts/village/constants/Version'
import {village} from '../types'

export const result: Partial<ReducerState> = {
  base: {
    '@id': `https://licos.online/state/${VERSION}/village#3`,
    'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
    'day': -1,
    'intensionalDisclosureRange': village.Channel.private,
    'phase': village.Phase.result,
    'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
    'phaseTimeLimit': -1,
    'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
    'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
    'village': {
      '@id': `https://licos.online/state/${VERSION}/village`,
      'chatSettings': {
        maxLengthOfUnicodeCodePoints: 140,
        maxNumberOfChatMessages: 10
      },
      'id': 3,
      'language': village.Language.ja,
      'name': '横国の森の奥にある時代に取り残された小さな村',
      'totalNumberOfPlayers': 15
    }
  },
  chat: {
    allIds: ['delimeter0', 'chat0', 'chat1', 'delimeter1'],
    byId: {
      'chat0': {
        'characterId': '1',
        'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
        'day': 1,
        'id': 1,
        'image': ImagePath.Character120x120.a,
        'intensionalDisclosureRange': village.Channel.public,
        'isMarked': false,
        'isMine': true,
        'name': Character.a,
        'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
        'phaseTimeLimit': 600,
        'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
        'text': 'Then, who are the werewolves?',
        'type': village.ChatItemType.item
      },
      'chat1': {
        'characterId': '9',
        'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
        'day': 1,
        'id': 2,
        'image': ImagePath.Character120x120.i,
        'intensionalDisclosureRange': village.Channel.public,
        'isMarked': false,
        'isMine': false,
        'name': Character.i,
        'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
        'phaseTimeLimit': 600,
        'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
        'text': '>>1 I guess Pamela is a werewolf.',
        'type': village.ChatItemType.item
      },
      'delimeter0': {
        day: 1,
        type: village.ChatItemType.delimeter
      },
      'delimeter1': {
        day: -1,
        type: village.ChatItemType.delimeter
      }
    }
  },
  command: {
    content: Content.CommandPostMortem,
    isDead: false
  },
  commandGrave: {
    navigation: [
      {
        className: 'return-to-lobby expand',
        id: 'CommandNavigation.returnToLobby',
        type: ActionTypes.Navigation.RETURN_TO_LOBBY
      }
    ]
  },
  commandInputBox: {
    public: {
      numberOfChatMessages: 0
    },
    werewolf: {
      available: true,
      numberOfChatMessages: 0
    }
  },
  commandPostMortem: {
    navigation: [
      {
        className: 'show-result',
        id: 'CommandNavigation.showResult',
        type: ActionTypes.Navigation.SHOW_RESULT
      },
      {
        className: 'next-game',
        disabled: true,
        id: 'CommandNavigation.nextGame',
        type: ActionTypes.Navigation.NEXT_GAME
      },
      {
        className: 'return-to-lobby',
        id: 'CommandNavigation.returnToLobby',
        type: ActionTypes.Navigation.RETURN_TO_LOBBY
      }
    ]
  },
  commandSelection: {
    allIds: [],
    byId: {},
    fixed: false
  },
  hideButton: {
    hide: false
  },
  language: village.Language.en,
  mine: {
    character: {
      '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
      'id': 1,
      'image': ImagePath.Character.a,
      'name': Character.a
    },
    role: {
      '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
      'id': village.RoleId.seer,
      'image': ImagePath.Role.seer,
      'name': Role.seer
    }
  },
  modal: {
    id: '',
    visible: false
  },
  obfucator: {
    loading: false,
    visible: true
  },
  prediction: {
    characterStatus: {
      allIds: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15'
      ],
      byId: {
        '1': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
          'id': '1',
          'image': ImagePath.Character.a,
          'name': Character.a,
          'status': village.CharacterStatus.alive
        },
        '2': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#2`,
          'id': '2',
          'image': ImagePath.Character.b,
          'name': Character.b,
          'status': village.CharacterStatus.alive
        },
        '3': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#3`,
          'id': '3',
          'image': ImagePath.Character.c,
          'name': Character.c,
          'status': village.CharacterStatus.alive
        },
        '4': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#4`,
          'id': '4',
          'image': ImagePath.Character.d,
          'name': Character.d,
          'status': village.CharacterStatus.alive
        },
        '5': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#5`,
          'id': '5',
          'image': ImagePath.Character.e,
          'name': Character.e,
          'status': village.CharacterStatus.alive
        },
        '6': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#6`,
          'id': '6',
          'image': ImagePath.Character.f,
          'name': Character.f,
          'status': village.CharacterStatus.deathByFear
        },
        '7': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#7`,
          'id': '7',
          'image': ImagePath.Character.g,
          'name': Character.g,
          'status': village.CharacterStatus.unnaturalDeath
        },
        '8': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#8`,
          'id': '8',
          'image': ImagePath.Character.h,
          'name': Character.h,
          'status': village.CharacterStatus.unnaturalDeath
        },
        '9': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#9`,
          'id': '9',
          'image': ImagePath.Character.i,
          'name': Character.i,
          'status': village.CharacterStatus.unnaturalDeath
        },
        '10': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#10`,
          'id': '10',
          'image': ImagePath.Character.j,
          'name': Character.j,
          'status': village.CharacterStatus.alive
        },
        '11': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#11`,
          'id': '11',
          'image': ImagePath.Character.k,
          'name': Character.k,
          'status': village.CharacterStatus.unnaturalDeath
        },
        '12': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#12`,
          'id': '12',
          'image': ImagePath.Character.l,
          'name': Character.l,
          'status': village.CharacterStatus.deathByAttack
        },
        '13': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#13`,
          'id': '13',
          'image': ImagePath.Character.m,
          'name': Character.m,
          'status': village.CharacterStatus.alive
        },
        '14': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#14`,
          'id': '14',
          'image': ImagePath.Character.n,
          'name': Character.n,
          'status': village.CharacterStatus.alive
        },
        '15': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#15`,
          'id': '15',
          'image': ImagePath.Character.o,
          'name': Character.o,
          'status': village.CharacterStatus.alive
        }
      }
    },
    roleStatus: {
      allIds: [
        village.RoleId.villager,
        village.RoleId.seer,
        village.RoleId.medium,
        village.RoleId.hunter,
        village.RoleId.mason,
        village.RoleId.madman,
        village.RoleId.werewolf,
        village.RoleId.werehamster
      ],
      byId: {
        [village.RoleId.villager]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#villager`,
          'id': village.RoleId.villager,
          'image': ImagePath.Role.villager,
          'name': Role.villager,
          'numberOfPlayers': 6
        },
        [village.RoleId.seer]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
          'id': village.RoleId.seer,
          'image': ImagePath.Role.seer,
          'name': Role.seer,
          'numberOfPlayers': 1
        },
        [village.RoleId.medium]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#medium`,
          'id': village.RoleId.medium,
          'image': ImagePath.Role.medium,
          'name': Role.medium,
          'numberOfPlayers': 1
        },
        [village.RoleId.hunter]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#hunter`,
          'id': village.RoleId.hunter,
          'image': ImagePath.Role.hunter,
          'name': Role.hunter,
          'numberOfPlayers': 1
        },
        [village.RoleId.mason]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#mason`,
          'id': village.RoleId.mason,
          'image': ImagePath.Role.mason,
          'name': Role.mason,
          'numberOfPlayers': 2
        },
        [village.RoleId.madman]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#madman`,
          'id': village.RoleId.madman,
          'image': ImagePath.Role.madman,
          'name': Role.madman,
          'numberOfPlayers': 1
        },
        [village.RoleId.werewolf]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#werewolf`,
          'id': village.RoleId.werewolf,
          'image': ImagePath.Role.werewolf,
          'name': Role.werewolf,
          'numberOfPlayers': 2
        },
        [village.RoleId.werehamster]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#werehamster`,
          'id': village.RoleId.werehamster,
          'image': ImagePath.Role.werehamster,
          'name': Role.werehamster,
          'numberOfPlayers': 1
        }
      }
    },
    spec: {
      role: village.RoleId.villager,
      visible: false
    },
    table: {
      '1': {
        hunter: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        madman: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        mason: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        medium: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.CIRCLE
        },
        villager: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        werehamster: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        werewolf: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        }
      },
      '2': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.CROSS
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.CIRCLE
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.TRIANGLE
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '3': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '4': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '5': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '6': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '7': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '8': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '9': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '10': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '11': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '12': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '13': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '14': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '15': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      }
    }
  },
  result: {
    allIds: [
      'character1',
      'character2',
      'character3',
      'character4',
      'character5',
      'character6',
      'character7',
      'character8',
      'character9',
      'character10',
      'character11',
      'character12',
      'character13',
      'character14',
      'character15'
    ],
    characters: {
      character1: {
        avatarImage: ImagePath.Character.o,
        avatarName: 'Suzuki',
        characterId: '1',
        characterImage: ImagePath.Character.a,
        characterName: Character.a,
        result: village.Result.win,
        roleImage: ImagePath.Role.seer,
        roleName: Role.seer,
        status: village.CharacterStatus.alive
      },
      character2: {
        avatarImage: ImagePath.Character.i,
        avatarName: 'Takahashi',
        characterId: '2',
        characterImage: ImagePath.Character.b,
        characterName: Character.b,
        result: village.Result.lose,
        roleImage: ImagePath.Role.werewolf,
        roleName: Role.werewolf,
        status: village.CharacterStatus.alive
      },
      character3: {
        avatarImage: ImagePath.Character.r,
        avatarName: 'Tanaka',
        characterId: '3',
        characterImage: ImagePath.Character.c,
        characterName: Character.c,
        result: village.Result.win,
        roleImage: ImagePath.Role.hunter,
        roleName: Role.hunter,
        status: village.CharacterStatus.alive
      },
      character4: {
        avatarImage: ImagePath.Character.f,
        avatarName: 'Ito',
        characterId: '4',
        characterImage: ImagePath.Character.d,
        characterName: Character.d,
        result: village.Result.win,
        roleImage: ImagePath.Role.medium,
        roleName: Role.medium,
        status: village.CharacterStatus.alive
      },
      character5: {
        avatarImage: ImagePath.Character.s,
        avatarName: 'Watanabe',
        characterId: '5',
        characterImage: ImagePath.Character.e,
        characterName: Character.e,
        result: village.Result.lose,
        roleImage: ImagePath.Role.werehamster,
        roleName: Role.werehamster,
        status: village.CharacterStatus.deathByFear
      },
      character6: {
        avatarImage: ImagePath.Character.n,
        avatarName: 'Yamamoto',
        characterId: '6',
        characterImage: ImagePath.Character.f,
        characterName: Character.f,
        result: village.Result.lose,
        roleImage: ImagePath.Role.madman,
        roleName: Role.madman,
        status: village.CharacterStatus.deathByExecution
      },
      character7: {
        avatarImage: ImagePath.Character.e,
        avatarName: 'Nakamura',
        characterId: '7',
        characterImage: ImagePath.Character.g,
        characterName: Character.g,
        result: village.Result.lose,
        roleImage: ImagePath.Role.werewolf,
        roleName: Role.werewolf,
        status: village.CharacterStatus.unnaturalDeath
      },
      character8: {
        avatarImage: ImagePath.Character.g,
        avatarName: 'Kobayashi',
        characterId: '8',
        characterImage: ImagePath.Character.h,
        characterName: Character.h,
        result: village.Result.win,
        roleImage: ImagePath.Role.villager,
        roleName: Role.villager,
        status: village.CharacterStatus.unnaturalDeath
      },
      character9: {
        avatarImage: ImagePath.Character.g,
        avatarName: 'Yoshida',
        characterId: '9',
        characterImage: ImagePath.Character.i,
        characterName: Character.i,
        result: village.Result.win,
        roleImage: ImagePath.Role.villager,
        roleName: Role.villager,
        status: village.CharacterStatus.unnaturalDeath
      },
      character10: {
        avatarImage: ImagePath.Character.t,
        avatarName: 'Yamada',
        characterId: '10',
        characterImage: ImagePath.Character.j,
        characterName: Character.j,
        result: village.Result.win,
        roleImage: ImagePath.Role.mason,
        roleName: Role.mason,
        status: village.CharacterStatus.unnaturalDeath
      },
      character11: {
        avatarImage: ImagePath.Character.c,
        avatarName: 'Sasaki',
        characterId: '11',
        characterImage: ImagePath.Character.k,
        characterName: Character.k,
        result: village.Result.win,
        roleImage: ImagePath.Role.mason,
        roleName: Role.mason,
        status: village.CharacterStatus.unnaturalDeath
      },
      character12: {
        avatarImage: ImagePath.Character.k,
        avatarName: 'Yamaguchi',
        characterId: '12',
        characterImage: ImagePath.Character.l,
        characterName: Character.l,
        result: village.Result.win,
        roleImage: ImagePath.Role.villager,
        roleName: Role.villager,
        status: village.CharacterStatus.deathByAttack
      },
      character13: {
        avatarImage: ImagePath.Character.l,
        avatarName: 'Matsumoto',
        characterId: '13',
        characterImage: ImagePath.Character.m,
        characterName: Character.m,
        result: village.Result.win,
        roleImage: ImagePath.Role.villager,
        roleName: Role.villager,
        status: village.CharacterStatus.alive
      },
      character14: {
        avatarImage: ImagePath.Character.j,
        avatarName: 'Inoue',
        characterId: '14',
        characterImage: ImagePath.Character.n,
        characterName: Character.n,
        result: village.Result.win,
        roleImage: ImagePath.Role.villager,
        roleName: Role.villager,
        status: village.CharacterStatus.alive
      },
      character15: {
        avatarImage: ImagePath.Character.e,
        avatarName: 'Sato',
        characterId: '15',
        characterImage: ImagePath.Character.o,
        characterName: Character.o,
        result: village.Result.win,
        roleImage: ImagePath.Role.villager,
        roleName: Role.villager,
        status: village.CharacterStatus.alive
      }
    },
    losers: [
      'character2',
      'character5',
      'character6',
      'character7'
    ],
    me: 'character1',
    summary: {
      kind: village.SummaryType.character,
      loserTeam: new Set([village.Team.werewolf, village.Team.werehamster]),
      myTeam: village.Team.villager,
      result: village.Result.win,
      winnerTeam: village.Team.villager
    },
    visible: true,
    winners: [
      'character1',
      'character3',
      'character4',
      'character8',
      'character9',
      'character10',
      'character11',
      'character12',
      'character13',
      'character14',
      'character15'
    ]
  },
  suggest: {
    data: [
      {
        id: Character.a.en,
        name: Character.a
      },
      {
        id: Character.b.en,
        name: Character.b
      },
      {
        id: Character.c.en,
        name: Character.c
      },
      {
        id: Character.d.en,
        name: Character.d
      },
      {
        id: Character.e.en,
        name: Character.e
      },
      {
        id: Character.f.en,
        name: Character.f
      },
      {
        id: Character.g.en,
        name: Character.g
      },
      {
        id: Character.h.en,
        name: Character.h
      },
      {
        id: Character.i.en,
        name: Character.i
      },
      {
        id: Character.j.en,
        name: Character.j
      },
      {
        id: Character.k.en,
        name: Character.k
      },
      {
        id: Character.l.en,
        name: Character.l
      },
      {
        id: Character.m.en,
        name: Character.m
      },
      {
        id: Character.n.en,
        name: Character.n
      },
      {
        id: Character.o.en,
        name: Character.o
      },
      {
        id: village.RoleId.hunter,
        name: Role.hunter
      },
      {
        id: village.RoleId.madman,
        name: Role.madman
      },
      {
        id: village.RoleId.mason,
        name: Role.mason
      },
      {
        id: village.RoleId.medium,
        name: Role.medium
      },
      {
        id: village.RoleId.seer,
        name: Role.seer
      },
      {
        id: village.RoleId.villager,
        name: Role.villager
      },
      {
        id: village.RoleId.werehamster,
        name: Role.werehamster
      },
      {
        id: village.RoleId.werewolf,
        name: Role.werewolf
      }
    ]
  },
  timer: {
    phaseStartTime: new Date('2006-10-07T12:06:56.568+09:00').getTime(),
    phaseTimeLimit: -1000,
    start: new Date('2006-10-07T12:06:56.568+09:00').getTime(),
    time: 0
  }
}
