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
        'image': 'https://werewolf.world/image/0.1/Walter.jpg',
        'intensionalDisclosureRange': village.Channel.public,
        'isMine': true,
        'name': {
          'en': 'Walter',
          'ja': 'ヴァルター'
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
        'image': 'https://werewolf.world/image/0.1/Alvin.jpg',
        'intensionalDisclosureRange': village.Channel.public,
        'isMine': false,
        'name': {
          'en': 'Alvin',
          'ja': 'アルビン'
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
    'limited': {
      available: true,
      postCount: 0
    },
    'public': {
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
      'image': 'https://werewolf.world/image/0.2/Walter.jpg',
      'name': {
        en: 'Walter',
        ja: 'ヴァルター'
      }
    },
    role: {
      '@id': 'https://licos.online/state/0.2/village#3/role#seer',
      'id': village.RoleId.seer,
      'image': 'https://werewolf.world/image/0.2/seer.jpg',
      'name': {
        en: 'Seer',
        ja: '占い師'
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
        'image': 'https://werewolf.world/image/0.1/Walter.jpg',
        'name': {
          'en': 'Walter',
          'ja': 'ヴァルター'
        },
        'status': village.AgentStatus.alive
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#2',
        'id': 2,
        'image': 'https://werewolf.world/image/0.1/Moritz.jpg',
        'name': {
          'en': 'Moritz',
          'ja': 'モーリッツ'
        },
        'status': village.AgentStatus.alive
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#3',
        'id': 3,
        'image': 'https://werewolf.world/image/0.1/Simson.jpg',
        'name': {
          'en': 'Simson',
          'ja': 'ジムゾン'
        },
        'status': village.AgentStatus.alive
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#4',
        'id': 4,
        'image': 'https://werewolf.world/image/0.1/Thomas.jpg',
        'name': {
          'en': 'Thomas',
          'ja': 'トーマス'
        },
        'status': village.AgentStatus.alive
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#5',
        'id': 5,
        'image': 'https://werewolf.world/image/0.1/Nicholas.jpg',
        'name': {
          'en': 'Nicholas',
          'ja': 'ニコラス'
        },
        'status': village.AgentStatus.alive
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#6',
        'id': 6,
        'image': 'https://werewolf.world/image/0.1/Dieter.jpg',
        'name': {
          'en': 'Dieter',
          'ja': 'ディーター'
        },
        'status': village.AgentStatus.deathByFear
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#7',
        'id': 7,
        'image': 'https://werewolf.world/image/0.1/Peter.jpg',
        'name': {
          'en': 'Peter',
          'ja': 'ペーター'
        },
        'status': village.AgentStatus.unnaturalDeath
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#8',
        'id': 8,
        'image': 'https://werewolf.world/image/0.1/Lisa.jpg',
        'name': {
          'en': 'Lisa',
          'ja': 'リーザ'
        },
        'status': village.AgentStatus.unnaturalDeath
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#9',
        'id': 9,
        'image': 'https://werewolf.world/image/0.1/Alvin.jpg',
        'name': {
          'en': 'Alvin',
          'ja': 'アルビン'
        },
        'status': village.AgentStatus.unnaturalDeath
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#11',
        'id': 11,
        'image': 'https://werewolf.world/image/0.1/Otto.jpg',
        'name': {
          'en': 'Otto',
          'ja': 'オットー'
        },
        'status': village.AgentStatus.unnaturalDeath
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#12',
        'id': 12,
        'image': 'https://werewolf.world/image/0.1/Joachim.jpg',
        'name': {
          'en': 'Joachim',
          'ja': 'ヨアヒム'
        },
        'status': village.AgentStatus.deathByAttack
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#13',
        'id': 13,
        'image': 'https://werewolf.world/image/0.1/Pamela.jpg',
        'name': {
          'en': 'Pamela',
          'ja': 'パメラ'
        },
        'status': village.AgentStatus.alive
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#14',
        'id': 14,
        'image': 'https://werewolf.world/image/0.1/Jacob.jpg',
        'name': {
          'en': 'Jacob',
          'ja': 'ヤコブ'
        },
        'status': village.AgentStatus.alive
      }
    ],
    roleStatus: [
      {
        '@id': 'https://licos.online/state/0.2/village#3/role#villager',
        'id': village.RoleId.villager,
        'image': 'https://werewolf.world/image/0.1/villager.jpg',
        'name': {
          'en': 'Villager',
          'ja': '村人'
        },
        'numberOfAgents': 6
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
        'id': village.RoleId.seer,
        'image': 'https://werewolf.world/image/0.1/seer.jpg',
        'name': {
          'en': 'Seer',
          'ja': '占い師'
        },
        'numberOfAgents': 1
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/role#medium',
        'id': village.RoleId.medium,
        'image': 'https://werewolf.world/image/0.1/medium.jpg',
        'name': {
          'en': 'Medium',
          'ja': '霊媒師'
        },
        'numberOfAgents': 1
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
        'id': village.RoleId.hunter,
        'image': 'https://werewolf.world/image/0.1/hunter.jpg',
        'name': {
          'en': 'Hunter',
          'ja': '狩人'
        },
        'numberOfAgents': 1
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/role#mason',
        'id': village.RoleId.mason,
        'image': 'https://werewolf.world/image/0.1/mason.jpg',
        'name': {
          'en': 'Mason',
          'ja': '共有者'
        },
        'numberOfAgents': 2
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/role#madman',
        'id': village.RoleId.madman,
        'image': 'https://werewolf.world/image/0.1/madman.jpg',
        'name': {
          'en': 'Madman',
          'ja': '狂人'
        },
        'numberOfAgents': 1
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
        'id': village.RoleId.werewolf,
        'image': 'https://werewolf.world/image/0.1/werewolf.jpg',
        'name': {
          'en': 'Werewolf',
          'ja': '人狼'
        },
        'numberOfAgents': 2
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/role#werehamster',
        'id': village.RoleId.werehamster,
        'image': 'https://werewolf.world/image/0.1/werehamster.jpg',
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
      }
    }
  },
  result: {
    agents: {
      agent0: {
        agentId: 0,
        agentImage: 'https://werewolf.world/image/0.2/Gert.jpg',
        agentName: {
          'en': 'Gert',
          'ja': 'ゲルト'
        },
        avatarImage: 'https://werewolf.world/image/0.2/Nicholas.jpg',
        avatarName: 'Sato',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.2/villager.jpg',
        roleName: {
          'en': 'Villager',
          'ja': '村人'
        },
        status: village.AgentStatus.alive
      },
      agent1: {
        agentId: 1,
        agentImage: 'https://werewolf.world/image/0.2/Walter.jpg',
        agentName: {
          en: 'Walter',
          ja: 'ヴァルター'
        },
        avatarImage: 'https://werewolf.world/image/0.2/Gert.jpg',
        avatarName: 'Suzuki',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.2/seer.jpg',
        roleName: {
          en: 'Seer',
          ja: '占い師'
        },
        status: village.AgentStatus.alive
      },
      agent2: {
        agentId: 2,
        agentImage: 'https://werewolf.world/image/0.2/Moritz.jpg',
        agentName: {
          en: 'Moritz',
          ja: 'モーリッツ'
        },
        avatarImage: 'https://werewolf.world/image/0.2/Alvin.jpg',
        avatarName: 'Takahashi',
        result: village.Result.lose,
        roleImage: 'https://werewolf.world/image/0.2/werewolf.jpg',
        roleName: {
          en: 'Werewolf',
          ja: '人狼'
        },
        status: village.AgentStatus.alive
      },
      agent3: {
        agentId: 3,
        agentImage: 'https://werewolf.world/image/0.2/Simson.jpg',
        agentName: {
          en: 'Simson',
          ja: 'ジムゾン'
        },
        avatarImage: 'https://werewolf.world/image/0.2/Friedel.jpg',
        avatarName: 'Tanaka',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.2/hunter.jpg',
        roleName: {
          en: 'Hunter',
          ja: '狩人'
        },
        status: village.AgentStatus.alive
      },
      agent4: {
        agentId: 4,
        agentImage: 'https://werewolf.world/image/0.2/Thomas.jpg',
        agentName: {
          en: 'Thomas',
          ja: 'トーマス'
        },
        avatarImage: 'https://werewolf.world/image/0.2/Dieter.jpg',
        avatarName: 'Ito',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.2/medium.jpg',
        roleName: {
          en: 'Medium',
          ja: '霊媒師'
        },
        status: village.AgentStatus.alive
      },
      agent5: {
        agentId: 5,
        agentImage: 'https://werewolf.world/image/0.2/Nicholas.jpg',
        agentName: {
          en: 'Nicholas',
          ja: 'ニコラス'
        },
        avatarImage: 'https://werewolf.world/image/0.2/Erna.jpg',
        avatarName: 'Watanabe',
        result: village.Result.lose,
        roleImage: 'https://werewolf.world/image/0.2/werehamster.jpg',
        roleName: {
          en: 'Werehamster',
          ja: 'ハムスター人間'
        },
        status: village.AgentStatus.deathByFear
      },
      agent6: {
        agentId: 6,
        agentImage: 'https://werewolf.world/image/0.2/Dieter.jpg',
        agentName: {
          en: 'Dieter',
          ja: 'ディーター'
        },
        avatarImage: 'https://werewolf.world/image/0.2/Jacob.jpg',
        avatarName: 'Yamamoto',
        result: village.Result.lose,
        roleImage: 'https://werewolf.world/image/0.2/madman.jpg',
        roleName: {
          en: 'Madman',
          ja: '狂人'
        },
        status: village.AgentStatus.deathByExecution
      },
      agent7: {
        agentId: 7,
        agentImage: 'https://werewolf.world/image/0.2/Peter.jpg',
        agentName: {
          en: 'Peter',
          ja: 'ペーター'
        },
        avatarImage: 'https://werewolf.world/image/0.2/Nicholas.jpg',
        avatarName: 'Nakamura',
        result: village.Result.lose,
        roleImage: 'https://werewolf.world/image/0.2/werewolf.jpg',
        roleName: {
          en: 'Werewolf',
          ja: '人狼'
        },
        status: village.AgentStatus.unnaturalDeath
      },
      agent8: {
        agentId: 8,
        agentImage: 'https://werewolf.world/image/0.2/Lisa.jpg',
        agentName: {
          en: 'Lisa',
          ja: 'リーザ'
        },
        avatarImage: 'https://werewolf.world/image/0.2/Peter.jpg',
        avatarName: 'Kobayashi',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.2/villager.jpg',
        roleName: {
          en: 'Villager',
          ja: '村人'
        },
        status: village.AgentStatus.unnaturalDeath
      },
      agent9: {
        agentId: 9,
        agentImage: 'https://werewolf.world/image/0.2/Alvin.jpg',
        agentName: {
          en: 'Alvin',
          ja: 'アルビン'
        },
        avatarImage: 'https://werewolf.world/image/0.2/Peter.jpg',
        avatarName: 'Yoshida',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.2/villager.jpg',
        roleName: {
          en: 'Villager',
          ja: '村人'
        },
        status: village.AgentStatus.unnaturalDeath
      },
      agent10: {
        agentId: 10,
        agentImage: 'https://werewolf.world/image/0.2/Catalina.jpg',
        agentName: {
          'en': 'Catalina',
          'ja': 'カタリナ'
        },
        avatarImage: 'https://werewolf.world/image/0.2/Simon.jpg',
        avatarName: 'Yamada',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.2/mason.jpg',
        roleName: {
          'en': 'Mason',
          'ja': '共有者'
        },
        status: village.AgentStatus.unnaturalDeath
      },
      agent11: {
        agentId: 11,
        agentImage: 'https://werewolf.world/image/0.2/Otto.jpg',
        agentName: {
          en: 'Otto',
          ja: 'オットー'
        },
        avatarImage: 'https://werewolf.world/image/0.2/Simson.jpg',
        avatarName: 'Sasaki',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.2/mason.jpg',
        roleName: {
          en: 'Mason',
          ja: '共有者'
        },
        status: village.AgentStatus.unnaturalDeath
      },
      agent12: {
        agentId: 12,
        agentImage: 'https://werewolf.world/image/0.2/Joachim.jpg',
        agentName: {
          en: 'Joachim',
          ja: 'ヨアヒム'
        },
        avatarImage: 'https://werewolf.world/image/0.2/Otto.jpg',
        avatarName: 'Yamaguchi',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.2/villager.jpg',
        roleName: {
          en: 'Villager',
          ja: '村人'
        },
        status: village.AgentStatus.deathByAttack
      },
      agent13: {
        agentId: 13,
        agentImage: 'https://werewolf.world/image/0.2/Pamela.jpg',
        agentName: {
          en: 'Pamela',
          ja: 'パメラ'
        },
        avatarImage: 'https://werewolf.world/image/0.2/Joachim.jpg',
        avatarName: 'Matsumoto',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.2/villager.jpg',
        roleName: {
          en: 'Villager',
          ja: '村人'
        },
        status: village.AgentStatus.alive
      },
      agent14: {
        agentId: 14,
        agentImage: 'https://werewolf.world/image/0.2/Jacob.jpg',
        agentName: {
          en: 'Jacob',
          ja: 'ヤコブ'
        },
        avatarImage: 'https://werewolf.world/image/0.2/Catalina.jpg',
        avatarName: 'Inoue',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.2/villager.jpg',
        roleName: {
          en: 'Villager',
          ja: '村人'
        },
        status: village.AgentStatus.alive
      }
    },
    allIds: [
      'agent0',
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
      'agent14'
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
      'agent0',
      'agent1',
      'agent3',
      'agent4',
      'agent8',
      'agent9',
      'agent10',
      'agent11',
      'agent12',
      'agent13',
      'agent14'
    ]
  },
  suggest: {
    data: [
      {
        id: 'Alvin',
        name: {
          'en': 'Alvin',
          'ja': 'アルビン'
        }
      },
      {
        id: 'Catalina',
        name: {
          'en': 'Catalina',
          'ja': 'カタリナ'
        }
      },
      {
        id: 'Dieter',
        name: {
          'en': 'Dieter',
          'ja': 'ディーター'
        }
      },
      {
        id: 'Gert',
        name: {
          'en': 'Gert',
          'ja': 'ゲルト'
        }
      },
      {
        id: 'Jacob',
        name: {
          'en': 'Jacob',
          'ja': 'ヤコブ'
        }
      },
      {
        id: 'Joachim',
        name: {
          'en': 'Joachim',
          'ja': 'ヨアヒム'
        }
      },
      {
        id: 'Lisa',
        name: {
          'en': 'Lisa',
          'ja': 'リーザ'
        }
      },
      {
        id: 'Moritz',
        name: {
          'en': 'Moritz',
          'ja': 'モーリッツ'
        }
      },
      {
        id: 'Nicholas',
        name: {
          'en': 'Nicholas',
          'ja': 'ニコラス'
        }
      },
      {
        id: 'Otto',
        name: {
          'en': 'Otto',
          'ja': 'オットー'
        }
      },
      {
        id: 'Pamela',
        name: {
          'en': 'Pamela',
          'ja': 'パメラ'
        }
      },
      {
        id: 'Peter',
        name: {
          'en': 'Peter',
          'ja': 'ペーター'
        }
      },
      {
        id: 'Simson',
        name: {
          'en': 'Simson',
          'ja': 'ジムゾン'
        }
      },
      {
        id: 'Thomas',
        name: {
          'en': 'Thomas',
          'ja': 'トーマス'
        }
      },
      {
        id: 'Walter',
        name: {
          'en': 'Walter',
          'ja': 'ヴァルター'
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
