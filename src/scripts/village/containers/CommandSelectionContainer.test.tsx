/* global village */
import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import CommandSelection from '../components/organisms/CommandSelection'
import CommandSelectionContainer from './CommandSelectionContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
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
              agents: [],
              fixed: true
            },
            language: village.Language.ja,
            mine: {
              agent: {
                '@id': 'https://licos.online/state/0.2/village#3/agent#1',
                'id': 1,
                'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
                'name': {
                  'en': 'Adil',
                  'ja': 'アーディル'
                }
              },
              role: {
                '@id': 'https://licos.online/state/0.2/village#3/role#seer',
                'id': village.RoleId.seer,
                'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/seer_50x50.png',
                'name': {
                  'en': 'Seer',
                  'ja': '占い師'
                }
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
              agents: [],
              fixed: false
            },
            language: village.Language.ja,
            mine: {
              agent: {
                '@id': 'https://licos.online/state/0.2/village#3/agent#1',
                'id': 1,
                'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
                'name': {
                  'en': 'Adil',
                  'ja': 'アーディル'
                }
              },
              role: {
                '@id': 'https://licos.online/state/0.2/village#3/role#seer',
                'id': village.RoleId.seer,
                'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/seer_50x50.png',
                'name': {
                  'en': 'Seer',
                  'ja': '占い師'
                }
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
                agents: [],
                fixed: true
              },
              language: village.Language.ja,
              mine: {
                agent: {
                  '@id': 'https://licos.online/state/0.2/village#3/agent#1',
                  'id': 1,
                  'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
                  'name': {
                    'en': 'Adil',
                    'ja': 'アーディル'
                  }
                },
                role: {
                  '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
                  'id': village.RoleId.hunter,
                  'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/hunter_50x50.png',
                  'name': {
                    'en': 'Hunter',
                    'ja': '狩人'
                  }
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
                agents: [],
                fixed: false
              },
              language: village.Language.ja,
              mine: {
                agent: {
                  '@id': 'https://licos.online/state/0.2/village#3/agent#1',
                  'id': 1,
                  'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
                  'name': {
                    'en': 'Adil',
                    'ja': 'アーディル'
                  }
                },
                role: {
                  '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
                  'id': village.RoleId.hunter,
                  'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/hunter_50x50.png',
                  'name': {
                    'en': 'Hunter',
                    'ja': '狩人'
                  }
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
                agents: [],
                fixed: true
              },
              language: village.Language.ja,
              mine: {
                agent: {
                  '@id': 'https://licos.online/state/0.2/village#3/agent#1',
                  'id': 1,
                  'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
                  'name': {
                    'en': 'Adil',
                    'ja': 'アーディル'
                  }
                },
                role: {
                  '@id': 'https://licos.online/state/0.2/village#3/role#seer',
                  'id': village.RoleId.seer,
                  'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/seer_50x50.png',
                  'name': {
                    'en': 'Seer',
                    'ja': '占い師'
                  }
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
                agents: [],
                fixed: false
              },
              language: village.Language.ja,
              mine: {
                agent: {
                  '@id': 'https://licos.online/state/0.2/village#3/agent#1',
                  'id': 1,
                  'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
                  'name': {
                    'en': 'Adil',
                    'ja': 'アーディル'
                  }
                },
                role: {
                  '@id': 'https://licos.online/state/0.2/village#3/role#seer',
                  'id': village.RoleId.seer,
                  'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/seer_50x50.png',
                  'name': {
                    'en': 'Seer',
                    'ja': '占い師'
                  }
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
                agents: [],
                fixed: true
              },
              language: village.Language.ja,
              mine: {
                agent: {
                  '@id': 'https://licos.online/state/0.2/village#3/agent#1',
                  'id': 1,
                  'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
                  'name': {
                    'en': 'Adil',
                    'ja': 'アーディル'
                  }
                },
                role: {
                  '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
                  'id': village.RoleId.werewolf,
                  'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werewolf_50x50.png',
                  'name': {
                    'en': 'Werewolf',
                    'ja': '人狼'
                  }
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
                agents: [],
                fixed: false
              },
              language: village.Language.ja,
              mine: {
                agent: {
                  '@id': 'https://licos.online/state/0.2/village#3/agent#1',
                  'id': 1,
                  'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
                  'name': {
                    'en': 'Adil',
                    'ja': 'アーディル'
                  }
                },
                role: {
                  '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
                  'id': village.RoleId.werewolf,
                  'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werewolf_50x50.png',
                  'name': {
                    'en': 'Werewolf',
                    'ja': '人狼'
                  }
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
              agents: [],
              fixed: true
            },
            language: village.Language.ja,
            mine: {
              agent: {
                '@id': 'https://licos.online/state/0.2/village#3/agent#1',
                'id': 1,
                'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
                'name': {
                  'en': 'Adil',
                  'ja': 'アーディル'
                }
              },
              role: {
                '@id': 'https://licos.online/state/0.2/village#3/role#villager',
                'id': village.RoleId.villager,
                'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
                'name': {
                  'en': 'Villager',
                  'ja': '村人'
                }
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
    const agentId = 4

    wrapper.find(CommandSelection).props().handleSelectOption(agentId)()
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      agentId,
      type: ActionTypes.global.SELECT_OPTION
    })
  })
})
