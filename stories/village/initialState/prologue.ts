import * as ActionTypes from '../../../src/scripts/village/constants/ActionTypes'
import {Character} from '../../../src/scripts/village/constants/Character'
import {Content} from '../../../src/scripts/village/reducers/command'
import {ImagePath} from '../../../src/scripts/village/constants/ImagePath'
import {ReducerState} from '../../../src/scripts/village/reducers'
import {VERSION} from '../../../src/scripts/village/constants/Version'

import {village} from '../types'
export const prologue: ReducerState = {
  base: {
    '@id': `https://licos.online/state/${VERSION}/village#3`,
    'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
    'day': 0,
    'intensionalDisclosureRange': village.Channel.private,
    'phase': village.Phase.flavorText,
    'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
    'phaseTimeLimit': 600,
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
    allIds: ['chat0', 'chat1'],
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
  mine: {},
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
      allIds: [],
      byId: {}
    },
    roleStatus: {
      allIds: [],
      byId: {}
    },
    spec: {
      role: village.RoleId.villager,
      visible: false
    },
    table: {}
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
    data: []
  },
  timer: {
    phaseStartTime: new Date('2006-10-07T12:06:56.568+09:00').getTime(),
    phaseTimeLimit: 600000,
    start: new Date('2006-10-07T12:06:56.568+09:00').getTime(),
    time: 0
  }
}
