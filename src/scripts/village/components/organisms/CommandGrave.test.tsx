import * as ActionTypes from '../../constants/ActionTypes'
import * as React from 'react'
import CommandGrave, {Props} from './CommandGrave'
import {shallow} from 'enzyme'

test('<CommandGrave />', () => {
  const handleNavigationClick = jest.fn()
  const handlePostChat = jest.fn()
  const navigation: Props['navigation'] = [
    {
      id: 'CommandGraveContainer.returnToLobby',
      type: ActionTypes.Navigation.RETURN_TO_LOBBY
    }
  ]
  const wrapper = shallow(
    <CommandGrave
      handleNavigationClick={handleNavigationClick}
      handlePostChat={handlePostChat}
      navigation={navigation}
    />
  )

  expect(handlePostChat).toHaveBeenCalledTimes(1)
  expect(wrapper.find('CommandInput')).toHaveLength(1)
  expect(wrapper.find('CommandNavigation')).toHaveLength(1)
})
