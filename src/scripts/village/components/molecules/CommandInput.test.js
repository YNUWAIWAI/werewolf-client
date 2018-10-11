// @flow
import CommandInput from './CommandInput'
import React from 'react'
import {getMessages} from '../../../../i18n/village'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer('ja', getMessages('ja'))

describe('<CommandInput />', () => {
  test('kind="public" postCount={0} postCountLimit={10}', () => {
    const handlePostChat = jest.fn()
    const wrapper = mountWithIntl(
      <CommandInput
        handlePostChat={handlePostChat}
        kind="public"
        postCount={0}
        postCountLimit={10}
      />
    )

    expect(wrapper.find('.command--input').hasClass('public')).toBe(true)
    expect(wrapper.find('textarea').is('[placeholder="公開用"]')).toBe(true)
    expect(wrapper.find('textarea').is('[value=""]')).toBe(true)
    expect(wrapper.find('.command--input--char').hasClass('error')).toBe(true)
    expect(wrapper.find('.command--input--char').text()).toBe('0')
    expect(wrapper.find('.command--input--counter').exists()).toBe(true)
    expect(wrapper.find('.command--input--counter').text()).toBe('0/10')
    expect(wrapper.find('button').is('[disabled=true]')).toBe(true)
    expect(handlePostChat).toHaveBeenCalledTimes(0)
  })
  test('<CommandInput kind="private" postCount={0} postCountLimit={10} />', () => {
    const handlePostChat = jest.fn()
    const wrapper = mountWithIntl(
      <CommandInput
        handlePostChat={handlePostChat}
        kind="private"
      />
    )

    expect(wrapper.find('.command--input').hasClass('private')).toBe(true)
    expect(wrapper.find('textarea').is('[placeholder="非公開用"]')).toBe(true)
    expect(wrapper.find('textarea').is('[value=""]')).toBe(true)
    expect(wrapper.find('.command--input--char').hasClass('error')).toBe(true)
    expect(wrapper.find('.command--input--char').text()).toBe('0')
    expect(wrapper.find('.command--input--counter').exists()).toBe(false)
    expect(wrapper.find('button').is('[disabled=true]')).toBe(true)
    expect(handlePostChat).toHaveBeenCalledTimes(0)
  })
  test('<CommandInput kind="limited" postCount={0} postCountLimit={10} />', () => {
    const handlePostChat = jest.fn()
    const wrapper = mountWithIntl(
      <CommandInput
        handlePostChat={handlePostChat}
        kind="limited"
        postCount={0}
        postCountLimit={10}
      />
    )

    expect(wrapper.find('.command--input').hasClass('limited')).toBe(true)
    expect(wrapper.find('textarea').is('[placeholder="人狼用"]')).toBe(true)
    expect(wrapper.find('textarea').is('[value=""]')).toBe(true)
    expect(wrapper.find('.command--input--char').hasClass('error')).toBe(true)
    expect(wrapper.find('.command--input--char').text()).toBe('0')
    expect(wrapper.find('.command--input--counter').exists()).toBe(true)
    expect(wrapper.find('.command--input--counter').text()).toBe('0/10')
    expect(wrapper.find('button').is('[disabled=true]')).toBe(true)
    expect(handlePostChat).toHaveBeenCalledTimes(0)
  })
  test('<CommandInput kind="public" postCount={0} postCountLimit={10} /> textarea: 0 -> charLimit -> charLimit + 1', () => {
    const handlePostChat = jest.fn()
    const wrapper = mountWithIntl(
      <CommandInput
        handlePostChat={handlePostChat}
        kind="public"
        postCount={0}
        postCountLimit={10}
      />
    )

    expect(wrapper.state().sendable).toBe(true)
    expect(wrapper.state().text).toBe('')
    expect(wrapper.state().textCount).toBe(0)
    expect(wrapper.state().validTextLength).toBe(false)
    expect(wrapper.find('.command--input--char').hasClass('error')).toBe(true)
    expect(wrapper.find('.command--input--char').text()).toBe('0')
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
    expect(wrapper.state().textCount).toBe(charLimit)
    expect(wrapper.state().validTextLength).toBe(true)
    expect(wrapper.find('.command--input--char').hasClass('error')).toBe(false)
    expect(wrapper.find('.command--input--char').text()).toBe('140')
    expect(wrapper.find('button').is('[disabled=false]')).toBe(true)
    wrapper.find('textarea').simulate('change', {
      target: {
        value: `${text}a`
      }
    })
    expect(wrapper.state().sendable).toBe(true)
    expect(wrapper.state().text).toBe(`${text}a`)
    expect(wrapper.state().textCount).toBe(charLimit + 1)
    expect(wrapper.state().validTextLength).toBe(false)
    expect(wrapper.find('.command--input--char').hasClass('error')).toBe(true)
    expect(wrapper.find('.command--input--char').text()).toBe('141')
    expect(wrapper.find('button').is('[disabled=true]')).toBe(true)
  })
  test('<CommandInput kind="public" postCount={10} postCountLimit={10} /> textarea: 0 -> charLimit -> charLimit + 1', () => {
    const handlePostChat = jest.fn()
    const wrapper = mountWithIntl(
      <CommandInput
        handlePostChat={handlePostChat}
        kind="public"
        postCount={10}
        postCountLimit={10}
      />
    )

    expect(wrapper.state().sendable).toBe(false)
    expect(wrapper.state().text).toBe('')
    expect(wrapper.state().textCount).toBe(0)
    expect(wrapper.state().validTextLength).toBe(false)
    expect(wrapper.find('.command--input--char').hasClass('error')).toBe(true)
    expect(wrapper.find('.command--input--char').text()).toBe('0')
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
    expect(wrapper.state().textCount).toBe(charLimit)
    expect(wrapper.state().validTextLength).toBe(true)
    expect(wrapper.find('.command--input--char').hasClass('error')).toBe(false)
    expect(wrapper.find('.command--input--char').text()).toBe('140')
    expect(wrapper.find('button').is('[disabled=true]')).toBe(true)
    wrapper.find('textarea').simulate('change', {
      target: {
        value: `${text}a`
      }
    })
    expect(wrapper.state().sendable).toBe(false)
    expect(wrapper.state().text).toBe(`${text}a`)
    expect(wrapper.state().textCount).toBe(charLimit + 1)
    expect(wrapper.state().validTextLength).toBe(false)
    expect(wrapper.find('.command--input--char').hasClass('error')).toBe(true)
    expect(wrapper.find('.command--input--char').text()).toBe('141')
    expect(wrapper.find('button').is('[disabled=true]')).toBe(true)
  })
  test('<CommandInput kind="public" postCount={0} postCountLimit={10} /> handlePostChat textarea: charLimit', () => {
    const handlePostChat = jest.fn()
    const wrapper = mountWithIntl(
      <CommandInput
        handlePostChat={handlePostChat}
        kind="public"
        postCount={0}
        postCountLimit={10}
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
    expect(wrapper.state().validTextLength).toBe(false)
    expect(wrapper.state().text).toBe('')
    expect(wrapper.state().textCount).toBe(0)
  })
  test('<CommandInput kind="public" postCount={0} postCountLimit={10} /> handlePostChat textarea: charLimit + 1', () => {
    const handlePostChat = jest.fn()
    const wrapper = mountWithIntl(
      <CommandInput
        handlePostChat={handlePostChat}
        kind="public"
        postCount={0}
        postCountLimit={10}
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
    expect(wrapper.state().validTextLength).toBe(false)
    expect(wrapper.state().text).toBe(text)
    expect(wrapper.state().textCount).toBe(charLimit + 1)
  })
  test('<CommandInput kind="public" postCount={10} postCountLimit={10} /> handlePostChat textarea: charLimit', () => {
    const handlePostChat = jest.fn()
    const wrapper = mountWithIntl(
      <CommandInput
        handlePostChat={handlePostChat}
        kind="public"
        postCount={10}
        postCountLimit={10}
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
    expect(wrapper.state().validTextLength).toBe(true)
    expect(wrapper.state().text).toBe(text)
    expect(wrapper.state().textCount).toBe(charLimit)
  })
  test('<CommandInput kind="public" postCount={10} postCountLimit={10} /> handlePostChat textarea: charLimit + 1', () => {
    const handlePostChat = jest.fn()
    const wrapper = mountWithIntl(
      <CommandInput
        handlePostChat={handlePostChat}
        kind="public"
        postCount={10}
        postCountLimit={10}
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
    expect(wrapper.state().validTextLength).toBe(false)
    expect(wrapper.state().text).toBe(text)
    expect(wrapper.state().textCount).toBe(charLimit + 1)
  })
  test('<CommandInput kind="public" postCount={0} postCountLimit={10} /> handleKeyDown(ctrlKey & Enter) textarea: charLimit', () => {
    const handlePostChat = jest.fn()
    const wrapper = mountWithIntl(
      <CommandInput
        handlePostChat={handlePostChat}
        kind="public"
        postCount={0}
        postCountLimit={10}
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
    expect(wrapper.state().validTextLength).toBe(false)
    expect(wrapper.state().text).toBe('')
    expect(wrapper.state().textCount).toBe(0)
  })
  test('<CommandInput kind="public" postCount={0} postCountLimit={10} /> handleKeyDown(metaKey & Enter) textarea: charLimit', () => {
    const handlePostChat = jest.fn()
    const wrapper = mountWithIntl(
      <CommandInput
        handlePostChat={handlePostChat}
        kind="public"
        postCount={0}
        postCountLimit={10}
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
    expect(wrapper.state().validTextLength).toBe(false)
    expect(wrapper.state().text).toBe('')
    expect(wrapper.state().textCount).toBe(0)
  })
  test('<CommandInput kind="public" postCount={0} postCountLimit={10} /> handleKeyDown(metaKey & ctrlKey & Enter) textarea: charLimit', () => {
    const handlePostChat = jest.fn()
    const wrapper = mountWithIntl(
      <CommandInput
        handlePostChat={handlePostChat}
        kind="public"
        postCount={0}
        postCountLimit={10}
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
    expect(wrapper.state().validTextLength).toBe(false)
    expect(wrapper.state().text).toBe('')
    expect(wrapper.state().textCount).toBe(0)
  })
})
