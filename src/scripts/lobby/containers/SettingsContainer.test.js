// @flow
import * as ActionTypes from '../constants/ActionTypes'
import React from 'react'
import SettingsContainer from './SettingsContainer'
import {initialState} from '../reducers/settings'
import {shallow} from 'enzyme'

test('<SettingsContainer /> initialState', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    settings: initialState
  })
  const subscribe = jest.fn()
  const store = {
    dispatch,
    getState,
    subscribe
  }
  const wrapper = shallow(<SettingsContainer store={store} transition={jest.fn()} />)

  expect(wrapper.props().menuItems)
    .toEqual([
      {
        text: 'Return to the Main Page',
        types: [ActionTypes.SHOW_MAIN]
      }
    ])
})
