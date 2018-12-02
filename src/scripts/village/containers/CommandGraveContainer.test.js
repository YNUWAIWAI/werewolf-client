// @flow
import * as ActionTypes from '../constants/ActionTypes'
import CommandGraveContainer from './CommandGraveContainer'
import React from 'react'
import {shallow} from 'enzyme'

test('<CommandGraveContainer />', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    language: 'ja'
  })
  const subscribe = jest.fn()
  const store = {
    dispatch,
    getState,
    subscribe
  }
  const wrapper = shallow(<CommandGraveContainer store={store} />)

  expect(wrapper.props().navigation).toEqual([
    {
      id: 'CommandNavigation.returnToLobby',
      type: ActionTypes.RETURN_TO_LOBBY
    }
  ])
})
