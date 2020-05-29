import * as React from 'react'
import {Copy} from '../svg/Copy'
import {SelectAvatarTableBodyAccessToken} from './SelectAvatarTableBodyAccessToken'
import {getMessages} from '../../../i18n'
import {initRenderer} from '../../../tools'
import {lobby} from '../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

describe('render', () => {
  test('navigator.clipboard !== undefined', () => {
    const navigatorClipBoard = navigator.clipboard;

    // eslint-disable-next-line no-extra-parens, @typescript-eslint/no-explicit-any
    (navigator as any).clipboard = {}
    const handleSelect = jest.fn()
    const renewAccessToken = jest.fn()
    const wrapper = mountWithIntl(
      <SelectAvatarTableBodyAccessToken
        additionalClassName={[]}
        handleSelect={handleSelect}
        naviagtable
        renewAccessToken={renewAccessToken}
        token="token"
      />
    )

    expect(wrapper.find(Copy).exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot();
    // eslint-disable-next-line no-extra-parens, @typescript-eslint/no-explicit-any
    (navigator as any).clipboard = navigatorClipBoard
  })
  test('navigator.clipboard === undefined', () => {
    const handleSelect = jest.fn()
    const renewAccessToken = jest.fn()
    const wrapper = mountWithIntl(
      <SelectAvatarTableBodyAccessToken
        additionalClassName={[]}
        handleSelect={handleSelect}
        naviagtable
        renewAccessToken={renewAccessToken}
        token="token"
      />
    )

    expect(wrapper.find(Copy).exists()).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
test('copy', () => {
  const navigatorClipBoard = navigator.clipboard
  const writeText = jest.fn();

  // eslint-disable-next-line no-extra-parens, @typescript-eslint/no-explicit-any
  (navigator as any).clipboard = {
    writeText
  }
  const handleSelect = jest.fn()
  const renewAccessToken = jest.fn()
  const wrapper = mountWithIntl(
    <SelectAvatarTableBodyAccessToken
      additionalClassName={[]}
      handleSelect={handleSelect}
      naviagtable
      renewAccessToken={renewAccessToken}
      token="token"
    />
  )

  wrapper.find('div.copy').simulate('click')
  expect(writeText).toHaveBeenCalledTimes(1)
  expect(writeText).toHaveBeenCalledWith('token');
  // eslint-disable-next-line no-extra-parens, @typescript-eslint/no-explicit-any
  (navigator as any).clipboard = navigatorClipBoard
})
test('handleFocus', () => {
  const handleSelect = jest.fn()
  const renewAccessToken = jest.fn()
  const wrapper = mountWithIntl(
    <SelectAvatarTableBodyAccessToken
      additionalClassName={[]}
      handleSelect={handleSelect}
      naviagtable
      renewAccessToken={renewAccessToken}
      token="token"
    />
  )
  const select = jest.fn()

  wrapper.find('input').simulate('focus', {
    target: {
      select
    }
  })
  expect(select).toHaveBeenCalledTimes(1)
})
describe('handleSelect', () => {
  test('event.target === event.currentTarget', () => {
    const handleSelect = jest.fn()
    const renewAccessToken = jest.fn()
    const wrapper = mountWithIntl(
      <SelectAvatarTableBodyAccessToken
        additionalClassName={[]}
        handleSelect={handleSelect}
        naviagtable
        renewAccessToken={renewAccessToken}
        token="token"
      />
    )

    wrapper.find('.lo--select-avatar--table--body--item.access-token').simulate('click')
    expect(handleSelect).toHaveBeenCalledTimes(1)
  })
  test('event.target !== event.currentTarget', () => {
    const handleSelect = jest.fn()
    const renewAccessToken = jest.fn()
    const wrapper = mountWithIntl(
      <SelectAvatarTableBodyAccessToken
        additionalClassName={[]}
        handleSelect={handleSelect}
        naviagtable
        renewAccessToken={renewAccessToken}
        token="token"
      />
    )

    wrapper.find('input').simulate('click')
    expect(handleSelect).toHaveBeenCalledTimes(0)
  })
})
test('renewAccessToken', () => {
  const handleSelect = jest.fn()
  const renewAccessToken = jest.fn()
  const wrapper = mountWithIntl(
    <SelectAvatarTableBodyAccessToken
      additionalClassName={[]}
      handleSelect={handleSelect}
      naviagtable
      renewAccessToken={renewAccessToken}
      token="token"
    />
  )

  wrapper.find('.renew').simulate('click')
  expect(renewAccessToken).toHaveBeenCalledTimes(1)
})
