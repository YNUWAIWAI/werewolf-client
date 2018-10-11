// @flow
import {DAY_CONVERSATION} from '../constants/Phase'
import DayContainer from './DayContainer'
import React from 'react'
import {shallow} from 'enzyme'

test('<DayContainer /> initialState', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    base: {
      date: 1,
      phase: DAY_CONVERSATION,
      phaseTimeLimit: 100
    }
  })
  const subscribe = jest.fn()
  const store = {
    dispatch,
    getState,
    subscribe
  }
  const wrapper = shallow(<DayContainer store={store} />)

  expect(wrapper.props().date).toBe(1)
  expect(wrapper.props().phase).toBe('day conversation')
  expect(wrapper.props().timer).toEqual({
    limit: 100,
    phase: DAY_CONVERSATION
  })
})
