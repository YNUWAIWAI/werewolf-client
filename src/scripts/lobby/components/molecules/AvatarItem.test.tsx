/* global lobby */
import * as React from 'react'
import AvatarItem from './AvatarItem'
import {getMessages} from '../../../../i18n/lobby'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer(lobby.Language.ja, getMessages(lobby.Language.ja))

describe('render', () => {
  test('canKickOut={true} isHost={true} isMe={true}', () => {
    const confirmKickOutPlayer = jest.fn()
    const wrapper = mountWithIntl(
      <AvatarItem
        avatarImage="avatarImage"
        canKickOut
        confirmKickOutPlayer={confirmKickOutPlayer}
        isAnonymous={false}
        isHost
        isMe
        name="name"
        ping="99.999 s"
        pingStatus={lobby.PingStatus.danger}
      />
    )

    expect(wrapper.find('.avatar-list--item--image').exists()).toBe(true)
    expect(wrapper.find('.avatar-list--item').hasClass('me')).toBe(true)
    expect(wrapper.find('.avatar-list--item--name').text()).toBe('name')
    expect(wrapper.find('.avatar-list--item--host').text()).toBe('Host')
    expect(wrapper.find('.avatar-list--item--ping').text()).toBe('99.999 s')
    expect(confirmKickOutPlayer).toHaveBeenCalledTimes(0)
  })
  test('canKickOut={false} isHost={true} isMe={true}', () => {
    const confirmKickOutPlayer = jest.fn()
    const wrapper = mountWithIntl(
      <AvatarItem
        avatarImage="avatarImage"
        canKickOut={false}
        confirmKickOutPlayer={confirmKickOutPlayer}
        isAnonymous={false}
        isHost
        isMe
        name="name"
        ping="99.999 s"
        pingStatus={lobby.PingStatus.danger}
      />
    )

    expect(wrapper.find('.avatar-list--item--image').exists()).toBe(true)
    expect(wrapper.find('.avatar-list--item').hasClass('me')).toBe(true)
    expect(wrapper.find('.avatar-list--item--name').text()).toBe('name')
    expect(wrapper.find('.avatar-list--item--host').text()).toBe('Host')
    expect(wrapper.find('.avatar-list--item--ping').text()).toBe('99.999 s')
    expect(confirmKickOutPlayer).toHaveBeenCalledTimes(0)
  })
  test('canKickOut={true} isHost={false} isMe={true}', () => {
    const confirmKickOutPlayer = jest.fn()
    const wrapper = mountWithIntl(
      <AvatarItem
        avatarImage="avatarImage"
        canKickOut
        confirmKickOutPlayer={confirmKickOutPlayer}
        isAnonymous={false}
        isHost={false}
        isMe
        name="name"
        ping="99.999 s"
        pingStatus={lobby.PingStatus.danger}
      />
    )

    expect(wrapper.find('.avatar-list--item--image').exists()).toBe(true)
    expect(wrapper.find('.avatar-list--item').hasClass('me')).toBe(true)
    expect(wrapper.find('.avatar-list--item--name').text()).toBe('name')
    expect(wrapper.find('.avatar-list--item--host').exists()).toBe(false)
    expect(wrapper.find('.avatar-list--item--ping').text()).toBe('99.999 s')
    expect(confirmKickOutPlayer).toHaveBeenCalledTimes(0)
  })
  test('canKickOut={true} isHost={true} isMe={false}', () => {
    const confirmKickOutPlayer = jest.fn()
    const wrapper = mountWithIntl(
      <AvatarItem
        avatarImage="avatarImage"
        canKickOut
        confirmKickOutPlayer={confirmKickOutPlayer}
        isAnonymous={false}
        isHost
        isMe={false}
        name="name"
        ping="99.999 s"
        pingStatus={lobby.PingStatus.danger}
      />
    )

    expect(wrapper.find('.avatar-list--item--image').exists()).toBe(true)
    expect(wrapper.find('.avatar-list--item').hasClass('me')).toBe(false)
    expect(wrapper.find('.avatar-list--item--name').text()).toBe('name')
    expect(wrapper.find('.avatar-list--item--host').text()).toBe('Host')
    expect(wrapper.find('.avatar-list--item--ping').text()).toBe('99.999 s')
    expect(confirmKickOutPlayer).toHaveBeenCalledTimes(0)
  })
  test('canKickOut={false} isHost={false} isMe={true}', () => {
    const confirmKickOutPlayer = jest.fn()
    const wrapper = mountWithIntl(
      <AvatarItem
        avatarImage="avatarImage"
        canKickOut={false}
        confirmKickOutPlayer={confirmKickOutPlayer}
        isAnonymous={false}
        isHost={false}
        isMe
        name="name"
        ping="99.999 s"
        pingStatus={lobby.PingStatus.danger}
      />
    )

    expect(wrapper.find('.avatar-list--item--image').exists()).toBe(true)
    expect(wrapper.find('.avatar-list--item').hasClass('me')).toBe(true)
    expect(wrapper.find('.avatar-list--item--name').text()).toBe('name')
    expect(wrapper.find('.avatar-list--item--host').exists()).toBe(false)
    expect(wrapper.find('.avatar-list--item--ping').text()).toBe('99.999 s')
    expect(confirmKickOutPlayer).toHaveBeenCalledTimes(0)
  })
  test('canKickOut={true} isHost={false} isMe={false}', () => {
    const confirmKickOutPlayer = jest.fn()
    const wrapper = mountWithIntl(
      <AvatarItem
        avatarImage="avatarImage"
        canKickOut
        confirmKickOutPlayer={confirmKickOutPlayer}
        isAnonymous={false}
        isHost={false}
        isMe={false}
        name="name"
        ping="99.999 s"
        pingStatus={lobby.PingStatus.danger}
      />
    )

    expect(wrapper.find('.avatar-list--item--image').exists()).toBe(true)
    expect(wrapper.find('.avatar-list--item').hasClass('me')).toBe(false)
    expect(wrapper.find('.avatar-list--item--name').text()).toBe('name')
    expect(wrapper.find('.avatar-list--item--host').exists()).toBe(false)
    expect(wrapper.find('.avatar-list--item--ping').text()).toBe('99.999 s')
    expect(confirmKickOutPlayer).toHaveBeenCalledTimes(0)
  })
  test('canKickOut={false} isHost={true} isMe={false}', () => {
    const confirmKickOutPlayer = jest.fn()
    const wrapper = mountWithIntl(
      <AvatarItem
        avatarImage="avatarImage"
        canKickOut={false}
        confirmKickOutPlayer={confirmKickOutPlayer}
        isAnonymous={false}
        isHost
        isMe={false}
        name="name"
        ping="99.999 s"
        pingStatus={lobby.PingStatus.danger}
      />
    )

    expect(wrapper.find('.avatar-list--item--image').exists()).toBe(true)
    expect(wrapper.find('.avatar-list--item').hasClass('me')).toBe(false)
    expect(wrapper.find('.avatar-list--item--name').text()).toBe('name')
    expect(wrapper.find('.avatar-list--item--host').exists()).toBe(true)
    expect(wrapper.find('.avatar-list--item--ping').text()).toBe('99.999 s')
    expect(confirmKickOutPlayer).toHaveBeenCalledTimes(0)
  })
  test('canKickOut={false} isHost={false} isMe={false}', () => {
    const confirmKickOutPlayer = jest.fn()
    const wrapper = mountWithIntl(
      <AvatarItem
        avatarImage="avatarImage"
        canKickOut={false}
        confirmKickOutPlayer={confirmKickOutPlayer}
        isAnonymous={false}
        isHost={false}
        isMe={false}
        name="name"
        ping="99.999 s"
        pingStatus={lobby.PingStatus.danger}
      />
    )

    expect(wrapper.find('.avatar-list--item--image').exists()).toBe(true)
    expect(wrapper.find('.avatar-list--item').hasClass('me')).toBe(false)
    expect(wrapper.find('.avatar-list--item--name').text()).toBe('name')
    expect(wrapper.find('.avatar-list--item--host').exists()).toBe(false)
    expect(wrapper.find('.avatar-list--item--ping').text()).toBe('99.999 s')
    expect(confirmKickOutPlayer).toHaveBeenCalledTimes(0)
  })
})
describe('onClick', () => {
  test('canKickOut={true}', () => {
    const confirmKickOutPlayer = jest.fn()
    const wrapper = mountWithIntl(
      <AvatarItem
        avatarImage="avatarImage"
        canKickOut
        confirmKickOutPlayer={confirmKickOutPlayer}
        isAnonymous={false}
        isHost={false}
        isMe
        name="name"
        ping="99.999 s"
        pingStatus={lobby.PingStatus.danger}
      />
    )

    wrapper.simulate('click')
    expect(confirmKickOutPlayer).toHaveBeenCalledTimes(1)
  })
  test('canKickOut={false}', () => {
    const confirmKickOutPlayer = jest.fn()
    const wrapper = mountWithIntl(
      <AvatarItem
        avatarImage="avatarImage"
        canKickOut={false}
        confirmKickOutPlayer={confirmKickOutPlayer}
        isAnonymous={false}
        isHost={false}
        isMe
        name="name"
        ping="99.999 s"
        pingStatus={lobby.PingStatus.danger}
      />
    )

    wrapper.simulate('click')
    expect(confirmKickOutPlayer).toHaveBeenCalledTimes(0)
  })
})
