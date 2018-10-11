// @flow
import {DAY_VOTE, NIGHT} from '../constants/Phase'
import {HUNTER, SEER, VILLAGER, WEREWOLF} from '../constants/Role'
import CommandSelectionContainer from './CommandSelectionContainer'
import React from 'react'
import {shallow} from 'enzyme'

describe('<CommandSelectionContainer />', () => {
  describe('DAY_VOTE', () => {
    test('fixed', () => {
      const dispatch = jest.fn()
      const getState = () => ({
        base: {
          phase: DAY_VOTE,
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
      expect(wrapper.props().text).toBe('あなたの選んだ投票先はこちらです')
      expect(wrapper.props().timer).toEqual({
        limit: 100,
        phase: DAY_VOTE
      })
    })
    test('unfixed', () => {
      const dispatch = jest.fn()
      const getState = () => ({
        base: {
          phase: DAY_VOTE,
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
      expect(wrapper.props().text).toBe('投票先を選んでください')
      expect(wrapper.props().timer).toEqual({
        limit: 100,
        phase: DAY_VOTE
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
        expect(wrapper.props().text).toBe('あなたの選んだ守護先はこちらです')
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
        expect(wrapper.props().text).toBe('守護先を選んでください')
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
        expect(wrapper.props().text).toBe('あなたの選んだ占い先はこちらです')
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
        expect(wrapper.props().text).toBe('占い先を選んでください')
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
        expect(wrapper.props().text).toBe('あなたの選んだ襲撃先はこちらです')
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
        expect(wrapper.props().text).toBe('襲撃先を選んでください')
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
      expect(wrapper.props().text).toBe('待ってください')
      expect(wrapper.props().timer).toEqual({
        limit: 100,
        phase: NIGHT
      })
    })
  })
})
