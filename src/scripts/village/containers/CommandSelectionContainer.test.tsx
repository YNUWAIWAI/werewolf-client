/* global village */
import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import {Agent} from '../constants/Agent'
import CommandSelection from '../components/organisms/CommandSelection'
import CommandSelectionContainer from './CommandSelectionContainer'
import {ImagePath} from '../constants/ImagePath'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import {Role} from '../constants/Role'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

describe('<CommandSelectionContainer />', () => {
  describe('render', () => {
    describe('DAY', () => {
      test('fixed', () => {
        const store = fakeStore(
          {
            base: {
              '@id': 'https://licos.online/state/0.2/village#3',
              'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
              'date': 1,
              'intensionalDisclosureRange': village.Channel.private,
              'phase': village.Phase.day,
              'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
              'phaseTimeLimit': 100,
              'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
              'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
              'village': {
                '@context': village.Context.Village,
                '@id': 'https://licos.online/state/0.2/village',
                'chatSettings': {
                  characterLimit: 140,
                  limit: 10
                },
                'id': 3,
                'lang': village.Language.ja,
                'name': '横国の森の奥にある時代に取り残された小さな村',
                'totalNumberOfAgents': 15
              }
            },
            commandSelection: {
              allIds: [
                '2'
              ],
              byId: {
                '2': {
                  '@id': 'https://licos.online/state/0.2/village#3/agent#2',
                  'id': '2',
                  'image': ImagePath.Agent.b,
                  'name': Agent.b
                },
                '3': {
                  '@id': 'https://licos.online/state/0.2/village#3/agent#3',
                  'id': '3',
                  'image': ImagePath.Agent.c,
                  'name': Agent.c
                },
                '4': {
                  '@id': 'https://licos.online/state/0.2/village#3/agent#4',
                  'id': '4',
                  'image': ImagePath.Agent.d,
                  'name': Agent.d
                },
                '5': {
                  '@id': 'https://licos.online/state/0.2/village#3/agent#5',
                  'id': '5',
                  'image': ImagePath.Agent.e,
                  'name': Agent.e
                }
              },
              fixed: true
            },
            language: village.Language.ja,
            mine: {
              agent: {
                '@id': 'https://licos.online/state/0.2/village#3/agent#1',
                'id': 1,
                'image': ImagePath.Agent.a,
                'name': Agent.a
              },
              role: {
                '@id': 'https://licos.online/state/0.2/village#3/role#seer',
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
              '@id': 'https://licos.online/state/0.2/village#3',
              'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
              'date': 1,
              'intensionalDisclosureRange': village.Channel.private,
              'phase': village.Phase.day,
              'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
              'phaseTimeLimit': 100,
              'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
              'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
              'village': {
                '@context': village.Context.Village,
                '@id': 'https://licos.online/state/0.2/village',
                'chatSettings': {
                  characterLimit: 140,
                  limit: 10
                },
                'id': 3,
                'lang': village.Language.ja,
                'name': '横国の森の奥にある時代に取り残された小さな村',
                'totalNumberOfAgents': 15
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
                  '@id': 'https://licos.online/state/0.2/village#3/agent#2',
                  'id': '2',
                  'image': ImagePath.Agent.b,
                  'name': Agent.b
                },
                '3': {
                  '@id': 'https://licos.online/state/0.2/village#3/agent#3',
                  'id': '3',
                  'image': ImagePath.Agent.c,
                  'name': Agent.c
                },
                '4': {
                  '@id': 'https://licos.online/state/0.2/village#3/agent#4',
                  'id': '4',
                  'image': ImagePath.Agent.d,
                  'name': Agent.d
                },
                '5': {
                  '@id': 'https://licos.online/state/0.2/village#3/agent#5',
                  'id': '5',
                  'image': ImagePath.Agent.e,
                  'name': Agent.e
                }
              },
              fixed: false
            },
            language: village.Language.ja,
            mine: {
              agent: {
                '@id': 'https://licos.online/state/0.2/village#3/agent#1',
                'id': 1,
                'image': ImagePath.Agent.a,
                'name': Agent.a
              },
              role: {
                '@id': 'https://licos.online/state/0.2/village#3/role#seer',
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
                '@id': 'https://licos.online/state/0.2/village#3',
                'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
                'date': 1,
                'intensionalDisclosureRange': village.Channel.private,
                'phase': village.Phase.night,
                'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
                'phaseTimeLimit': 100,
                'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
                'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
                'village': {
                  '@context': village.Context.Village,
                  '@id': 'https://licos.online/state/0.2/village',
                  'chatSettings': {
                    characterLimit: 140,
                    limit: 10
                  },
                  'id': 3,
                  'lang': village.Language.ja,
                  'name': '横国の森の奥にある時代に取り残された小さな村',
                  'totalNumberOfAgents': 15
                }
              },
              commandSelection: {
                allIds: [
                  '2'
                ],
                byId: {
                  '2': {
                    '@id': 'https://licos.online/state/0.2/village#3/agent#2',
                    'id': '2',
                    'image': ImagePath.Agent.b,
                    'name': Agent.b
                  },
                  '3': {
                    '@id': 'https://licos.online/state/0.2/village#3/agent#3',
                    'id': '3',
                    'image': ImagePath.Agent.c,
                    'name': Agent.c
                  },
                  '4': {
                    '@id': 'https://licos.online/state/0.2/village#3/agent#4',
                    'id': '4',
                    'image': ImagePath.Agent.d,
                    'name': Agent.d
                  },
                  '5': {
                    '@id': 'https://licos.online/state/0.2/village#3/agent#5',
                    'id': '5',
                    'image': ImagePath.Agent.e,
                    'name': Agent.e
                  }
                },
                fixed: true
              },
              language: village.Language.ja,
              mine: {
                agent: {
                  '@id': 'https://licos.online/state/0.2/village#3/agent#1',
                  'id': 1,
                  'image': ImagePath.Agent.a,
                  'name': Agent.a
                },
                role: {
                  '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
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
                '@id': 'https://licos.online/state/0.2/village#3',
                'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
                'date': 1,
                'intensionalDisclosureRange': village.Channel.private,
                'phase': village.Phase.night,
                'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
                'phaseTimeLimit': 100,
                'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
                'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
                'village': {
                  '@context': village.Context.Village,
                  '@id': 'https://licos.online/state/0.2/village',
                  'chatSettings': {
                    characterLimit: 140,
                    limit: 10
                  },
                  'id': 3,
                  'lang': village.Language.ja,
                  'name': '横国の森の奥にある時代に取り残された小さな村',
                  'totalNumberOfAgents': 15
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
                    '@id': 'https://licos.online/state/0.2/village#3/agent#2',
                    'id': '2',
                    'image': ImagePath.Agent.b,
                    'name': Agent.b
                  },
                  '3': {
                    '@id': 'https://licos.online/state/0.2/village#3/agent#3',
                    'id': '3',
                    'image': ImagePath.Agent.c,
                    'name': Agent.c
                  },
                  '4': {
                    '@id': 'https://licos.online/state/0.2/village#3/agent#4',
                    'id': '4',
                    'image': ImagePath.Agent.d,
                    'name': Agent.d
                  },
                  '5': {
                    '@id': 'https://licos.online/state/0.2/village#3/agent#5',
                    'id': '5',
                    'image': ImagePath.Agent.e,
                    'name': Agent.e
                  }
                },
                fixed: false
              },
              language: village.Language.ja,
              mine: {
                agent: {
                  '@id': 'https://licos.online/state/0.2/village#3/agent#1',
                  'id': 1,
                  'image': ImagePath.Agent.a,
                  'name': Agent.a
                },
                role: {
                  '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
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
                '@id': 'https://licos.online/state/0.2/village#3',
                'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
                'date': 1,
                'intensionalDisclosureRange': village.Channel.private,
                'phase': village.Phase.night,
                'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
                'phaseTimeLimit': 100,
                'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
                'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
                'village': {
                  '@context': village.Context.Village,
                  '@id': 'https://licos.online/state/0.2/village',
                  'chatSettings': {
                    characterLimit: 140,
                    limit: 10
                  },
                  'id': 3,
                  'lang': village.Language.ja,
                  'name': '横国の森の奥にある時代に取り残された小さな村',
                  'totalNumberOfAgents': 15
                }
              },
              commandSelection: {
                allIds: [
                  '2'
                ],
                byId: {
                  '2': {
                    '@id': 'https://licos.online/state/0.2/village#3/agent#2',
                    'id': '2',
                    'image': ImagePath.Agent.b,
                    'name': Agent.b
                  },
                  '3': {
                    '@id': 'https://licos.online/state/0.2/village#3/agent#3',
                    'id': '3',
                    'image': ImagePath.Agent.c,
                    'name': Agent.c
                  },
                  '4': {
                    '@id': 'https://licos.online/state/0.2/village#3/agent#4',
                    'id': '4',
                    'image': ImagePath.Agent.d,
                    'name': Agent.d
                  },
                  '5': {
                    '@id': 'https://licos.online/state/0.2/village#3/agent#5',
                    'id': '5',
                    'image': ImagePath.Agent.e,
                    'name': Agent.e
                  }
                },
                fixed: true
              },
              language: village.Language.ja,
              mine: {
                agent: {
                  '@id': 'https://licos.online/state/0.2/village#3/agent#1',
                  'id': 1,
                  'image': ImagePath.Agent.a,
                  'name': Agent.a
                },
                role: {
                  '@id': 'https://licos.online/state/0.2/village#3/role#seer',
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
                '@id': 'https://licos.online/state/0.2/village#3',
                'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
                'date': 1,
                'intensionalDisclosureRange': village.Channel.private,
                'phase': village.Phase.night,
                'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
                'phaseTimeLimit': 100,
                'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
                'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
                'village': {
                  '@context': village.Context.Village,
                  '@id': 'https://licos.online/state/0.2/village',
                  'chatSettings': {
                    characterLimit: 140,
                    limit: 10
                  },
                  'id': 3,
                  'lang': village.Language.ja,
                  'name': '横国の森の奥にある時代に取り残された小さな村',
                  'totalNumberOfAgents': 15
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
                    '@id': 'https://licos.online/state/0.2/village#3/agent#2',
                    'id': '2',
                    'image': ImagePath.Agent.b,
                    'name': Agent.b
                  },
                  '3': {
                    '@id': 'https://licos.online/state/0.2/village#3/agent#3',
                    'id': '3',
                    'image': ImagePath.Agent.c,
                    'name': Agent.c
                  },
                  '4': {
                    '@id': 'https://licos.online/state/0.2/village#3/agent#4',
                    'id': '4',
                    'image': ImagePath.Agent.d,
                    'name': Agent.d
                  },
                  '5': {
                    '@id': 'https://licos.online/state/0.2/village#3/agent#5',
                    'id': '5',
                    'image': ImagePath.Agent.e,
                    'name': Agent.e
                  }
                },
                fixed: false
              },
              language: village.Language.ja,
              mine: {
                agent: {
                  '@id': 'https://licos.online/state/0.2/village#3/agent#1',
                  'id': 1,
                  'image': ImagePath.Agent.a,
                  'name': Agent.a
                },
                role: {
                  '@id': 'https://licos.online/state/0.2/village#3/role#seer',
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
                '@id': 'https://licos.online/state/0.2/village#3',
                'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
                'date': 1,
                'intensionalDisclosureRange': village.Channel.private,
                'phase': village.Phase.night,
                'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
                'phaseTimeLimit': 100,
                'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
                'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
                'village': {
                  '@context': village.Context.Village,
                  '@id': 'https://licos.online/state/0.2/village',
                  'chatSettings': {
                    characterLimit: 140,
                    limit: 10
                  },
                  'id': 3,
                  'lang': village.Language.ja,
                  'name': '横国の森の奥にある時代に取り残された小さな村',
                  'totalNumberOfAgents': 15
                }
              },
              commandSelection: {
                allIds: [
                  '2'
                ],
                byId: {
                  '2': {
                    '@id': 'https://licos.online/state/0.2/village#3/agent#2',
                    'id': '2',
                    'image': ImagePath.Agent.b,
                    'name': Agent.b
                  },
                  '3': {
                    '@id': 'https://licos.online/state/0.2/village#3/agent#3',
                    'id': '3',
                    'image': ImagePath.Agent.c,
                    'name': Agent.c
                  },
                  '4': {
                    '@id': 'https://licos.online/state/0.2/village#3/agent#4',
                    'id': '4',
                    'image': ImagePath.Agent.d,
                    'name': Agent.d
                  },
                  '5': {
                    '@id': 'https://licos.online/state/0.2/village#3/agent#5',
                    'id': '5',
                    'image': ImagePath.Agent.e,
                    'name': Agent.e
                  }
                },
                fixed: true
              },
              language: village.Language.ja,
              mine: {
                agent: {
                  '@id': 'https://licos.online/state/0.2/village#3/agent#1',
                  'id': 1,
                  'image': ImagePath.Agent.a,
                  'name': Agent.a
                },
                role: {
                  '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
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
                '@id': 'https://licos.online/state/0.2/village#3',
                'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
                'date': 1,
                'intensionalDisclosureRange': village.Channel.private,
                'phase': village.Phase.night,
                'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
                'phaseTimeLimit': 100,
                'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
                'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
                'village': {
                  '@context': village.Context.Village,
                  '@id': 'https://licos.online/state/0.2/village',
                  'chatSettings': {
                    characterLimit: 140,
                    limit: 10
                  },
                  'id': 3,
                  'lang': village.Language.ja,
                  'name': '横国の森の奥にある時代に取り残された小さな村',
                  'totalNumberOfAgents': 15
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
                    '@id': 'https://licos.online/state/0.2/village#3/agent#2',
                    'id': '2',
                    'image': ImagePath.Agent.b,
                    'name': Agent.b
                  },
                  '3': {
                    '@id': 'https://licos.online/state/0.2/village#3/agent#3',
                    'id': '3',
                    'image': ImagePath.Agent.c,
                    'name': Agent.c
                  },
                  '4': {
                    '@id': 'https://licos.online/state/0.2/village#3/agent#4',
                    'id': '4',
                    'image': ImagePath.Agent.d,
                    'name': Agent.d
                  },
                  '5': {
                    '@id': 'https://licos.online/state/0.2/village#3/agent#5',
                    'id': '5',
                    'image': ImagePath.Agent.e,
                    'name': Agent.e
                  }
                },
                fixed: false
              },
              language: village.Language.ja,
              mine: {
                agent: {
                  '@id': 'https://licos.online/state/0.2/village#3/agent#1',
                  'id': 1,
                  'image': ImagePath.Agent.a,
                  'name': Agent.a
                },
                role: {
                  '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
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
              '@id': 'https://licos.online/state/0.2/village#3',
              'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
              'date': 1,
              'intensionalDisclosureRange': village.Channel.private,
              'phase': village.Phase.night,
              'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
              'phaseTimeLimit': 100,
              'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
              'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
              'village': {
                '@context': village.Context.Village,
                '@id': 'https://licos.online/state/0.2/village',
                'chatSettings': {
                  characterLimit: 140,
                  limit: 10
                },
                'id': 3,
                'lang': village.Language.ja,
                'name': '横国の森の奥にある時代に取り残された小さな村',
                'totalNumberOfAgents': 15
              }
            },
            commandSelection: {
              allIds: [],
              byId: {},
              fixed: true
            },
            language: village.Language.ja,
            mine: {
              agent: {
                '@id': 'https://licos.online/state/0.2/village#3/agent#1',
                'id': 1,
                'image': ImagePath.Agent.a,
                'name': Agent.a
              },
              role: {
                '@id': 'https://licos.online/state/0.2/village#3/role#villager',
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
        language: village.Language.ja
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
    const agentId = '4'

    wrapper.find(CommandSelection).props().handleSelectOption(agentId)()
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      agentId,
      type: ActionTypes.global.SELECT_OPTION
    })
  })
})
