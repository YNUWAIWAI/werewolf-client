// @flow
import * as ActionTypes from '../constants/ActionTypes'
import {firstMorning, result} from './fakeServer'
import reducer, {initialState} from './result'

describe('socket/MESSAGE', () => {
  test('phase is not result', () => {
    expect(
      reducer(
        initialState,
        {
          payload: firstMorning,
          type: ActionTypes.socket.MESSAGE
        }
      )
    ).toEqual(initialState)
  })
  test('phase is result', () => {
    expect(
      reducer(
        initialState,
        {
          payload: result,
          type: ActionTypes.socket.MESSAGE
        }
      )
    ).toEqual({
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
          result: 'win',
          roleImage: 'https://werewolf.world/image/0.2/villager.jpg',
          roleName: {
            'en': 'Villager',
            'ja': '村人'
          },
          status: 'alive'
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
          result: 'win',
          roleImage: 'https://werewolf.world/image/0.2/seer.jpg',
          roleName: {
            en: 'Seer',
            ja: '占い師'
          },
          status: 'alive'
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
          result: 'lose',
          roleImage: 'https://werewolf.world/image/0.2/werewolf.jpg',
          roleName: {
            en: 'Werewolf',
            ja: '人狼'
          },
          status: 'alive'
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
          result: 'win',
          roleImage: 'https://werewolf.world/image/0.2/hunter.jpg',
          roleName: {
            en: 'Hunter',
            ja: '狩人'
          },
          status: 'alive'
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
          result: 'win',
          roleImage: 'https://werewolf.world/image/0.2/medium.jpg',
          roleName: {
            en: 'Medium',
            ja: '霊媒師'
          },
          status: 'alive'
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
          result: 'lose',
          roleImage: 'https://werewolf.world/image/0.2/werehamster.jpg',
          roleName: {
            en: 'Werehamster',
            ja: 'ハムスター人間'
          },
          status: 'death by fear'
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
          result: 'lose',
          roleImage: 'https://werewolf.world/image/0.2/madman.jpg',
          roleName: {
            en: 'Madman',
            ja: '狂人'
          },
          status: 'death by execution'
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
          result: 'lose',
          roleImage: 'https://werewolf.world/image/0.2/werewolf.jpg',
          roleName: {
            en: 'Werewolf',
            ja: '人狼'
          },
          status: 'unnatural death'
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
          result: 'win',
          roleImage: 'https://werewolf.world/image/0.2/villager.jpg',
          roleName: {
            en: 'Villager',
            ja: '村人'
          },
          status: 'unnatural death'
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
          result: 'win',
          roleImage: 'https://werewolf.world/image/0.2/villager.jpg',
          roleName: {
            en: 'Villager',
            ja: '村人'
          },
          status: 'unnatural death'
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
          result: 'win',
          roleImage: 'https://werewolf.world/image/0.2/mason.jpg',
          roleName: {
            'en': 'Mason',
            'ja': '共有者'
          },
          status: 'unnatural death'
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
          result: 'win',
          roleImage: 'https://werewolf.world/image/0.2/mason.jpg',
          roleName: {
            en: 'Mason',
            ja: '共有者'
          },
          status: 'unnatural death'
        },
        agent12: {
          agentId: 12,
          agentImage: 'https://werewolf.world/image/0.2/Joachim.jpg',
          agentName: {
            en: 'Joachim',
            ja: 'ヨアヒム'
          },
          avatarImage: 'https://werewolf.world/image/0.2/Otto.jpg',
          avatarName: '山口',
          result: 'win',
          roleImage: 'https://werewolf.world/image/0.2/villager.jpg',
          roleName: {
            en: 'Villager',
            ja: '村人'
          },
          status: 'death by attack'
        },
        agent13: {
          agentId: 13,
          agentImage: 'https://werewolf.world/image/0.2/Pamela.jpg',
          agentName: {
            en: 'Pamela',
            ja: 'パメラ'
          },
          avatarImage: 'https://werewolf.world/image/0.2/Joachim.jpg',
          avatarName: '松本',
          result: 'win',
          roleImage: 'https://werewolf.world/image/0.2/villager.jpg',
          roleName: {
            en: 'Villager',
            ja: '村人'
          },
          status: 'alive'
        },
        agent14: {
          agentId: 14,
          agentImage: 'https://werewolf.world/image/0.2/Jacob.jpg',
          agentName: {
            en: 'Jacob',
            ja: 'ヤコブ'
          },
          avatarImage: 'https://werewolf.world/image/0.2/Catalina.jpg',
          avatarName: '井上',
          result: 'win',
          roleImage: 'https://werewolf.world/image/0.2/villager.jpg',
          roleName: {
            en: 'Villager',
            ja: '村人'
          },
          status: 'alive'
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
        loserTeam: new Set(['werewolf', 'werehamster']),
        myTeam: 'villager',
        result: 'win',
        winnerTeam: 'villager'
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
    })
  })
})
