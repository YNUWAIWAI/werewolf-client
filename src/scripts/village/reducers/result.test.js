// @flow
import * as ActionTypes from '../constants/ActionTypes'
import {firstDayConversation, results} from './fakeServer'
import reducer, {initialState} from './result'

describe('socket/MESSAGE', () => {
  test('phase is not results', () => {
    expect(
      reducer(
        initialState,
        {
          payload: firstDayConversation,
          type: ActionTypes.socket.MESSAGE
        }
      )
    ).toEqual(initialState)
  })
  test('phase is results', () => {
    expect(
      reducer(
        initialState,
        {
          payload: results,
          type: ActionTypes.socket.MESSAGE
        }
      )
    ).toEqual({
      agents: {
        agent0: {
          agentId: 1,
          agentImage: 'https://werewolf.world/image/0.1/Walter.jpg',
          agentName: {
            en: 'Walter',
            ja: 'ヴァルター'
          },
          result: 'win',
          roleImage: 'https://werewolf.world/image/0.1/seer.jpg',
          roleName: {
            en: 'Seer',
            ja: '占い師'
          },
          status: 'alive',
          userAvatar: 'https://werewolf.world/image/0.1/Gert.jpg',
          userName: 'Suzuki'
        },
        agent1: {
          agentId: 2,
          agentImage: 'https://werewolf.world/image/0.1/Moritz.jpg',
          agentName: {
            en: 'Moritz',
            ja: 'モーリッツ'
          },
          result: 'lose',
          roleImage: 'https://werewolf.world/image/0.1/werewolf.jpg',
          roleName: {
            en: 'Werewolf',
            ja: '人狼'
          },
          status: 'alive',
          userAvatar: 'https://werewolf.world/image/0.1/Alvin.jpg',
          userName: 'Takahashi'
        },
        agent2: {
          agentId: 3,
          agentImage: 'https://werewolf.world/image/0.1/Simson.jpg',
          agentName: {
            en: 'Simson',
            ja: 'ジムゾン'
          },
          result: 'win',
          roleImage: 'https://werewolf.world/image/0.1/hunter.jpg',
          roleName: {
            en: 'Hunter',
            ja: '狩人'
          },
          status: 'alive',
          userAvatar: 'https://werewolf.world/image/0.1/Friedel.jpg',
          userName: 'Tanaka'
        },
        agent3: {
          agentId: 4,
          agentImage: 'https://werewolf.world/image/0.1/Thomas.jpg',
          agentName: {
            en: 'Thomas',
            ja: 'トーマス'
          },
          result: 'win',
          roleImage: 'https://werewolf.world/image/0.1/medium.jpg',
          roleName: {
            en: 'Medium',
            ja: '霊媒師'
          },
          status: 'alive',
          userAvatar: 'https://werewolf.world/image/0.1/Dieter.jpg',
          userName: 'Ito'
        },
        agent4: {
          agentId: 5,
          agentImage: 'https://werewolf.world/image/0.1/Nicholas.jpg',
          agentName: {
            en: 'Nicholas',
            ja: 'ニコラス'
          },
          result: 'lose',
          roleImage: 'https://werewolf.world/image/0.1/werehamster.jpg',
          roleName: {
            en: 'Werehuster',
            ja: 'ハムスター人間'
          },
          status: 'death by fear',
          userAvatar: 'https://werewolf.world/image/0.1/Erna.jpg',
          userName: 'Watanabe'
        },
        agent5: {
          agentId: 6,
          agentImage: 'https://werewolf.world/image/0.1/Dieter.jpg',
          agentName: {
            en: 'Dieter',
            ja: 'ディーター'
          },
          result: 'lose',
          roleImage: 'https://werewolf.world/image/0.1/madman.jpg',
          roleName: {
            en: 'Madman',
            ja: '狂人'
          },
          status: 'death by execution',
          userAvatar: 'https://werewolf.world/image/0.1/Jacob.jpg',
          userName: 'Yamamoto'
        },
        agent6: {
          agentId: 7,
          agentImage: 'https://werewolf.world/image/0.1/Peter.jpg',
          agentName: {
            en: 'Peter',
            ja: 'ペーター'
          },
          result: 'lose',
          roleImage: 'https://werewolf.world/image/0.1/werewolf.jpg',
          roleName: {
            en: 'Werewolf',
            ja: '人狼'
          },
          status: 'unnatural death',
          userAvatar: 'https://werewolf.world/image/0.1/Nicholas.jpg',
          userName: 'Nakamura'
        },
        agent7: {
          agentId: 8,
          agentImage: 'https://werewolf.world/image/0.1/Lisa.jpg',
          agentName: {
            en: 'Lisa',
            ja: 'リーザ'
          },
          result: 'win',
          roleImage: 'https://werewolf.world/image/0.1/villager.jpg',
          roleName: {
            en: 'Villager',
            ja: '村人'
          },
          status: 'unnatural death',
          userAvatar: 'https://werewolf.world/image/0.1/Peter.jpg',
          userName: 'Kobayashi'
        },
        agent8: {
          agentId: 9,
          agentImage: 'https://werewolf.world/image/0.1/Alvin.jpg',
          agentName: {
            en: 'Alvin',
            ja: 'アルビン'
          },
          result: 'win',
          roleImage: 'https://werewolf.world/image/0.1/villager.jpg',
          roleName: {
            en: 'Villager',
            ja: '村人'
          },
          status: 'unnatural death',
          userAvatar: 'https://werewolf.world/image/0.1/Peter.jpg',
          userName: 'Yoshida'
        },
        agent9: {
          agentId: 11,
          agentImage: 'https://werewolf.world/image/0.1/Otto.jpg',
          agentName: {
            en: 'Otto',
            ja: 'オットー'
          },
          result: 'win',
          roleImage: 'https://werewolf.world/image/0.1/mason.jpg',
          roleName: {
            en: 'Mason',
            ja: '共有者'
          },
          status: 'unnatural death',
          userAvatar: 'https://werewolf.world/image/0.1/Simson.jpg',
          userName: 'Sasaki'
        },
        agent10: {
          agentId: 12,
          agentImage: 'https://werewolf.world/image/0.1/Joachim.jpg',
          agentName: {
            en: 'Joachim',
            ja: 'ヨアヒム'
          },
          result: 'win',
          roleImage: 'https://werewolf.world/image/0.1/villager.jpg',
          roleName: {
            en: 'Villager',
            ja: '村人'
          },
          status: 'death by attack',
          userAvatar: 'https://werewolf.world/image/0.1/Otto.jpg',
          userName: '山口'
        },
        agent11: {
          agentId: 13,
          agentImage: 'https://werewolf.world/image/0.1/Pamela.jpg',
          agentName: {
            en: 'Pamela',
            ja: 'パメラ'
          },
          result: 'win',
          roleImage: 'https://werewolf.world/image/0.1/villager.jpg',
          roleName: {
            en: 'Villager',
            ja: '村人'
          },
          status: 'alive',
          userAvatar: 'https://werewolf.world/image/0.1/Joachim.jpg',
          userName: '松本'
        },
        agent12: {
          agentId: 14,
          agentImage: 'https://werewolf.world/image/0.1/Jacob.jpg',
          agentName: {
            en: 'Jacob',
            ja: 'ヤコブ'
          },
          result: 'win',
          roleImage: 'https://werewolf.world/image/0.1/villager.jpg',
          roleName: {
            en: 'Villager',
            ja: '村人'
          },
          status: 'alive',
          userAvatar: 'https://werewolf.world/image/0.1/Catalina.jpg',
          userName: '井上'
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
        'agent12'
      ],
      losers: [
        'agent1',
        'agent4',
        'agent5',
        'agent6'
      ],
      me: 'agent0',
      summary: {
        isPlayer: true,
        result: 'win',
        role: 'https://werewolf.world/resource/0.1/seer'
      },
      visible: true,
      werehamster: {
        exists: true,
        isWin: false
      },
      winners: [
        'agent0',
        'agent2',
        'agent3',
        'agent7',
        'agent8',
        'agent9',
        'agent10',
        'agent11',
        'agent12'
      ]
    })
  })
})
