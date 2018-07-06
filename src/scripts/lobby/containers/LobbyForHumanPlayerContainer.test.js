// @flow
import * as ActionTypes from '../constants/ActionTypes'
import LobbyForHumanPlayerContainer from './LobbyForHumanPlayerContainer'
import React from 'react'
import {initialState} from '../reducers/lobbyForHumanPlayer'
import {shallow} from 'enzyme'

test('<LobbyForHumanPlayerContainer /> initialState', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    lobbyForHumanPlayer: initialState
  })
  const subscribe = jest.fn()
  const store = {
    dispatch,
    getState,
    subscribe
  }
  const wrapper = shallow(<LobbyForHumanPlayerContainer store={store} transition={jest.fn()} />)

  expect(wrapper.props().isPlayer).toBe(true)
  expect(wrapper.props().menuItems)
    .toEqual([
      {
        text: 'Build your Village',
        types: [ActionTypes.SHOW_BUILD_VILLAGE]
      },
      {
        text: 'Search for a Village',
        types: [ActionTypes.SEARCH_FOR_A_VILLAGE]
      },
      {
        text: 'Refresh',
        types: [ActionTypes.REFRESH]
      },
      {
        text: 'Return to the Main Page',
        types: [ActionTypes.SHOW_MAIN]
      }
    ])
  expect(wrapper.props().villageItems)
    .toEqual([])
})
