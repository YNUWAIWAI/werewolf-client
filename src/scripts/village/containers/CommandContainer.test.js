// @flow
import {DAY_CONVERSATION, DAY_VOTE, NIGHT, POST_MORTEM, RESULT} from '../constants/Phase'
import CommandContainer from './CommandContainer'
import CommandInputBox from './CommandInputBoxContainer'
import CommandPostMortem from './CommandPostMortemContainer'
import CommandSelection from './CommandSelectionContainer'
import React from 'react'
import {shallow} from 'enzyme'

test('<CommandContainer /> DAY_CONVERSATION', () => {
  const dispatch = jest.fn()
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
    dispatch,
    getState,
    subscribe
  }
  const wrapper = shallow(<CommandContainer store={store} />)

  expect(wrapper.props().content).toEqual(<CommandInputBox />)
  expect(wrapper.props().hide).toBe(false)
})
test('<CommandContainer /> DAY_VOTE', () => {
  const dispatch = jest.fn()
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
    dispatch,
    getState,
    subscribe
  }
  const wrapper = shallow(<CommandContainer store={store} />)

  expect(wrapper.props().content).toEqual(<CommandSelection />)
  expect(wrapper.props().hide).toBe(false)
})
test('<CommandContainer /> NIGHT', () => {
  const dispatch = jest.fn()
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
    dispatch,
    getState,
    subscribe
  }
  const wrapper = shallow(<CommandContainer store={store} />)

  expect(wrapper.props().content).toEqual(<CommandSelection />)
  expect(wrapper.props().hide).toBe(false)
})
test('<CommandContainer /> POST_MORTEM', () => {
  const dispatch = jest.fn()
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
    dispatch,
    getState,
    subscribe
  }
  const wrapper = shallow(<CommandContainer store={store} />)

  expect(wrapper.props().content).toEqual(<CommandPostMortem />)
  expect(wrapper.props().hide).toBe(false)
})
test('<CommandContainer /> RESULT', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    base: {
      phase: RESULT
    },
    hideButton: {
      hide: false
    }
  })
  const subscribe = jest.fn()
  const store = {
    dispatch,
    getState,
    subscribe
  }
  const wrapper = shallow(<CommandContainer store={store} />)

  expect(wrapper.props().content).toEqual(<CommandPostMortem />)
  expect(wrapper.props().hide).toBe(false)
})
