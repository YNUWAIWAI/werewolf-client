// @flow
import {DAY_CONVERSATION, DAY_VOTE, NIGHT, POST_MORTEM, RESULTS} from '../constants/Phase'
import CommandContainer from './CommandContainer'
import CommandInputBox from './CommandInputBoxContainer'
import CommandPostMortem from './CommandPostMortemContainer'
import CommandSelection from './CommandSelectionContainer'
import React from 'react'
import {shallow} from 'enzyme'

test('<CommandContainer /> DAY_CONVERSATION', () => {
  const getState = () => ({
    base: {
      phase: DAY_CONVERSATION
    },
    hideButton: {
      hide: false
    }
  })
  const subscribe = jest.fn()
  const store = {
    getState,
    subscribe
  }
  const wrapper = shallow(<CommandContainer store={store} />)

  expect(wrapper.props().content).toEqual(<CommandInputBox />)
  expect(wrapper.props().hide).toBe(false)
})
test('<CommandContainer /> DAY_VOTE', () => {
  const getState = () => ({
    base: {
      phase: DAY_VOTE
    },
    hideButton: {
      hide: false
    }
  })
  const subscribe = jest.fn()
  const store = {
    getState,
    subscribe
  }
  const wrapper = shallow(<CommandContainer store={store} />)

  expect(wrapper.props().content).toEqual(<CommandSelection />)
  expect(wrapper.props().hide).toBe(false)
})
test('<CommandContainer /> NIGHT', () => {
  const getState = () => ({
    base: {
      phase: NIGHT
    },
    hideButton: {
      hide: false
    }
  })
  const subscribe = jest.fn()
  const store = {
    getState,
    subscribe
  }
  const wrapper = shallow(<CommandContainer store={store} />)

  expect(wrapper.props().content).toEqual(<CommandSelection />)
  expect(wrapper.props().hide).toBe(false)
})
test('<CommandContainer /> POST_MORTEM', () => {
  const getState = () => ({
    base: {
      phase: POST_MORTEM
    },
    hideButton: {
      hide: false
    }
  })
  const subscribe = jest.fn()
  const store = {
    getState,
    subscribe
  }
  const wrapper = shallow(<CommandContainer store={store} />)

  expect(wrapper.props().content).toEqual(<CommandPostMortem />)
  expect(wrapper.props().hide).toBe(false)
})
test('<CommandContainer /> RESULTS', () => {
  const getState = () => ({
    base: {
      phase: RESULTS
    },
    hideButton: {
      hide: false
    }
  })
  const subscribe = jest.fn()
  const store = {
    getState,
    subscribe
  }
  const wrapper = shallow(<CommandContainer store={store} />)

  expect(wrapper.props().content).toEqual(<CommandPostMortem />)
  expect(wrapper.props().hide).toBe(false)
})
