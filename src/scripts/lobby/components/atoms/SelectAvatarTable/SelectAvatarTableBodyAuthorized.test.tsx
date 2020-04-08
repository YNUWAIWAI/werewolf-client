import * as React from 'react'
import SelectAvatarTableBodyAuthorized from './SelectAvatarTableBodyAuthorized'
import {getMessages} from '../../../i18n'
import {initRenderer} from '../../../tools'
import {lobby} from '../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

describe('render', () => {
  test('authorized === lobby.Authorized.no', () => {
    const handleAccept = jest.fn()
    const handleSelect = jest.fn()
    const wrapper = mountWithIntl(
      <SelectAvatarTableBodyAuthorized
        additionalClassName={[]}
        authorized={lobby.Authorized.no}
        handleAccept={handleAccept}
        handleSelect={handleSelect}
        naviagtable
      />
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
  test('authorized === lobby.Authorized.waitForAcceptance', () => {
    const handleAccept = jest.fn()
    const handleSelect = jest.fn()
    const wrapper = mountWithIntl(
      <SelectAvatarTableBodyAuthorized
        additionalClassName={[]}
        authorized={lobby.Authorized.waitForAcceptance}
        handleAccept={handleAccept}
        handleSelect={handleSelect}
        naviagtable
      />
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
  test('authorized === lobby.Authorized.yes', () => {
    const handleAccept = jest.fn()
    const handleSelect = jest.fn()
    const wrapper = mountWithIntl(
      <SelectAvatarTableBodyAuthorized
        additionalClassName={[]}
        authorized={lobby.Authorized.yes}
        handleAccept={handleAccept}
        handleSelect={handleSelect}
        naviagtable
      />
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})
describe('handleSelect', () => {
  test('event.target === event.currentTarget', () => {
    const handleAccept = jest.fn()
    const handleSelect = jest.fn()
    const wrapper = mountWithIntl(
      <SelectAvatarTableBodyAuthorized
        additionalClassName={[]}
        authorized={lobby.Authorized.waitForAcceptance}
        handleAccept={handleAccept}
        handleSelect={handleSelect}
        naviagtable
      />
    )

    wrapper.find('.lo--select-avatar--table--body--item.authorized').simulate('click')
    expect(handleSelect).toHaveBeenCalledTimes(1)
  })
  test('event.target !== event.currentTarget', () => {
    const handleAccept = jest.fn()
    const handleSelect = jest.fn()
    const wrapper = mountWithIntl(
      <SelectAvatarTableBodyAuthorized
        additionalClassName={[]}
        authorized={lobby.Authorized.waitForAcceptance}
        handleAccept={handleAccept}
        handleSelect={handleSelect}
        naviagtable
      />
    )

    wrapper.find('.lo--select-avatar--table--body--item.authorized > .accept').simulate('click')
    expect(handleSelect).toHaveBeenCalledTimes(0)
  })
})
