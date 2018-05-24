// @flow
import ActivityContainer from './ActivityContainer'
import React from 'react'
import {initialState} from '../reducers/hideButton'
import {shallow} from 'enzyme'

test('<ActivityContainer /> initialState', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    hideButton: initialState
  })
  const subscribe = jest.fn()
  const store = {
    dispatch,
    getState,
    subscribe
  }
  const wrapper = shallow(<ActivityContainer store={store} />)

  expect(wrapper.props().expand).toBe(false)
})
