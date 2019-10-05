import * as ActionTypes from '../../constants/ActionTypes'
import * as React from 'react'
import * as village from '../../types'
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
      characterLimit={140}
      handleNavigationClick={handleNavigationClick}
      handlePostChat={handlePostChat}
      language={village.Language.en}
      navigation={navigation}
      suggesttedData={[]}
    />
  )

  expect(handlePostChat).toHaveBeenCalledTimes(1)
  expect(wrapper.find('CommandInput')).toHaveLength(1)
  expect(wrapper.find('CommandNavigation')).toHaveLength(1)
})
