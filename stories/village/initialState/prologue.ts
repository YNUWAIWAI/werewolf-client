/* global village */
import * as ActionTypes from '../../../src/scripts/village/constants/ActionTypes'
import {Content} from '../../../src/scripts/village/reducers/command'
import {ReducerState} from '../../../src/scripts/village/reducers'
const state: ReducerState = {
  base: {
    '@id': 'https://licos.online/state/0.2/village#3',
    'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
    'date': 0,
    'intensionalDisclosureRange': village.Channel.private,
    'phase': village.Phase.flavorText,
    'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
    'phaseTimeLimit': 600,
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
    allIds: ['chat0', 'chat1'],
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
        'serverTimestamp': '2006-10-07T12:07:56.568+09:00',
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
        'serverTimestamp': '2006-10-07T12:08:56.568+09:00',
        'text': '>>1 I guess Pamela is a werewolf.',
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
  mine: {},
  modal: {
    id: -1,
    visible: false
  },
  obfucator: {
    loading: false,
    visible: false
  },
  prediction: {
    playerStatus: [],
    roleStatus: [],
    spec: {
      role: village.RoleId.villager,
      visible: false
    },
    table: {}
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
    phaseTimeLimit: 600000,
    start: new Date('2006-10-07T12:06:56.568+09:00').getTime(),
    time: 0
  }
}

export default state
