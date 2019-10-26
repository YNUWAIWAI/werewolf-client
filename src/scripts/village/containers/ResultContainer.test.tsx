import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import {Agent} from '../constants/Agent'
import {ImagePath} from '../constants/ImagePath'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import Result from '../components/organisms/Result'
import ResultContainer from './ResultContainer'
import {Role} from '../constants/Role'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'
import {village} from '../types'

describe('<ResultContainer />', () => {
  describe('render', () => {
    describe('kind: player', () => {
      test('winner: villager loser: werewolf, werehamster', () => {
        const store = fakeStore(
          {
            language: village.Language.en,
            result: {
              allIds: [
                'character1',
                'character2',
                'character3',
                'character4',
                'character5'
              ],
              characters: {
                character1: {
                  avatarImage: ImagePath.Agent.o,
                  avatarName: 'Suzuki',
                  characterId: '1',
                  characterImage: ImagePath.Agent.a,
                  characterName: Agent.a,
                  result: village.Result.win,
                  roleImage: ImagePath.Role.seer,
                  roleName: Role.seer,
                  status: village.CharacterStatus.alive
                },
                character2: {
                  avatarImage: ImagePath.Agent.i,
                  avatarName: 'Takahashi',
                  characterId: '2',
                  characterImage: ImagePath.Agent.b,
                  characterName: Agent.b,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.werewolf,
                  roleName: Role.werewolf,
                  status: village.CharacterStatus.alive
                },
                character3: {
                  avatarImage: ImagePath.Agent.r,
                  avatarName: 'Tanaka',
                  characterId: '3',
                  characterImage: ImagePath.Agent.c,
                  characterName: Agent.c,
                  result: village.Result.win,
                  roleImage: ImagePath.Role.hunter,
                  roleName: Role.hunter,
                  status: village.CharacterStatus.alive
                },
                character4: {
                  avatarImage: ImagePath.Agent.f,
                  avatarName: 'Ito',
                  characterId: '4',
                  characterImage: ImagePath.Agent.d,
                  characterName: Agent.d,
                  result: village.Result.win,
                  roleImage: ImagePath.Role.medium,
                  roleName: Role.medium,
                  status: village.CharacterStatus.alive
                },
                character5: {
                  avatarImage: ImagePath.Agent.s,
                  avatarName: 'Watanabe',
                  characterId: '5',
                  characterImage: ImagePath.Agent.e,
                  characterName: Agent.e,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.werehamster,
                  roleName: Role.werehamster,
                  status: village.CharacterStatus.deathByFear
                }
              },
              losers: [
                'character2',
                'character5'
              ],
              me: 'character1',
              summary: {
                kind: village.SummaryType.character,
                loserTeam: new Set([village.Team.werewolf, village.Team.werehamster]),
                myTeam: village.Team.villager,
                result: village.Result.win,
                winnerTeam: village.Team.villager
              },
              visible: true,
              winners: [
                'character1',
                'character3',
                'character4'
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
            language: village.Language.en,
            result: {
              allIds: [
                'character0',
                'character1',
                'character2',
                'character3',
                'character4',
                'character5'
              ],
              characters: {
                character0: {
                  avatarImage: ImagePath.Agent.o,
                  avatarName: 'Sato',
                  characterId: '0',
                  characterImage: ImagePath.Agent.a,
                  characterName: Agent.a,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.villager,
                  roleName: Role.villager,
                  status: village.CharacterStatus.alive
                },
                character1: {
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Suzuki',
                  characterId: '1',
                  characterImage: ImagePath.Agent.b,
                  characterName: Agent.b,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.seer,
                  roleName: Role.seer,
                  status: village.CharacterStatus.alive
                },
                character2: {
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Takahashi',
                  characterId: '2',
                  characterImage: ImagePath.Agent.c,
                  characterName: Agent.c,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.werewolf,
                  roleName: Role.werewolf,
                  status: village.CharacterStatus.alive
                },
                character3: {
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Tanaka',
                  characterId: '3',
                  characterImage: ImagePath.Agent.d,
                  characterName: Agent.d,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.hunter,
                  roleName: Role.hunter,
                  status: village.CharacterStatus.alive
                },
                character4: {
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Ito',
                  characterId: '4',
                  characterImage: ImagePath.Agent.e,
                  characterName: Agent.e,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.medium,
                  roleName: Role.medium,
                  status: village.CharacterStatus.alive
                },
                character5: {
                  avatarImage: ImagePath.Agent.n,
                  avatarName: 'Watanabe',
                  characterId: '5',
                  characterImage: ImagePath.Agent.o,
                  characterName: Agent.f,
                  result: village.Result.win,
                  roleImage: ImagePath.Role.werewolf,
                  roleName: Role.werehamster,
                  status: village.CharacterStatus.deathByFear
                }
              },
              losers: [
                'character0',
                'character1',
                'character2',
                'character3',
                'character4'
              ],
              me: 'character1',
              summary: {
                kind: village.SummaryType.character,
                loserTeam: new Set([village.Team.villager, village.Team.werewolf]),
                myTeam: village.Team.villager,
                result: village.Result.lose,
                winnerTeam: village.Team.werehamster
              },
              visible: true,
              winners: [
                'character5'
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
            language: village.Language.en,
            result: {
              allIds: [
                'character0',
                'character1',
                'character2',
                'character3',
                'character4',
                'character5'
              ],
              characters: {
                character0: {
                  avatarImage: ImagePath.Agent.o,
                  avatarName: 'Sato',
                  characterId: '0',
                  characterImage: ImagePath.Agent.a,
                  characterName: Agent.a,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.villager,
                  roleName: Role.villager,
                  status: village.CharacterStatus.alive
                },
                character1: {
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Suzuki',
                  characterId: '1',
                  characterImage: ImagePath.Agent.b,
                  characterName: Agent.b,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.seer,
                  roleName: Role.seer,
                  status: village.CharacterStatus.alive
                },
                character2: {
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Takahashi',
                  characterId: '2',
                  characterImage: ImagePath.Agent.c,
                  characterName: Agent.c,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.werewolf,
                  roleName: Role.werewolf,
                  status: village.CharacterStatus.alive
                },
                character3: {
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Tanaka',
                  characterId: '3',
                  characterImage: ImagePath.Agent.d,
                  characterName: Agent.d,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.hunter,
                  roleName: Role.hunter,
                  status: village.CharacterStatus.alive
                },
                character4: {
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Ito',
                  characterId: '4',
                  characterImage: ImagePath.Agent.e,
                  characterName: Agent.e,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.medium,
                  roleName: Role.medium,
                  status: village.CharacterStatus.alive
                },
                character5: {
                  avatarImage: ImagePath.Agent.n,
                  avatarName: 'Watanabe',
                  characterId: '5',
                  characterImage: ImagePath.Agent.f,
                  characterName: Agent.f,
                  result: village.Result.win,
                  roleImage: ImagePath.Role.werewolf,
                  roleName: Role.werehamster,
                  status: village.CharacterStatus.deathByFear
                }
              },
              losers: [
                'character0',
                'character1',
                'character2',
                'character3',
                'character4'
              ],
              me: 'character1',
              summary: {
                kind: village.SummaryType.character,
                loserTeam: new Set([village.Team.villager, village.Team.werewolf]),
                myTeam: village.Team.villager,
                result: village.Result.lose,
                winnerTeam: village.Team.werehamster
              },
              visible: true,
              winners: [
                'character5'
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
            language: village.Language.en,
            result: {
              allIds: [
                'character0',
                'character1',
                'character2',
                'character3',
                'character4'
              ],
              characters: {
                character0: {
                  avatarImage: ImagePath.Agent.o,
                  avatarName: 'Sato',
                  characterId: '0',
                  characterImage: ImagePath.Agent.a,
                  characterName: Agent.a,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.villager,
                  roleName: Role.villager,
                  status: village.CharacterStatus.alive
                },
                character1: {
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Suzuki',
                  characterId: '1',
                  characterImage: ImagePath.Agent.b,
                  characterName: Agent.b,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.seer,
                  roleName: Role.seer,
                  status: village.CharacterStatus.alive
                },
                character2: {
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Takahashi',
                  characterId: '2',
                  characterImage: ImagePath.Agent.c,
                  characterName: Agent.c,
                  result: village.Result.win,
                  roleImage: ImagePath.Role.werewolf,
                  roleName: Role.werewolf,
                  status: village.CharacterStatus.alive
                },
                character3: {
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Tanaka',
                  characterId: '3',
                  characterImage: ImagePath.Agent.d,
                  characterName: Agent.d,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.hunter,
                  roleName: Role.hunter,
                  status: village.CharacterStatus.alive
                },
                character4: {
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Ito',
                  characterId: '4',
                  characterImage: ImagePath.Agent.e,
                  characterName: Agent.e,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.medium,
                  roleName: Role.medium,
                  status: village.CharacterStatus.alive
                }
              },
              losers: [
                'character0',
                'character1',
                'character3',
                'character4'
              ],
              me: 'character1',
              summary: {
                kind: village.SummaryType.character,
                loserTeam: new Set([village.Team.villager]),
                myTeam: village.Team.villager,
                result: village.Result.lose,
                winnerTeam: village.Team.werewolf
              },
              visible: true,
              winners: [
                'character2'
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
            language: village.Language.en,
            result: {
              allIds: [
                'character0',
                'character1',
                'character2',
                'character3',
                'character4'
              ],
              characters: {
                character0: {
                  avatarImage: ImagePath.Agent.o,
                  avatarName: 'Sato',
                  characterId: '0',
                  characterImage: ImagePath.Agent.a,
                  characterName: Agent.a,
                  result: village.Result.win,
                  roleImage: ImagePath.Role.villager,
                  roleName: Role.villager,
                  status: village.CharacterStatus.alive
                },
                character1: {
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Suzuki',
                  characterId: '1',
                  characterImage: ImagePath.Agent.b,
                  characterName: Agent.b,
                  result: village.Result.win,
                  roleImage: ImagePath.Role.seer,
                  roleName: Role.seer,
                  status: village.CharacterStatus.alive
                },
                character2: {
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Takahashi',
                  characterId: '2',
                  characterImage: ImagePath.Agent.c,
                  characterName: Agent.c,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.werewolf,
                  roleName: Role.werewolf,
                  status: village.CharacterStatus.alive
                },
                character3: {
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Tanaka',
                  characterId: '3',
                  characterImage: ImagePath.Agent.d,
                  characterName: Agent.d,
                  result: village.Result.win,
                  roleImage: ImagePath.Role.hunter,
                  roleName: Role.hunter,
                  status: village.CharacterStatus.alive
                },
                character4: {
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Ito',
                  characterId: '4',
                  characterImage: ImagePath.Agent.e,
                  characterName: Agent.e,
                  result: village.Result.win,
                  roleImage: ImagePath.Role.medium,
                  roleName: Role.medium,
                  status: village.CharacterStatus.alive
                }
              },
              losers: [
                'character2'
              ],
              me: 'character1',
              summary: {
                kind: village.SummaryType.character,
                loserTeam: new Set([village.Team.werewolf]),
                myTeam: village.Team.villager,
                result: village.Result.win,
                winnerTeam: village.Team.villager
              },
              visible: true,
              winners: [
                'character0',
                'character1',
                'character3',
                'character4'
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
            language: village.Language.en,
            result: {
              allIds: [
                'character0',
                'character1',
                'character2',
                'character3',
                'character4',
                'character5'
              ],
              characters: {
                character0: {
                  avatarImage: ImagePath.Agent.o,
                  avatarName: 'Sato',
                  characterId: '0',
                  characterImage: ImagePath.Agent.a,
                  characterName: Agent.a,
                  result: village.Result.win,
                  roleImage: ImagePath.Role.villager,
                  roleName: Role.villager,
                  status: village.CharacterStatus.alive
                },
                character1: {
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Suzuki',
                  characterId: '1',
                  characterImage: ImagePath.Agent.b,
                  characterName: Agent.b,
                  result: village.Result.win,
                  roleImage: ImagePath.Role.seer,
                  roleName: Role.seer,
                  status: village.CharacterStatus.alive
                },
                character2: {
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Takahashi',
                  characterId: '2',
                  characterImage: ImagePath.Agent.c,
                  characterName: Agent.c,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.werewolf,
                  roleName: Role.werewolf,
                  status: village.CharacterStatus.alive
                },
                character3: {
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Tanaka',
                  characterId: '3',
                  characterImage: ImagePath.Agent.d,
                  characterName: Agent.d,
                  result: village.Result.win,
                  roleImage: ImagePath.Role.hunter,
                  roleName: Role.hunter,
                  status: village.CharacterStatus.alive
                },
                character4: {
                  avatarImage: ImagePath.Agent.a,
                  avatarName: 'Ito',
                  characterId: '4',
                  characterImage: ImagePath.Agent.e,
                  characterName: Agent.e,
                  result: village.Result.win,
                  roleImage: ImagePath.Role.medium,
                  roleName: Role.medium,
                  status: village.CharacterStatus.alive
                },
                character5: {
                  avatarImage: ImagePath.Agent.n,
                  avatarName: 'Watanabe',
                  characterId: '5',
                  characterImage: ImagePath.Agent.o,
                  characterName: Agent.f,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.werewolf,
                  roleName: Role.werehamster,
                  status: village.CharacterStatus.deathByFear
                }
              },
              losers: [
                'character2',
                'character5'
              ],
              me: null,
              summary: {
                kind: village.SummaryType.audience,
                loserTeam: new Set([village.Team.werewolf, village.Team.werehamster]),
                winnerTeam: village.Team.villager
              },
              visible: true,
              winners: [
                'character0',
                'character1',
                'character3',
                'character4'
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
        language: village.Language.en
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
      type: ActionTypes.HIDE_RESULT
    })
  })
})
