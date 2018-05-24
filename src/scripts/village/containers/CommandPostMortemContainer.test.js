// @flow
import * as types from '../constants/ActionTypes'
import CommandPostMortemContainer from './CommandPostMortemContainer'
import React from 'react'
import {shallow} from 'enzyme'

test('<CommandPostMortemContainer /> ja', () => {
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
  const wrapper = shallow(<CommandPostMortemContainer store={store} />)

  expect(wrapper.props().navigation).toEqual([
    {
      text: '結果を表示',
      type: types.SHOW_RESULT
    },
    {
      text: 'ロビーへ戻る',
      type: types.RETURN_TO_LOBBY
    }
  ])
})
test('<CommandPostMortemContainer /> en', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    language: 'en'
  })
  const subscribe = jest.fn()
  const store = {
    dispatch,
    getState,
    subscribe
  }
  const wrapper = shallow(<CommandPostMortemContainer store={store} />)

  expect(wrapper.props().navigation).toEqual([
    {
      text: 'Show result',
      type: types.SHOW_RESULT
    },
    {
      text: 'Return to lobby',
      type: types.RETURN_TO_LOBBY
    }
  ])
})
