// @flow
import {DAY, FLAVOR_TEXT, MORNING, NIGHT, POST_MORTEM, RESULT} from '../constants/Phase'
import CommandContainer from './CommandContainer'
import CommandInputBox from './CommandInputBoxContainer'
import CommandPostMortem from './CommandPostMortemContainer'
import CommandSelection from './CommandSelectionContainer'
import React from 'react'
import {shallow} from 'enzyme'

describe('<CommandContainer />', () => {
  test('DAY', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      base: {
        phase: DAY
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
  test('FLAVOR_TEXT', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      base: {
        phase: FLAVOR_TEXT
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
  test('MORNING', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      base: {
        phase: MORNING
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
  test('NIGHT', () => {
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
  test('POST_MORTEM', () => {
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
  test('RESULT', () => {
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
})
