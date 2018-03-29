// @flow
import AvatarItem from './AvatarItem'
import React from 'react'
import {shallow} from 'enzyme'

test('<AvatarItem avatarImage="avatarImage" isHost name="name" />', () => {
  const wrapper = shallow(<AvatarItem avatarImage="avatarImage" isHost name="name" />)

  expect(wrapper.children()).toHaveLength(3)
  expect(wrapper.find('img.avatar-list--item--image[src="avatarImage"]').exists()).toBe(true)
  expect(wrapper.find('.avatar-list--item--name').text()).toBe('name')
  expect(wrapper.find('.avatar-list--item--host').text()).toBe('Host')
})
test('<AvatarItem avatarImage="avatarImage" isHost={false} name="name" />', () => {
  const wrapper = shallow(<AvatarItem avatarImage="avatarImage" isHost={false} name="name" />)

  expect(wrapper.children()).toHaveLength(2)
  expect(wrapper.find('img.avatar-list--item--image[src="avatarImage"]').exists()).toBe(true)
  expect(wrapper.find('.avatar-list--item--name').text()).toBe('name')
  expect(wrapper.find('.avatar-list--item--host').exists()).toBe(false)
})
