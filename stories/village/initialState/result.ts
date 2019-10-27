import * as ActionTypes from '../../../src/scripts/village/constants/ActionTypes'
import * as village from '../types'
import {Agent} from '../../../src/scripts/village/constants/Character'
import {Content} from '../../../src/scripts/village/reducers/command'
import {ImagePath} from '../../../src/scripts/village/constants/ImagePath'
import {ReducerState} from '../../../src/scripts/village/reducers'
import {Role} from '../../../src/scripts/village/constants/Role'
import {VERSION} from '../../../src/scripts/village/constants/Version'

export const result: ReducerState = {
  base: {
    '@id': `https://licos.online/state/${VERSION}/village#3`,
    'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
    'day': -1,
    'intensionalDisclosureRange': village.Channel.private,
    'phase': village.Phase.result,
    'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
    'phaseTimeLimit': -1,
    'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
    'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
    'village': {
      '@id': `https://licos.online/state/${VERSION}/village`,
      'chatSettings': {
        maxLengthOfUnicodeCodePoints: 140,
        maxNumberOfChatMessages: 10
      },
      'id': 3,
      'lang': village.Language.ja,
      'name': '横国の森の奥にある時代に取り残された小さな村',
      'totalNumberOfCharacters': 15
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
        'image': `https://werewolf.world/image/${VERSION}/character_icons/120x120/a_120x120.png`,
        'intensionalDisclosureRange': village.Channel.public,
        'isMarked': false,
        'isMine': true,
        'name': Agent.a,
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
        'image': `https://werewolf.world/image/${VERSION}/character_icons/120x120/i_120x120.png`,
        'intensionalDisclosureRange': village.Channel.public,
        'isMarked': false,
        'isMine': false,
        'name': Agent.i,
        'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
        'phaseTimeLimit': 600,
        'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
        'text': '>>1 I guess Pamela is a werewolf.',
        'type': village.ChatItemType.item
      },
      'delimeter0': {
        day: 1,
        type: 'delimeter'
      },
      'delimeter1': {
        day: -1,
        type: 'delimeter'
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
      'image': `https://werewolf.world/image/${VERSION}/character_icons/50x50/a_50x50.png`,
      'name': {
        'en': 'Adil',
        'ja': 'アーディル'
      }
    },
    role: {
      '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
      'id': village.RoleId.seer,
      'image': `https://werewolf.world/image/${VERSION}/role_icons/50x50withTI/seer_50x50.png`,
      'name': {
        'en': 'Seer',
        'ja': '占い師'
      }
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
          'image': ImagePath.Agent.a,
          'name': Agent.a,
          'status': village.CharacterStatus.alive
        },
        '2': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#2`,
          'id': '2',
          'image': ImagePath.Agent.b,
          'name': Agent.b,
          'status': village.CharacterStatus.alive
        },
        '3': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#3`,
          'id': '3',
          'image': ImagePath.Agent.c,
          'name': Agent.c,
          'status': village.CharacterStatus.alive
        },
        '4': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#4`,
          'id': '4',
          'image': ImagePath.Agent.d,
          'name': Agent.d,
          'status': village.CharacterStatus.alive
        },
        '5': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#5`,
          'id': '5',
          'image': ImagePath.Agent.e,
          'name': Agent.e,
          'status': village.CharacterStatus.alive
        },
        '6': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#6`,
          'id': '6',
          'image': ImagePath.Agent.f,
          'name': Agent.f,
          'status': village.CharacterStatus.deathByFear
        },
        '7': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#7`,
          'id': '7',
          'image': ImagePath.Agent.g,
          'name': Agent.g,
          'status': village.CharacterStatus.unnaturalDeath
        },
        '8': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#8`,
          'id': '8',
          'image': ImagePath.Agent.h,
          'name': Agent.h,
          'status': village.CharacterStatus.unnaturalDeath
        },
        '9': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#9`,
          'id': '9',
          'image': ImagePath.Agent.i,
          'name': Agent.i,
          'status': village.CharacterStatus.unnaturalDeath
        },
        '10': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#10`,
          'id': '10',
          'image': ImagePath.Agent.j,
          'name': Agent.j,
          'status': village.CharacterStatus.alive
        },
        '11': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#11`,
          'id': '11',
          'image': ImagePath.Agent.k,
          'name': Agent.k,
          'status': village.CharacterStatus.unnaturalDeath
        },
        '12': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#12`,
          'id': '12',
          'image': ImagePath.Agent.l,
          'name': Agent.l,
          'status': village.CharacterStatus.deathByAttack
        },
        '13': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#13`,
          'id': '13',
          'image': ImagePath.Agent.m,
          'name': Agent.m,
          'status': village.CharacterStatus.alive
        },
        '14': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#14`,
          'id': '14',
          'image': ImagePath.Agent.n,
          'name': Agent.n,
          'status': village.CharacterStatus.alive
        },
        '15': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#15`,
          'id': '15',
          'image': ImagePath.Agent.o,
          'name': Agent.o,
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
          'numberOfCharacters': 6
        },
        [village.RoleId.seer]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
          'id': village.RoleId.seer,
          'image': ImagePath.Role.seer,
          'name': Role.seer,
          'numberOfCharacters': 1
        },
        [village.RoleId.medium]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#medium`,
          'id': village.RoleId.medium,
          'image': ImagePath.Role.medium,
          'name': Role.medium,
          'numberOfCharacters': 1
        },
        [village.RoleId.hunter]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#hunter`,
          'id': village.RoleId.hunter,
          'image': ImagePath.Role.hunter,
          'name': Role.hunter,
          'numberOfCharacters': 1
        },
        [village.RoleId.mason]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#mason`,
          'id': village.RoleId.mason,
          'image': ImagePath.Role.mason,
          'name': Role.mason,
          'numberOfCharacters': 2
        },
        [village.RoleId.madman]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#madman`,
          'id': village.RoleId.madman,
          'image': ImagePath.Role.madman,
          'name': Role.madman,
          'numberOfCharacters': 1
        },
        [village.RoleId.werewolf]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#werewolf`,
          'id': village.RoleId.werewolf,
          'image': ImagePath.Role.werewolf,
          'name': Role.werewolf,
          'numberOfCharacters': 2
        },
        [village.RoleId.werehamster]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#werehamster`,
          'id': village.RoleId.werehamster,
          'image': ImagePath.Role.werehamster,
          'name': Role.werehamster,
          'numberOfCharacters': 1
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
        avatarImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/o_50x50.png`,
        avatarName: 'Suzuki',
        characterId: '1',
        characterImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/a_50x50.png`,
        characterName: {
          'en': 'Adil',
          'ja': 'アーディル'
        },
        result: village.Result.win,
        roleImage: `https://werewolf.world/image/${VERSION}/role_icons/50x50withTI/seer_50x50.png`,
        roleName: {
          en: 'Seer',
          ja: '占い師'
        },
        status: village.CharacterStatus.alive
      },
      character2: {
        avatarImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/i_50x50.png`,
        avatarName: 'Takahashi',
        characterId: '2',
        characterImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/b_50x50.png`,
        characterName: {
          'en': 'Borya',
          'ja': 'ボーリャ'
        },
        result: village.Result.lose,
        roleImage: `https://werewolf.world/image/${VERSION}/role_icons/50x50withTI/werewolf_50x50.png`,
        roleName: {
          en: 'Werewolf',
          ja: '人狼'
        },
        status: village.CharacterStatus.alive
      },
      character3: {
        avatarImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/r_50x50.png`,
        avatarName: 'Tanaka',
        characterId: '3',
        characterImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/c_50x50.png`,
        characterName: {
          'en': 'Chacha',
          'ja': 'チャチャ'
        },
        result: village.Result.win,
        roleImage: `https://werewolf.world/image/${VERSION}/role_icons/50x50withTI/hunter_50x50.png`,
        roleName: {
          en: 'Hunter',
          ja: '狩人'
        },
        status: village.CharacterStatus.alive
      },
      character4: {
        avatarImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/f_50x50.png`,
        avatarName: 'Ito',
        characterId: '4',
        characterImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/d_50x50.png`,
        characterName: {
          'en': 'Devdatta',
          'ja': 'デヴゥダッタ'
        },
        result: village.Result.win,
        roleImage: `https://werewolf.world/image/${VERSION}/role_icons/50x50withTI/medium_50x50.png`,
        roleName: {
          en: 'Medium',
          ja: '霊媒師'
        },
        status: village.CharacterStatus.alive
      },
      character5: {
        avatarImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/s_50x50.png`,
        avatarName: 'Watanabe',
        characterId: '5',
        characterImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/e_50x50.png`,
        characterName: {
          'en': 'Ekrem',
          'ja': 'エクレム'
        },
        result: village.Result.lose,
        roleImage: `https://werewolf.world/image/${VERSION}/role_icons/50x50withTI/werehamster_50x50.png`,
        roleName: {
          en: 'Werehamster',
          ja: 'ハムスター人間'
        },
        status: village.CharacterStatus.deathByFear
      },
      character6: {
        avatarImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/n_50x50.png`,
        avatarName: 'Yamamoto',
        characterId: '6',
        characterImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/f_50x50.png`,
        characterName: {
          'en': 'Fernando',
          'ja': 'フェルナンド'
        },
        result: village.Result.lose,
        roleImage: `https://werewolf.world/image/${VERSION}/role_icons/50x50withTI/madman_50x50.png`,
        roleName: {
          en: 'Madman',
          ja: '狂人'
        },
        status: village.CharacterStatus.deathByExecution
      },
      character7: {
        avatarImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/e_50x50.png`,
        avatarName: 'Nakamura',
        characterId: '7',
        characterImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/g_50x50.png`,
        characterName: {
          'en': 'Gavriil',
          'ja': 'ガブリール'
        },
        result: village.Result.lose,
        roleImage: `https://werewolf.world/image/${VERSION}/role_icons/50x50withTI/werewolf_50x50.png`,
        roleName: {
          en: 'Werewolf',
          ja: '人狼'
        },
        status: village.CharacterStatus.unnaturalDeath
      },
      character8: {
        avatarImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/g_50x50.png`,
        avatarName: 'Kobayashi',
        characterId: '8',
        characterImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/h_50x50.png`,
        characterName: {
          'en': 'Henrik',
          'ja': 'ヘンリック'
        },
        result: village.Result.win,
        roleImage: `https://werewolf.world/image/${VERSION}/role_icons/50x50withTI/villager_50x50.png`,
        roleName: {
          en: 'Villager',
          ja: '村人'
        },
        status: village.CharacterStatus.unnaturalDeath
      },
      character9: {
        avatarImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/g_50x50.png`,
        avatarName: 'Yoshida',
        characterId: '9',
        characterImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/i_50x50.png`,
        characterName: {
          'en': 'Ileanna',
          'ja': 'イレアナ'
        },
        result: village.Result.win,
        roleImage: `https://werewolf.world/image/${VERSION}/role_icons/50x50withTI/villager_50x50.png`,
        roleName: {
          en: 'Villager',
          ja: '村人'
        },
        status: village.CharacterStatus.unnaturalDeath
      },
      character10: {
        avatarImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/t_50x50.png`,
        avatarName: 'Yamada',
        characterId: '10',
        characterImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/j_50x50.png`,
        characterName: {
          'en': 'Jasmin',
          'ja': 'ジャスミン'
        },
        result: village.Result.win,
        roleImage: `https://werewolf.world/image/${VERSION}/role_icons/50x50withTI/mason_50x50.png`,
        roleName: {
          'en': 'Mason',
          'ja': '共有者'
        },
        status: village.CharacterStatus.unnaturalDeath
      },
      character11: {
        avatarImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/c_50x50.png`,
        avatarName: 'Sasaki',
        characterId: '11',
        characterImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/k_50x50.png`,
        characterName: {
          'en': 'Kaiji',
          'ja': '開司'
        },
        result: village.Result.win,
        roleImage: `https://werewolf.world/image/${VERSION}/role_icons/50x50withTI/mason_50x50.png`,
        roleName: {
          en: 'Mason',
          ja: '共有者'
        },
        status: village.CharacterStatus.unnaturalDeath
      },
      character12: {
        avatarImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/k_50x50.png`,
        avatarName: 'Yamaguchi',
        characterId: '12',
        characterImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/l_50x50.png`,
        characterName: {
          'en': 'Louise',
          'ja': 'ルイーズ'
        },
        result: village.Result.win,
        roleImage: `https://werewolf.world/image/${VERSION}/role_icons/50x50withTI/villager_50x50.png`,
        roleName: {
          en: 'Villager',
          ja: '村人'
        },
        status: village.CharacterStatus.deathByAttack
      },
      character13: {
        avatarImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/l_50x50.png`,
        avatarName: 'Matsumoto',
        characterId: '13',
        characterImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/m_50x50.png`,
        characterName: {
          'en': 'Marthe',
          'ja': 'マーテ'
        },
        result: village.Result.win,
        roleImage: `https://werewolf.world/image/${VERSION}/role_icons/50x50withTI/villager_50x50.png`,
        roleName: {
          en: 'Villager',
          ja: '村人'
        },
        status: village.CharacterStatus.alive
      },
      character14: {
        avatarImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/j_50x50.png`,
        avatarName: 'Inoue',
        characterId: '14',
        characterImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/n_50x50.png`,
        characterName: {
          'en': 'Nanyamka',
          'ja': 'ナニャンカ'
        },
        result: village.Result.win,
        roleImage: `https://werewolf.world/image/${VERSION}/role_icons/50x50withTI/villager_50x50.png`,
        roleName: {
          en: 'Villager',
          ja: '村人'
        },
        status: village.CharacterStatus.alive
      },
      character15: {
        avatarImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/e_50x50.png`,
        avatarName: 'Sato',
        characterId: '15',
        characterImage: `https://werewolf.world/image/${VERSION}/character_icons/50x50/o_50x50.png`,
        characterName: {
          'en': 'Oliwia',
          'ja': 'オリビア'
        },
        result: village.Result.win,
        roleImage: `https://werewolf.world/image/${VERSION}/role_icons/50x50withTI/villager_50x50.png`,
        roleName: {
          'en': 'Villager',
          'ja': '村人'
        },
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
        id: Agent.a.en,
        name: Agent.a
      },
      {
        id: Agent.b.en,
        name: Agent.b
      },
      {
        id: Agent.c.en,
        name: Agent.c
      },
      {
        id: Agent.d.en,
        name: Agent.d
      },
      {
        id: Agent.e.en,
        name: Agent.e
      },
      {
        id: Agent.f.en,
        name: Agent.f
      },
      {
        id: Agent.g.en,
        name: Agent.g
      },
      {
        id: Agent.h.en,
        name: Agent.h
      },
      {
        id: Agent.i.en,
        name: Agent.i
      },
      {
        id: Agent.j.en,
        name: Agent.j
      },
      {
        id: Agent.k.en,
        name: Agent.k
      },
      {
        id: Agent.l.en,
        name: Agent.l
      },
      {
        id: Agent.m.en,
        name: Agent.m
      },
      {
        id: Agent.n.en,
        name: Agent.n
      },
      {
        id: Agent.o.en,
        name: Agent.o
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
        id: village.RoleId.master,
        name: Role.master
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
