// @flow
import {DAY, NIGHT} from '../constants/Phase'
import CommandSelectionContainer from './CommandSelectionContainer'
import React from 'react'
import {shallow} from 'enzyme'

describe('<CommandSelectionContainer />', () => {
  describe('DAY', () => {
    test('fixed', () => {
      const dispatch = jest.fn()
      const getState = () => ({
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
      })
      const subscribe = jest.fn()
      const store = {
        dispatch,
        getState,
        subscribe
      }
      const wrapper = shallow(<CommandSelectionContainer store={store} />)

      expect(wrapper.props().agents).toEqual([])
      expect(wrapper.props().descriptionId).toBe('CommandSelection.Description.dayVote.fixed')
      expect(wrapper.props().timer).toEqual({
        limit: 100,
        phase: DAY
      })
    })
    test('unfixed', () => {
      const dispatch = jest.fn()
      const getState = () => ({
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
      })
      const subscribe = jest.fn()
      const store = {
        dispatch,
        getState,
        subscribe
      }
      const wrapper = shallow(<CommandSelectionContainer store={store} />)

      expect(wrapper.props().agents).toEqual([])
      expect(wrapper.props().descriptionId).toBe('CommandSelection.Description.dayVote.unfixed')
      expect(wrapper.props().timer).toEqual({
        limit: 100,
        phase: DAY
      })
    })
  })
  describe('NIGHT', () => {
    describe('HUNTER', () => {
      test('fixed', () => {
        const dispatch = jest.fn()
        const getState = () => ({
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
        })
        const subscribe = jest.fn()
        const store = {
          dispatch,
          getState,
          subscribe
        }
        const wrapper = shallow(<CommandSelectionContainer store={store} />)

        expect(wrapper.props().agents).toEqual([])
        expect(wrapper.props().descriptionId).toBe('CommandSelection.Description.hunterVote.fixed')
        expect(wrapper.props().timer).toEqual({
          limit: 100,
          phase: NIGHT
        })
      })
      test('unfixed', () => {
        const dispatch = jest.fn()
        const getState = () => ({
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
        })
        const subscribe = jest.fn()
        const store = {
          dispatch,
          getState,
          subscribe
        }
        const wrapper = shallow(<CommandSelectionContainer store={store} />)

        expect(wrapper.props().agents).toEqual([])
        expect(wrapper.props().descriptionId).toBe('CommandSelection.Description.hunterVote.unfixed')
        expect(wrapper.props().timer).toEqual({
          limit: 100,
          phase: NIGHT
        })
      })
    })
    describe('SEER', () => {
      test('fixed', () => {
        const dispatch = jest.fn()
        const getState = () => ({
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
        })
        const subscribe = jest.fn()
        const store = {
          dispatch,
          getState,
          subscribe
        }
        const wrapper = shallow(<CommandSelectionContainer store={store} />)

        expect(wrapper.props().agents).toEqual([])
        expect(wrapper.props().descriptionId).toBe('CommandSelection.Description.seerVote.fixed')
        expect(wrapper.props().timer).toEqual({
          limit: 100,
          phase: NIGHT
        })
      })
      test('unfixed', () => {
        const dispatch = jest.fn()
        const getState = () => ({
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
        })
        const subscribe = jest.fn()
        const store = {
          dispatch,
          getState,
          subscribe
        }
        const wrapper = shallow(<CommandSelectionContainer store={store} />)

        expect(wrapper.props().agents).toEqual([])
        expect(wrapper.props().descriptionId).toBe('CommandSelection.Description.seerVote.unfixed')
        expect(wrapper.props().timer).toEqual({
          limit: 100,
          phase: NIGHT
        })
      })
    })
    describe('WEREWOLF', () => {
      test('fixed', () => {
        const dispatch = jest.fn()
        const getState = () => ({
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
        })
        const subscribe = jest.fn()
        const store = {
          dispatch,
          getState,
          subscribe
        }
        const wrapper = shallow(<CommandSelectionContainer store={store} />)

        expect(wrapper.props().agents).toEqual([])
        expect(wrapper.props().descriptionId).toBe('CommandSelection.Description.werewolfVote.fixed')
        expect(wrapper.props().timer).toEqual({
          limit: 100,
          phase: NIGHT
        })
      })
      test('unfixed', () => {
        const dispatch = jest.fn()
        const getState = () => ({
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
        })
        const subscribe = jest.fn()
        const store = {
          dispatch,
          getState,
          subscribe
        }
        const wrapper = shallow(<CommandSelectionContainer store={store} />)

        expect(wrapper.props().agents).toEqual([])
        expect(wrapper.props().descriptionId).toBe('CommandSelection.Description.werewolfVote.unfixed')
        expect(wrapper.props().timer).toEqual({
          limit: 100,
          phase: NIGHT
        })
      })
    })
    test('VILLAGER', () => {
      const dispatch = jest.fn()
      const getState = () => ({
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
      })
      const subscribe = jest.fn()
      const store = {
        dispatch,
        getState,
        subscribe
      }
      const wrapper = shallow(<CommandSelectionContainer store={store} />)

      expect(wrapper.props().agents).toEqual([])
      expect(wrapper.props().descriptionId).toBe('CommandSelection.Description.wait')
      expect(wrapper.props().timer).toEqual({
        limit: 100,
        phase: NIGHT
      })
    })
  })
})
