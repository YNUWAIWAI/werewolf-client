import * as ActionTypes from '../../constants/ActionTypes'
import * as React from 'react'
import CommandPostMortem from './CommandPostMortem'
import {shallow} from 'enzyme'
import {village} from '../../types'

test('<CommandPostMortem />', () => {
  const handleNavigationClick = jest.fn()
  const handlePostChat = jest.fn()
  const navigation = [
    {
      id: 'CommandNavigation.showResult',
      type: ActionTypes.Navigation.SHOW_RESULT
    },
    {
      id: 'CommandNavigation.returnToLobby',
      type: ActionTypes.Navigation.RETURN_TO_LOBBY
    }
  ]
  const wrapper = shallow(
    <CommandPostMortem
      handleNavigationClick={handleNavigationClick}
      handlePostChat={handlePostChat}
      language={village.Language.en}
      maxLengthOfUnicodeCodePoints={140}
      navigation={navigation}
      suggesttedData={[]}
    />
  )

  expect(handlePostChat).toHaveBeenCalledTimes(1)
  expect(wrapper.find('CommandInput')).toHaveLength(1)
  expect(wrapper.find('CommandNavigation')).toHaveLength(1)
})
