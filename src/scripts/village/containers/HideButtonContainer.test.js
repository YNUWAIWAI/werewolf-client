// @flow
import HideButtonContainer from './HideButtonContainer'
import React from 'react'
import {shallow} from 'enzyme'

test('<HideButtonContainer />', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    hideButton: {
      hide: true
    }
  })
  const subscribe = jest.fn()
  const store = {
    dispatch,
    getState,
    subscribe
  }
  const wrapper = shallow(<HideButtonContainer store={store} />)

  expect(wrapper.props().hide).toBe(true)
})
