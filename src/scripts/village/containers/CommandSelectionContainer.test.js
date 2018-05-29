// @flow
import {DAY_VOTE, NIGHT} from '../constants/Phase'
import {HUNTER, SEER, VILLAGER, WEREWOLF} from '../constants/Role'
import CommandSelectionContainer from './CommandSelectionContainer'
import React from 'react'
import {shallow} from 'enzyme'

test('<CommandSelectionContainer /> DAY_VOTE', () => {
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
test('<CommandSelectionContainer /> NIGHT HUNTER not fixed', () => {
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
test('<CommandSelectionContainer /> NIGHT HUNTER fixed', () => {
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
test('<CommandSelectionContainer /> NIGHT SEER not fixed', () => {
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
test('<CommandSelectionContainer /> NIGHT SEER fixed', () => {
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
test('<CommandSelectionContainer /> NIGHT WEREWOLF not fixed', () => {
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
test('<CommandSelectionContainer /> NIGHT VILLAGER', () => {
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
