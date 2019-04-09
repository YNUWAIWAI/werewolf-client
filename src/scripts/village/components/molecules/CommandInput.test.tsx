/* global village */
import * as React from 'react'
import CommandInput from './CommandInput'
import {countText} from '../../util'
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
  describe('handlePostChat', () => {
    test('sendable: true, validTextLength: true', () => {
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
      const instance = wrapper.instance()
      const text = 'text'

      wrapper.setState({
        text
      })
      expect(instance.isSendable()).toBe(true)
      expect(instance.isValidTextLength(text)).toBe(true)
      instance.handlePostChat()

      expect(wrapper.state()).toEqual({
        caretPosition: 0,
        processing: false,
        suggestLeft: 0,
        suggestSelected: 0,
        suggestTop: 0,
        suggestable: false,
        suggesttedData: [],
        text: '',
        trigerPosition: 0
      })
      expect(handlePostChat).toHaveBeenCalledWith('text')
    })
    test('sendable: false, validTextLength: true', () => {
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
      const instance = wrapper.instance()
      const text = 'text'

      wrapper.setState({
        text
      })
      expect(instance.isSendable()).toBe(false)
      expect(instance.isValidTextLength(text)).toBe(true)
      instance.handlePostChat()

      expect(wrapper.state()).toEqual({
        caretPosition: 0,
        processing: false,
        suggestLeft: 0,
        suggestSelected: 0,
        suggestTop: 0,
        suggestable: false,
        suggesttedData: [],
        text,
        trigerPosition: 0
      })
      expect(handlePostChat).toHaveBeenCalledTimes(0)
    })
    test('sendable: true, validTextLength: false', () => {
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
      const instance = wrapper.instance()
      const text = 'texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt'

      wrapper.setState({
        text
      })
      expect(instance.isSendable()).toBe(true)
      expect(instance.isValidTextLength(text)).toBe(false)
      instance.handlePostChat()

      expect(wrapper.state()).toEqual({
        caretPosition: 0,
        processing: false,
        suggestLeft: 0,
        suggestSelected: 0,
        suggestTop: 0,
        suggestable: false,
        suggesttedData: [],
        text,
        trigerPosition: 0
      })
      expect(handlePostChat).toHaveBeenCalledTimes(0)
    })
    test('sendable: false, validTextLength: false', () => {
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
      const instance = wrapper.instance()
      const text = 'texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt'

      wrapper.setState({
        text
      })
      expect(instance.isSendable()).toBe(false)
      expect(instance.isValidTextLength(text)).toBe(false)
      instance.handlePostChat()

      expect(wrapper.state()).toEqual({
        caretPosition: 0,
        processing: false,
        suggestLeft: 0,
        suggestSelected: 0,
        suggestTop: 0,
        suggestable: false,
        suggesttedData: [],
        text,
        trigerPosition: 0
      })
      expect(handlePostChat).toHaveBeenCalledTimes(0)
    })
  })
  test('handleSuggestClick', () => {
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

    wrapper.setState({
      caretPosition: 5,
      suggestLeft: 65,
      suggestSelected: 0,
      suggestTop: 20,
      suggestable: true,
      text: 'aaaa@',
      trigerPosition: 4
    })
    wrapper.instance().handleSuggestClick('suggest')

    expect(wrapper.state()).toEqual({
      caretPosition: 11,
      processing: false,
      suggestLeft: 65,
      suggestSelected: 0,
      suggestTop: 20,
      suggestable: false,
      suggesttedData: [],
      text: 'aaaasuggest',
      trigerPosition: 4
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

      expect(wrapper.state().text).toBe('')
      expect(wrapper.find('.vi--command--input--char').hasClass('error')).toBe(true)
      expect(wrapper.find('.vi--command--input--char').text()).toBe('0')
      expect(wrapper.find('.vi--command--input--send').is('[disabled=true]')).toBe(true)
      const charLimit = 140
      const text = 'a'.repeat(charLimit)

      wrapper.find('.vi--command--input--textarea').simulate('change', {
        target: {
          selectionEnd: countText(text),
          value: text
        }
      })
      expect(wrapper.state().text).toBe(text)
      expect(wrapper.find('.vi--command--input--char').hasClass('error')).toBe(false)
      expect(wrapper.find('.vi--command--input--char').text()).toBe('140')
      expect(wrapper.find('.vi--command--input--send').is('[disabled=false]')).toBe(true)
      wrapper.find('.vi--command--input--textarea').simulate('change', {
        target: {
          selectionEnd: countText(`${text}a`),
          value: `${text}a`
        }
      })
      expect(wrapper.state().text).toBe(`${text}a`)
      expect(wrapper.find('.vi--command--input--char').hasClass('error')).toBe(true)
      expect(wrapper.find('.vi--command--input--char').text()).toBe('141')
      expect(wrapper.find('.vi--command--input--send').is('[disabled=true]')).toBe(true)
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

      expect(wrapper.state().text).toBe('')
      expect(wrapper.find('.vi--command--input--char').hasClass('error')).toBe(true)
      expect(wrapper.find('.vi--command--input--char').text()).toBe('0')
      expect(wrapper.find('.vi--command--input--send').is('[disabled=true]')).toBe(true)
      const charLimit = 140
      const text = 'a'.repeat(charLimit)

      wrapper.find('textarea').simulate('change', {
        target: {
          value: text
        }
      })
      expect(wrapper.state().text).toBe(text)
      expect(wrapper.find('.vi--command--input--char').hasClass('error')).toBe(false)
      expect(wrapper.find('.vi--command--input--char').text()).toBe('140')
      expect(wrapper.find('.vi--command--input--send').is('[disabled=true]')).toBe(true)
      wrapper.find('textarea').simulate('change', {
        target: {
          value: `${text}a`
        }
      })
      expect(wrapper.state().text).toBe(`${text}a`)
      expect(wrapper.find('.vi--command--input--char').hasClass('error')).toBe(true)
      expect(wrapper.find('.vi--command--input--char').text()).toBe('141')
      expect(wrapper.find('button').is('[disabled=true]')).toBe(true)
    })
  })
})
