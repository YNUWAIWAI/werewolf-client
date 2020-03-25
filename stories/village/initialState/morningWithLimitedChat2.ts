import * as ActionTypes from '../../../src/scripts/village/constants/ActionTypes'
import {Character} from '../../../src/scripts/village/constants/Character'
import {Content} from '../../../src/scripts/village/reducers/command'
import {ImagePath} from '../../../src/scripts/village/constants/ImagePath'
import {ReducerState} from '../../../src/scripts/village/reducers'
import {Role} from '../../../src/scripts/village/constants/Role'
import {VERSION} from '../../../src/scripts/village/constants/Version'
import {village} from '../types'

export const morningWithLimitedChat2: Partial<ReducerState> = {
  base: {
    '@id': `https://licos.online/state/${VERSION}/village#3`,
    'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
    'day': 1,
    'intensionalDisclosureRange': village.Channel.private,
    'phase': village.Phase.morning,
    'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
    'phaseTimeLimit': 600,
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
      'totalNumberOfPlayers': 5
    }
  },
  chat: {
    allIds: ['chat0', 'chat1', 'chat2', 'chat3', 'chat4'],
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
        'serverTimestamp': '2006-10-07T12:07:56.568+09:00',
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
        'serverTimestamp': '2006-10-07T12:08:56.568+09:00',
        'text': '>>1 I guess Pamela is a werewolf.',
        'type': village.ChatItemType.item
      },
      'chat2': {
        'characterId': '1',
        'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
        'day': 1,
        'id': 3,
        'image': ImagePath.Character120x120.a,
        'intensionalDisclosureRange': village.Channel.werewolf,
        'isMarked': false,
        'isMine': true,
        'name': Character.a,
        'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
        'phaseTimeLimit': 600,
        'serverTimestamp': '2006-10-07T12:09:56.568+09:00',
        'text': 'I am a werewolf.',
        'type': village.ChatItemType.item
      },
      'chat3': {
        'characterId': '1',
        'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
        'day': 1,
        'id': 3,
        'image': ImagePath.Character120x120.a,
        'intensionalDisclosureRange': village.Channel.private,
        'isMarked': false,
        'isMine': true,
        'name': Character.a,
        'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
        'phaseTimeLimit': 600,
        'serverTimestamp': '2006-10-07T12:09:56.568+09:00',
        'text': 'Hahaha',
        'type': village.ChatItemType.item
      },
      'chat4': {
        'characterId': '9',
        'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
        'day': 1,
        'id': 5,
        'image': ImagePath.Character120x120.i,
        'intensionalDisclosureRange': village.Channel.public,
        'isMarked': false,
        'isMine': false,
        'name': Character.i,
        'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
        'phaseTimeLimit': 600,
        'serverTimestamp': '2006-10-07T12:11:56.568+09:00',
        'text': 'Like I can\'t judge ...',
        'type': village.ChatItemType.item
      }
    }
  },
  command: {
    content: Content.CommandInputBox,
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
      'image': ImagePath.Character120x120.a,
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
    visible: false
  },
  prediction: {
    characterStatus: {
      allIds: [
        '1',
        '2',
        '3',
        '4',
        '5'
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
        }
      }
    },
    roleStatus: {
      allIds: [
        village.RoleId.villager,
        village.RoleId.seer,
        village.RoleId.werewolf
      ],
      byId: {
        [village.RoleId.villager]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#villager`,
          'id': village.RoleId.villager,
          'image': ImagePath.Role.villager,
          'name': Role.villager,
          'numberOfPlayers': 3
        },
        [village.RoleId.seer]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
          'id': village.RoleId.seer,
          'image': ImagePath.Role.seer,
          'name': Role.seer,
          'numberOfPlayers': 1
        },
        [village.RoleId.werewolf]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#werewolf`,
          'id': village.RoleId.werewolf,
          'image': ImagePath.Role.werewolf,
          'name': Role.werewolf,
          'numberOfPlayers': 1
        }
      }
    },
    spec: {
      position: {
        left: 0,
        top: 0
      },
      role: village.RoleId.villager,
      visible: false
    },
    table: {
      '1': {
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
        werewolf: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        }
      },
      '2': {
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
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '3': {
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
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '4': {
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
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '5': {
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
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      }
    }
  },
  result: {
    allIds: [],
    characters: {},
    losers: [],
    me: null,
    summary: {
      kind: village.SummaryType.audience,
      loserTeam: new Set(),
      winnerTeam: village.Team.villager
    },
    visible: false,
    winners: []
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
        id: village.RoleId.seer,
        name: Role.seer
      },
      {
        id: village.RoleId.villager,
        name: Role.villager
      },
      {
        id: village.RoleId.werewolf,
        name: Role.werewolf
      }
    ]
  },
  timer: {
    phaseStartTime: new Date('2006-10-07T12:06:56.568+09:00').getTime(),
    phaseTimeLimit: 600000,
    start: new Date('2006-10-07T12:06:56.568+09:00').getTime(),
    time: 0
  }
}
