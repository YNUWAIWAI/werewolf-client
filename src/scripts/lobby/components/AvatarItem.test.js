// @flow
import AvatarItem from './AvatarItem'
import React from 'react'
import {shallow} from 'enzyme'

test('<AvatarItem avatarImage="avatarImage" canKickOut isHost name="name" />', () => {
  const kickOut = jest.fn()
  const wrapper = shallow(
    <AvatarItem
      avatarImage="avatarImage"
      canKickOut
      isHost
      kickOut={kickOut}
      name="name"
    />
  )

  expect(wrapper.children()).toHaveLength(3)
  expect(wrapper.find('img.avatar-list--item--image[src="avatarImage"]').exists()).toBe(true)
  expect(wrapper.find('.avatar-list--item--name').text()).toBe('name')
  expect(wrapper.find('.avatar-list--item--host').text()).toBe('Host')
  expect(kickOut).toHaveBeenCalledTimes(0)

})
test('<AvatarItem avatarImage="avatarImage" canKickOut isHost={false} name="name" />', () => {
  const kickOut = jest.fn()
  const wrapper = shallow(
    <AvatarItem
      avatarImage="avatarImage"
      canKickOut
      isHost={false}
      kickOut={kickOut}
      name="name"
    />
  )

  expect(wrapper.children()).toHaveLength(2)
  expect(wrapper.find('img.avatar-list--item--image[src="avatarImage"]').exists()).toBe(true)
  expect(wrapper.find('.avatar-list--item--name').text()).toBe('name')
  expect(wrapper.find('.avatar-list--item--host').exists()).toBe(false)
  expect(kickOut).toHaveBeenCalledTimes(0)

})
test('<AvatarItem avatarImage="avatarImage" canKickOut isHost={false} name="name" /> onClick', () => {
  const kickOut = jest.fn()
  const wrapper = shallow(
    <AvatarItem
      avatarImage="avatarImage"
      canKickOut
      isHost={false}
      kickOut={kickOut}
      name="name"
    />
  )

  wrapper.simulate('click')
  expect(kickOut).toHaveBeenCalledTimes(1)
})
test('<AvatarItem avatarImage="avatarImage" canKickOut={false} isHost={false} name="name" /> onClick', () => {
  const kickOut = jest.fn()
  const wrapper = shallow(
    <AvatarItem
      avatarImage="avatarImage"
      canKickOut={false}
      isHost={false}
      kickOut={kickOut}
      name="name"
    />
  )

  wrapper.simulate('click')
  expect(kickOut).toHaveBeenCalledTimes(0)
})
