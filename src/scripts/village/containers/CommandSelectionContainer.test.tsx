import * as React from 'react'
import {DAY, NIGHT} from '../constants/Phase'
import CommandSelectionContainer from './CommandSelectionContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

describe('<CommandSelectionContainer />', () => {
  describe('DAY', () => {
    test('fixed', () => {
      const store = fakeStore(
        {
          base: {
            phase: DAY,
            phaseTimeLimit: 100
          },
          commandSelection: {
            agents: [],
            fixed: true
          },
          language: 'ja',
          mine: {
            role: {
              '@id': 'https://licos.online/state/0.2/village#3/role#seer',
              'id': 'seer',
              'image': 'https://werewolf.world/image/0.2/seer.jpg',
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
            phase: DAY,
            phaseTimeLimit: 100
          },
          commandSelection: {
            agents: [],
            fixed: false
          },
          language: 'ja',
          mine: {
            role: {
              '@id': 'https://licos.online/state/0.2/village#3/role#seer',
              'id': 'seer',
              'image': 'https://werewolf.world/image/0.2/seer.jpg',
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
              phase: NIGHT,
              phaseTimeLimit: 100
            },
            commandSelection: {
              agents: [],
              fixed: true
            },
            language: 'ja',
            mine: {
              role: {
                '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
                'id': 'hunter',
                'image': 'https://werewolf.world/image/0.2/hunter.jpg',
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
              phase: NIGHT,
              phaseTimeLimit: 100
            },
            commandSelection: {
              agents: [],
              fixed: false
            },
            language: 'ja',
            mine: {
              role: {
                '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
                'id': 'hunter',
                'image': 'https://werewolf.world/image/0.2/hunter.jpg',
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
              phase: NIGHT,
              phaseTimeLimit: 100
            },
            commandSelection: {
              agents: [],
              fixed: true
            },
            language: 'ja',
            mine: {
              role: {
                '@id': 'https://licos.online/state/0.2/village#3/role#seer',
                'id': 'seer',
                'image': 'https://werewolf.world/image/0.2/seer.jpg',
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
              phase: NIGHT,
              phaseTimeLimit: 100
            },
            commandSelection: {
              agents: [],
              fixed: false
            },
            language: 'ja',
            mine: {
              role: {
                '@id': 'https://licos.online/state/0.2/village#3/role#seer',
                'id': 'seer',
                'image': 'https://werewolf.world/image/0.2/seer.jpg',
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
              phase: NIGHT,
              phaseTimeLimit: 100
            },
            commandSelection: {
              agents: [],
              fixed: true
            },
            language: 'ja',
            mine: {
              role: {
                '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
                'id': 'werewolf',
                'image': 'https://werewolf.world/image/0.2/werewolf.jpg',
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
              phase: NIGHT,
              phaseTimeLimit: 100
            },
            commandSelection: {
              agents: [],
              fixed: false
            },
            language: 'ja',
            mine: {
              role: {
                '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
                'id': 'werewolf',
                'image': 'https://werewolf.world/image/0.2/werewolf.jpg',
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
            phase: NIGHT,
            phaseTimeLimit: 100
          },
          commandSelection: {
            agents: [],
            fixed: true
          },
          language: 'ja',
          mine: {
            role: {
              '@id': 'https://licos.online/state/0.2/village#3/role#villager',
              'id': 'villager',
              'image': 'https://werewolf.world/image/0.2/villager.jpg',
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
