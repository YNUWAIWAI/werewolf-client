// @flow
import * as ActionTypes from '../constants/ActionTypes'
import LobbyForAudienceContainer from './LobbyForAudienceContainer'
import React from 'react'
import {initialState} from '../reducers/lobbyForAudience'
import {shallow} from 'enzyme'

test('<LobbyForAudienceContainer /> initialState', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    lobbyForAudience: initialState
  })
  const subscribe = jest.fn()
  const store = {
    dispatch,
    getState,
    subscribe
  }
  const wrapper = shallow(<LobbyForAudienceContainer store={store} transition={jest.fn()} />)

  expect(wrapper.props().isPlayer).toBe(false)
  expect(wrapper.props().menuItems)
    .toEqual([
      {
        text: 'Search for a Village in session',
        types: [ActionTypes.SEARCH_FOR_A_VILLAGE_IN_SESSION]
      },
      {
        text: 'Search for an Old Village',
        types: [ActionTypes.SEARCH_FOR_AN_OLD_VILLAGE]
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
