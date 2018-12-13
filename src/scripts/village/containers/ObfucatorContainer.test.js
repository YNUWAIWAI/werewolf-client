// @flow
import ObfucatorContainer from './ObfucatorContainer'
import React from 'react'
import {shallow} from 'enzyme'

test('<ObfucatorContainer />', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    obfucator: {
      loading: true,
      visible: true
    }
  })
  const subscribe = jest.fn()
  const store = {
    dispatch,
    getState,
    subscribe
  }
  const wrapper = shallow(<ObfucatorContainer store={store} />)

  expect(wrapper.props().loading).toBe(true)
  expect(wrapper.props().visible).toBe(true)
})
