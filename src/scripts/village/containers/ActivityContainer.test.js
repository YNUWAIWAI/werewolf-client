import ActivityContainer from './ActivityContainer'
import React from 'react'
import {shallow} from 'enzyme'

test('<ActivityContainer />', () => {
  const getState = () => ({
    hideButton: {
      hide: true
    }
  })
  const subscribe = jest.fn()
  const store = {
    getState,
    subscribe
  }
  const wrapper = shallow(<ActivityContainer store={store} />)

  expect(wrapper.props().expand).toBe(true)
})
