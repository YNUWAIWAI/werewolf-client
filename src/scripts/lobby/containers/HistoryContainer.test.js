// @flow
import * as ActionTypes from '../constants/ActionTypes'
import HistoryContainer from './HistoryContainer'
import React from 'react'
import {initialState} from '../reducers/history'
import {shallow} from 'enzyme'

test('<HistoryContainer /> initialState', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    history: initialState
  })
  const subscribe = jest.fn()
  const store = {
    dispatch,
    getState,
    subscribe
  }
  const wrapper = shallow(<HistoryContainer store={store} transition={jest.fn()} />)

  expect(wrapper.props().isPlayer).toBe(false)
  expect(wrapper.props().menuItems)
    .toEqual([
      {
        id: 'Menu.returnToMainPage',
        types: [ActionTypes.SHOW_MAIN]
      }
    ])
  expect(wrapper.props().villageItems)
    .toEqual([])
})
