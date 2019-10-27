import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import {Character} from '../constants/Character'
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
                  avatarImage: ImagePath.Character.o,
                  avatarName: 'Suzuki',
                  characterId: '1',
                  characterImage: ImagePath.Character.a,
                  characterName: Character.a,
                  result: village.Result.win,
                  roleImage: ImagePath.Role.seer,
                  roleName: Role.seer,
                  status: village.CharacterStatus.alive
                },
                character2: {
                  avatarImage: ImagePath.Character.i,
                  avatarName: 'Takahashi',
                  characterId: '2',
                  characterImage: ImagePath.Character.b,
                  characterName: Character.b,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.werewolf,
                  roleName: Role.werewolf,
                  status: village.CharacterStatus.alive
                },
                character3: {
                  avatarImage: ImagePath.Character.r,
                  avatarName: 'Tanaka',
                  characterId: '3',
                  characterImage: ImagePath.Character.c,
                  characterName: Character.c,
                  result: village.Result.win,
                  roleImage: ImagePath.Role.hunter,
                  roleName: Role.hunter,
                  status: village.CharacterStatus.alive
                },
                character4: {
                  avatarImage: ImagePath.Character.f,
                  avatarName: 'Ito',
                  characterId: '4',
                  characterImage: ImagePath.Character.d,
                  characterName: Character.d,
                  result: village.Result.win,
                  roleImage: ImagePath.Role.medium,
                  roleName: Role.medium,
                  status: village.CharacterStatus.alive
                },
                character5: {
                  avatarImage: ImagePath.Character.s,
                  avatarName: 'Watanabe',
                  characterId: '5',
                  characterImage: ImagePath.Character.e,
                  characterName: Character.e,
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
                  avatarImage: ImagePath.Character.o,
                  avatarName: 'Sato',
                  characterId: '0',
                  characterImage: ImagePath.Character.a,
                  characterName: Character.a,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.villager,
                  roleName: Role.villager,
                  status: village.CharacterStatus.alive
                },
                character1: {
                  avatarImage: ImagePath.Character.a,
                  avatarName: 'Suzuki',
                  characterId: '1',
                  characterImage: ImagePath.Character.b,
                  characterName: Character.b,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.seer,
                  roleName: Role.seer,
                  status: village.CharacterStatus.alive
                },
                character2: {
                  avatarImage: ImagePath.Character.a,
                  avatarName: 'Takahashi',
                  characterId: '2',
                  characterImage: ImagePath.Character.c,
                  characterName: Character.c,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.werewolf,
                  roleName: Role.werewolf,
                  status: village.CharacterStatus.alive
                },
                character3: {
                  avatarImage: ImagePath.Character.a,
                  avatarName: 'Tanaka',
                  characterId: '3',
                  characterImage: ImagePath.Character.d,
                  characterName: Character.d,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.hunter,
                  roleName: Role.hunter,
                  status: village.CharacterStatus.alive
                },
                character4: {
                  avatarImage: ImagePath.Character.a,
                  avatarName: 'Ito',
                  characterId: '4',
                  characterImage: ImagePath.Character.e,
                  characterName: Character.e,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.medium,
                  roleName: Role.medium,
                  status: village.CharacterStatus.alive
                },
                character5: {
                  avatarImage: ImagePath.Character.n,
                  avatarName: 'Watanabe',
                  characterId: '5',
                  characterImage: ImagePath.Character.o,
                  characterName: Character.f,
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
                  avatarImage: ImagePath.Character.o,
                  avatarName: 'Sato',
                  characterId: '0',
                  characterImage: ImagePath.Character.a,
                  characterName: Character.a,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.villager,
                  roleName: Role.villager,
                  status: village.CharacterStatus.alive
                },
                character1: {
                  avatarImage: ImagePath.Character.a,
                  avatarName: 'Suzuki',
                  characterId: '1',
                  characterImage: ImagePath.Character.b,
                  characterName: Character.b,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.seer,
                  roleName: Role.seer,
                  status: village.CharacterStatus.alive
                },
                character2: {
                  avatarImage: ImagePath.Character.a,
                  avatarName: 'Takahashi',
                  characterId: '2',
                  characterImage: ImagePath.Character.c,
                  characterName: Character.c,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.werewolf,
                  roleName: Role.werewolf,
                  status: village.CharacterStatus.alive
                },
                character3: {
                  avatarImage: ImagePath.Character.a,
                  avatarName: 'Tanaka',
                  characterId: '3',
                  characterImage: ImagePath.Character.d,
                  characterName: Character.d,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.hunter,
                  roleName: Role.hunter,
                  status: village.CharacterStatus.alive
                },
                character4: {
                  avatarImage: ImagePath.Character.a,
                  avatarName: 'Ito',
                  characterId: '4',
                  characterImage: ImagePath.Character.e,
                  characterName: Character.e,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.medium,
                  roleName: Role.medium,
                  status: village.CharacterStatus.alive
                },
                character5: {
                  avatarImage: ImagePath.Character.n,
                  avatarName: 'Watanabe',
                  characterId: '5',
                  characterImage: ImagePath.Character.f,
                  characterName: Character.f,
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
                  avatarImage: ImagePath.Character.o,
                  avatarName: 'Sato',
                  characterId: '0',
                  characterImage: ImagePath.Character.a,
                  characterName: Character.a,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.villager,
                  roleName: Role.villager,
                  status: village.CharacterStatus.alive
                },
                character1: {
                  avatarImage: ImagePath.Character.a,
                  avatarName: 'Suzuki',
                  characterId: '1',
                  characterImage: ImagePath.Character.b,
                  characterName: Character.b,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.seer,
                  roleName: Role.seer,
                  status: village.CharacterStatus.alive
                },
                character2: {
                  avatarImage: ImagePath.Character.a,
                  avatarName: 'Takahashi',
                  characterId: '2',
                  characterImage: ImagePath.Character.c,
                  characterName: Character.c,
                  result: village.Result.win,
                  roleImage: ImagePath.Role.werewolf,
                  roleName: Role.werewolf,
                  status: village.CharacterStatus.alive
                },
                character3: {
                  avatarImage: ImagePath.Character.a,
                  avatarName: 'Tanaka',
                  characterId: '3',
                  characterImage: ImagePath.Character.d,
                  characterName: Character.d,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.hunter,
                  roleName: Role.hunter,
                  status: village.CharacterStatus.alive
                },
                character4: {
                  avatarImage: ImagePath.Character.a,
                  avatarName: 'Ito',
                  characterId: '4',
                  characterImage: ImagePath.Character.e,
                  characterName: Character.e,
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
                  avatarImage: ImagePath.Character.o,
                  avatarName: 'Sato',
                  characterId: '0',
                  characterImage: ImagePath.Character.a,
                  characterName: Character.a,
                  result: village.Result.win,
                  roleImage: ImagePath.Role.villager,
                  roleName: Role.villager,
                  status: village.CharacterStatus.alive
                },
                character1: {
                  avatarImage: ImagePath.Character.a,
                  avatarName: 'Suzuki',
                  characterId: '1',
                  characterImage: ImagePath.Character.b,
                  characterName: Character.b,
                  result: village.Result.win,
                  roleImage: ImagePath.Role.seer,
                  roleName: Role.seer,
                  status: village.CharacterStatus.alive
                },
                character2: {
                  avatarImage: ImagePath.Character.a,
                  avatarName: 'Takahashi',
                  characterId: '2',
                  characterImage: ImagePath.Character.c,
                  characterName: Character.c,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.werewolf,
                  roleName: Role.werewolf,
                  status: village.CharacterStatus.alive
                },
                character3: {
                  avatarImage: ImagePath.Character.a,
                  avatarName: 'Tanaka',
                  characterId: '3',
                  characterImage: ImagePath.Character.d,
                  characterName: Character.d,
                  result: village.Result.win,
                  roleImage: ImagePath.Role.hunter,
                  roleName: Role.hunter,
                  status: village.CharacterStatus.alive
                },
                character4: {
                  avatarImage: ImagePath.Character.a,
                  avatarName: 'Ito',
                  characterId: '4',
                  characterImage: ImagePath.Character.e,
                  characterName: Character.e,
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
                  avatarImage: ImagePath.Character.o,
                  avatarName: 'Sato',
                  characterId: '0',
                  characterImage: ImagePath.Character.a,
                  characterName: Character.a,
                  result: village.Result.win,
                  roleImage: ImagePath.Role.villager,
                  roleName: Role.villager,
                  status: village.CharacterStatus.alive
                },
                character1: {
                  avatarImage: ImagePath.Character.a,
                  avatarName: 'Suzuki',
                  characterId: '1',
                  characterImage: ImagePath.Character.b,
                  characterName: Character.b,
                  result: village.Result.win,
                  roleImage: ImagePath.Role.seer,
                  roleName: Role.seer,
                  status: village.CharacterStatus.alive
                },
                character2: {
                  avatarImage: ImagePath.Character.a,
                  avatarName: 'Takahashi',
                  characterId: '2',
                  characterImage: ImagePath.Character.c,
                  characterName: Character.c,
                  result: village.Result.lose,
                  roleImage: ImagePath.Role.werewolf,
                  roleName: Role.werewolf,
                  status: village.CharacterStatus.alive
                },
                character3: {
                  avatarImage: ImagePath.Character.a,
                  avatarName: 'Tanaka',
                  characterId: '3',
                  characterImage: ImagePath.Character.d,
                  characterName: Character.d,
                  result: village.Result.win,
                  roleImage: ImagePath.Role.hunter,
                  roleName: Role.hunter,
                  status: village.CharacterStatus.alive
                },
                character4: {
                  avatarImage: ImagePath.Character.a,
                  avatarName: 'Ito',
                  characterId: '4',
                  characterImage: ImagePath.Character.e,
                  characterName: Character.e,
                  result: village.Result.win,
                  roleImage: ImagePath.Role.medium,
                  roleName: Role.medium,
                  status: village.CharacterStatus.alive
                },
                character5: {
                  avatarImage: ImagePath.Character.n,
                  avatarName: 'Watanabe',
                  characterId: '5',
                  characterImage: ImagePath.Character.o,
                  characterName: Character.f,
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
      type: ActionTypes.App.HIDE_RESULT
    })
  })
})
