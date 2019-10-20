import * as React from 'react'
import * as village from '../../types'
import CommandInputBox from './CommandInputBox'
import {shallow} from 'enzyme'

describe('<CommandInputBox />', () => {
  test('werewolf is unavailable', () => {
    const handlePostChatEventHandler = jest.fn()
    const handlePostChat = jest.fn().mockReturnValueOnce(handlePostChatEventHandler)
    const wrapper = shallow(
      <CommandInputBox
        characterLimit={140}
        handlePostChat={handlePostChat}
        language={village.Language.en}
        werewolf={{
          available: false,
          postCount: 0
        }}
        postCountLimit={10}
        public={{
          postCount: 0
        }}
        suggesttedData={[]}
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
        characterLimit={140}
        handlePostChat={handlePostChat}
        language={village.Language.en}
        werewolf={{
          available: true,
          postCount: 0
        }}
        postCountLimit={10}
        public={{
          postCount: 0
        }}
        suggesttedData={[]}
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
