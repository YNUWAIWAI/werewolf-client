// @flow
import React from 'react'
import WaitingForPlayersContainer from './WaitingForPlayersContainer'
import {initialState} from '../reducers/waitingForPlayers'
import {shallow} from 'enzyme'

test('<WaitingForPlayersContainer /> initialState', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    waitingForPlayers: initialState
  })
  const subscribe = jest.fn()
  const store = {
    dispatch,
    getState,
    subscribe
  }
  const wrapper = shallow(<WaitingForPlayersContainer store={store} transition={jest.fn()} />)

  expect(wrapper.props().isPlayer).toBe(true)
  expect(wrapper.props().menuItems).toEqual([])
  expect(wrapper.props().players).toEqual([])
})
