import * as ActionTypes from '../../../src/scripts/village/constants/ActionTypes'
import * as village from 'types/village'
import {Agent} from '../../../src/scripts/village/constants/Agent'
import {Content} from '../../../src/scripts/village/reducers/command'
import {ImagePath} from '../../../src/scripts/village/constants/ImagePath'
import {ReducerState} from '../../../src/scripts/village/reducers'
import {Role} from '../../../src/scripts/village/constants/Role'

const state: ReducerState = {
  base: {
    '@id': 'https://licos.online/state/0.2/village#3',
    'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
    'date': -1,
    'intensionalDisclosureRange': village.Channel.private,
    'phase': village.Phase.result,
    'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
    'phaseTimeLimit': -1,
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
      'totalNumberOfAgents': 15
    }
  },
  chat: {
    allIds: ['delimeter0', 'chat0', 'chat1', 'delimeter1'],
    byId: {
      'chat0': {
        'agentId': '1',
        'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
        'date': 1,
        'id': 1,
        'image': 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
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
        'image': 'https://werewolf.world/image/0.3/agent_icons/120x120/i_120x120.png',
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
      'delimeter0': {
        date: 1,
        type: 'delimeter'
      },
      'delimeter1': {
        date: -1,
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
    limited: {
      available: true,
      postCount: 0
    },
    public: {
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
    allIds: [],
    byId: {},
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
      'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
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
    visible: true
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
          'status': village.AgentStatus.deathByFear
        },
        '7': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#7',
          'id': '7',
          'image': ImagePath.Agent.g,
          'name': Agent.g,
          'status': village.AgentStatus.unnaturalDeath
        },
        '8': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#8',
          'id': '8',
          'image': ImagePath.Agent.h,
          'name': Agent.h,
          'status': village.AgentStatus.unnaturalDeath
        },
        '9': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#9',
          'id': '9',
          'image': ImagePath.Agent.i,
          'name': Agent.i,
          'status': village.AgentStatus.unnaturalDeath
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
          'status': village.AgentStatus.unnaturalDeath
        },
        '12': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#12',
          'id': '12',
          'image': ImagePath.Agent.l,
          'name': Agent.l,
          'status': village.AgentStatus.deathByAttack
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
    agents: {
      agent1: {
        agentId: '1',
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
        agentName: {
          'en': 'Adil',
          'ja': 'アーディル'
        },
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/o_50x50.png',
        avatarName: 'Suzuki',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/seer_50x50.png',
        roleName: {
          en: 'Seer',
          ja: '占い師'
        },
        status: village.AgentStatus.alive
      },
      agent2: {
        agentId: '2',
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/b_50x50.png',
        agentName: {
          'en': 'Borya',
          'ja': 'ボーリャ'
        },
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/i_50x50.png',
        avatarName: 'Takahashi',
        result: village.Result.lose,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werewolf_50x50.png',
        roleName: {
          en: 'Werewolf',
          ja: '人狼'
        },
        status: village.AgentStatus.alive
      },
      agent3: {
        agentId: '3',
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/c_50x50.png',
        agentName: {
          'en': 'Chacha',
          'ja': 'チャチャ'
        },
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/r_50x50.png',
        avatarName: 'Tanaka',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/hunter_50x50.png',
        roleName: {
          en: 'Hunter',
          ja: '狩人'
        },
        status: village.AgentStatus.alive
      },
      agent4: {
        agentId: '4',
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/d_50x50.png',
        agentName: {
          'en': 'Devdatta',
          'ja': 'デヴゥダッタ'
        },
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/f_50x50.png',
        avatarName: 'Ito',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/medium_50x50.png',
        roleName: {
          en: 'Medium',
          ja: '霊媒師'
        },
        status: village.AgentStatus.alive
      },
      agent5: {
        agentId: '5',
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/e_50x50.png',
        agentName: {
          'en': 'Ekrem',
          'ja': 'エクレム'
        },
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/s_50x50.png',
        avatarName: 'Watanabe',
        result: village.Result.lose,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werehamster_50x50.png',
        roleName: {
          en: 'Werehamster',
          ja: 'ハムスター人間'
        },
        status: village.AgentStatus.deathByFear
      },
      agent6: {
        agentId: '6',
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/f_50x50.png',
        agentName: {
          'en': 'Fernando',
          'ja': 'フェルナンド'
        },
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/n_50x50.png',
        avatarName: 'Yamamoto',
        result: village.Result.lose,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/madman_50x50.png',
        roleName: {
          en: 'Madman',
          ja: '狂人'
        },
        status: village.AgentStatus.deathByExecution
      },
      agent7: {
        agentId: '7',
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/g_50x50.png',
        agentName: {
          'en': 'Gavriil',
          'ja': 'ガブリール'
        },
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/e_50x50.png',
        avatarName: 'Nakamura',
        result: village.Result.lose,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werewolf_50x50.png',
        roleName: {
          en: 'Werewolf',
          ja: '人狼'
        },
        status: village.AgentStatus.unnaturalDeath
      },
      agent8: {
        agentId: '8',
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/h_50x50.png',
        agentName: {
          'en': 'Henrik',
          'ja': 'ヘンリック'
        },
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/g_50x50.png',
        avatarName: 'Kobayashi',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
        roleName: {
          en: 'Villager',
          ja: '村人'
        },
        status: village.AgentStatus.unnaturalDeath
      },
      agent9: {
        agentId: '9',
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/i_50x50.png',
        agentName: {
          'en': 'Ileanna',
          'ja': 'イレアナ'
        },
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/g_50x50.png',
        avatarName: 'Yoshida',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
        roleName: {
          en: 'Villager',
          ja: '村人'
        },
        status: village.AgentStatus.unnaturalDeath
      },
      agent10: {
        agentId: '10',
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/j_50x50.png',
        agentName: {
          'en': 'Jasmin',
          'ja': 'ジャスミン'
        },
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/t_50x50.png',
        avatarName: 'Yamada',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/mason_50x50.png',
        roleName: {
          'en': 'Mason',
          'ja': '共有者'
        },
        status: village.AgentStatus.unnaturalDeath
      },
      agent11: {
        agentId: '11',
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/k_50x50.png',
        agentName: {
          'en': 'Kaiji',
          'ja': '開司'
        },
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/c_50x50.png',
        avatarName: 'Sasaki',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/mason_50x50.png',
        roleName: {
          en: 'Mason',
          ja: '共有者'
        },
        status: village.AgentStatus.unnaturalDeath
      },
      agent12: {
        agentId: '12',
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/l_50x50.png',
        agentName: {
          'en': 'Louise',
          'ja': 'ルイーズ'
        },
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/k_50x50.png',
        avatarName: 'Yamaguchi',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
        roleName: {
          en: 'Villager',
          ja: '村人'
        },
        status: village.AgentStatus.deathByAttack
      },
      agent13: {
        agentId: '13',
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/m_50x50.png',
        agentName: {
          'en': 'Marthe',
          'ja': 'マーテ'
        },
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/l_50x50.png',
        avatarName: 'Matsumoto',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
        roleName: {
          en: 'Villager',
          ja: '村人'
        },
        status: village.AgentStatus.alive
      },
      agent14: {
        agentId: '14',
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/n_50x50.png',
        agentName: {
          'en': 'Nanyamka',
          'ja': 'ナニャンカ'
        },
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/j_50x50.png',
        avatarName: 'Inoue',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
        roleName: {
          en: 'Villager',
          ja: '村人'
        },
        status: village.AgentStatus.alive
      },
      agent15: {
        agentId: '15',
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/o_50x50.png',
        agentName: {
          'en': 'Oliwia',
          'ja': 'オリビア'
        },
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/e_50x50.png',
        avatarName: 'Sato',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
        roleName: {
          'en': 'Villager',
          'ja': '村人'
        },
        status: village.AgentStatus.alive
      }
    },
    allIds: [
      'agent1',
      'agent2',
      'agent3',
      'agent4',
      'agent5',
      'agent6',
      'agent7',
      'agent8',
      'agent9',
      'agent10',
      'agent11',
      'agent12',
      'agent13',
      'agent14',
      'agent15'
    ],
    losers: [
      'agent2',
      'agent5',
      'agent6',
      'agent7'
    ],
    me: 'agent1',
    summary: {
      kind: 'player',
      loserTeam: new Set([village.Team.werewolf, village.Team.werehamster]),
      myTeam: village.Team.villager,
      result: village.Result.win,
      winnerTeam: village.Team.villager
    },
    visible: true,
    winners: [
      'agent1',
      'agent3',
      'agent4',
      'agent8',
      'agent9',
      'agent10',
      'agent11',
      'agent12',
      'agent13',
      'agent14',
      'agent15'
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

export default state
