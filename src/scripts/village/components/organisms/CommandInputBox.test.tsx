import * as React from 'react'
import CommandInputBox from './CommandInputBox'
import {shallow} from 'enzyme'
import {village} from '../../types'

describe('<CommandInputBox />', () => {
  test('werewolf is unavailable', () => {
    const handlePostChatEventHandler = jest.fn()
    const handlePostChat = jest.fn().mockReturnValueOnce(handlePostChatEventHandler)
    const wrapper = shallow(
      <CommandInputBox
        handlePostChat={handlePostChat}
        language={village.Language.en}
        maxLengthOfUnicodeCodePoints={140}
        maxNumberOfChatMessages={10}
        public={{
          numberOfChatMessages: 0
        }}
        suggestedData={[]}
        werewolf={{
          available: false,
          numberOfChatMessages: 0
        }}
      />
    )

    expect(wrapper.find('CommandInput')).toHaveLength(2)
    expect(handlePostChat).toHaveBeenCalledTimes(2)
    expect(handlePostChat).toHaveBeenCalledWith('public')
    expect(handlePostChat).toHaveBeenCalledWith('private')
    expect(handlePostChat).not.toHaveBeenCalledWith('werewolf')
    expect(handlePostChatEventHandler).toHaveBeenCalledTimes(0)
  })
  test('werewolf is available', () => {
    const handlePostChatEventHandler = jest.fn()
    const handlePostChat = jest.fn().mockReturnValueOnce(handlePostChatEventHandler)
    const wrapper = shallow(
      <CommandInputBox
        handlePostChat={handlePostChat}
        language={village.Language.en}
        maxLengthOfUnicodeCodePoints={140}
        maxNumberOfChatMessages={10}
        public={{
          numberOfChatMessages: 0
        }}
        suggestedData={[]}
        werewolf={{
          available: true,
          numberOfChatMessages: 0
        }}
      />
    )

    expect(wrapper.find('CommandInput')).toHaveLength(3)
    expect(handlePostChat).toHaveBeenCalledTimes(3)
    expect(handlePostChat).toHaveBeenCalledWith('public')
    expect(handlePostChat).toHaveBeenCalledWith('private')
    expect(handlePostChat).toHaveBeenCalledWith('werewolf')
    expect(handlePostChatEventHandler).toHaveBeenCalledTimes(0)
  })
})
