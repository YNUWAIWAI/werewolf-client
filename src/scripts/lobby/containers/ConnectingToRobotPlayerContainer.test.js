// @flow
import * as ActionTypes from '../constants/ActionTypes'
import ConnectingToRobotPlayerContainer from './ConnectingToRobotPlayerContainer'
import React from 'react'
import {initialState} from '../reducers/connectingToRobotPlayer'
import {shallow} from 'enzyme'

test('<ConnectingToRobotPlayerContainer /> initialState', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    connectingToRobotPlayer: initialState
  })
  const subscribe = jest.fn()
  const store = {
    dispatch,
    getState,
    subscribe
  }
  const wrapper = shallow(<ConnectingToRobotPlayerContainer store={store} transition={jest.fn()} />)

  expect(wrapper.props().menuItems)
    .toEqual([
      {
        text: 'Return to the Main Page',
        types: [ActionTypes.SHOW_MAIN]
      }
    ])
})
