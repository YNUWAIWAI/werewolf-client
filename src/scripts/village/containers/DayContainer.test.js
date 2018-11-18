// @flow
import DayContainer from './DayContainer'
import {MORNING} from '../constants/Phase'
import React from 'react'
import {shallow} from 'enzyme'

test('<DayContainer /> initialState', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    base: {
      date: 1,
      phase: MORNING,
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
  expect(wrapper.props().phase).toBe('morning')
  expect(wrapper.props().timer).toEqual({
    limit: 100,
    phase: MORNING
  })
})
