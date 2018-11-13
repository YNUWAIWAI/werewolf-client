// @flow
import {DAY, NIGHT} from '../constants/Phase'
import {HUNTER, SEER, VILLAGER, WEREWOLF} from '../constants/Role'
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
            '@id': VILLAGER
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
            '@id': VILLAGER
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
              '@id': HUNTER
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
              '@id': HUNTER
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
              '@id': SEER
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
              '@id': SEER
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
              '@id': WEREWOLF
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
              '@id': WEREWOLF
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
            '@id': VILLAGER
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
