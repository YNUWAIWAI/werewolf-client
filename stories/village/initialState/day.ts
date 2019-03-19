/* global village */
import * as ActionTypes from '../../../src/scripts/village/constants/ActionTypes'
import {Content} from '../../../src/scripts/village/reducers/command'
import {ReducerState} from '../../../src/scripts/village/reducers'
const state: ReducerState = {
  base: {
    '@id': 'https://licos.online/state/0.2/village#3',
    'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
    'date': 1,
    'intensionalDisclosureRange': village.Channel.private,
    'phase': village.Phase.day,
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
        'text': 'それで、あなたは人狼が誰だと思うの？',
        'type': 'item'
      },
      'chat1': {
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
        'text': '>>1 私はパメラが人狼だと思う。',
        'type': 'item'
      },
      'chat2': {
        'id': 3,
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
        'text': 'それで、あなたは人狼が誰だと思うの？',
        'type': 'item'
      },
      'chat3': {
        'id': 4,
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
        'text': 'それで、あなたは人狼が誰だと思うの？',
        'type': 'item'
      },
      'chat4': {
        'id': 5,
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
        'text': '>>1 それで、あなたは人狼が誰だと思うの？',
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
    agents: [
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#2',
        'id': 2,
        'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
        'name': {
          en: 'Moritz',
          ja: 'モーリッツ'
        }
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#3',
        'id': 3,
        'image': 'https://werewolf.world/image/0.2/Simson.jpg',
        'name': {
          en: 'Simson',
          ja: 'ジムゾン'
        }
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#4',
        'id': 4,
        'image': 'https://werewolf.world/image/0.2/Thomas.jpg',
        'name': {
          en: 'Thomas',
          ja: 'トーマス'
        }
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#5',
        'id': 5,
        'image': 'https://werewolf.world/image/0.2/Nicholas.jpg',
        'name': {
          en: 'Nicholas',
          ja: 'ニコラス'
        }
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#6',
        'id': 6,
        'image': 'https://werewolf.world/image/0.2/Dieter.jpg',
        'name': {
          en: 'Dieter',
          ja: 'ディーター'
        }
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#7',
        'id': 7,
        'image': 'https://werewolf.world/image/0.2/Peter.jpg',
        'name': {
          en: 'Peter',
          ja: 'ペーター'
        }
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#8',
        'id': 8,
        'image': 'https://werewolf.world/image/0.2/Lisa.jpg',
        'name': {
          en: 'Lisa',
          ja: 'リーザ'
        }
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#9',
        'id': 9,
        'image': 'https://werewolf.world/image/0.2/Alvin.jpg',
        'name': {
          en: 'Alvin',
          ja: 'アルビン'
        }
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#10',
        'id': 10,
        'image': 'https://werewolf.world/image/0.2/Catalina.jpg',
        'name': {
          en: 'Catalina',
          ja: 'カタリナ'
        }
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#11',
        'id': 11,
        'image': 'https://werewolf.world/image/0.2/Otto.jpg',
        'name': {
          en: 'Otto',
          ja: 'オットー'
        }
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#12',
        'id': 12,
        'image': 'https://werewolf.world/image/0.2/Joachim.jpg',
        'name': {
          en: 'Joachim',
          ja: 'ヨアヒム'
        }
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#13',
        'id': 13,
        'image': 'https://werewolf.world/image/0.2/Pamela.jpg',
        'name': {
          en: 'Pamela',
          ja: 'パメラ'
        }
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#14',
        'id': 14,
        'image': 'https://werewolf.world/image/0.2/Jacob.jpg',
        'name': {
          en: 'Jacob',
          ja: 'ヤコブ'
        }
      }
    ],
    fixed: false
  },
  hideButton: {
    hide: false
  },
  language: village.Language.ja,
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
    visible: false
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
        'status': village.AgentStatus.alive
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#7',
        'id': 7,
        'image': 'https://werewolf.world/image/0.1/Peter.jpg',
        'name': {
          'en': 'Peter',
          'ja': 'ペーター'
        },
        'status': village.AgentStatus.alive
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#8',
        'id': 8,
        'image': 'https://werewolf.world/image/0.1/Lisa.jpg',
        'name': {
          'en': 'Lisa',
          'ja': 'リーザ'
        },
        'status': village.AgentStatus.alive
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#9',
        'id': 9,
        'image': 'https://werewolf.world/image/0.1/Alvin.jpg',
        'name': {
          'en': 'Alvin',
          'ja': 'アルビン'
        },
        'status': village.AgentStatus.alive
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#11',
        'id': 11,
        'image': 'https://werewolf.world/image/0.1/Otto.jpg',
        'name': {
          'en': 'Otto',
          'ja': 'オットー'
        },
        'status': village.AgentStatus.alive
      },
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#12',
        'id': 12,
        'image': 'https://werewolf.world/image/0.1/Joachim.jpg',
        'name': {
          'en': 'Joachim',
          'ja': 'ヨアヒム'
        },
        'status': village.AgentStatus.alive
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
  timer: {
    phaseStartTime: new Date('2006-10-07T12:06:56.568+09:00').getTime(),
    phaseTimeLimit: 50000,
    start: new Date('2006-10-07T12:06:56.568+09:00').getTime(),
    time: 0
  }
}

export default state
