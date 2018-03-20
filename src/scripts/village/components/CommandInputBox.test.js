// @flow
import CommandInputBox from './CommandInputBox'
import React from 'react'
import {shallow} from 'enzyme'

test('<CommandInputBox /> limited is unavailable', () => {
  const props = {
    limited: {
      available: false,
      isSendable: true,
      postCount: 0,
      postCountLimit: 10,
    },
    private: {
      isSendable: true,
      postCount: 0,
      postCountLimit: 10,
    },
    public: {
      isSendable: true,
      postCount: 0,
      postCountLimit: 10,
    }
  }
  const handlePostChatEventHandler = jest.fn()
  const handlePostChat = jest.fn().mockReturnValueOnce(handlePostChatEventHandler)
  const setIsSendableEventHandler = jest.fn()
  const setIsSendable = jest.fn().mockReturnValueOnce(setIsSendableEventHandler)
  const wrapper = shallow(<CommandInputBox {... props} handlePostChat={handlePostChat} setIsSendable={setIsSendable} />)

  expect(wrapper.find('CommandInput')).toHaveLength(2)
  expect(handlePostChat).toHaveBeenCalledTimes(2)
  expect(handlePostChat).toHaveBeenCalledWith('public')
  expect(handlePostChat).toHaveBeenCalledWith('private')
  expect(handlePostChat).not.toHaveBeenCalledWith('limited')
  expect(handlePostChatEventHandler).toHaveBeenCalledTimes(0)
  expect(setIsSendable).toHaveBeenCalledTimes(2)
  expect(setIsSendable).toHaveBeenCalledWith('public')
  expect(setIsSendable).toHaveBeenCalledWith('private')
  expect(setIsSendable).not.toHaveBeenCalledWith('limited')
  expect(setIsSendableEventHandler).toHaveBeenCalledTimes(0)
})
test('<CommandInputBox /> limited is available', () => {
  const props = {
    limited: {
      available: true,
      isSendable: true,
      postCount: 0,
      postCountLimit: 10,
    },
    private: {
      isSendable: true,
      postCount: 0,
      postCountLimit: 10,
    },
    public: {
      isSendable: true,
      postCount: 0,
      postCountLimit: 10,
    }
  }
  const handlePostChatEventHandler = jest.fn()
  const handlePostChat = jest.fn().mockReturnValueOnce(handlePostChatEventHandler)
  const setIsSendableEventHandler = jest.fn()
  const setIsSendable = jest.fn().mockReturnValueOnce(setIsSendableEventHandler)
  const wrapper = shallow(<CommandInputBox {... props} handlePostChat={handlePostChat} setIsSendable={setIsSendable} />)

  expect(wrapper.find('CommandInput')).toHaveLength(3)
  expect(handlePostChat).toHaveBeenCalledTimes(3)
  expect(handlePostChat).toHaveBeenCalledWith('public')
  expect(handlePostChat).toHaveBeenCalledWith('private')
  expect(handlePostChat).toHaveBeenCalledWith('limited')
  expect(handlePostChatEventHandler).toHaveBeenCalledTimes(0)
  expect(setIsSendable).toHaveBeenCalledTimes(3)
  expect(setIsSendable).toHaveBeenCalledWith('public')
  expect(setIsSendable).toHaveBeenCalledWith('private')
  expect(setIsSendable).toHaveBeenCalledWith('limited')
  expect(setIsSendableEventHandler).toHaveBeenCalledTimes(0)
})
