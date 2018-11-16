// @flow
import React from 'react'
import ResultContainer from './ResultContainer'
import {shallow} from 'enzyme'

describe('<ResultContainer />', () => {

  test('winner: villager loser: werewolf, werehamster', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      language: 'ja',
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
          }
        },
        allIds: [
          'agent0',
          'agent1',
          'agent2',
          'agent3',
          'agent4',
          'agent5'
        ],
        losers: [
          'agent2',
          'agent5'
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
          'agent4'
        ]
      }
    })
    const subscribe = jest.fn()
    const store = {
      dispatch,
      getState,
      subscribe
    }
    const wrapper = shallow(<ResultContainer store={store} />)

    expect(wrapper.props().agents).toEqual({
      agent0: {
        agentId: 0,
        agentImage: 'https://werewolf.world/image/0.2/Gert.jpg',
        agentName: 'ゲルト',
        avatarImage: 'https://werewolf.world/image/0.2/Nicholas.jpg',
        avatarName: 'Sato',
        result: 'win',
        roleImage: 'https://werewolf.world/image/0.2/villager.jpg',
        roleName: '村人',
        status: 'alive'
      },
      agent1: {
        agentId: 1,
        agentImage: 'https://werewolf.world/image/0.2/Walter.jpg',
        agentName: 'ヴァルター',
        avatarImage: 'https://werewolf.world/image/0.2/Gert.jpg',
        avatarName: 'Suzuki',
        result: 'win',
        roleImage: 'https://werewolf.world/image/0.2/seer.jpg',
        roleName: '占い師',
        status: 'alive'
      },
      agent2: {
        agentId: 2,
        agentImage: 'https://werewolf.world/image/0.2/Moritz.jpg',
        agentName: 'モーリッツ',
        avatarImage: 'https://werewolf.world/image/0.2/Alvin.jpg',
        avatarName: 'Takahashi',
        result: 'lose',
        roleImage: 'https://werewolf.world/image/0.2/werewolf.jpg',
        roleName: '人狼',
        status: 'alive'
      },
      agent3: {
        agentId: 3,
        agentImage: 'https://werewolf.world/image/0.2/Simson.jpg',
        agentName: 'ジムゾン',
        avatarImage: 'https://werewolf.world/image/0.2/Friedel.jpg',
        avatarName: 'Tanaka',
        result: 'win',
        roleImage: 'https://werewolf.world/image/0.2/hunter.jpg',
        roleName: '狩人',
        status: 'alive'
      },
      agent4: {
        agentId: 4,
        agentImage: 'https://werewolf.world/image/0.2/Thomas.jpg',
        agentName: 'トーマス',
        avatarImage: 'https://werewolf.world/image/0.2/Dieter.jpg',
        avatarName: 'Ito',
        result: 'win',
        roleImage: 'https://werewolf.world/image/0.2/medium.jpg',
        roleName: '霊媒師',
        status: 'alive'
      },
      agent5: {
        agentId: 5,
        agentImage: 'https://werewolf.world/image/0.2/Nicholas.jpg',
        agentName: 'ニコラス',
        avatarImage: 'https://werewolf.world/image/0.2/Erna.jpg',
        avatarName: 'Watanabe',
        result: 'lose',
        roleImage: 'https://werewolf.world/image/0.2/werehamster.jpg',
        roleName: 'ハムスター人間',
        status: 'death by fear'
      }
    })
    expect(wrapper.props().losers).toEqual([
      'agent2',
      'agent5'
    ])
    expect(wrapper.props().me).toBe('agent1')
    expect(wrapper.props().summary).toEqual({
      description: 'Result.summary.description(player, villager, villager, win)',
      loser: 'Result.summary.loser(werewolf, werehamster)',
      winner: 'Result.summary.winner(villager)'
    })
    expect(wrapper.props().winners).toEqual([
      'agent0',
      'agent1',
      'agent3',
      'agent4'
    ])
  })
  test('winner: werehamster loser: villager, werewolf', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      language: 'ja',
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
            result: 'lose',
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
            result: 'lose',
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
            result: 'lose',
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
            result: 'lose',
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
            result: 'win',
            roleImage: 'https://werewolf.world/image/0.2/werehamster.jpg',
            roleName: {
              en: 'Werehamster',
              ja: 'ハムスター人間'
            },
            status: 'death by fear'
          }
        },
        allIds: [
          'agent0',
          'agent1',
          'agent2',
          'agent3',
          'agent4',
          'agent5'
        ],
        loser: [
          'agent0',
          'agent1',
          'agent2',
          'agent3',
          'agent4'
        ],
        me: 'agent1',
        summary: {
          kind: 'player',
          loserTeam: new Set(['villager', 'werewolf']),
          myTeam: 'villager',
          result: 'lose',
          winnerTeam: 'werehamster'
        },
        visible: true,
        winners: [
          'agent5'
        ]
      }
    })
    const subscribe = jest.fn()
    const store = {
      dispatch,
      getState,
      subscribe
    }
    const wrapper = shallow(<ResultContainer store={store} />)

    expect(wrapper.props().agents).toEqual({
      agent0: {
        agentId: 0,
        agentImage: 'https://werewolf.world/image/0.2/Gert.jpg',
        agentName: 'ゲルト',
        avatarImage: 'https://werewolf.world/image/0.2/Nicholas.jpg',
        avatarName: 'Sato',
        result: 'lose',
        roleImage: 'https://werewolf.world/image/0.2/villager.jpg',
        roleName: '村人',
        status: 'alive'
      },
      agent1: {
        agentId: 1,
        agentImage: 'https://werewolf.world/image/0.2/Walter.jpg',
        agentName: 'ヴァルター',
        avatarImage: 'https://werewolf.world/image/0.2/Gert.jpg',
        avatarName: 'Suzuki',
        result: 'lose',
        roleImage: 'https://werewolf.world/image/0.2/seer.jpg',
        roleName: '占い師',
        status: 'alive'
      },
      agent2: {
        agentId: 2,
        agentImage: 'https://werewolf.world/image/0.2/Moritz.jpg',
        agentName: 'モーリッツ',
        avatarImage: 'https://werewolf.world/image/0.2/Alvin.jpg',
        avatarName: 'Takahashi',
        result: 'lose',
        roleImage: 'https://werewolf.world/image/0.2/werewolf.jpg',
        roleName: '人狼',
        status: 'alive'
      },
      agent3: {
        agentId: 3,
        agentImage: 'https://werewolf.world/image/0.2/Simson.jpg',
        agentName: 'ジムゾン',
        avatarImage: 'https://werewolf.world/image/0.2/Friedel.jpg',
        avatarName: 'Tanaka',
        result: 'lose',
        roleImage: 'https://werewolf.world/image/0.2/hunter.jpg',
        roleName: '狩人',
        status: 'alive'
      },
      agent4: {
        agentId: 4,
        agentImage: 'https://werewolf.world/image/0.2/Thomas.jpg',
        agentName: 'トーマス',
        avatarImage: 'https://werewolf.world/image/0.2/Dieter.jpg',
        avatarName: 'Ito',
        result: 'lose',
        roleImage: 'https://werewolf.world/image/0.2/medium.jpg',
        roleName: '霊媒師',
        status: 'alive'
      },
      agent5: {
        agentId: 5,
        agentImage: 'https://werewolf.world/image/0.2/Nicholas.jpg',
        agentName: 'ニコラス',
        avatarImage: 'https://werewolf.world/image/0.2/Erna.jpg',
        avatarName: 'Watanabe',
        result: 'win',
        roleImage: 'https://werewolf.world/image/0.2/werehamster.jpg',
        roleName: 'ハムスター人間',
        status: 'death by fear'
      }
    })
    expect(wrapper.props().summary).toEqual({
      description: 'Result.summary.description(player, werehamster, villager, lose)',
      loser: 'Result.summary.loser(villager, werewolf)',
      winner: 'Result.summary.winner(werehamster)'
    })
  })
  test('winner: werewolf loser: villager, werehamster', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      language: 'ja',
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
            result: 'lose',
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
            result: 'lose',
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
            result: 'win',
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
            result: 'lose',
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
            result: 'lose',
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
          }
        },
        allIds: [
          'agent0',
          'agent1',
          'agent2',
          'agent3',
          'agent4',
          'agent5'
        ],
        loser: [
          'agent0',
          'agent1',
          'agent2',
          'agent3',
          'agent4'
        ],
        me: 'agent1',
        summary: {
          kind: 'player',
          loserTeam: new Set(['villager', 'werehamster']),
          myTeam: 'villager',
          result: 'lose',
          winnerTeam: 'werewolf'
        },
        visible: true,
        winners: [
          'agent5'
        ]
      }
    })
    const subscribe = jest.fn()
    const store = {
      dispatch,
      getState,
      subscribe
    }
    const wrapper = shallow(<ResultContainer store={store} />)

    expect(wrapper.props().agents).toEqual({
      agent0: {
        agentId: 0,
        agentImage: 'https://werewolf.world/image/0.2/Gert.jpg',
        agentName: 'ゲルト',
        avatarImage: 'https://werewolf.world/image/0.2/Nicholas.jpg',
        avatarName: 'Sato',
        result: 'lose',
        roleImage: 'https://werewolf.world/image/0.2/villager.jpg',
        roleName: '村人',
        status: 'alive'
      },
      agent1: {
        agentId: 1,
        agentImage: 'https://werewolf.world/image/0.2/Walter.jpg',
        agentName: 'ヴァルター',
        avatarImage: 'https://werewolf.world/image/0.2/Gert.jpg',
        avatarName: 'Suzuki',
        result: 'lose',
        roleImage: 'https://werewolf.world/image/0.2/seer.jpg',
        roleName: '占い師',
        status: 'alive'
      },
      agent2: {
        agentId: 2,
        agentImage: 'https://werewolf.world/image/0.2/Moritz.jpg',
        agentName: 'モーリッツ',
        avatarImage: 'https://werewolf.world/image/0.2/Alvin.jpg',
        avatarName: 'Takahashi',
        result: 'win',
        roleImage: 'https://werewolf.world/image/0.2/werewolf.jpg',
        roleName: '人狼',
        status: 'alive'
      },
      agent3: {
        agentId: 3,
        agentImage: 'https://werewolf.world/image/0.2/Simson.jpg',
        agentName: 'ジムゾン',
        avatarImage: 'https://werewolf.world/image/0.2/Friedel.jpg',
        avatarName: 'Tanaka',
        result: 'lose',
        roleImage: 'https://werewolf.world/image/0.2/hunter.jpg',
        roleName: '狩人',
        status: 'alive'
      },
      agent4: {
        agentId: 4,
        agentImage: 'https://werewolf.world/image/0.2/Thomas.jpg',
        agentName: 'トーマス',
        avatarImage: 'https://werewolf.world/image/0.2/Dieter.jpg',
        avatarName: 'Ito',
        result: 'lose',
        roleImage: 'https://werewolf.world/image/0.2/medium.jpg',
        roleName: '霊媒師',
        status: 'alive'
      },
      agent5: {
        agentId: 5,
        agentImage: 'https://werewolf.world/image/0.2/Nicholas.jpg',
        agentName: 'ニコラス',
        avatarImage: 'https://werewolf.world/image/0.2/Erna.jpg',
        avatarName: 'Watanabe',
        result: 'lose',
        roleImage: 'https://werewolf.world/image/0.2/werehamster.jpg',
        roleName: 'ハムスター人間',
        status: 'death by fear'
      }
    })
    expect(wrapper.props().summary).toEqual({
      description: 'Result.summary.description(player, werewolf, villager, lose)',
      loser: 'Result.summary.loser(villager, werehamster)',
      winner: 'Result.summary.winner(werewolf)'
    })
  })
  test('winner: werewolf loser: villager', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      language: 'ja',
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
            result: 'lose',
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
            result: 'lose',
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
            result: 'win',
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
            result: 'lose',
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
            result: 'lose',
            roleImage: 'https://werewolf.world/image/0.2/medium.jpg',
            roleName: {
              en: 'Medium',
              ja: '霊媒師'
            },
            status: 'alive'
          }
        },
        allIds: [
          'agent0',
          'agent1',
          'agent2',
          'agent3',
          'agent4'
        ],
        loser: [
          'agent0',
          'agent1',
          'agent3',
          'agent4'
        ],
        me: 'agent1',
        summary: {
          kind: 'player',
          loserTeam: new Set(['villager']),
          myTeam: 'villager',
          result: 'lose',
          winnerTeam: 'werewolf'
        },
        visible: true,
        winners: [
          'agent2'
        ]
      }
    })
    const subscribe = jest.fn()
    const store = {
      dispatch,
      getState,
      subscribe
    }
    const wrapper = shallow(<ResultContainer store={store} />)

    expect(wrapper.props().agents).toEqual({
      agent0: {
        agentId: 0,
        agentImage: 'https://werewolf.world/image/0.2/Gert.jpg',
        agentName: 'ゲルト',
        avatarImage: 'https://werewolf.world/image/0.2/Nicholas.jpg',
        avatarName: 'Sato',
        result: 'lose',
        roleImage: 'https://werewolf.world/image/0.2/villager.jpg',
        roleName: '村人',
        status: 'alive'
      },
      agent1: {
        agentId: 1,
        agentImage: 'https://werewolf.world/image/0.2/Walter.jpg',
        agentName: 'ヴァルター',
        avatarImage: 'https://werewolf.world/image/0.2/Gert.jpg',
        avatarName: 'Suzuki',
        result: 'lose',
        roleImage: 'https://werewolf.world/image/0.2/seer.jpg',
        roleName: '占い師',
        status: 'alive'
      },
      agent2: {
        agentId: 2,
        agentImage: 'https://werewolf.world/image/0.2/Moritz.jpg',
        agentName: 'モーリッツ',
        avatarImage: 'https://werewolf.world/image/0.2/Alvin.jpg',
        avatarName: 'Takahashi',
        result: 'win',
        roleImage: 'https://werewolf.world/image/0.2/werewolf.jpg',
        roleName: '人狼',
        status: 'alive'
      },
      agent3: {
        agentId: 3,
        agentImage: 'https://werewolf.world/image/0.2/Simson.jpg',
        agentName: 'ジムゾン',
        avatarImage: 'https://werewolf.world/image/0.2/Friedel.jpg',
        avatarName: 'Tanaka',
        result: 'lose',
        roleImage: 'https://werewolf.world/image/0.2/hunter.jpg',
        roleName: '狩人',
        status: 'alive'
      },
      agent4: {
        agentId: 4,
        agentImage: 'https://werewolf.world/image/0.2/Thomas.jpg',
        agentName: 'トーマス',
        avatarImage: 'https://werewolf.world/image/0.2/Dieter.jpg',
        avatarName: 'Ito',
        result: 'lose',
        roleImage: 'https://werewolf.world/image/0.2/medium.jpg',
        roleName: '霊媒師',
        status: 'alive'
      }
    })
    expect(wrapper.props().summary).toEqual({
      description: 'Result.summary.description(player, werewolf, villager, lose)',
      loser: 'Result.summary.loser(villager)',
      winner: 'Result.summary.winner(werewolf)'
    })
  })
  test('winner: villager loser: werewolf', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      language: 'ja',
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
          }
        },
        allIds: [
          'agent0',
          'agent1',
          'agent2',
          'agent3',
          'agent4'
        ],
        loser: [
          'agent2'
        ],
        me: 'agent1',
        summary: {
          kind: 'player',
          loserTeam: new Set(['werewolf']),
          myTeam: 'villager',
          result: 'win',
          winnerTeam: 'villager'
        },
        visible: true,
        winners: [
          'agent0',
          'agent1',
          'agent3',
          'agent4'
        ]
      }
    })
    const subscribe = jest.fn()
    const store = {
      dispatch,
      getState,
      subscribe
    }
    const wrapper = shallow(<ResultContainer store={store} />)

    expect(wrapper.props().agents).toEqual({
      agent0: {
        agentId: 0,
        agentImage: 'https://werewolf.world/image/0.2/Gert.jpg',
        agentName: 'ゲルト',
        avatarImage: 'https://werewolf.world/image/0.2/Nicholas.jpg',
        avatarName: 'Sato',
        result: 'win',
        roleImage: 'https://werewolf.world/image/0.2/villager.jpg',
        roleName: '村人',
        status: 'alive'
      },
      agent1: {
        agentId: 1,
        agentImage: 'https://werewolf.world/image/0.2/Walter.jpg',
        agentName: 'ヴァルター',
        avatarImage: 'https://werewolf.world/image/0.2/Gert.jpg',
        avatarName: 'Suzuki',
        result: 'win',
        roleImage: 'https://werewolf.world/image/0.2/seer.jpg',
        roleName: '占い師',
        status: 'alive'
      },
      agent2: {
        agentId: 2,
        agentImage: 'https://werewolf.world/image/0.2/Moritz.jpg',
        agentName: 'モーリッツ',
        avatarImage: 'https://werewolf.world/image/0.2/Alvin.jpg',
        avatarName: 'Takahashi',
        result: 'lose',
        roleImage: 'https://werewolf.world/image/0.2/werewolf.jpg',
        roleName: '人狼',
        status: 'alive'
      },
      agent3: {
        agentId: 3,
        agentImage: 'https://werewolf.world/image/0.2/Simson.jpg',
        agentName: 'ジムゾン',
        avatarImage: 'https://werewolf.world/image/0.2/Friedel.jpg',
        avatarName: 'Tanaka',
        result: 'win',
        roleImage: 'https://werewolf.world/image/0.2/hunter.jpg',
        roleName: '狩人',
        status: 'alive'
      },
      agent4: {
        agentId: 4,
        agentImage: 'https://werewolf.world/image/0.2/Thomas.jpg',
        agentName: 'トーマス',
        avatarImage: 'https://werewolf.world/image/0.2/Dieter.jpg',
        avatarName: 'Ito',
        result: 'win',
        roleImage: 'https://werewolf.world/image/0.2/medium.jpg',
        roleName: '霊媒師',
        status: 'alive'
      }
    })
    expect(wrapper.props().summary).toEqual({
      description: 'Result.summary.description(player, villager, villager, win)',
      loser: 'Result.summary.loser(werewolf)',
      winner: 'Result.summary.winner(villager)'
    })
  })
})
