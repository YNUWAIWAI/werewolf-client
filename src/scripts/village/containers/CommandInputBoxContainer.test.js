// @flow
import CommandInputBoxContainer from './CommandInputBoxContainer'
import React from 'react'
import {initialState} from '../reducers/commandInputBox'
import {shallow} from 'enzyme'

test('<CommandInputBoxContainer /> initialState', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    commandInputBox: initialState
  })
  const subscribe = jest.fn()
  const store = {
    dispatch,
    getState,
    subscribe
  }
  const wrapper = shallow(<CommandInputBoxContainer store={store} />)

  expect(wrapper.props().limited).toEqual({
    available: false,
    postCount: 0,
    postCountLimit: 10
  })
  expect(wrapper.props().private).toEqual({
    postCount: 0,
    postCountLimit: 10
  })
  expect(wrapper.props().public).toEqual({
    postCount: 0,
    postCountLimit: 10
  })
})
