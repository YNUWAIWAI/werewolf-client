import * as React from 'react'
import Copy from './svg/Copy'
import SelectAvatarTableBodyAccessToken from './SelectAvatarTableBodyAccessToken'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

describe('render', () => {
  test('navigator.clipboard !== undefined', () => {
    const navigatorClipBoard = navigator.clipboard;

    (navigator as any).clipboard = {}
    const renewAccessToken = jest.fn()
    const wrapper = mountWithIntl(
      <SelectAvatarTableBodyAccessToken
        renewAccessToken={renewAccessToken}
        token="token"
      />
    )

    expect(wrapper.find(Copy).exists()).toBe(true);
    (navigator as any).clipboard = navigatorClipBoard
  })
  test('navigator.clipboard === undefined', () => {
    const renewAccessToken = jest.fn()
    const wrapper = mountWithIntl(
      <SelectAvatarTableBodyAccessToken
        renewAccessToken={renewAccessToken}
        token="token"
      />
    )

    expect(wrapper.find(Copy).exists()).toBe(false)
  })
})
test('copy', () => {
  const navigatorClipBoard = navigator.clipboard
  const writeText = jest.fn();

  (navigator as any).clipboard = {
    writeText
  }
  const renewAccessToken = jest.fn()
  const wrapper = mountWithIntl(
    <SelectAvatarTableBodyAccessToken
      renewAccessToken={renewAccessToken}
      token="token"
    />
  )

  wrapper.find('div.copy').simulate('click')
  expect(writeText).toHaveBeenCalledTimes(1)
  expect(writeText).toHaveBeenCalledWith('token');
  (navigator as any).clipboard = navigatorClipBoard
})
test('handleFocus', () => {
  const renewAccessToken = jest.fn()
  const wrapper = mountWithIntl(
    <SelectAvatarTableBodyAccessToken
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
test('renewAccessToken', () => {
  const renewAccessToken = jest.fn()
  const wrapper = mountWithIntl(
    <SelectAvatarTableBodyAccessToken
      renewAccessToken={renewAccessToken}
      token="token"
    />
  )

  wrapper.find('.renew').simulate('click')
  expect(renewAccessToken).toHaveBeenCalledTimes(1)
})
