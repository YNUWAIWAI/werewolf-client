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
        id: 'Menu.showBuildVillage',
        types: [ActionTypes.SHOW_BUILD_VILLAGE]
      },
      {
        id: 'Menu.showIdSearch',
        types: [ActionTypes.SHOW_ID_SEARCH]
      },
      {
        id: 'Menu.showAdvancedSearch',
        types: [ActionTypes.SHOW_ADVANCED_SEARCH]
      },
      {
        id: 'Menu.refresh',
        types: [ActionTypes.REFRESH, ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
      },
      {
        id: 'Menu.returnToMainPage',
        types: [ActionTypes.SHOW_MAIN]
      }
    ])
  expect(wrapper.props().villageItems)
    .toEqual([])
})
