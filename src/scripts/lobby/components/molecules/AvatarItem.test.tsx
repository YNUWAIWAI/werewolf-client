/* global lobby */
import * as React from 'react'
import AvatarItem from './AvatarItem'
import {getMessages} from '../../../../i18n/lobby'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer(lobby.Language.ja, getMessages(lobby.Language.ja))

test('<AvatarItem avatarImage="avatarImage" canKickOut isHost isMe name="name" />', () => {
  const kickOut = jest.fn()
  const wrapper = mountWithIntl(
    <AvatarItem
      avatarImage="avatarImage"
      canKickOut
      isAnonymous={false}
      isHost
      isMe
      kickOut={kickOut}
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
  expect(kickOut).toHaveBeenCalledTimes(0)

})
test('<AvatarItem avatarImage="avatarImage" canKickOut isHost={false} isMe name="name" />', () => {
  const kickOut = jest.fn()
  const wrapper = mountWithIntl(
    <AvatarItem
      avatarImage="avatarImage"
      canKickOut
      isAnonymous={false}
      isHost={false}
      isMe
      kickOut={kickOut}
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
  expect(kickOut).toHaveBeenCalledTimes(0)

})
test('<AvatarItem avatarImage="avatarImage" canKickOut isHost isMe={false} name="name" />', () => {
  const kickOut = jest.fn()
  const wrapper = mountWithIntl(
    <AvatarItem
      avatarImage="avatarImage"
      canKickOut
      isAnonymous={false}
      isHost
      isMe={false}
      kickOut={kickOut}
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
  expect(kickOut).toHaveBeenCalledTimes(0)

})
test('<AvatarItem avatarImage="avatarImage" canKickOut isHost={false} isMe={false} name="name" />', () => {
  const kickOut = jest.fn()
  const wrapper = mountWithIntl(
    <AvatarItem
      avatarImage="avatarImage"
      canKickOut
      isAnonymous={false}
      isHost={false}
      isMe={false}
      kickOut={kickOut}
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
  expect(kickOut).toHaveBeenCalledTimes(0)

})
test('<AvatarItem avatarImage="avatarImage" canKickOut isHost={false} isMe name="name" /> onClick', () => {
  const kickOut = jest.fn()
  const wrapper = mountWithIntl(
    <AvatarItem
      avatarImage="avatarImage"
      canKickOut
      isAnonymous={false}
      isHost={false}
      isMe
      kickOut={kickOut}
      name="name"
      ping="99.999 s"
      pingStatus={lobby.PingStatus.danger}
    />
  )

  const tmp = window.confirm

  window.confirm = () => true
  wrapper.simulate('click')
  expect(kickOut).toHaveBeenCalledTimes(1)
  window.confirm = tmp
})
test('<AvatarItem avatarImage="avatarImage" canKickOut={false} isHost={false} isMe name="name" /> onClick', () => {
  const kickOut = jest.fn()
  const wrapper = mountWithIntl(
    <AvatarItem
      avatarImage="avatarImage"
      canKickOut={false}
      isAnonymous={false}
      isHost={false}
      isMe
      kickOut={kickOut}
      name="name"
      ping="99.999 s"
      pingStatus={lobby.PingStatus.danger}
    />
  )

  wrapper.simulate('click')
  expect(kickOut).toHaveBeenCalledTimes(0)
})
