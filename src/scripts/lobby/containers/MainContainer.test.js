// @flow
import * as ActionTypes from '../constants/ActionTypes'
import MainContainer from './MainContainer'
import React from 'react'
import {initialState} from '../reducers/main'
import {shallow} from 'enzyme'

test('<MainContainer /> initialState', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    main: initialState
  })
  const subscribe = jest.fn()
  const store = {
    dispatch,
    getState,
    subscribe
  }
  const wrapper = shallow(<MainContainer store={store} transition={jest.fn()} />)

  expect(wrapper.props().menuItems)
    .toEqual([
      {
        id: 'Menu.lobbyForAudience',
        types: [ActionTypes.SHOW_LOBBY_FOR_AUDIENCE]
      },
      {
        id: 'Menu.lobbyForRobotPlayer',
        types: [ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER]
      },
      {
        id: 'Menu.lobbyForHumanPlayer',
        types: [ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
      },
      {
        id: 'Menu.history',
        types: [ActionTypes.SHOW_HISTORY]
      },
      {
        id: 'Menu.settings',
        types: [ActionTypes.SHOW_SETTINGS]
      }
    ])
})
