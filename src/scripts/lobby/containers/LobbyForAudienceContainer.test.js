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
        text: 'ID Search',
        types: [ActionTypes.SHOW_ID_SEARCH]
      },
      {
        text: 'Advanced Search',
        types: [ActionTypes.SHOW_ADVANCED_SEARCH]
      },
      {
        text: 'Refresh',
        types: [ActionTypes.REFRESH, ActionTypes.SHOW_LOBBY_FOR_AUDIENCE]
      },
      {
        text: 'Return to the Main Page',
        types: [ActionTypes.SHOW_MAIN]
      }
    ])
  expect(wrapper.props().villageItems)
    .toEqual([])
})
