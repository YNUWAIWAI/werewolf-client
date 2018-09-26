// @flow
import * as ActionTypes from '../constants/ActionTypes'
import CommandPostMortem from './CommandPostMortem'
import React from 'react'
import {shallow} from 'enzyme'

test('<CommandPostMortem />', () => {
  const handlePostChat = jest.fn()
  const navigation = [
    {
      text: '結果を表示',
      type: ActionTypes.SHOW_RESULT
    },
    {
      text: 'ロビーへ戻る',
      type: ActionTypes.RETURN_TO_LOBBY
    }
  ]
  const wrapper = shallow(<CommandPostMortem handlePostChat={handlePostChat} navigation={navigation} />)

  expect(handlePostChat).toHaveBeenCalledTimes(1)
  expect(wrapper.find('CommandInput')).toHaveLength(1)
  expect(wrapper.find('Connect(CommandNavigation)')).toHaveLength(1)
})
