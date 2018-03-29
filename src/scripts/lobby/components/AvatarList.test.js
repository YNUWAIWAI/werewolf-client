// @flow
import AvatarList from './AvatarList'
import React from 'react'
import {shallow} from 'enzyme'

test('<AvatarList isPlayer /> 0 items', () => {
  const items = []
  const wrapper = shallow(<AvatarList isPlayer items={items} />)

  expect(wrapper.children()).toHaveLength(0)
})
test('<AvatarList isPlayer={false} /> 0 items', () => {
  const items = []
  const wrapper = shallow(<AvatarList isPlayer={false} items={items} />)

  expect(wrapper.children()).toHaveLength(0)
})
test('<AvatarList isPlayer /> 1 items', () => {
  const items = [
    {
      avatarImage: 'image',
      isHost: true,
      name: 'name',
      token: 'token'
    }
  ]
  const wrapper = shallow(<AvatarList isPlayer items={items} />)

  expect(wrapper.children()).toHaveLength(1)
})
test('<AvatarList isPlayer={false} /> 1 items', () => {
  const items = [
    {
      avatarImage: 'image',
      isHost: true,
      name: 'name',
      token: 'token'
    }
  ]
  const wrapper = shallow(<AvatarList isPlayer={false} items={items} />)

  expect(wrapper.children()).toHaveLength(1)
})
test('<AvatarList isPlayer /> 2 items', () => {
  const items = [
    {
      avatarImage: 'image',
      isHost: true,
      name: 'name',
      token: 'token'
    },
    {
      avatarImage: 'image',
      isHost: true,
      name: 'name',
      token: 'token'
    }
  ]
  const wrapper = shallow(<AvatarList isPlayer items={items} />)

  expect(wrapper.children()).toHaveLength(2)
})
test('<AvatarList isPlayer={false} /> 2 items', () => {
  const items = [
    {
      avatarImage: 'image',
      isHost: true,
      name: 'name',
      token: 'token'
    },
    {
      avatarImage: 'image',
      isHost: true,
      name: 'name',
      token: 'token'
    }
  ]
  const wrapper = shallow(<AvatarList isPlayer={false} items={items} />)

  expect(wrapper.children()).toHaveLength(2)
})
