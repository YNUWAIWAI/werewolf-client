// @flow
import {DAY, NIGHT} from '../constants/Phase'
import CommandSelectionContainer from './CommandSelectionContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import React from 'react'
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
            <CommandSelectionContainer />
          </IntlProviderContainer>
        </Provider>
      )

      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})
