/* global village */
import * as React from 'react'
import IntlProviderContainer from './IntlProviderContainer'
import ModalContainer from './ModalContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

describe('<ModalContainer />', () => {
  describe('selectedAgent exists', () => {
    test('DAY', () => {
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
            agents: [
              {
                '@id': 'https://werewolf.world/resource/0.2/Moritz',
                'id': 2,
                'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
                'name': {
                  'en': 'Moritz',
                  'ja': 'モーリッツ'
                }
              },
              {
                '@id': 'https://werewolf.world/resource/0.2/Simson',
                'id': 3,
                'image': 'https://werewolf.world/image/0.2/Simson.jpg',
                'name': {
                  'en': 'Simson',
                  'ja': 'ジムゾン'
                }
              },
              {
                '@id': 'https://werewolf.world/resource/0.2/Thomas',
                'id': 4,
                'image': 'https://werewolf.world/image/0.2/Thomas.jpg',
                'name': {
                  'en': 'Thomas',
                  'ja': 'トーマス'
                }
              }
            ],
            fixed: false
          },
          language: village.Language.ja,
          mine: {
            role: {
              '@id': 'https://werewolf.world/resource/0.2/seer',
              'id': village.RoleId.seer,
              'image': 'https://werewolf.world/image/0.2/seer.jpg',
              'name': {
                'en': 'Seer',
                'ja': '占い師'
              }
            }
          },
          modal: {
            id: 2,
            visible: true
          }
        }
      )
      const wrapper = mount(
        <Provider store={store} >
          <IntlProviderContainer>
            <ModalContainer />
          </IntlProviderContainer>
        </Provider>
      )

      expect(wrapper.find('.modal').hasClass('hidden')).toBe(false)
      expect(wrapper.html()).toMatchSnapshot()
    })
    describe('NIGHT', () => {
      test('HUNTER', () => {
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
              agents: [
                {
                  '@id': 'https://werewolf.world/resource/0.2/Moritz',
                  'id': 2,
                  'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
                  'name': {
                    'en': 'Moritz',
                    'ja': 'モーリッツ'
                  }
                },
                {
                  '@id': 'https://werewolf.world/resource/0.2/Simson',
                  'id': 3,
                  'image': 'https://werewolf.world/image/0.2/Simson.jpg',
                  'name': {
                    'en': 'Simson',
                    'ja': 'ジムゾン'
                  }
                },
                {
                  '@id': 'https://werewolf.world/resource/0.2/Thomas',
                  'id': 4,
                  'image': 'https://werewolf.world/image/0.2/Thomas.jpg',
                  'name': {
                    'en': 'Thomas',
                    'ja': 'トーマス'
                  }
                }
              ],
              fixed: false
            },
            language: village.Language.ja,
            mine: {
              role: {
                '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
                'id': village.RoleId.hunter,
                'image': 'https://werewolf.world/image/0.2/hunter.jpg',
                'name': {
                  'en': 'Hunter',
                  'ja': '狩人'
                }
              }
            },
            modal: {
              id: 2,
              visible: true
            }
          }
        )
        const wrapper = mount(
          <Provider store={store} >
            <IntlProviderContainer>
              <ModalContainer />
            </IntlProviderContainer>
          </Provider>
        )

        expect(wrapper.find('.modal').hasClass('hidden')).toBe(false)
        expect(wrapper.html()).toMatchSnapshot()
      })
      test('SEER', () => {
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
              agents: [
                {
                  '@id': 'https://werewolf.world/resource/0.2/Moritz',
                  'id': 2,
                  'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
                  'name': {
                    'en': 'Moritz',
                    'ja': 'モーリッツ'
                  }
                },
                {
                  '@id': 'https://werewolf.world/resource/0.2/Simson',
                  'id': 3,
                  'image': 'https://werewolf.world/image/0.2/Simson.jpg',
                  'name': {
                    'en': 'Simson',
                    'ja': 'ジムゾン'
                  }
                },
                {
                  '@id': 'https://werewolf.world/resource/0.2/Thomas',
                  'id': 4,
                  'image': 'https://werewolf.world/image/0.2/Thomas.jpg',
                  'name': {
                    'en': 'Thomas',
                    'ja': 'トーマス'
                  }
                }
              ],
              fixed: false
            },
            language: village.Language.ja,
            mine: {
              role: {
                '@id': 'https://licos.online/state/0.2/village#3/role#seer',
                'id': village.RoleId.seer,
                'image': 'https://werewolf.world/image/0.2/seer.jpg',
                'name': {
                  'en': 'Seer',
                  'ja': '占い師'
                }
              }
            },
            modal: {
              id: 2,
              visible: true
            }
          }
        )
        const wrapper = mount(
          <Provider store={store} >
            <IntlProviderContainer>
              <ModalContainer />
            </IntlProviderContainer>
          </Provider>
        )

        expect(wrapper.find('.modal').hasClass('hidden')).toBe(false)
        expect(wrapper.html()).toMatchSnapshot()
      })
      test('WEREWOLF', () => {
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
              agents: [
                {
                  '@id': 'https://werewolf.world/resource/0.2/Moritz',
                  'id': 2,
                  'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
                  'name': {
                    'en': 'Moritz',
                    'ja': 'モーリッツ'
                  }
                },
                {
                  '@id': 'https://werewolf.world/resource/0.2/Simson',
                  'id': 3,
                  'image': 'https://werewolf.world/image/0.2/Simson.jpg',
                  'name': {
                    'en': 'Simson',
                    'ja': 'ジムゾン'
                  }
                },
                {
                  '@id': 'https://werewolf.world/resource/0.2/Thomas',
                  'id': 4,
                  'image': 'https://werewolf.world/image/0.2/Thomas.jpg',
                  'name': {
                    'en': 'Thomas',
                    'ja': 'トーマス'
                  }
                }
              ],
              fixed: false
            },
            language: village.Language.ja,
            mine: {
              role: {
                '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
                'id': village.RoleId.werewolf,
                'image': 'https://werewolf.world/image/0.2/werewolf.jpg',
                'name': {
                  'en': 'Werewolf',
                  'ja': '人狼'
                }
              }
            },
            modal: {
              id: 2,
              visible: true
            }
          }
        )
        const wrapper = mount(
          <Provider store={store} >
            <IntlProviderContainer>
              <ModalContainer />
            </IntlProviderContainer>
          </Provider>
        )

        expect(wrapper.find('.modal').hasClass('hidden')).toBe(false)
        expect(wrapper.html()).toMatchSnapshot()
      })
      test('VILLAGER(default)', () => {
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
              agents: [
                {
                  '@id': 'https://werewolf.world/resource/0.2/Moritz',
                  'id': 2,
                  'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
                  'name': {
                    'en': 'Moritz',
                    'ja': 'モーリッツ'
                  }
                },
                {
                  '@id': 'https://werewolf.world/resource/0.2/Simson',
                  'id': 3,
                  'image': 'https://werewolf.world/image/0.2/Simson.jpg',
                  'name': {
                    'en': 'Simson',
                    'ja': 'ジムゾン'
                  }
                },
                {
                  '@id': 'https://werewolf.world/resource/0.2/Thomas',
                  'id': 4,
                  'image': 'https://werewolf.world/image/0.2/Thomas.jpg',
                  'name': {
                    'en': 'Thomas',
                    'ja': 'トーマス'
                  }
                }
              ],
              fixed: false
            },
            language: village.Language.ja,
            mine: {
              role: {
                '@id': 'https://licos.online/state/0.2/village#3/role#villager',
                'id': village.RoleId.villager,
                'image': 'https://werewolf.world/image/0.2/villager.jpg',
                'name': {
                  'en': 'Villager',
                  'ja': '村人'
                }
              }
            },
            modal: {
              id: 2,
              visible: true
            }
          }
        )
        const wrapper = mount(
          <Provider store={store} >
            <IntlProviderContainer>
              <ModalContainer />
            </IntlProviderContainer>
          </Provider>
        )

        expect(wrapper.find('.modal').hasClass('hidden')).toBe(false)
        expect(wrapper.html()).toMatchSnapshot()
      })
    })
  })
  test('selectedAgent doesn\'t exist', () => {
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
          agents: [
            {
              '@id': 'https://werewolf.world/resource/0.2/Moritz',
              'id': 2,
              'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
              'name': {
                'en': 'Moritz',
                'ja': 'モーリッツ'
              }
            },
            {
              '@id': 'https://werewolf.world/resource/0.2/Simson',
              'id': 3,
              'image': 'https://werewolf.world/image/0.2/Simson.jpg',
              'name': {
                'en': 'Simson',
                'ja': 'ジムゾン'
              }
            },
            {
              '@id': 'https://werewolf.world/resource/0.2/Thomas',
              'id': 4,
              'image': 'https://werewolf.world/image/0.2/Thomas.jpg',
              'name': {
                'en': 'Thomas',
                'ja': 'トーマス'
              }
            }
          ],
          fixed: false
        },
        language: village.Language.ja,
        modal: {
          id: -1,
          visible: true
        }
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <ModalContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find('.modal').hasClass('hidden')).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
