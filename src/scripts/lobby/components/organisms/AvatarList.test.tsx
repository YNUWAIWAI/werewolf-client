import * as React from 'react'
import AvatarList, {Props} from './AvatarList'
import {shallow} from 'enzyme'

describe('<AvatarList />', () => {
  test('0 items', () => {
    const items: Props['items'] = []
    const kickOut = jest.fn()
    const wrapper = shallow(
      <AvatarList
        items={items}
        kickOut={kickOut}
      />
    )

    expect(wrapper.children()).toHaveLength(0)
    expect(kickOut).toHaveBeenCalledTimes(0)
  })
  test('1 items', () => {
    const items: Props['items'] = [
      {
        avatarImage: 'image',
        canKickOut: false,
        isAnonymous: false,
        isHost: true,
        isMe: true,
        name: 'name',
        ping: '99.999 s',
        pingStatus: lobby.PingStatus.danger,
        token: 'token'
      }
    ]
    const kickOut = jest.fn()
    const wrapper = shallow(
      <AvatarList
        items={items}
        kickOut={kickOut}
      />
    )

    expect(wrapper.children()).toHaveLength(1)
    expect(kickOut).toHaveBeenCalledTimes(1)
    expect(kickOut).toHaveBeenCalledWith('token')
  })
  test('2 items', () => {
    const items: Props['items'] = [
      {
        avatarImage: 'image',
        canKickOut: false,
        isAnonymous: false,
        isHost: true,
        isMe: true,
        name: 'name',
        ping: '99.999 s',
        pingStatus: lobby.PingStatus.danger,
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
        pingStatus: lobby.PingStatus.danger,
        token: 'token2'
      }
    ]
    const kickOut = jest.fn()
    const wrapper = shallow(
      <AvatarList
        items={items}
        kickOut={kickOut}
      />
    )

    expect(wrapper.children()).toHaveLength(2)
    expect(kickOut).toHaveBeenCalledTimes(2)
    expect(kickOut).toHaveBeenCalledWith('token1')
    expect(kickOut).toHaveBeenCalledWith('token2')
  })
})
