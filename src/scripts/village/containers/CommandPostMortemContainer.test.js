// @flow
import * as ActionTypes from '../constants/ActionTypes'
import CommandPostMortemContainer from './CommandPostMortemContainer'
import React from 'react'
import {shallow} from 'enzyme'

test('<CommandPostMortemContainer />', () => {
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
      type: ActionTypes.SHOW_RESULT
    },
    {
      text: 'ロビーへ戻る',
      type: ActionTypes.RETURN_TO_LOBBY
    }
  ])
})
