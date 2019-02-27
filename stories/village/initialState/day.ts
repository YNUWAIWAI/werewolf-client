/* global village */
import * as ActionTypes from '../../../src/scripts/village/constants/ActionTypes'
import {ReducerState} from '../../../src/scripts/village/reducers'
const state: ReducerState = {
  agents: {
    all: [
      {
        '@context': village.Context.Agent,
        '@id': 'https://licos.online/state/0.2/village#3/agent#0',
        'id': 0,
        'image': 'https://licos.online/image/0.2/Gert.jpg',
        'isAChoice': false,
        'isMine': false,
        'name': {
          'en': 'Gert',
          'ja': 'ゲルト'
        },
        'status': village.AgentStatus.dead,
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#0/update',
          'date': 1,
          'phase': village.Phase.day
        }
      },
      {
        '@context': village.Context.Agent,
        '@id': 'https://licos.online/state/0.2/village#3/agent#1',
        'id': 1,
        'image': 'https://werewolf.world/image/0.2/Walter.jpg',
        'isAChoice': false,
        'isMine': true,
        'name': {
          'en': 'Walter',
          'ja': 'ヴァルター'
        },
        'status': village.AgentStatus.alive,
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#1/update',
          'date': 1,
          'phase': village.Phase.morning
        }
      },
      {
        '@context': village.Context.Agent,
        '@id': 'https://licos.online/state/0.2/village#3/agent#2',
        'id': 2,
        'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
        'isAChoice': true,
        'isMine': false,
        'name': {
          'en': 'Moritz',
          'ja': 'モーリッツ'
        },
        'status': village.AgentStatus.alive,
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#2/update',
          'date': 1,
          'phase': village.Phase.morning
        }
      },
      {
        '@context': village.Context.Agent,
        '@id': 'https://licos.online/state/0.2/village#3/agent#3',
        'id': 3,
        'image': 'https://werewolf.world/image/0.2/Simson.jpg',
        'isAChoice': true,
        'isMine': false,
        'name': {
          'en': 'Simson',
          'ja': 'ジムゾン'
        },
        'status': village.AgentStatus.alive,
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#3/update',
          'date': 1,
          'phase': village.Phase.morning
        }
      },
      {
        '@context': village.Context.Agent,
        '@id': 'https://licos.online/state/0.2/village#3/agent#4',
        'id': 4,
        'image': 'https://werewolf.world/image/0.2/Thomas.jpg',
        'isAChoice': true,
        'isMine': false,
        'name': {
          'en': 'Thomas',
          'ja': 'トーマス'
        },
        'status': village.AgentStatus.alive,
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#4/update',
          'date': 1,
          'phase': village.Phase.morning
        }
      },
      {
        '@context': village.Context.Agent,
        '@id': 'https://licos.online/state/0.2/village#3/agent#5',
        'id': 5,
        'image': 'https://werewolf.world/image/0.2/Nicholas.jpg',
        'isAChoice': true,
        'isMine': false,
        'name': {
          'en': 'Nicholas',
          'ja': 'ニコラス'
        },
        'status': village.AgentStatus.alive,
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#5/update',
          'date': 1,
          'phase': village.Phase.morning
        }
      },
      {
        '@context': village.Context.Agent,
        '@id': 'https://licos.online/state/0.2/village#3/agent#6',
        'id': 6,
        'image': 'https://werewolf.world/image/0.2/Dieter.jpg',
        'isAChoice': true,
        'isMine': false,
        'name': {
          'en': 'Dieter',
          'ja': 'ディーター'
        },
        'status': village.AgentStatus.alive,
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#6/update',
          'date': 1,
          'phase': village.Phase.morning
        }
      },
      {
        '@context': village.Context.Agent,
        '@id': 'https://licos.online/state/0.2/village#3/agent#7',
        'id': 7,
        'image': 'https://werewolf.world/image/0.2/Peter.jpg',
        'isAChoice': true,
        'isMine': false,
        'name': {
          'en': 'Peter',
          'ja': 'ペーター'
        },
        'status': village.AgentStatus.alive,
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#7/update',
          'date': 1,
          'phase': village.Phase.morning
        }
      },
      {
        '@context': village.Context.Agent,
        '@id': 'https://licos.online/state/0.2/village#3/agent#8',
        'id': 8,
        'image': 'https://werewolf.world/image/0.2/Lisa.jpg',
        'isAChoice': true,
        'isMine': false,
        'name': {
          'en': 'Lisa',
          'ja': 'リーザ'
        },
        'status': village.AgentStatus.alive,
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#8/update',
          'date': 1,
          'phase': village.Phase.morning
        }
      },
      {
        '@context': village.Context.Agent,
        '@id': 'https://licos.online/state/0.2/village#3/agent#9',
        'id': 9,
        'image': 'https://werewolf.world/image/0.2/Alvin.jpg',
        'isAChoice': true,
        'isMine': false,
        'name': {
          'en': 'Alvin',
          'ja': 'アルビン'
        },
        'status': village.AgentStatus.alive,
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#9/update',
          'date': 1,
          'phase': village.Phase.morning
        }
      },
      {
        '@context': village.Context.Agent,
        '@id': 'https://licos.online/state/0.2/village#3/agent#10',
        'id': 10,
        'image': 'https://werewolf.world/image/0.2/Catalina.jpg',
        'isAChoice': true,
        'isMine': false,
        'name': {
          'en': 'Catalina',
          'ja': 'カタリナ'
        },
        'status': village.AgentStatus.alive,
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#10/update',
          'date': 1,
          'phase': village.Phase.morning
        }
      },
      {
        '@context': village.Context.Agent,
        '@id': 'https://licos.online/state/0.2/village#3/agent#11',
        'id': 11,
        'image': 'https://werewolf.world/image/0.2/Otto.jpg',
        'isAChoice': true,
        'isMine': false,
        'name': {
          'en': 'Otto',
          'ja': 'オットー'
        },
        'status': village.AgentStatus.alive,
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#11/update',
          'date': 1,
          'phase': village.Phase.morning
        }
      },
      {
        '@context': village.Context.Agent,
        '@id': 'https://licos.online/state/0.2/village#3/agent#12',
        'id': 12,
        'image': 'https://werewolf.world/image/0.2/Joachim.jpg',
        'isAChoice': true,
        'isMine': false,
        'name': {
          'en': 'Joachim',
          'ja': 'ヨアヒム'
        },
        'status': village.AgentStatus.alive,
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#12/update',
          'date': 1,
          'phase': village.Phase.morning
        }
      },
      {
        '@context': village.Context.Agent,
        '@id': 'https://licos.online/state/0.2/village#3/agent#13',
        'id': 13,
        'image': 'https://werewolf.world/image/0.2/Pamela.jpg',
        'isAChoice': true,
        'isMine': false,
        'name': {
          'en': 'Pamela',
          'ja': 'パメラ'
        },
        'status': village.AgentStatus.alive,
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#13/update',
          'date': 1,
          'phase': village.Phase.morning
        }
      },
      {
        '@context': village.Context.Agent,
        '@id': 'https://licos.online/state/0.2/village#3/agent#14',
        'id': 14,
        'image': 'https://werewolf.world/image/0.2/Jacob.jpg',
        'isAChoice': true,
        'isMine': false,
        'name': {
          'en': 'Jacob',
          'ja': 'ヤコブ'
        },
        'status': village.AgentStatus.alive,
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#14/update',
          'date': 1,
          'phase': village.Phase.morning
        }
      }
    ],
    mine: {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#1',
      'id': 1,
      'image': 'https://werewolf.world/image/0.2/Walter.jpg',
      'isAChoice': false,
      'isMine': true,
      'name': {
        'en': 'Walter',
        'ja': 'ヴァルター'
      },
      'status': village.AgentStatus.alive,
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#1/update',
        'date': 1,
        'phase': village.Phase.morning
      }
    }
  },
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
      'characterLimit': 10,
      'id': 3,
      'lang': village.Language.ja,
      'name': '横国の森の奥にある時代に取り残された小さな村',
      'totalNumberOfAgents': 2
    }
  },
  chat: {
    allIds: ['chat1', 'chat0'],
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
      }
    }
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
      postCount: 0,
      postCountLimit: 10
    },
    'public': {
      postCount: 0,
      postCountLimit: 10
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
        id: 1,
        image: 'https://werewolf.world/image/0.1/Walter.jpg',
        name: {
          'en': 'Walter',
          'ja': 'ヴァルター'
        }
      },
      {
        id: 2,
        image: 'https://werewolf.world/image/0.1/Moritz.jpg',
        name: {
          'en': 'Moritz',
          'ja': 'モーリッツ'
        }
      },
      {
        id: 3,
        image: 'https://werewolf.world/image/0.1/Simson.jpg',
        name: {
          'en': 'Simson',
          'ja': 'ジムゾン'
        }
      },
      {
        id: 4,
        image: 'https://werewolf.world/image/0.1/Thomas.jpg',
        name: {
          'en': 'Thomas',
          'ja': 'トーマス'
        }
      },
      {
        id: 5,
        image: 'https://werewolf.world/image/0.1/Nicholas.jpg',
        name: {
          'en': 'Nicholas',
          'ja': 'ニコラス'
        }
      },
      {
        id: 6,
        image: 'https://werewolf.world/image/0.1/Dieter.jpg',
        name: {
          'en': 'Dieter',
          'ja': 'ディーター'
        }
      },
      {
        id: 7,
        image: 'https://werewolf.world/image/0.1/Peter.jpg',
        name: {
          'en': 'Peter',
          'ja': 'ペーター'
        }
      },
      {
        id: 8,
        image: 'https://werewolf.world/image/0.1/Lisa.jpg',
        name: {
          'en': 'Lisa',
          'ja': 'リーザ'
        }
      },
      {
        id: 9,
        image: 'https://werewolf.world/image/0.1/Alvin.jpg',
        name: {
          'en': 'Alvin',
          'ja': 'アルビン'
        }
      },
      {
        id: 11,
        image: 'https://werewolf.world/image/0.1/Otto.jpg',
        name: {
          'en': 'Otto',
          'ja': 'オットー'
        }
      },
      {
        id: 12,
        image: 'https://werewolf.world/image/0.1/Joachim.jpg',
        name: {
          'en': 'Joachim',
          'ja': 'ヨアヒム'
        }
      },
      {
        id: 13,
        image: 'https://werewolf.world/image/0.1/Pamela.jpg',
        name: {
          'en': 'Pamela',
          'ja': 'パメラ'
        }
      },
      {
        id: 14,
        image: 'https://werewolf.world/image/0.1/Jacob.jpg',
        name: {
          'en': 'Jacob',
          'ja': 'ヤコブ'
        }
      }
    ],
    fixed: false
  },
  hideButton: {
    hide: false
  },
  language: village.Language.ja,
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
        'id': 1,
        'image': 'https://werewolf.world/image/0.1/Walter.jpg',
        'name': {
          'en': 'Walter',
          'ja': 'ヴァルター'
        },
        'status': village.AgentStatus.alive
      },
      {
        'id': 2,
        'image': 'https://werewolf.world/image/0.1/Moritz.jpg',
        'name': {
          'en': 'Moritz',
          'ja': 'モーリッツ'
        },
        'status': village.AgentStatus.alive
      },
      {
        'id': 3,
        'image': 'https://werewolf.world/image/0.1/Simson.jpg',
        'name': {
          'en': 'Simson',
          'ja': 'ジムゾン'
        },
        'status': village.AgentStatus.alive
      },
      {
        'id': 4,
        'image': 'https://werewolf.world/image/0.1/Thomas.jpg',
        'name': {
          'en': 'Thomas',
          'ja': 'トーマス'
        },
        'status': village.AgentStatus.alive
      },
      {
        'id': 5,
        'image': 'https://werewolf.world/image/0.1/Nicholas.jpg',
        'name': {
          'en': 'Nicholas',
          'ja': 'ニコラス'
        },
        'status': village.AgentStatus.alive
      },
      {
        'id': 6,
        'image': 'https://werewolf.world/image/0.1/Dieter.jpg',
        'name': {
          'en': 'Dieter',
          'ja': 'ディーター'
        },
        'status': village.AgentStatus.alive
      },
      {
        'id': 7,
        'image': 'https://werewolf.world/image/0.1/Peter.jpg',
        'name': {
          'en': 'Peter',
          'ja': 'ペーター'
        },
        'status': village.AgentStatus.alive
      },
      {
        'id': 8,
        'image': 'https://werewolf.world/image/0.1/Lisa.jpg',
        'name': {
          'en': 'Lisa',
          'ja': 'リーザ'
        },
        'status': village.AgentStatus.alive
      },
      {
        'id': 9,
        'image': 'https://werewolf.world/image/0.1/Alvin.jpg',
        'name': {
          'en': 'Alvin',
          'ja': 'アルビン'
        },
        'status': village.AgentStatus.alive
      },
      {
        'id': 11,
        'image': 'https://werewolf.world/image/0.1/Otto.jpg',
        'name': {
          'en': 'Otto',
          'ja': 'オットー'
        },
        'status': village.AgentStatus.alive
      },
      {
        'id': 12,
        'image': 'https://werewolf.world/image/0.1/Joachim.jpg',
        'name': {
          'en': 'Joachim',
          'ja': 'ヨアヒム'
        },
        'status': village.AgentStatus.alive
      },
      {
        'id': 13,
        'image': 'https://werewolf.world/image/0.1/Pamela.jpg',
        'name': {
          'en': 'Pamela',
          'ja': 'パメラ'
        },
        'status': village.AgentStatus.alive
      },
      {
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
        'caption': {
          'en': 'Villager',
          'ja': '村人'
        },
        'id': village.RoleId.villager,
        'image': 'https://werewolf.world/image/0.1/villager.jpg',
        'numberOfAgents': 6
      },
      {
        'caption': {
          'en': 'Seer',
          'ja': '占い師'
        },
        'id': village.RoleId.seer,
        'image': 'https://werewolf.world/image/0.1/seer.jpg',
        'numberOfAgents': 1
      },
      {
        'caption': {
          'en': 'Medium',
          'ja': '霊媒師'
        },
        'id': village.RoleId.medium,
        'image': 'https://werewolf.world/image/0.1/medium.jpg',
        'numberOfAgents': 1
      },
      {
        'caption': {
          'en': 'Hunter',
          'ja': '狩人'
        },
        'id': village.RoleId.hunter,
        'image': 'https://werewolf.world/image/0.1/hunter.jpg',
        'numberOfAgents': 1
      },
      {
        'caption': {
          'en': 'Mason',
          'ja': '共有者'
        },
        'id': village.RoleId.mason,
        'image': 'https://werewolf.world/image/0.1/mason.jpg',
        'numberOfAgents': 2
      },
      {
        'caption': {
          'en': 'Madman',
          'ja': '狂人'
        },
        'id': village.RoleId.madman,
        'image': 'https://werewolf.world/image/0.1/madman.jpg',
        'numberOfAgents': 1
      },
      {
        'caption': {
          'en': 'Werewolf',
          'ja': '人狼'
        },
        'id': village.RoleId.werewolf,
        'image': 'https://werewolf.world/image/0.1/werewolf.jpg',
        'numberOfAgents': 2
      },
      {
        'caption': {
          'en': 'Werehamster',
          'ja': 'ハムスター人間'
        },
        'id': village.RoleId.werehamster,
        'image': 'https://werewolf.world/image/0.1/werehamster.jpg',
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
  roles: {
    all: [
      {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/role#master',
        'board': [],
        'image': 'https://werewolf.world/image/0.2/master.jpg',
        'isMine': false,
        'name': {
          'en': 'Master',
          'ja': 'マスター'
        },
        'numberOfAgents': 1
      },
      {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/role#villager',
        'board': [
          {
            '@context': village.Context.BoardResult,
            '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#1',
            'agent': {
              '@context': village.Context.Agent,
              '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#1/agent#1',
              'id': 1,
              'image': 'https://werewolf.world/image/0.2/Walter.jpg',
              'name': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'date': 1,
            'phase': village.Phase.morning,
            'polarity': village.Polarity.negative
          }
        ],
        'image': 'https://werewolf.world/image/0.2/villager.jpg',
        'isMine': false,
        'name': {
          'en': 'Villager',
          'ja': '村人'
        },
        'numberOfAgents': 6
      },
      {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
        'board': [
          {
            '@context': village.Context.BoardResult,
            '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1',
            'agent': {
              '@context': village.Context.Agent,
              '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1/agent#1',
              'id': 1,
              'image': 'https://werewolf.world/image/0.2/Walter.jpg',
              'name': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'date': 1,
            'phase': village.Phase.morning,
            'polarity': village.Polarity.positive
          }
        ],
        'image': 'https://werewolf.world/image/0.2/seer.jpg',
        'isMine': true,
        'name': {
          'en': 'Seer',
          'ja': '占い師'
        },
        'numberOfAgents': 1
      },
      {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/role#medium',
        'board': [
          {
            '@context': village.Context.BoardResult,
            '@id': 'https://licos.online/state/0.2/village#3/role#medium/board#1',
            'agent': {
              '@context': village.Context.Agent,
              '@id': 'https://licos.online/state/0.2/village#3/role#medium/board#1/agent#1',
              'id': 1,
              'image': 'https://werewolf.world/image/0.2/Walter.jpg',
              'name': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'date': 1,
            'phase': village.Phase.morning,
            'polarity': village.Polarity.negative
          }
        ],
        'image': 'https://werewolf.world/image/0.2/medium.jpg',
        'isMine': false,
        'name': {
          'en': 'Medium',
          'ja': '霊媒師'
        },
        'numberOfAgents': 1
      },
      {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
        'board': [
          {
            '@context': village.Context.BoardResult,
            '@id': 'https://licos.online/state/0.2/village#3/role#hunter/board#1',
            'agent': {
              '@context': village.Context.Agent,
              '@id': 'https://licos.online/state/0.2/village#3/role#hunter/board#1/agent#1',
              'id': 1,
              'image': 'https://werewolf.world/image/0.2/Walter.jpg',
              'name': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'date': 1,
            'phase': village.Phase.morning,
            'polarity': village.Polarity.negative
          }
        ],
        'image': 'https://werewolf.world/image/0.2/hunter.jpg',
        'isMine': false,
        'name': {
          'en': 'Hunter',
          'ja': '狩人'
        },
        'numberOfAgents': 1
      },
      {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/role#mason',
        'board': [
          {
            '@context': village.Context.BoardResult,
            '@id': 'https://licos.online/state/0.2/village#3/role#mason/board#1',
            'agent': {
              '@context': village.Context.Agent,
              '@id': 'https://licos.online/state/0.2/village#3/role#mason/board#1/agent#1',
              'id': 1,
              'image': 'https://werewolf.world/image/0.2/Walter.jpg',
              'name': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'date': 1,
            'phase': village.Phase.morning,
            'polarity': village.Polarity.negative
          }
        ],
        'image': 'https://werewolf.world/image/0.2/mason.jpg',
        'isMine': false,
        'name': {
          'en': 'Mason',
          'ja': '共有者'
        },
        'numberOfAgents': 2
      },
      {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/role#madman',
        'board': [
          {
            '@context': village.Context.BoardResult,
            '@id': 'https://licos.online/state/0.2/village#3/role#madman/board#1',
            'agent': {
              '@context': village.Context.Agent,
              '@id': 'https://licos.online/state/0.2/village#3/role#madman/board#1/agent#1',
              'id': 1,
              'image': 'https://werewolf.world/image/0.2/Walter.jpg',
              'name': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'date': 1,
            'phase': village.Phase.morning,
            'polarity': village.Polarity.negative
          }
        ],
        'image': 'https://werewolf.world/image/0.2/madman.jpg',
        'isMine': false,
        'name': {
          'en': 'Madman',
          'ja': '狂人'
        },
        'numberOfAgents': 1
      },
      {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
        'board': [
          {
            '@context': village.Context.BoardResult,
            '@id': 'https://licos.online/state/0.2/village#3/role#werewolf/board#1',
            'agent': {
              '@context': village.Context.Agent,
              '@id': 'https://licos.online/state/0.2/village#3/role#werewolf/board#1/agent#1',
              'id': 1,
              'image': 'https://werewolf.world/image/0.2/Walter.jpg',
              'name': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'date': 1,
            'phase': village.Phase.morning,
            'polarity': village.Polarity.negative
          }
        ],
        'image': 'https://werewolf.world/image/0.2/werewolf.jpg',
        'isMine': false,
        'name': {
          'en': 'Werewolf',
          'ja': '人狼'
        },
        'numberOfAgents': 2
      },
      {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/role#werehamster',
        'board': [
          {
            '@context': village.Context.BoardResult,
            '@id': 'https://licos.online/state/0.2/village#3/role#werehamster/board#1',
            'agent': {
              '@context': village.Context.Agent,
              '@id': 'https://licos.online/state/0.2/village#3/role#werehamster/board#1/agent#1',
              'id': 1,
              'image': 'https://werewolf.world/image/0.2/Walter.jpg',
              'name': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'date': 1,
            'phase': village.Phase.morning,
            'polarity': village.Polarity.negative
          }
        ],
        'image': 'https://werewolf.world/image/0.2/werehamster.jpg',
        'isMine': false,
        'name': {
          'en': 'Werehamster',
          'ja': 'ハムスター人間'
        },
        'numberOfAgents': 1
      }
    ],
    mine: {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#seer',
      'board': [
        {
          '@context': village.Context.BoardResult,
          '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1',
          'agent': {
            '@context': village.Context.Agent,
            '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1/agent#1',
            'id': 1,
            'image': 'https://werewolf.world/image/0.2/Walter.jpg',
            'name': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            }
          },
          'date': 1,
          'phase': village.Phase.morning,
          'polarity': village.Polarity.positive
        }
      ],
      'image': 'https://werewolf.world/image/0.2/seer.jpg',
      'isMine': true,
      'name': {
        'en': 'Seer',
        'ja': '占い師'
      },
      'numberOfAgents': 1
    }
  },
  timer: {
    phaseStartTime: new Date('2006-10-07T12:06:56.568+09:00').getTime(),
    phaseTimeLimit: 50000,
    start: new Date('2006-10-07T12:06:56.568+09:00').getTime(),
    time: 0
  }
}

export default state
