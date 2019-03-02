/* global village */
import * as React from 'react'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import ResultContainer from './ResultContainer'
import fakeStore from './fakeStore'
import {render} from 'enzyme'

describe('<ResultContainer />', () => {
  test('winner: villager loser: werewolf, werehamster', () => {
    const store = fakeStore(
      {
        language: village.Language.ja,
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
            'agent4'
          ]
        }
      }
    )
    const wrapper = render(
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
              agentImage: 'https://werewolf.world/image/0.2/Gert.jpg',
              agentName: {
                'en': 'Gert',
                'ja': 'ゲルト'
              },
              avatarImage: 'https://werewolf.world/image/0.2/Nicholas.jpg',
              avatarName: 'Sato',
              result: village.Result.lose,
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
              result: village.Result.lose,
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
              result: village.Result.lose,
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
              result: village.Result.lose,
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
              result: village.Result.win,
              roleImage: 'https://werewolf.world/image/0.2/werehamster.jpg',
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
    const wrapper = render(
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
              agentImage: 'https://werewolf.world/image/0.2/Gert.jpg',
              agentName: {
                'en': 'Gert',
                'ja': 'ゲルト'
              },
              avatarImage: 'https://werewolf.world/image/0.2/Nicholas.jpg',
              avatarName: 'Sato',
              result: village.Result.lose,
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
              result: village.Result.lose,
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
              result: village.Result.lose,
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
              result: village.Result.lose,
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
              result: village.Result.win,
              roleImage: 'https://werewolf.world/image/0.2/werehamster.jpg',
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
    const wrapper = render(
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
              agentImage: 'https://werewolf.world/image/0.2/Gert.jpg',
              agentName: {
                'en': 'Gert',
                'ja': 'ゲルト'
              },
              avatarImage: 'https://werewolf.world/image/0.2/Nicholas.jpg',
              avatarName: 'Sato',
              result: village.Result.lose,
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
              result: village.Result.lose,
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
              result: village.Result.win,
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
              result: village.Result.lose,
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
              result: village.Result.lose,
              roleImage: 'https://werewolf.world/image/0.2/medium.jpg',
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
    const wrapper = render(
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
    const wrapper = render(
      <Provider store={store} >
        <IntlProviderContainer>
          <ResultContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})
