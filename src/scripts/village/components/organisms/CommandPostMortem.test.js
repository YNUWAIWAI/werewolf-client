// @flow
import * as ActionTypes from '../../constants/ActionTypes'
import CommandPostMortem from './CommandPostMortem'
import React from 'react'
import {shallow} from 'enzyme'

test('<CommandPostMortem />', () => {
  const handleNavigationClick = jest.fn()
  const handlePostChat = jest.fn()
  const navigation = [
    {
      id: 'CommandNavigation.showResult',
      type: ActionTypes.SHOW_RESULT
    },
    {
      id: 'CommandNavigation.returnToLobby',
      type: ActionTypes.RETURN_TO_LOBBY
    }
  ]
  const wrapper = shallow(
    <CommandPostMortem
      handleNavigationClick={handleNavigationClick}
      handlePostChat={handlePostChat}
      navigation={navigation}
    />
  )

  expect(handlePostChat).toHaveBeenCalledTimes(1)
  expect(wrapper.find('CommandInput')).toHaveLength(1)
  expect(wrapper.find('CommandNavigation')).toHaveLength(1)
})
