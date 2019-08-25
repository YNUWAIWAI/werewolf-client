/* global village */
import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import Agent from '../constants/Agent'
import ImagePath from '../constants/ImagePath'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import Result from '../components/organisms/Result'
import ResultContainer from './ResultContainer'
import {Role} from '../constants/Role'
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
                  agentId: '1',
                  agentImage: ImagePath.Agent.a,
                  agentName: Agent.a,
                  avatarImage: ImagePath.Agent.o,
                  avatarName: 'Suzuki',
                  result: village.Result.win,
                  roleImage: ImagePath.Role.seer,
                  roleName: Role.seer,
                  status: village.AgentStatus.alive
                },
                agent2: {
                  agentId: '2',
                  agentImage: ImagePath.Agent.b,
                  agentName: Agent.b,
                  avatarImage: ImagePath.Agent.i,
                  avatarName: 'Takahashi',
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.werewolf,
                  roleName: Role.werewolf,
                  status: village.AgentStatus.alive
                },
                agent3: {
                  agentId: '3',
                  agentImage: ImagePath.Agent.c,
                  agentName: Agent.c,
                  avatarImage: ImagePath.Agent.r,
                  avatarName: 'Tanaka',
                  result: village.Result.win,
                  roleImage: ImagePath.Role.hunter,
                  roleName: Role.hunter,
                  status: village.AgentStatus.alive
                },
                agent4: {
                  agentId: '4',
                  agentImage: ImagePath.Agent.d,
                  agentName: Agent.d,
                  avatarImage: ImagePath.Agent.f,
                  avatarName: 'Ito',
                  result: village.Result.win,
                  roleImage: ImagePath.Role.medium,
                  roleName: Role.medium,
                  status: village.AgentStatus.alive
                },
                agent5: {
                  agentId: '5',
                  agentImage: ImagePath.Agent.e,
                  agentName: Agent.e,
                  avatarImage: ImagePath.Agent.s,
                  avatarName: 'Watanabe',
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.werehamster,
                  roleName: Role.werehamster,
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
                  agentId: '0',
                  agentImage: ImagePath.Agent.a,
                  agentName: Agent.a,
                  avatarImage: ImagePath.Agent.o,
                  avatarName: 'Sato',
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.villager,
                  roleName: Role.villager,
                  status: village.AgentStatus.alive
                },
                agent1: {
                  agentId: '1',
                  agentImage: ImagePath.Agent.b,
                  agentName: Agent.b,
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Suzuki',
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.seer,
                  roleName: Role.seer,
                  status: village.AgentStatus.alive
                },
                agent2: {
                  agentId: '2',
                  agentImage: ImagePath.Agent.c,
                  agentName: Agent.c,
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Takahashi',
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.werewolf,
                  roleName: Role.werewolf,
                  status: village.AgentStatus.alive
                },
                agent3: {
                  agentId: '3',
                  agentImage: ImagePath.Agent.d,
                  agentName: Agent.d,
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Tanaka',
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.hunter,
                  roleName: Role.hunter,
                  status: village.AgentStatus.alive
                },
                agent4: {
                  agentId: '4',
                  agentImage: ImagePath.Agent.e,
                  agentName: Agent.e,
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Ito',
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.medium,
                  roleName: Role.medium,
                  status: village.AgentStatus.alive
                },
                agent5: {
                  agentId: '5',
                  agentImage: ImagePath.Agent.o,
                  agentName: Agent.f,
                  avatarImage: ImagePath.Agent.n,
                  avatarName: 'Watanabe',
                  result: village.Result.win,
                  roleImage: ImagePath.Role.werewolf,
                  roleName: Role.werehamster,
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
                  agentId: '0',
                  agentImage: ImagePath.Agent.a,
                  agentName: Agent.a,
                  avatarImage: ImagePath.Agent.o,
                  avatarName: 'Sato',
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.villager,
                  roleName: Role.villager,
                  status: village.AgentStatus.alive
                },
                agent1: {
                  agentId: '1',
                  agentImage: ImagePath.Agent.b,
                  agentName: Agent.b,
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Suzuki',
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.seer,
                  roleName: Role.seer,
                  status: village.AgentStatus.alive
                },
                agent2: {
                  agentId: '2',
                  agentImage: ImagePath.Agent.c,
                  agentName: Agent.c,
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Takahashi',
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.werewolf,
                  roleName: Role.werewolf,
                  status: village.AgentStatus.alive
                },
                agent3: {
                  agentId: '3',
                  agentImage: ImagePath.Agent.d,
                  agentName: Agent.d,
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Tanaka',
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.hunter,
                  roleName: Role.hunter,
                  status: village.AgentStatus.alive
                },
                agent4: {
                  agentId: '4',
                  agentImage: ImagePath.Agent.e,
                  agentName: Agent.e,
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Ito',
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.medium,
                  roleName: Role.medium,
                  status: village.AgentStatus.alive
                },
                agent5: {
                  agentId: '5',
                  agentImage: ImagePath.Agent.f,
                  agentName: Agent.f,
                  avatarImage: ImagePath.Agent.n,
                  avatarName: 'Watanabe',
                  result: village.Result.win,
                  roleImage: ImagePath.Role.werewolf,
                  roleName: Role.werehamster,
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
                  agentId: '0',
                  agentImage: ImagePath.Agent.a,
                  agentName: Agent.a,
                  avatarImage: ImagePath.Agent.o,
                  avatarName: 'Sato',
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.villager,
                  roleName: Role.villager,
                  status: village.AgentStatus.alive
                },
                agent1: {
                  agentId: '1',
                  agentImage: ImagePath.Agent.b,
                  agentName: Agent.b,
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Suzuki',
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.seer,
                  roleName: Role.seer,
                  status: village.AgentStatus.alive
                },
                agent2: {
                  agentId: '2',
                  agentImage: ImagePath.Agent.c,
                  agentName: Agent.c,
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Takahashi',
                  result: village.Result.win,
                  roleImage: ImagePath.Role.werewolf,
                  roleName: Role.werewolf,
                  status: village.AgentStatus.alive
                },
                agent3: {
                  agentId: '3',
                  agentImage: ImagePath.Agent.d,
                  agentName: Agent.d,
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Tanaka',
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.hunter,
                  roleName: Role.hunter,
                  status: village.AgentStatus.alive
                },
                agent4: {
                  agentId: '4',
                  agentImage: ImagePath.Agent.e,
                  agentName: Agent.e,
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Ito',
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.medium,
                  roleName: Role.medium,
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
                  agentId: '0',
                  agentImage: ImagePath.Agent.a,
                  agentName: Agent.a,
                  avatarImage: ImagePath.Agent.o,
                  avatarName: 'Sato',
                  result: village.Result.win,
                  roleImage: ImagePath.Role.villager,
                  roleName: Role.villager,
                  status: village.AgentStatus.alive
                },
                agent1: {
                  agentId: '1',
                  agentImage: ImagePath.Agent.b,
                  agentName: Agent.b,
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Suzuki',
                  result: village.Result.win,
                  roleImage: ImagePath.Role.seer,
                  roleName: Role.seer,
                  status: village.AgentStatus.alive
                },
                agent2: {
                  agentId: '2',
                  agentImage: ImagePath.Agent.c,
                  agentName: Agent.c,
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Takahashi',
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.werewolf,
                  roleName: Role.werewolf,
                  status: village.AgentStatus.alive
                },
                agent3: {
                  agentId: '3',
                  agentImage: ImagePath.Agent.d,
                  agentName: Agent.d,
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Tanaka',
                  result: village.Result.win,
                  roleImage: ImagePath.Role.hunter,
                  roleName: Role.hunter,
                  status: village.AgentStatus.alive
                },
                agent4: {
                  agentId: '4',
                  agentImage: ImagePath.Agent.e,
                  agentName: Agent.e,
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Ito',
                  result: village.Result.win,
                  roleImage: ImagePath.Role.medium,
                  roleName: Role.medium,
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
                  agentId: '0',
                  agentImage: ImagePath.Agent.a,
                  agentName: Agent.a,
                  avatarImage: ImagePath.Agent.o,
                  avatarName: 'Sato',
                  result: village.Result.win,
                  roleImage: ImagePath.Role.villager,
                  roleName: Role.villager,
                  status: village.AgentStatus.alive
                },
                agent1: {
                  agentId: '1',
                  agentImage: ImagePath.Agent.b,
                  agentName: Agent.b,
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Suzuki',
                  result: village.Result.win,
                  roleImage: ImagePath.Role.seer,
                  roleName: Role.seer,
                  status: village.AgentStatus.alive
                },
                agent2: {
                  agentId: '2',
                  agentImage: ImagePath.Agent.c,
                  agentName: Agent.c,
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Takahashi',
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.werewolf,
                  roleName: Role.werewolf,
                  status: village.AgentStatus.alive
                },
                agent3: {
                  agentId: '3',
                  agentImage: ImagePath.Agent.d,
                  agentName: Agent.d,
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Tanaka',
                  result: village.Result.win,
                  roleImage: ImagePath.Role.hunter,
                  roleName: Role.hunter,
                  status: village.AgentStatus.alive
                },
                agent4: {
                  agentId: '4',
                  agentImage: ImagePath.Agent.e,
                  agentName: Agent.e,
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Ito',
                  result: village.Result.win,
                  roleImage: ImagePath.Role.medium,
                  roleName: Role.medium,
                  status: village.AgentStatus.alive
                },
                agent5: {
                  agentId: '5',
                  agentImage: ImagePath.Agent.o,
                  agentName: Agent.f,
                  avatarImage: ImagePath.Agent.n,
                  avatarName: 'Watanabe',
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.werewolf,
                  roleName: Role.werehamster,
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
