import * as React from 'react'
import {DAY, NIGHT} from '../constants/Phase'
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
            date: 1,
            phase: DAY,
            phaseTimeLimit: 100
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
          language: 'ja',
          modal: {
            id: 2,
            visible: true
          },
          roles: {
            mine: {
              '@id': 'https://werewolf.world/resource/0.2/seer',
              'image': 'https://werewolf.world/image/0.2/seer.jpg',
              'name': {
                'en': 'Seer',
                'ja': '占い師'
              },
              'numberOfAgents': 1,
              'roleIsMine': true
            }
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
              date: 1,
              phase: NIGHT,
              phaseTimeLimit: 100
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
            language: 'ja',
            modal: {
              id: 2,
              visible: true
            },
            roles: {
              mine: {
                '@context': 'https://werewolf.world/context/0.2/role.jsonld',
                '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
                'image': 'https://werewolf.world/image/0.2/hunter.jpg',
                'isMine': false,
                'name': {
                  'en': 'Hunter',
                  'ja': '狩人'
                },
                'numberOfAgents': 1
              }
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
              date: 1,
              phase: NIGHT,
              phaseTimeLimit: 100
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
            language: 'ja',
            modal: {
              id: 2,
              visible: true
            },
            roles: {
              mine: {
                '@context': 'https://werewolf.world/context/0.2/role.jsonld',
                '@id': 'https://licos.online/state/0.2/village#3/role#seer',
                'image': 'https://werewolf.world/image/0.2/seer.jpg',
                'isMine': true,
                'name': {
                  'en': 'Seer',
                  'ja': '占い師'
                },
                'numberOfAgents': 1
              }
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
              date: 1,
              phase: NIGHT,
              phaseTimeLimit: 100
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
            language: 'ja',
            modal: {
              id: 2,
              visible: true
            },
            roles: {
              mine: {
                '@context': 'https://werewolf.world/context/0.2/role.jsonld',
                '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
                'image': 'https://werewolf.world/image/0.2/werewolf.jpg',
                'isMine': false,
                'name': {
                  'en': 'Werewolf',
                  'ja': '人狼'
                },
                'numberOfAgents': 2
              }
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
              date: 1,
              phase: NIGHT,
              phaseTimeLimit: 100
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
            language: 'ja',
            modal: {
              id: 2,
              visible: true
            },
            roles: {
              mine: {
                '@context': 'https://werewolf.world/context/0.2/role.jsonld',
                '@id': 'https://licos.online/state/0.2/village#3/role#villager',
                'image': 'https://werewolf.world/image/0.2/villager.jpg',
                'isMine': false,
                'name': {
                  'en': 'Villager',
                  'ja': '村人'
                },
                'numberOfAgents': 6
              }
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
          date: 1,
          phase: DAY,
          phaseTimeLimit: 100
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
        language: 'ja',
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
