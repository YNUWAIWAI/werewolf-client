// @flow
import * as ActionTypes from '../constants/ActionTypes'
import LobbyForRobotPlayerContainer from './LobbyForRobotPlayerContainer'
import React from 'react'
import {initialState} from '../reducers/lobbyForRobotPlayer'
import {shallow} from 'enzyme'

test('<LobbyForRobotPlayerContainer /> initialState', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    lobbyForRobotPlayer: initialState
  })
  const subscribe = jest.fn()
  const store = {
    dispatch,
    getState,
    subscribe
  }
  const wrapper = shallow(<LobbyForRobotPlayerContainer store={store} transition={jest.fn()} />)

  expect(wrapper.props().isPlayer).toBe(true)
  expect(wrapper.props().menuItems)
    .toEqual([
      {
        text: 'Build your Village',
        types: [ActionTypes.SHOW_BUILD_VILLAGE]
      },
      {
        text: 'ID Search',
        types: [ActionTypes.SHOW_ID_SEARCH]
      },
      {
        text: 'Advanced Search',
        types: [ActionTypes.SHOW_ADVANCED_SEARCH]
      },
      {
        text: 'Refresh',
        types: [ActionTypes.REFRESH, ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER]
      },
      {
        text: 'Return to the Main Page',
        types: [ActionTypes.SHOW_MAIN]
      }
    ])
  expect(wrapper.props().villageItems)
    .toEqual([])
})
