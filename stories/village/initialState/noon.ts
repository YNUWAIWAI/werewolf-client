import * as ActionTypes from '../../../src/scripts/village/constants/ActionTypes'
import * as village from '../types'
import {Agent} from '../../../src/scripts/village/constants/Agent'
import {Content} from '../../../src/scripts/village/reducers/command'
import {ImagePath} from '../../../src/scripts/village/constants/ImagePath'
import {ReducerState} from '../../../src/scripts/village/reducers'
import {Role} from '../../../src/scripts/village/constants/Role'

const state: ReducerState = {
  base: {
    '@id': 'https://licos.online/state/0.2/village#3',
    'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
    'date': 1,
    'intensionalDisclosureRange': village.Channel.private,
    'phase': village.Phase.noon,
    'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
    'phaseTimeLimit': 50,
    'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
    'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
    'village': {
      '@context': village.Context.Village,
      '@id': 'https://licos.online/state/0.2/village',
      'chatSettings': {
        characterLimit: 140,
        limit: 10
      },
      'id': 3,
      'lang': village.Language.ja,
      'name': '横国の森の奥にある時代に取り残された小さな村',
      'totalNumberOfAgents': 2
    }
  },
  chat: {
    allIds: ['chat0', 'chat1', 'chat2', 'chat3', 'chat4'],
    byId: {
      'chat0': {
        'agentId': '1',
        'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
        'date': 1,
        'id': 1,
        'image': 'https://werewolf.world/image/0.3/character_icons/120x120/a_120x120.png',
        'intensionalDisclosureRange': village.Channel.public,
        'isMarked': false,
        'isMine': true,
        'name': Agent.a,
        'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
        'phaseTimeLimit': 600,
        'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
        'text': 'Then, who are the werewolves?',
        'type': 'item'
      },
      'chat1': {
        'agentId': '9',
        'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
        'date': 1,
        'id': 2,
        'image': 'https://werewolf.world/image/0.3/character_icons/120x120/i_120x120.png',
        'intensionalDisclosureRange': village.Channel.public,
        'isMarked': false,
        'isMine': false,
        'name': Agent.i,
        'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
        'phaseTimeLimit': 600,
        'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
        'text': '>>1 I guess Pamela is a werewolf.',
        'type': 'item'
      },
      'chat2': {
        'agentId': '1',
        'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
        'date': 1,
        'id': 3,
        'image': 'https://werewolf.world/image/0.3/character_icons/120x120/a_120x120.png',
        'intensionalDisclosureRange': village.Channel.public,
        'isMarked': false,
        'isMine': true,
        'name': Agent.a,
        'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
        'phaseTimeLimit': 600,
        'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
        'text': 'Then, who are the werewolves?',
        'type': 'item'
      },
      'chat3': {
        'agentId': '1',
        'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
        'date': 1,
        'id': 4,
        'image': 'https://werewolf.world/image/0.3/character_icons/120x120/a_120x120.png',
        'intensionalDisclosureRange': village.Channel.public,
        'isMarked': false,
        'isMine': true,
        'name': Agent.a,
        'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
        'phaseTimeLimit': 600,
        'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
        'text': 'Then, who are the werewolves?',
        'type': 'item'
      },
      'chat4': {
        'agentId': '1',
        'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
        'date': 1,
        'id': 5,
        'image': 'https://werewolf.world/image/0.3/character_icons/120x120/a_120x120.png',
        'intensionalDisclosureRange': village.Channel.public,
        'isMarked': false,
        'isMine': true,
        'name': Agent.a,
        'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
        'phaseTimeLimit': 600,
        'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
        'text': '>>1 Then, who are the werewolves?',
        'type': 'item'
      }
    }
  },
  command: {
    content: Content.CommandSelection,
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
      postCount: 0
    },
    werewolf: {
      available: true,
      postCount: 0
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
    allIds: [
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
      '2': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#2',
        'id': '2',
        'image': ImagePath.Agent.b,
        'name': Agent.b
      },
      '3': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#3',
        'id': '3',
        'image': ImagePath.Agent.c,
        'name': Agent.c
      },
      '4': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#4',
        'id': '4',
        'image': ImagePath.Agent.d,
        'name': Agent.d
      },
      '5': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#5',
        'id': '5',
        'image': ImagePath.Agent.e,
        'name': Agent.e
      },
      '6': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#6',
        'id': '6',
        'image': ImagePath.Agent.f,
        'name': Agent.f
      },
      '7': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#7',
        'id': '7',
        'image': ImagePath.Agent.g,
        'name': Agent.g
      },
      '8': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#8',
        'id': '8',
        'image': ImagePath.Agent.h,
        'name': Agent.h
      },
      '9': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#9',
        'id': '9',
        'image': ImagePath.Agent.i,
        'name': Agent.i
      },
      '10': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#10',
        'id': '10',
        'image': ImagePath.Agent.j,
        'name': Agent.j
      },
      '11': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#11',
        'id': '11',
        'image': ImagePath.Agent.k,
        'name': Agent.k
      },
      '12': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#12',
        'id': '12',
        'image': ImagePath.Agent.l,
        'name': Agent.l
      },
      '13': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#13',
        'id': '13',
        'image': ImagePath.Agent.m,
        'name': Agent.m
      },
      '14': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#14',
        'id': '14',
        'image': ImagePath.Agent.n,
        'name': Agent.n
      },
      '15': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#15',
        'id': '15',
        'image': ImagePath.Agent.o,
        'name': Agent.o
      }
    },
    fixed: false
  },
  hideButton: {
    hide: false
  },
  language: village.Language.en,
  mine: {
    agent: {
      '@id': 'https://licos.online/state/0.2/village#3/agent#1',
      'id': 1,
      'image': 'https://werewolf.world/image/0.3/character_icons/50x50/a_50x50.png',
      'name': {
        'en': 'Adil',
        'ja': 'アーディル'
      }
    },
    role: {
      '@id': 'https://licos.online/state/0.2/village#3/role#seer',
      'id': village.RoleId.seer,
      'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/seer_50x50.png',
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
    visible: false
  },
  prediction: {
    playerStatus: {
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
          '@id': 'https://licos.online/state/0.2/village#3/agent#1',
          'id': '1',
          'image': ImagePath.Agent.a,
          'name': Agent.a,
          'status': village.AgentStatus.alive
        },
        '2': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#2',
          'id': '2',
          'image': ImagePath.Agent.b,
          'name': Agent.b,
          'status': village.AgentStatus.alive
        },
        '3': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#3',
          'id': '3',
          'image': ImagePath.Agent.c,
          'name': Agent.c,
          'status': village.AgentStatus.alive
        },
        '4': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#4',
          'id': '4',
          'image': ImagePath.Agent.d,
          'name': Agent.d,
          'status': village.AgentStatus.alive
        },
        '5': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#5',
          'id': '5',
          'image': ImagePath.Agent.e,
          'name': Agent.e,
          'status': village.AgentStatus.alive
        },
        '6': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#6',
          'id': '6',
          'image': ImagePath.Agent.f,
          'name': Agent.f,
          'status': village.AgentStatus.alive
        },
        '7': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#7',
          'id': '7',
          'image': ImagePath.Agent.g,
          'name': Agent.g,
          'status': village.AgentStatus.alive
        },
        '8': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#8',
          'id': '8',
          'image': ImagePath.Agent.h,
          'name': Agent.h,
          'status': village.AgentStatus.alive
        },
        '9': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#9',
          'id': '9',
          'image': ImagePath.Agent.i,
          'name': Agent.i,
          'status': village.AgentStatus.alive
        },
        '10': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#10',
          'id': '10',
          'image': ImagePath.Agent.j,
          'name': Agent.j,
          'status': village.AgentStatus.alive
        },
        '11': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#11',
          'id': '11',
          'image': ImagePath.Agent.k,
          'name': Agent.k,
          'status': village.AgentStatus.alive
        },
        '12': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#12',
          'id': '12',
          'image': ImagePath.Agent.l,
          'name': Agent.l,
          'status': village.AgentStatus.alive
        },
        '13': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#13',
          'id': '13',
          'image': ImagePath.Agent.m,
          'name': Agent.m,
          'status': village.AgentStatus.alive
        },
        '14': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#14',
          'id': '14',
          'image': ImagePath.Agent.n,
          'name': Agent.n,
          'status': village.AgentStatus.alive
        },
        '15': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#15',
          'id': '15',
          'image': ImagePath.Agent.o,
          'name': Agent.o,
          'status': village.AgentStatus.alive
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
          '@id': 'https://licos.online/state/0.2/village#3/role#villager',
          'id': village.RoleId.villager,
          'image': ImagePath.Role.villager,
          'name': Role.villager,
          'numberOfAgents': 6
        },
        [village.RoleId.seer]: {
          '@id': 'https://licos.online/state/0.2/village#3/role#seer',
          'id': village.RoleId.seer,
          'image': ImagePath.Role.seer,
          'name': Role.seer,
          'numberOfAgents': 1
        },
        [village.RoleId.medium]: {
          '@id': 'https://licos.online/state/0.2/village#3/role#medium',
          'id': village.RoleId.medium,
          'image': ImagePath.Role.medium,
          'name': Role.medium,
          'numberOfAgents': 1
        },
        [village.RoleId.hunter]: {
          '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
          'id': village.RoleId.hunter,
          'image': ImagePath.Role.hunter,
          'name': Role.hunter,
          'numberOfAgents': 1
        },
        [village.RoleId.mason]: {
          '@id': 'https://licos.online/state/0.2/village#3/role#mason',
          'id': village.RoleId.mason,
          'image': ImagePath.Role.mason,
          'name': Role.mason,
          'numberOfAgents': 2
        },
        [village.RoleId.madman]: {
          '@id': 'https://licos.online/state/0.2/village#3/role#madman',
          'id': village.RoleId.madman,
          'image': ImagePath.Role.madman,
          'name': Role.madman,
          'numberOfAgents': 1
        },
        [village.RoleId.werewolf]: {
          '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
          'id': village.RoleId.werewolf,
          'image': ImagePath.Role.werewolf,
          'name': Role.werewolf,
          'numberOfAgents': 2
        },
        [village.RoleId.werehamster]: {
          '@id': 'https://licos.online/state/0.2/village#3/role#werehamster',
          'id': village.RoleId.werehamster,
          'image': ImagePath.Role.werehamster,
          'name': Role.werehamster,
          'numberOfAgents': 1
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
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        madman: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        mason: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        medium: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.CIRCLE
        },
        villager: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        werehamster: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        werewolf: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        }
      },
      '2': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.CROSS
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.CIRCLE
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.TRIANGLE
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '3': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '4': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '5': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '6': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '7': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '8': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '9': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '10': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '11': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '12': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '13': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '14': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '15': {
        hunter: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      }
    }
  },
  result: {
    agents: {},
    allIds: [],
    losers: [],
    me: null,
    summary: {
      kind: 'audience',
      loserTeam: new Set(),
      winnerTeam: village.Team.villager
    },
    visible: false,
    winners: []
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
    phaseTimeLimit: 50000,
    start: new Date('2006-10-07T12:06:56.568+09:00').getTime(),
    time: 0
  }
}

export default state
