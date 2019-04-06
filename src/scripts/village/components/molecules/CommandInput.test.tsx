/* global village */
import * as React from 'react'
import CommandInput from './CommandInput'
import {getMessages} from '../../../../i18n/village'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer(village.Language.ja, getMessages(village.Language.ja))

describe('<CommandInput />', () => {
  describe('render', () => {
    test('inputChannel="grave"', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.grave}
          language={village.Language.ja}
          postCount={-1}
          postCountLimit={-1}
          suggesttedData={[]}
        />
      )

      expect(wrapper.find('.vi--command--input--textarea').hasClass('grave')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[placeholder="墓場"]')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[value=""]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').is('[disabled=true]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').text()).toBe('送信')
      expect(handlePostChat).toHaveBeenCalledTimes(0)
    })
    test('inputChannel="limited"', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.limited}
          language={village.Language.ja}
          postCount={0}
          postCountLimit={10}
          suggesttedData={[]}
        />
      )

      expect(wrapper.find('.vi--command--input--textarea').hasClass('limited')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[placeholder="人狼用"]')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[value=""]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').is('[disabled=true]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').text()).toBe('送信')
      expect(handlePostChat).toHaveBeenCalledTimes(0)
    })
    test('inputChannel="private"', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.private}
          language={village.Language.ja}
          postCount={-1}
          postCountLimit={-1}
          suggesttedData={[]}
        />
      )

      expect(wrapper.find('.vi--command--input--textarea').hasClass('private')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[placeholder="非公開用"]')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[value=""]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').is('[disabled=true]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').text()).toBe('送信')
      expect(handlePostChat).toHaveBeenCalledTimes(0)
    })
    test('inputChannel="post mortem"', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.postMortem}
          language={village.Language.ja}
          postCount={-1}
          postCountLimit={-1}
          suggesttedData={[]}
        />
      )

      expect(wrapper.find('.vi--command--input--textarea').hasClass('postMortem')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[placeholder="感想戦"]')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[value=""]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').is('[disabled=true]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').text()).toBe('送信')
      expect(handlePostChat).toHaveBeenCalledTimes(0)
    })
    test('inputChannel="public"', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.public}
          language={village.Language.ja}
          postCount={0}
          postCountLimit={10}
          suggesttedData={[]}
        />
      )

      expect(wrapper.find('.vi--command--input--textarea').hasClass('public')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[placeholder="公開用"]')).toBe(true)
      expect(wrapper.find('.vi--command--input--textarea').is('[value=""]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').is('[disabled=true]')).toBe(true)
      expect(wrapper.find('.vi--command--input--send').text()).toBe('送信')
      expect(handlePostChat).toHaveBeenCalledTimes(0)
    })
  })
  describe('handleTextChange', () => {
    test('kind="public" postCount={0} postCountLimit={10} textarea: 0 -> charLimit -> charLimit + 1', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.public}
          language={village.Language.ja}
          postCount={0}
          postCountLimit={10}
          suggesttedData={[]}
        />
      )

      expect(wrapper.state().sendable).toBe(true)
      expect(wrapper.state().text).toBe('')
      expect(wrapper.find('.vi--command--input--char').hasClass('error')).toBe(true)
      expect(wrapper.find('.vi--command--input--char').text()).toBe('0')
      expect(wrapper.find('button').is('[disabled=true]')).toBe(true)
      const charLimit = 140
      const text = 'a'.repeat(charLimit)

      wrapper.find('textarea').simulate('change', {
        target: {
          value: text
        }
      })
      expect(wrapper.state().sendable).toBe(true)
      expect(wrapper.state().text).toBe(text)
      expect(wrapper.find('.vi--command--input--char').hasClass('error')).toBe(false)
      expect(wrapper.find('.vi--command--input--char').text()).toBe('140')
      expect(wrapper.find('button').is('[disabled=false]')).toBe(true)
      wrapper.find('textarea').simulate('change', {
        target: {
          value: `${text}a`
        }
      })
      expect(wrapper.state().sendable).toBe(true)
      expect(wrapper.state().text).toBe(`${text}a`)
      expect(wrapper.find('.vi--command--input--char').hasClass('error')).toBe(true)
      expect(wrapper.find('.vi--command--input--char').text()).toBe('141')
      expect(wrapper.find('button').is('[disabled=true]')).toBe(true)
    })
    test('kind="public" postCount={10} postCountLimit={10} textarea: 0 -> charLimit -> charLimit + 1', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.public}
          language={village.Language.ja}
          postCount={10}
          postCountLimit={10}
          suggesttedData={[]}
        />
      )

      expect(wrapper.state().sendable).toBe(false)
      expect(wrapper.state().text).toBe('')
      expect(wrapper.find('.vi--command--input--char').hasClass('error')).toBe(true)
      expect(wrapper.find('.vi--command--input--char').text()).toBe('0')
      expect(wrapper.find('button').is('[disabled=true]')).toBe(true)
      const charLimit = 140
      const text = 'a'.repeat(charLimit)

      wrapper.find('textarea').simulate('change', {
        target: {
          value: text
        }
      })
      expect(wrapper.state().sendable).toBe(false)
      expect(wrapper.state().text).toBe(text)
      expect(wrapper.find('.vi--command--input--char').hasClass('error')).toBe(false)
      expect(wrapper.find('.vi--command--input--char').text()).toBe('140')
      expect(wrapper.find('button').is('[disabled=true]')).toBe(true)
      wrapper.find('textarea').simulate('change', {
        target: {
          value: `${text}a`
        }
      })
      expect(wrapper.state().sendable).toBe(false)
      expect(wrapper.state().text).toBe(`${text}a`)
      expect(wrapper.find('.vi--command--input--char').hasClass('error')).toBe(true)
      expect(wrapper.find('.vi--command--input--char').text()).toBe('141')
      expect(wrapper.find('button').is('[disabled=true]')).toBe(true)
    })
  })
  describe('handlePostChat', () => {
    test('kind="public" postCount={0} postCountLimit={10} textarea: charLimit', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.public}
          language={village.Language.ja}
          postCount={0}
          postCountLimit={10}
          suggesttedData={[]}
        />
      )

      wrapper.find('button').simulate('click')
      expect(handlePostChat).toHaveBeenCalledTimes(0)
      const charLimit = 140
      const text = 'a'.repeat(charLimit)

      wrapper.find('textarea').simulate('change', {
        target: {
          value: text
        }
      })
      wrapper.find('button').simulate('click')
      expect(handlePostChat).toHaveBeenCalledTimes(1)
      expect(handlePostChat).toHaveBeenLastCalledWith(text)
      expect(wrapper.state().text).toBe('')
    })
    test('kind="public" postCount={0} postCountLimit={10} textarea: charLimit + 1', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.public}
          language={village.Language.ja}
          postCount={0}
          postCountLimit={10}
          suggesttedData={[]}
        />
      )

      wrapper.find('button').simulate('click')
      expect(handlePostChat).toHaveBeenCalledTimes(0)
      const charLimit = 140
      const text = 'a'.repeat(charLimit + 1)

      wrapper.find('textarea').simulate('change', {
        target: {
          value: text
        }
      })
      wrapper.find('button').simulate('click')
      expect(handlePostChat).toHaveBeenCalledTimes(0)
      expect(wrapper.state().text).toBe(text)
    })
    test('kind="public" postCount={10} postCountLimit={10} handlePostChat textarea: charLimit', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.public}
          language={village.Language.ja}
          postCount={10}
          postCountLimit={10}
          suggesttedData={[]}
        />
      )

      wrapper.find('button').simulate('click')
      expect(handlePostChat).toHaveBeenCalledTimes(0)
      const charLimit = 140
      const text = 'a'.repeat(charLimit)

      wrapper.find('textarea').simulate('change', {
        target: {
          value: text
        }
      })
      wrapper.find('button').simulate('click')
      expect(handlePostChat).toHaveBeenCalledTimes(0)
      expect(wrapper.state().text).toBe(text)
    })
    test('kind="public" postCount={10} postCountLimit={10} textarea: charLimit + 1', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.public}
          language={village.Language.ja}
          postCount={10}
          postCountLimit={10}
          suggesttedData={[]}
        />
      )

      wrapper.find('button').simulate('click')
      expect(handlePostChat).toHaveBeenCalledTimes(0)
      const charLimit = 140
      const text = 'a'.repeat(charLimit + 1)

      wrapper.find('textarea').simulate('change', {
        target: {
          value: text
        }
      })
      wrapper.find('button').simulate('click')
      expect(handlePostChat).toHaveBeenCalledTimes(0)
      expect(wrapper.state().text).toBe(text)
    })
  })
  describe('handleKeyDown', () => {
    test('kind="public" postCount={0} postCountLimit={10} textarea: charLimit, key: ctrlKey & Enter', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.public}
          language={village.Language.ja}
          postCount={0}
          postCountLimit={10}
          suggesttedData={[]}
        />
      )

      wrapper.find('textarea').simulate('keyDown', {
        ctrlKey: true,
        key: 'Enter',
        metaKey: false
      })
      expect(handlePostChat).toHaveBeenCalledTimes(0)
      const charLimit = 140
      const text = 'a'.repeat(charLimit)

      wrapper.find('textarea').simulate('change', {
        target: {
          value: text
        }
      })
      wrapper.find('textarea').simulate('keyDown', {
        ctrlKey: true,
        key: 'Enter',
        metaKey: false
      })
      expect(handlePostChat).toHaveBeenCalledTimes(1)
      expect(handlePostChat).toHaveBeenLastCalledWith(text)
      expect(wrapper.state().text).toBe('')
    })
    test('kind="public" postCount={0} postCountLimit={10} textarea: charLimit key: metaKey & Enter', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.public}
          language={village.Language.ja}
          postCount={0}
          postCountLimit={10}
          suggesttedData={[]}
        />
      )

      wrapper.find('textarea').simulate('keyDown', {
        ctrlKey: false,
        key: 'Enter',
        metaKey: true
      })
      expect(handlePostChat).toHaveBeenCalledTimes(0)
      const charLimit = 140
      const text = 'a'.repeat(charLimit)

      wrapper.find('textarea').simulate('change', {
        target: {
          value: text
        }
      })
      wrapper.find('textarea').simulate('keyDown', {
        ctrlKey: false,
        key: 'Enter',
        metaKey: true
      })
      expect(handlePostChat).toHaveBeenCalledTimes(1)
      expect(handlePostChat).toHaveBeenLastCalledWith(text)
      expect(wrapper.state().text).toBe('')
    })
    test('kind="public" postCount={0} postCountLimit={10} textarea: charLimitkey: metaKey & ctrlKey & Enter', () => {
      const handlePostChat = jest.fn()
      const wrapper = mountWithIntl<CommandInput>(
        <CommandInput
          characterLimit={140}
          handlePostChat={handlePostChat}
          inputChannel={village.InputChannel.public}
          language={village.Language.ja}
          postCount={0}
          postCountLimit={10}
          suggesttedData={[]}
        />
      )

      wrapper.find('textarea').simulate('keyDown', {
        ctrlKey: true,
        key: 'Enter',
        metaKey: true
      })
      expect(handlePostChat).toHaveBeenCalledTimes(0)
      const charLimit = 140
      const text = 'a'.repeat(charLimit)

      wrapper.find('textarea').simulate('change', {
        target: {
          value: text
        }
      })
      wrapper.find('textarea').simulate('keyDown', {
        ctrlKey: true,
        key: 'Enter',
        metaKey: true
      })
      expect(handlePostChat).toHaveBeenCalledTimes(1)
      expect(handlePostChat).toHaveBeenLastCalledWith(text)
      expect(wrapper.state().text).toBe('')
    })
  })
})
