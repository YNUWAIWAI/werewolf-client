// @flow
import AvatarItem from './AvatarItem'
import React from 'react'
import {getMessages} from '../../../../i18n/lobby'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer('ja', getMessages('ja'))

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
      pingStatus="danger"
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
      pingStatus="danger"
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
      pingStatus="danger"
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
      pingStatus="danger"
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
      pingStatus="danger"
    />
  )

  const tmp = global.confirm

  global.confirm = () => true
  wrapper.simulate('click')
  expect(kickOut).toHaveBeenCalledTimes(1)
  global.confirm = tmp
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
      pingStatus="danger"
    />
  )

  wrapper.simulate('click')
  expect(kickOut).toHaveBeenCalledTimes(0)
})
