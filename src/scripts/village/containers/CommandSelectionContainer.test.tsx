import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import {Character} from '../constants/Character'
import CommandSelection from '../components/organisms/CommandSelection'
import CommandSelectionContainer from './CommandSelectionContainer'
import {ImagePath} from '../constants/ImagePath'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import {Role} from '../constants/Role'
import {VERSION} from '../constants/Version'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'
import {village} from '../types'

describe('<CommandSelectionContainer />', () => {
  describe('render', () => {
    describe('NOON', () => {
      test('fixed', () => {
        const store = fakeStore(
          {
            base: {
              '@id': `https://licos.online/state/${VERSION}/village#3`,
              'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
              'day': 1,
              'intensionalDisclosureRange': village.Channel.private,
              'phase': village.Phase.noon,
              'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
              'phaseTimeLimit': 100,
              'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
              'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
              'village': {
                '@id': `https://licos.online/state/${VERSION}/village`,
                'chatSettings': {
                  maxLengthOfUnicodeCodePoints: 140,
                  maxNumberOfChatMessages: 10
                },
                'id': 3,
                'lang': village.Language.en,
                'name': '横国の森の奥にある時代に取り残された小さな村',
                'totalNumberOfCharacters': 15
              }
            },
            commandSelection: {
              allIds: [
                '2'
              ],
              byId: {
                '2': {
                  '@id': `https://licos.online/state/${VERSION}/village#3/character#2`,
                  'id': '2',
                  'image': ImagePath.Character.b,
                  'name': Character.b
                },
                '3': {
                  '@id': `https://licos.online/state/${VERSION}/village#3/character#3`,
                  'id': '3',
                  'image': ImagePath.Character.c,
                  'name': Character.c
                },
                '4': {
                  '@id': `https://licos.online/state/${VERSION}/village#3/character#4`,
                  'id': '4',
                  'image': ImagePath.Character.d,
                  'name': Character.d
                },
                '5': {
                  '@id': `https://licos.online/state/${VERSION}/village#3/character#5`,
                  'id': '5',
                  'image': ImagePath.Character.e,
                  'name': Character.e
                }
              },
              fixed: true
            },
            language: village.Language.en,
            mine: {
              character: {
                '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
                'id': 1,
                'image': ImagePath.Character.a,
                'name': Character.a
              },
              role: {
                '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
                'id': village.RoleId.seer,
                'image': ImagePath.Role.seer,
                'name': Role.seer
              }
            }
          }
        )
        const wrapper = mount(
          <Provider store={store} >
            <IntlProviderContainer>
              <CommandSelectionContainer />
            </IntlProviderContainer>
          </Provider>
        )

        expect(wrapper.html()).toMatchSnapshot()
      })
      test('unfixed', () => {
        const store = fakeStore(
          {
            base: {
              '@id': `https://licos.online/state/${VERSION}/village#3`,
              'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
              'day': 1,
              'intensionalDisclosureRange': village.Channel.private,
              'phase': village.Phase.noon,
              'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
              'phaseTimeLimit': 100,
              'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
              'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
              'village': {
                '@id': `https://licos.online/state/${VERSION}/village`,
                'chatSettings': {
                  maxLengthOfUnicodeCodePoints: 140,
                  maxNumberOfChatMessages: 10
                },
                'id': 3,
                'lang': village.Language.en,
                'name': '横国の森の奥にある時代に取り残された小さな村',
                'totalNumberOfCharacters': 15
              }
            },
            commandSelection: {
              allIds: [
                '2',
                '3',
                '4',
                '5'
              ],
              byId: {
                '2': {
                  '@id': `https://licos.online/state/${VERSION}/village#3/character#2`,
                  'id': '2',
                  'image': ImagePath.Character.b,
                  'name': Character.b
                },
                '3': {
                  '@id': `https://licos.online/state/${VERSION}/village#3/character#3`,
                  'id': '3',
                  'image': ImagePath.Character.c,
                  'name': Character.c
                },
                '4': {
                  '@id': `https://licos.online/state/${VERSION}/village#3/character#4`,
                  'id': '4',
                  'image': ImagePath.Character.d,
                  'name': Character.d
                },
                '5': {
                  '@id': `https://licos.online/state/${VERSION}/village#3/character#5`,
                  'id': '5',
                  'image': ImagePath.Character.e,
                  'name': Character.e
                }
              },
              fixed: false
            },
            language: village.Language.en,
            mine: {
              character: {
                '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
                'id': 1,
                'image': ImagePath.Character.a,
                'name': Character.a
              },
              role: {
                '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
                'id': village.RoleId.seer,
                'image': ImagePath.Role.seer,
                'name': Role.seer
              }
            }
          }
        )
        const wrapper = mount(
          <Provider store={store} >
            <IntlProviderContainer>
              <CommandSelectionContainer />
            </IntlProviderContainer>
          </Provider>
        )

        expect(wrapper.html()).toMatchSnapshot()
      })
    })
    describe('NIGHT', () => {
      describe('HUNTER', () => {
        test('fixed', () => {
          const store = fakeStore(
            {
              base: {
                '@id': `https://licos.online/state/${VERSION}/village#3`,
                'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
                'day': 1,
                'intensionalDisclosureRange': village.Channel.private,
                'phase': village.Phase.night,
                'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
                'phaseTimeLimit': 100,
                'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
                'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
                'village': {
                  '@id': `https://licos.online/state/${VERSION}/village`,
                  'chatSettings': {
                    maxLengthOfUnicodeCodePoints: 140,
                    maxNumberOfChatMessages: 10
                  },
                  'id': 3,
                  'lang': village.Language.en,
                  'name': '横国の森の奥にある時代に取り残された小さな村',
                  'totalNumberOfCharacters': 15
                }
              },
              commandSelection: {
                allIds: [
                  '2'
                ],
                byId: {
                  '2': {
                    '@id': `https://licos.online/state/${VERSION}/village#3/character#2`,
                    'id': '2',
                    'image': ImagePath.Character.b,
                    'name': Character.b
                  },
                  '3': {
                    '@id': `https://licos.online/state/${VERSION}/village#3/character#3`,
                    'id': '3',
                    'image': ImagePath.Character.c,
                    'name': Character.c
                  },
                  '4': {
                    '@id': `https://licos.online/state/${VERSION}/village#3/character#4`,
                    'id': '4',
                    'image': ImagePath.Character.d,
                    'name': Character.d
                  },
                  '5': {
                    '@id': `https://licos.online/state/${VERSION}/village#3/character#5`,
                    'id': '5',
                    'image': ImagePath.Character.e,
                    'name': Character.e
                  }
                },
                fixed: true
              },
              language: village.Language.en,
              mine: {
                character: {
                  '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
                  'id': 1,
                  'image': ImagePath.Character.a,
                  'name': Character.a
                },
                role: {
                  '@id': `https://licos.online/state/${VERSION}/village#3/role#hunter`,
                  'id': village.RoleId.hunter,
                  'image': ImagePath.Role.hunter,
                  'name': Role.hunter
                }
              }
            }
          )
          const wrapper = mount(
            <Provider store={store} >
              <IntlProviderContainer>
                <CommandSelectionContainer />
              </IntlProviderContainer>
            </Provider>
          )

          expect(wrapper.html()).toMatchSnapshot()
        })
        test('unfixed', () => {
          const store = fakeStore(
            {
              base: {
                '@id': `https://licos.online/state/${VERSION}/village#3`,
                'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
                'day': 1,
                'intensionalDisclosureRange': village.Channel.private,
                'phase': village.Phase.night,
                'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
                'phaseTimeLimit': 100,
                'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
                'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
                'village': {
                  '@id': `https://licos.online/state/${VERSION}/village`,
                  'chatSettings': {
                    maxLengthOfUnicodeCodePoints: 140,
                    maxNumberOfChatMessages: 10
                  },
                  'id': 3,
                  'lang': village.Language.en,
                  'name': '横国の森の奥にある時代に取り残された小さな村',
                  'totalNumberOfCharacters': 15
                }
              },
              commandSelection: {
                allIds: [
                  '2',
                  '3',
                  '4',
                  '5'
                ],
                byId: {
                  '2': {
                    '@id': `https://licos.online/state/${VERSION}/village#3/character#2`,
                    'id': '2',
                    'image': ImagePath.Character.b,
                    'name': Character.b
                  },
                  '3': {
                    '@id': `https://licos.online/state/${VERSION}/village#3/character#3`,
                    'id': '3',
                    'image': ImagePath.Character.c,
                    'name': Character.c
                  },
                  '4': {
                    '@id': `https://licos.online/state/${VERSION}/village#3/character#4`,
                    'id': '4',
                    'image': ImagePath.Character.d,
                    'name': Character.d
                  },
                  '5': {
                    '@id': `https://licos.online/state/${VERSION}/village#3/character#5`,
                    'id': '5',
                    'image': ImagePath.Character.e,
                    'name': Character.e
                  }
                },
                fixed: false
              },
              language: village.Language.en,
              mine: {
                character: {
                  '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
                  'id': 1,
                  'image': ImagePath.Character.a,
                  'name': Character.a
                },
                role: {
                  '@id': `https://licos.online/state/${VERSION}/village#3/role#hunter`,
                  'id': village.RoleId.hunter,
                  'image': ImagePath.Role.hunter,
                  'name': Role.hunter
                }
              }
            }
          )
          const wrapper = mount(
            <Provider store={store} >
              <IntlProviderContainer>
                <CommandSelectionContainer />
              </IntlProviderContainer>
            </Provider>
          )

          expect(wrapper.html()).toMatchSnapshot()
        })
      })
      describe('SEER', () => {
        test('fixed', () => {
          const store = fakeStore(
            {
              base: {
                '@id': `https://licos.online/state/${VERSION}/village#3`,
                'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
                'day': 1,
                'intensionalDisclosureRange': village.Channel.private,
                'phase': village.Phase.night,
                'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
                'phaseTimeLimit': 100,
                'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
                'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
                'village': {
                  '@id': `https://licos.online/state/${VERSION}/village`,
                  'chatSettings': {
                    maxLengthOfUnicodeCodePoints: 140,
                    maxNumberOfChatMessages: 10
                  },
                  'id': 3,
                  'lang': village.Language.en,
                  'name': '横国の森の奥にある時代に取り残された小さな村',
                  'totalNumberOfCharacters': 15
                }
              },
              commandSelection: {
                allIds: [
                  '2'
                ],
                byId: {
                  '2': {
                    '@id': `https://licos.online/state/${VERSION}/village#3/character#2`,
                    'id': '2',
                    'image': ImagePath.Character.b,
                    'name': Character.b
                  },
                  '3': {
                    '@id': `https://licos.online/state/${VERSION}/village#3/character#3`,
                    'id': '3',
                    'image': ImagePath.Character.c,
                    'name': Character.c
                  },
                  '4': {
                    '@id': `https://licos.online/state/${VERSION}/village#3/character#4`,
                    'id': '4',
                    'image': ImagePath.Character.d,
                    'name': Character.d
                  },
                  '5': {
                    '@id': `https://licos.online/state/${VERSION}/village#3/character#5`,
                    'id': '5',
                    'image': ImagePath.Character.e,
                    'name': Character.e
                  }
                },
                fixed: true
              },
              language: village.Language.en,
              mine: {
                character: {
                  '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
                  'id': 1,
                  'image': ImagePath.Character.a,
                  'name': Character.a
                },
                role: {
                  '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
                  'id': village.RoleId.seer,
                  'image': ImagePath.Role.seer,
                  'name': Role.seer
                }
              }
            }
          )
          const wrapper = mount(
            <Provider store={store} >
              <IntlProviderContainer>
                <CommandSelectionContainer />
              </IntlProviderContainer>
            </Provider>
          )

          expect(wrapper.html()).toMatchSnapshot()
        })
        test('unfixed', () => {
          const store = fakeStore(
            {
              base: {
                '@id': `https://licos.online/state/${VERSION}/village#3`,
                'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
                'day': 1,
                'intensionalDisclosureRange': village.Channel.private,
                'phase': village.Phase.night,
                'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
                'phaseTimeLimit': 100,
                'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
                'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
                'village': {
                  '@id': `https://licos.online/state/${VERSION}/village`,
                  'chatSettings': {
                    maxLengthOfUnicodeCodePoints: 140,
                    maxNumberOfChatMessages: 10
                  },
                  'id': 3,
                  'lang': village.Language.en,
                  'name': '横国の森の奥にある時代に取り残された小さな村',
                  'totalNumberOfCharacters': 15
                }
              },
              commandSelection: {
                allIds: [
                  '2',
                  '3',
                  '4',
                  '5'
                ],
                byId: {
                  '2': {
                    '@id': `https://licos.online/state/${VERSION}/village#3/character#2`,
                    'id': '2',
                    'image': ImagePath.Character.b,
                    'name': Character.b
                  },
                  '3': {
                    '@id': `https://licos.online/state/${VERSION}/village#3/character#3`,
                    'id': '3',
                    'image': ImagePath.Character.c,
                    'name': Character.c
                  },
                  '4': {
                    '@id': `https://licos.online/state/${VERSION}/village#3/character#4`,
                    'id': '4',
                    'image': ImagePath.Character.d,
                    'name': Character.d
                  },
                  '5': {
                    '@id': `https://licos.online/state/${VERSION}/village#3/character#5`,
                    'id': '5',
                    'image': ImagePath.Character.e,
                    'name': Character.e
                  }
                },
                fixed: false
              },
              language: village.Language.en,
              mine: {
                character: {
                  '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
                  'id': 1,
                  'image': ImagePath.Character.a,
                  'name': Character.a
                },
                role: {
                  '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
                  'id': village.RoleId.seer,
                  'image': ImagePath.Role.seer,
                  'name': Role.seer
                }
              }
            }
          )
          const wrapper = mount(
            <Provider store={store} >
              <IntlProviderContainer>
                <CommandSelectionContainer />
              </IntlProviderContainer>
            </Provider>
          )

          expect(wrapper.html()).toMatchSnapshot()
        })
      })
      describe('WEREWOLF', () => {
        test('fixed', () => {
          const store = fakeStore(
            {
              base: {
                '@id': `https://licos.online/state/${VERSION}/village#3`,
                'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
                'day': 1,
                'intensionalDisclosureRange': village.Channel.private,
                'phase': village.Phase.night,
                'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
                'phaseTimeLimit': 100,
                'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
                'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
                'village': {
                  '@id': `https://licos.online/state/${VERSION}/village`,
                  'chatSettings': {
                    maxLengthOfUnicodeCodePoints: 140,
                    maxNumberOfChatMessages: 10
                  },
                  'id': 3,
                  'lang': village.Language.en,
                  'name': '横国の森の奥にある時代に取り残された小さな村',
                  'totalNumberOfCharacters': 15
                }
              },
              commandSelection: {
                allIds: [
                  '2'
                ],
                byId: {
                  '2': {
                    '@id': `https://licos.online/state/${VERSION}/village#3/character#2`,
                    'id': '2',
                    'image': ImagePath.Character.b,
                    'name': Character.b
                  },
                  '3': {
                    '@id': `https://licos.online/state/${VERSION}/village#3/character#3`,
                    'id': '3',
                    'image': ImagePath.Character.c,
                    'name': Character.c
                  },
                  '4': {
                    '@id': `https://licos.online/state/${VERSION}/village#3/character#4`,
                    'id': '4',
                    'image': ImagePath.Character.d,
                    'name': Character.d
                  },
                  '5': {
                    '@id': `https://licos.online/state/${VERSION}/village#3/character#5`,
                    'id': '5',
                    'image': ImagePath.Character.e,
                    'name': Character.e
                  }
                },
                fixed: true
              },
              language: village.Language.en,
              mine: {
                character: {
                  '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
                  'id': 1,
                  'image': ImagePath.Character.a,
                  'name': Character.a
                },
                role: {
                  '@id': `https://licos.online/state/${VERSION}/village#3/role#werewolf`,
                  'id': village.RoleId.werewolf,
                  'image': ImagePath.Role.werewolf,
                  'name': Role.werewolf
                }
              }
            }
          )
          const wrapper = mount(
            <Provider store={store} >
              <IntlProviderContainer>
                <CommandSelectionContainer />
              </IntlProviderContainer>
            </Provider>
          )

          expect(wrapper.html()).toMatchSnapshot()
        })
        test('unfixed', () => {
          const store = fakeStore(
            {
              base: {
                '@id': `https://licos.online/state/${VERSION}/village#3`,
                'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
                'day': 1,
                'intensionalDisclosureRange': village.Channel.private,
                'phase': village.Phase.night,
                'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
                'phaseTimeLimit': 100,
                'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
                'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
                'village': {
                  '@id': `https://licos.online/state/${VERSION}/village`,
                  'chatSettings': {
                    maxLengthOfUnicodeCodePoints: 140,
                    maxNumberOfChatMessages: 10
                  },
                  'id': 3,
                  'lang': village.Language.en,
                  'name': '横国の森の奥にある時代に取り残された小さな村',
                  'totalNumberOfCharacters': 15
                }
              },
              commandSelection: {
                allIds: [
                  '2',
                  '3',
                  '4',
                  '5'
                ],
                byId: {
                  '2': {
                    '@id': `https://licos.online/state/${VERSION}/village#3/character#2`,
                    'id': '2',
                    'image': ImagePath.Character.b,
                    'name': Character.b
                  },
                  '3': {
                    '@id': `https://licos.online/state/${VERSION}/village#3/character#3`,
                    'id': '3',
                    'image': ImagePath.Character.c,
                    'name': Character.c
                  },
                  '4': {
                    '@id': `https://licos.online/state/${VERSION}/village#3/character#4`,
                    'id': '4',
                    'image': ImagePath.Character.d,
                    'name': Character.d
                  },
                  '5': {
                    '@id': `https://licos.online/state/${VERSION}/village#3/character#5`,
                    'id': '5',
                    'image': ImagePath.Character.e,
                    'name': Character.e
                  }
                },
                fixed: false
              },
              language: village.Language.en,
              mine: {
                character: {
                  '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
                  'id': 1,
                  'image': ImagePath.Character.a,
                  'name': Character.a
                },
                role: {
                  '@id': `https://licos.online/state/${VERSION}/village#3/role#werewolf`,
                  'id': village.RoleId.werewolf,
                  'image': ImagePath.Role.werewolf,
                  'name': Role.werewolf
                }
              }
            }
          )
          const wrapper = mount(
            <Provider store={store} >
              <IntlProviderContainer>
                <CommandSelectionContainer />
              </IntlProviderContainer>
            </Provider>
          )

          expect(wrapper.html()).toMatchSnapshot()
        })
      })
      test('VILLAGER', () => {
        const store = fakeStore(
          {
            base: {
              '@id': `https://licos.online/state/${VERSION}/village#3`,
              'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
              'day': 1,
              'intensionalDisclosureRange': village.Channel.private,
              'phase': village.Phase.night,
              'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
              'phaseTimeLimit': 100,
              'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
              'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
              'village': {
                '@id': `https://licos.online/state/${VERSION}/village`,
                'chatSettings': {
                  maxLengthOfUnicodeCodePoints: 140,
                  maxNumberOfChatMessages: 10
                },
                'id': 3,
                'lang': village.Language.en,
                'name': '横国の森の奥にある時代に取り残された小さな村',
                'totalNumberOfCharacters': 15
              }
            },
            commandSelection: {
              allIds: [],
              byId: {},
              fixed: true
            },
            language: village.Language.en,
            mine: {
              character: {
                '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
                'id': 1,
                'image': ImagePath.Character.a,
                'name': Character.a
              },
              role: {
                '@id': `https://licos.online/state/${VERSION}/village#3/role#villager`,
                'id': village.RoleId.villager,
                'image': ImagePath.Role.villager,
                'name': Role.villager
              }
            }
          }
        )
        const wrapper = mount(
          <Provider store={store} >
            <IntlProviderContainer>
              <CommandSelectionContainer />
            </IntlProviderContainer>
          </Provider>
        )

        expect(wrapper.html()).toMatchSnapshot()
      })
    })
  })
  test('handleSelectOption', () => {
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
          <CommandSelectionContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const characterId = '4'

    wrapper.find(CommandSelection).props().handleSelectOption(characterId)()
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      characterId,
      type: ActionTypes.App.SELECT_OPTION
    })
  })
})
