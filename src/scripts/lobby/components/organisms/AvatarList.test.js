// @flow
import AvatarList from './AvatarList'
import React from 'react'
import {shallow} from 'enzyme'

test('<AvatarList isPlayer /> 0 items', () => {
  const items = []
  const kickOut = jest.fn()
  const wrapper = shallow(
    <AvatarList
      isPlayer
      items={items}
      kickOut={kickOut}
    />
  )

  expect(wrapper.children()).toHaveLength(0)
  expect(kickOut).toHaveBeenCalledTimes(0)
})
test('<AvatarList isPlayer={false} /> 0 items', () => {
  const items = []
  const kickOut = jest.fn()
  const wrapper = shallow(
    <AvatarList
      isPlayer={false}
      items={items}
      kickOut={kickOut}
    />
  )

  expect(wrapper.children()).toHaveLength(0)
  expect(kickOut).toHaveBeenCalledTimes(0)
})
test('<AvatarList isPlayer /> 1 items', () => {
  const items = [
    {
      avatarImage: 'image',
      canKickOut: false,
      isAnonymous: false,
      isHost: true,
      isMe: true,
      name: 'name',
      ping: '99.999 s',
      pingStatus: 'danger',
      token: 'token'
    }
  ]
  const kickOut = jest.fn()
  const wrapper = shallow(
    <AvatarList
      isPlayer
      items={items}
      kickOut={kickOut}
    />
  )

  expect(wrapper.children()).toHaveLength(1)
  expect(kickOut).toHaveBeenCalledTimes(1)
  expect(kickOut).toHaveBeenCalledWith('token')
})
test('<AvatarList isPlayer={false} /> 1 items', () => {
  const items = [
    {
      avatarImage: 'image',
      canKickOut: false,
      isAnonymous: false,
      isHost: true,
      isMe: true,
      name: 'name',
      ping: '99.999 s',
      pingStatus: 'danger',
      token: 'token'
    }
  ]
  const kickOut = jest.fn()
  const wrapper = shallow(
    <AvatarList
      isPlayer={false}
      items={items}
      kickOut={kickOut}
    />
  )

  expect(wrapper.children()).toHaveLength(1)
  expect(kickOut).toHaveBeenCalledTimes(1)
  expect(kickOut).toHaveBeenCalledWith('token')
})
test('<AvatarList isPlayer /> 2 items', () => {
  const items = [
    {
      avatarImage: 'image',
      canKickOut: false,
      isAnonymous: false,
      isHost: true,
      isMe: true,
      name: 'name',
      ping: '99.999 s',
      pingStatus: 'danger',
      token: 'token1'
    },
    {
      avatarImage: 'image',
      canKickOut: true,
      isAnonymous: false,
      isHost: false,
      isMe: false,
      name: 'name',
      ping: '99.999 s',
      pingStatus: 'danger',
      token: 'token2'
    }
  ]
  const kickOut = jest.fn()
  const wrapper = shallow(
    <AvatarList
      isPlayer={false}
      items={items}
      kickOut={kickOut}
    />
  )

  expect(wrapper.children()).toHaveLength(2)
  expect(kickOut).toHaveBeenCalledTimes(2)
  expect(kickOut).toHaveBeenCalledWith('token1')
  expect(kickOut).toHaveBeenCalledWith('token2')

})
test('<AvatarList isPlayer={false} /> 2 items', () => {
  const items = [
    {
      avatarImage: 'image',
      canKickOut: false,
      isAnonymous: false,
      isHost: true,
      isMe: true,
      name: 'name',
      ping: '99.999 s',
      pingStatus: 'danger',
      token: 'token1'
    },
    {
      avatarImage: 'image',
      canKickOut: true,
      isAnonymous: false,
      isHost: false,
      isMe: false,
      name: 'name',
      ping: '99.999 s',
      pingStatus: 'danger',
      token: 'token2'
    }
  ]
  const kickOut = jest.fn()
  const wrapper = shallow(
    <AvatarList
      isPlayer={false}
      items={items}
      kickOut={kickOut}
    />
  )

  expect(wrapper.children()).toHaveLength(2)
  expect(kickOut).toHaveBeenCalledTimes(2)
  expect(kickOut).toHaveBeenCalledWith('token1')
  expect(kickOut).toHaveBeenCalledWith('token2')
})
