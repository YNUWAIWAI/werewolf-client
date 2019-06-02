/* global village */
import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import Result from '../components/organisms/Result'
import ResultContainer from './ResultContainer'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

describe('<ResultContainer />', () => {
  describe('render', () => {
    describe('kind: player', () => {
      test('winner: villager loser: werewolf, werehamster', () => {
        const store = fakeStore(
          {
            language: village.Language.ja,
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
                }
              },
              allIds: [
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
                loserTeam: new Set([village.Team.werewolf, village.Team.werehamster]),
                myTeam: village.Team.villager,
                result: village.Result.win,
                winnerTeam: village.Team.villager
              },
              visible: true,
              winners: [
                'agent1',
                'agent3',
                'agent4'
              ]
            }
          }
        )
        const wrapper = mount(
          <Provider store={store} >
            <IntlProviderContainer>
              <ResultContainer />
            </IntlProviderContainer>
          </Provider>
        )

        expect(wrapper.html()).toMatchSnapshot()
      })
      test('winner: werehamster loser: villager, werewolf', () => {
        const store = fakeStore(
          {
            language: village.Language.ja,
            result: {
              agents: {
                agent0: {
                  agentId: 0,
                  agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
                  agentName: {
                    'en': 'Adil',
                    'ja': 'アーディル'
                  },
                  avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/o_50x50.png',
                  avatarName: 'Sato',
                  result: village.Result.lose,
                  roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
                  roleName: {
                    'en': 'Villager',
                    'ja': '村人'
                  },
                  status: village.AgentStatus.alive
                },
                agent1: {
                  agentId: 1,
                  agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/b_50x50.png',
                  agentName: {
                    'en': 'Borya',
                    'ja': 'ボーリャ'
                  },
                  avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
                  avatarName: 'Suzuki',
                  result: village.Result.lose,
                  roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/seer_50x50.png',
                  roleName: {
                    en: 'Seer',
                    ja: '占い師'
                  },
                  status: village.AgentStatus.alive
                },
                agent2: {
                  agentId: 2,
                  agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/c_50x50.png',
                  agentName: {
                    'en': 'Chacha',
                    'ja': 'チャチャ'
                  },
                  avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
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
                  agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/d_50x50.png',
                  agentName: {
                    'en': 'Devdatta',
                    'ja': 'デヴゥダッタ'
                  },
                  avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
                  avatarName: 'Tanaka',
                  result: village.Result.lose,
                  roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/hunter_50x50.png',
                  roleName: {
                    en: 'Hunter',
                    ja: '狩人'
                  },
                  status: village.AgentStatus.alive
                },
                agent4: {
                  agentId: 4,
                  agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/e_50x50.png',
                  agentName: {
                    'en': 'Ekrem',
                    'ja': 'エクレム'
                  },
                  avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
                  avatarName: 'Ito',
                  result: village.Result.lose,
                  roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/medium_50x50.png',
                  roleName: {
                    en: 'Medium',
                    ja: '霊媒師'
                  },
                  status: village.AgentStatus.alive
                },
                agent5: {
                  agentId: 5,
                  agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/o_50x50.png',
                  agentName: {
                    'en': 'Fernando',
                    'ja': 'フェルナンド'
                  },
                  avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/n_50x50.png',
                  avatarName: 'Watanabe',
                  result: village.Result.win,
                  roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werewolf_50x50.png',
                  roleName: {
                    en: 'Werehamster',
                    ja: 'ハムスター人間'
                  },
                  status: village.AgentStatus.deathByFear
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
                'agent0',
                'agent1',
                'agent2',
                'agent3',
                'agent4'
              ],
              me: 'agent1',
              summary: {
                kind: 'player',
                loserTeam: new Set([village.Team.villager, village.Team.werewolf]),
                myTeam: village.Team.villager,
                result: village.Result.lose,
                winnerTeam: village.Team.werehamster
              },
              visible: true,
              winners: [
                'agent5'
              ]
            }
          }
        )
        const wrapper = mount(
          <Provider store={store} >
            <IntlProviderContainer>
              <ResultContainer />
            </IntlProviderContainer>
          </Provider>
        )

        expect(wrapper.html()).toMatchSnapshot()
      })
      test('winner: werewolf loser: villager, werehamster', () => {
        const store = fakeStore(
          {
            language: village.Language.ja,
            result: {
              agents: {
                agent0: {
                  agentId: 0,
                  agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
                  agentName: {
                    'en': 'Adil',
                    'ja': 'アーディル'
                  },
                  avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/o_50x50.png',
                  avatarName: 'Sato',
                  result: village.Result.lose,
                  roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
                  roleName: {
                    'en': 'Villager',
                    'ja': '村人'
                  },
                  status: village.AgentStatus.alive
                },
                agent1: {
                  agentId: 1,
                  agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/b_50x50.png',
                  agentName: {
                    'en': 'Borya',
                    'ja': 'ボーリャ'
                  },
                  avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
                  avatarName: 'Suzuki',
                  result: village.Result.lose,
                  roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/seer_50x50.png',
                  roleName: {
                    en: 'Seer',
                    ja: '占い師'
                  },
                  status: village.AgentStatus.alive
                },
                agent2: {
                  agentId: 2,
                  agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/c_50x50.png',
                  agentName: {
                    'en': 'Chacha',
                    'ja': 'チャチャ'
                  },
                  avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
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
                  agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/d_50x50.png',
                  agentName: {
                    'en': 'Devdatta',
                    'ja': 'デヴゥダッタ'
                  },
                  avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
                  avatarName: 'Tanaka',
                  result: village.Result.lose,
                  roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/hunter_50x50.png',
                  roleName: {
                    en: 'Hunter',
                    ja: '狩人'
                  },
                  status: village.AgentStatus.alive
                },
                agent4: {
                  agentId: 4,
                  agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/e_50x50.png',
                  agentName: {
                    'en': 'Ekrem',
                    'ja': 'エクレム'
                  },
                  avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
                  avatarName: 'Ito',
                  result: village.Result.lose,
                  roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/medium_50x50.png',
                  roleName: {
                    en: 'Medium',
                    ja: '霊媒師'
                  },
                  status: village.AgentStatus.alive
                },
                agent5: {
                  agentId: 5,
                  agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/f_50x50.png',
                  agentName: {
                    'en': 'Fernando',
                    'ja': 'フェルナンド'
                  },
                  avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/n_50x50.png',
                  avatarName: 'Watanabe',
                  result: village.Result.win,
                  roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werewolf_50x50.png',
                  roleName: {
                    en: 'Werehamster',
                    ja: 'ハムスター人間'
                  },
                  status: village.AgentStatus.deathByFear
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
                'agent0',
                'agent1',
                'agent2',
                'agent3',
                'agent4'
              ],
              me: 'agent1',
              summary: {
                kind: 'player',
                loserTeam: new Set([village.Team.villager, village.Team.werewolf]),
                myTeam: village.Team.villager,
                result: village.Result.lose,
                winnerTeam: village.Team.werehamster
              },
              visible: true,
              winners: [
                'agent5'
              ]
            }
          }
        )
        const wrapper = mount(
          <Provider store={store} >
            <IntlProviderContainer>
              <ResultContainer />
            </IntlProviderContainer>
          </Provider>
        )

        expect(wrapper.html()).toMatchSnapshot()
      })
      test('winner: werewolf loser: villager', () => {
        const store = fakeStore(
          {
            language: village.Language.ja,
            result: {
              agents: {
                agent0: {
                  agentId: 0,
                  agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
                  agentName: {
                    'en': 'Adil',
                    'ja': 'アーディル'
                  },
                  avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/o_50x50.png',
                  avatarName: 'Sato',
                  result: village.Result.lose,
                  roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
                  roleName: {
                    'en': 'Villager',
                    'ja': '村人'
                  },
                  status: village.AgentStatus.alive
                },
                agent1: {
                  agentId: 1,
                  agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/b_50x50.png',
                  agentName: {
                    'en': 'Borya',
                    'ja': 'ボーリャ'
                  },
                  avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
                  avatarName: 'Suzuki',
                  result: village.Result.lose,
                  roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/seer_50x50.png',
                  roleName: {
                    en: 'Seer',
                    ja: '占い師'
                  },
                  status: village.AgentStatus.alive
                },
                agent2: {
                  agentId: 2,
                  agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/c_50x50.png',
                  agentName: {
                    'en': 'Chacha',
                    'ja': 'チャチャ'
                  },
                  avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
                  avatarName: 'Takahashi',
                  result: village.Result.win,
                  roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werewolf_50x50.png',
                  roleName: {
                    en: 'Werewolf',
                    ja: '人狼'
                  },
                  status: village.AgentStatus.alive
                },
                agent3: {
                  agentId: 3,
                  agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/d_50x50.png',
                  agentName: {
                    'en': 'Devdatta',
                    'ja': 'デヴゥダッタ'
                  },
                  avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
                  avatarName: 'Tanaka',
                  result: village.Result.lose,
                  roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/hunter_50x50.png',
                  roleName: {
                    en: 'Hunter',
                    ja: '狩人'
                  },
                  status: village.AgentStatus.alive
                },
                agent4: {
                  agentId: 4,
                  agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/e_50x50.png',
                  agentName: {
                    'en': 'Ekrem',
                    'ja': 'エクレム'
                  },
                  avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
                  avatarName: 'Ito',
                  result: village.Result.lose,
                  roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/medium_50x50.png',
                  roleName: {
                    en: 'Medium',
                    ja: '霊媒師'
                  },
                  status: village.AgentStatus.alive
                }
              },
              allIds: [
                'agent0',
                'agent1',
                'agent2',
                'agent3',
                'agent4'
              ],
              losers: [
                'agent0',
                'agent1',
                'agent3',
                'agent4'
              ],
              me: 'agent1',
              summary: {
                kind: 'player',
                loserTeam: new Set([village.Team.villager]),
                myTeam: village.Team.villager,
                result: village.Result.lose,
                winnerTeam: village.Team.werewolf
              },
              visible: true,
              winners: [
                'agent2'
              ]
            }
          }
        )
        const wrapper = mount(
          <Provider store={store} >
            <IntlProviderContainer>
              <ResultContainer />
            </IntlProviderContainer>
          </Provider>
        )

        expect(wrapper.html()).toMatchSnapshot()
      })
      test('winner: villager loser: werewolf', () => {
        const store = fakeStore(
          {
            language: village.Language.ja,
            result: {
              agents: {
                agent0: {
                  agentId: 0,
                  agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
                  agentName: {
                    'en': 'Gert',
                    'ja': 'ゲルト'
                  },
                  avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/o_50x50.png',
                  avatarName: 'Sato',
                  result: village.Result.win,
                  roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
                  roleName: {
                    'en': 'Villager',
                    'ja': '村人'
                  },
                  status: village.AgentStatus.alive
                },
                agent1: {
                  agentId: 1,
                  agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/b_50x50.png',
                  agentName: {
                    'en': 'Borya',
                    'ja': 'ボーリャ'
                  },
                  avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
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
                  agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/c_50x50.png',
                  agentName: {
                    'en': 'Chacha',
                    'ja': 'チャチャ'
                  },
                  avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
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
                  agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/d_50x50.png',
                  agentName: {
                    en: 'Simson',
                    ja: 'ジムゾン'
                  },
                  avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
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
                  agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/e_50x50.png',
                  agentName: {
                    en: 'Thomas',
                    ja: 'トーマス'
                  },
                  avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
                  avatarName: 'Ito',
                  result: village.Result.win,
                  roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/medium_50x50.png',
                  roleName: {
                    en: 'Medium',
                    ja: '霊媒師'
                  },
                  status: village.AgentStatus.alive
                }
              },
              allIds: [
                'agent0',
                'agent1',
                'agent2',
                'agent3',
                'agent4'
              ],
              losers: [
                'agent2'
              ],
              me: 'agent1',
              summary: {
                kind: 'player',
                loserTeam: new Set([village.Team.werewolf]),
                myTeam: village.Team.villager,
                result: village.Result.win,
                winnerTeam: village.Team.villager
              },
              visible: true,
              winners: [
                'agent0',
                'agent1',
                'agent3',
                'agent4'
              ]
            }
          }
        )
        const wrapper = mount(
          <Provider store={store} >
            <IntlProviderContainer>
              <ResultContainer />
            </IntlProviderContainer>
          </Provider>
        )

        expect(wrapper.html()).toMatchSnapshot()
      })
    })
    describe('kind: audience', () => {
      test('winner: villager loser: werewolf, werehamster', () => {
        const store = fakeStore(
          {
            language: village.Language.ja,
            result: {
              agents: {
                agent0: {
                  agentId: 0,
                  agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
                  agentName: {
                    'en': 'Adil',
                    'ja': 'アーディル'
                  },
                  avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/o_50x50.png',
                  avatarName: 'Sato',
                  result: village.Result.win,
                  roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
                  roleName: {
                    'en': 'Villager',
                    'ja': '村人'
                  },
                  status: village.AgentStatus.alive
                },
                agent1: {
                  agentId: 1,
                  agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/b_50x50.png',
                  agentName: {
                    'en': 'Borya',
                    'ja': 'ボーリャ'
                  },
                  avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
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
                  agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/c_50x50.png',
                  agentName: {
                    'en': 'Chacha',
                    'ja': 'チャチャ'
                  },
                  avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
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
                  agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/d_50x50.png',
                  agentName: {
                    'en': 'Devdatta',
                    'ja': 'デヴゥダッタ'
                  },
                  avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
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
                  agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/e_50x50.png',
                  agentName: {
                    'en': 'Ekrem',
                    'ja': 'エクレム'
                  },
                  avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
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
                  agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/o_50x50.png',
                  agentName: {
                    'en': 'Fernando',
                    'ja': 'フェルナンド'
                  },
                  avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/n_50x50.png',
                  avatarName: 'Watanabe',
                  result: village.Result.lose,
                  roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werewolf_50x50.png',
                  roleName: {
                    en: 'Werehamster',
                    ja: 'ハムスター人間'
                  },
                  status: village.AgentStatus.deathByFear
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
              me: null,
              summary: {
                kind: 'audience',
                loserTeam: new Set([village.Team.werewolf, village.Team.werehamster]),
                winnerTeam: village.Team.villager
              },
              visible: true,
              winners: [
                'agent0',
                'agent1',
                'agent3',
                'agent4'
              ]
            }
          }
        )
        const wrapper = mount(
          <Provider store={store} >
            <IntlProviderContainer>
              <ResultContainer />
            </IntlProviderContainer>
          </Provider>
        )

        expect(wrapper.html()).toMatchSnapshot()
      })
    })
  })
  test('handleClickCloseButton', () => {
    const store = fakeStore(
      {
        language: village.Language.ja
      }
    )
    const dispatch = jest.fn()

    store.dispatch = dispatch

    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <ResultContainer />
        </IntlProviderContainer>
      </Provider>
    )

    wrapper.find(Result).props().handleClickCloseButton()
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.global.HIDE_RESULT
    })
  })
})
