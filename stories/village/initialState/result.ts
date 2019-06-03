/* global village */
import * as ActionTypes from '../../../src/scripts/village/constants/ActionTypes'
import {Content} from '../../../src/scripts/village/reducers/command'
import {ReducerState} from '../../../src/scripts/village/reducers'
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
        'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
        'id': 1,
        'image': 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
        'intensionalDisclosureRange': village.Channel.public,
        'isMarked': false,
        'isMine': true,
        'name': {
          'en': 'Adil',
          'ja': 'アーディル'
        },
        'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
        'phaseTimeLimit': 600,
        'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
        'text': 'Then, who are the werewolves?',
        'type': 'item'
      },
      'chat1': {
        'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
        'id': 2,
        'image': 'https://werewolf.world/image/0.3/agent_icons/120x120/i_120x120.png',
        'intensionalDisclosureRange': village.Channel.public,
        'isMarked': false,
        'isMine': false,
        'name': {
          'en': 'Ileanna',
          'ja': 'イレアナ'
        },
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
    agents: [],
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
    id: -1,
    visible: false
  },
  obfucator: {
    loading: false,
    visible: true
  },
  prediction: {
    playerStatus: [
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#1',
        'id': 1,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
        'name': {
          'en': 'Adil',
          'ja': 'アーディル'
        },
        'status': village.AgentStatus.alive
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#2',
        'id': 2,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/b_50x50.png',
        'name': {
          'en': 'Borya',
          'ja': 'ボーリャ'
        },
        'status': village.AgentStatus.alive
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#3',
        'id': 3,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/c_50x50.png',
        'name': {
          'en': 'Chacha',
          'ja': 'チャチャ'
        },
        'status': village.AgentStatus.alive
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#4',
        'id': 4,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/d_50x50.png',
        'name': {
          'en': 'Devdatta',
          'ja': 'デヴゥダッタ'
        },
        'status': village.AgentStatus.alive
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#5',
        'id': 5,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/e_50x50.png',
        'name': {
          'en': 'Ekrem',
          'ja': 'エクレム'
        },
        'status': village.AgentStatus.alive
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#6',
        'id': 6,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/f_50x50.png',
        'name': {
          'en': 'Fernando',
          'ja': 'フェルナンド'
        },
        'status': village.AgentStatus.deathByFear
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#7',
        'id': 7,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/g_50x50.png',
        'name': {
          'en': 'Gavriil',
          'ja': 'ガブリール'
        },
        'status': village.AgentStatus.unnaturalDeath
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#8',
        'id': 8,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/h_50x50.png',
        'name': {
          'en': 'Henrik',
          'ja': 'ヘンリック'
        },
        'status': village.AgentStatus.unnaturalDeath
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#9',
        'id': 9,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/i_50x50.png',
        'name': {
          'en': 'Ileanna',
          'ja': 'イレアナ'
        },
        'status': village.AgentStatus.unnaturalDeath
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#10',
        'id': 10,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/j_50x50.png',
        'name': {
          'en': 'Jasmin',
          'ja': 'ジャスミン'
        },
        'status': village.AgentStatus.alive
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#11',
        'id': 11,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/k_50x50.png',
        'name': {
          'en': 'Kaiji',
          'ja': '開司'
        },
        'status': village.AgentStatus.unnaturalDeath
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#12',
        'id': 12,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/l_50x50.png',
        'name': {
          'en': 'Louise',
          'ja': 'ルイーズ'
        },
        'status': village.AgentStatus.deathByAttack
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#13',
        'id': 13,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/m_50x50.png',
        'name': {
          'en': 'Marthe',
          'ja': 'マーテ'
        },
        'status': village.AgentStatus.alive
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#14',
        'id': 14,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/n_50x50.png',
        'name': {
          'en': 'Nanyamka',
          'ja': 'ナニャンカ'
        },
        'status': village.AgentStatus.alive
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#15',
        'id': 15,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/o_50x50.png',
        'name': {
          'en': 'Oliwia',
          'ja': 'オリビア'
        },
        'status': village.AgentStatus.alive
      }
    ],
    roleStatus: [
      {
        '@id': 'https://licos.online/state/0.2/village#3/role#villager',
        'id': village.RoleId.villager,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
        'name': {
          'en': 'Villager',
          'ja': '村人'
        },
        'numberOfAgents': 6
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
        'id': village.RoleId.seer,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/seer_50x50.png',
        'name': {
          'en': 'Seer',
          'ja': '占い師'
        },
        'numberOfAgents': 1
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/role#medium',
        'id': village.RoleId.medium,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/medium_50x50.png',
        'name': {
          'en': 'Medium',
          'ja': '霊媒師'
        },
        'numberOfAgents': 1
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
        'id': village.RoleId.hunter,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/hunter_50x50.png',
        'name': {
          'en': 'Hunter',
          'ja': '狩人'
        },
        'numberOfAgents': 1
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/role#mason',
        'id': village.RoleId.mason,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/mason_50x50.png',
        'name': {
          'en': 'Mason',
          'ja': '共有者'
        },
        'numberOfAgents': 2
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/role#madman',
        'id': village.RoleId.madman,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/madman_50x50.png',
        'name': {
          'en': 'Madman',
          'ja': '狂人'
        },
        'numberOfAgents': 1
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
        'id': village.RoleId.werewolf,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werewolf_50x50.png',
        'name': {
          'en': 'Werewolf',
          'ja': '人狼'
        },
        'numberOfAgents': 2
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/role#werehamster',
        'id': village.RoleId.werehamster,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werehamster_50x50.png',
        'name': {
          'en': 'Werehamster',
          'ja': 'ハムスター人間'
        },
        'numberOfAgents': 1
      }
    ],
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
        agentId: 1,
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
        agentId: 2,
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
        agentId: 3,
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
        agentId: 4,
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
        agentId: 5,
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
        agentId: 6,
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
        agentId: 7,
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
        agentId: 8,
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
        agentId: 9,
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
        agentId: 10,
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
        agentId: 11,
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
        agentId: 12,
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
        agentId: 13,
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
        agentId: 14,
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
        agentId: 15,
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
        id: 'Adil',
        name: {
          'en': 'Adil',
          'ja': 'アーディル'
        }
      },
      {
        id: 'Borya',
        name: {
          'en': 'Borya',
          'ja': 'ボーリャ'
        }
      },
      {
        id: 'Chacha',
        name: {
          'en': 'Chacha',
          'ja': 'チャチャ'
        }
      },
      {
        id: 'Devdatta',
        name: {
          'en': 'Devdatta',
          'ja': 'デヴゥダッタ'
        }
      },
      {
        id: 'Ekrem',
        name: {
          'en': 'Ekrem',
          'ja': 'エクレム'
        }
      },
      {
        id: 'Fernando',
        name: {
          'en': 'Fernando',
          'ja': 'フェルナンド'
        }
      },
      {
        id: 'Gavriil',
        name: {
          'en': 'Gavriil',
          'ja': 'ガブリール'
        }
      },
      {
        id: 'Henrik',
        name: {
          'en': 'Henrik',
          'ja': 'ヘンリック'
        }
      },
      {
        id: 'Ileanna',
        name: {
          'en': 'Ileanna',
          'ja': 'イレアナ'
        }
      },
      {
        id: 'Jasmin',
        name: {
          'en': 'Jasmin',
          'ja': 'ジャスミン'
        }
      },
      {
        id: 'Kaiji',
        name: {
          'en': 'Kaiji',
          'ja': '開司'
        }
      },
      {
        id: 'Louise',
        name: {
          'en': 'Louise',
          'ja': 'ルイーズ'
        }
      },
      {
        id: 'Marthe',
        name: {
          'en': 'Marthe',
          'ja': 'マーテ'
        }
      },
      {
        id: 'Nanyamka',
        name: {
          'en': 'Nanyamka',
          'ja': 'ナニャンカ'
        }
      },
      {
        id: 'Oliwia',
        name: {
          'en': 'Oliwia',
          'ja': 'オリビア'
        }
      },
      {
        id: 'hunter',
        name: {
          'en': 'Hunter',
          'ja': '狩人'
        }
      },
      {
        id: 'madman',
        name: {
          'en': 'Madman',
          'ja': '狂人'
        }
      },
      {
        id: 'mason',
        name: {
          'en': 'Mason',
          'ja': '共有者'
        }
      },
      {
        id: 'master',
        name: {
          'en': 'Master',
          'ja': 'マスター'
        }
      },
      {
        id: 'medium',
        name: {
          'en': 'Medium',
          'ja': '霊媒師'
        }
      },
      {
        id: 'seer',
        name: {
          'en': 'Seer',
          'ja': '占い師'
        }
      },
      {
        id: 'villager',
        name: {
          'en': 'Villager',
          'ja': '村人'
        }
      },
      {
        id: 'werehamster',
        name: {
          'en': 'Werehamster',
          'ja': 'ハムスター人間'
        }
      },
      {
        id: 'werewolf',
        name: {
          'en': 'Werewolf',
          'ja': '人狼'
        }
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
