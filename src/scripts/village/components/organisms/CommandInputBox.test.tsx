import * as React from 'react'
import CommandInputBox from './CommandInputBox'
import {shallow} from 'enzyme'

test('<CommandInputBox /> limited is unavailable', () => {
  const props = {
    characterLimit: 140,
    limited: {
      available: false,
      postCount: 0
    },
    postCountLimit: 10,
    public: {
      postCount: 0
    }
  }
  const handlePostChatEventHandler = jest.fn()
  const handlePostChat = jest.fn().mockReturnValueOnce(handlePostChatEventHandler)
  const wrapper = shallow(<CommandInputBox {... props} handlePostChat={handlePostChat} />)

  expect(wrapper.find('CommandInput')).toHaveLength(2)
  expect(handlePostChat).toHaveBeenCalledTimes(2)
  expect(handlePostChat).toHaveBeenCalledWith('public')
  expect(handlePostChat).toHaveBeenCalledWith('private')
  expect(handlePostChat).not.toHaveBeenCalledWith('limited')
  expect(handlePostChatEventHandler).toHaveBeenCalledTimes(0)
})
test('<CommandInputBox /> limited is available', () => {
  const props = {
    characterLimit: 140,
    limited: {
      available: true,
      postCount: 0
    },
    postCountLimit: 10,
    public: {
      postCount: 0
    }
  }
  const handlePostChatEventHandler = jest.fn()
  const handlePostChat = jest.fn().mockReturnValueOnce(handlePostChatEventHandler)
  const wrapper = shallow(<CommandInputBox {... props} handlePostChat={handlePostChat} />)

  expect(wrapper.find('CommandInput')).toHaveLength(3)
  expect(handlePostChat).toHaveBeenCalledTimes(3)
  expect(handlePostChat).toHaveBeenCalledWith('public')
  expect(handlePostChat).toHaveBeenCalledWith('private')
  expect(handlePostChat).toHaveBeenCalledWith('limited')
  expect(handlePostChatEventHandler).toHaveBeenCalledTimes(0)
})
