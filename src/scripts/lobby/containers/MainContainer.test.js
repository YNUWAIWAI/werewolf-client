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

  expect(wrapper.props().image).toBe('https://werewolf.world/image/0.1/Pamela.jpg')
  expect(wrapper.props().menuItems)
    .toEqual([
      {
        text: 'Lobby for Audience',
        types: [ActionTypes.SHOW_LOBBY_FOR_AUDIENCE]
      },
      {
        text: 'Lobby for Robot Player',
        types: [ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER]
      },
      {
        text: 'Lobby for Human Player',
        types: [ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
      },
      {
        text: 'History',
        types: [ActionTypes.SHOW_HISTORY]
      },
      {
        text: 'Settings',
        types: [ActionTypes.SHOW_SETTINGS]
      }
    ])
  expect(wrapper.props().name).toBe('Pamela')
})
