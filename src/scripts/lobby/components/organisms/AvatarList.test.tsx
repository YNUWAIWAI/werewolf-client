/* global lobby */
import * as React from 'react'
import AvatarList, {Props} from './AvatarList'
import {shallow} from 'enzyme'

describe('render', () => {
  test('0 items', () => {
    const items: Props['items'] = []
    const confirmKickOutPlayer = jest.fn()
    const wrapper = shallow(
      <AvatarList
        confirmKickOutPlayer={confirmKickOutPlayer}
        items={items}
      />
    )

    expect(wrapper.children()).toHaveLength(0)
    expect(confirmKickOutPlayer).toHaveBeenCalledTimes(0)
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
    const confirmKickOutPlayer = jest.fn()
    const wrapper = shallow(
      <AvatarList
        confirmKickOutPlayer={confirmKickOutPlayer}
        items={items}
      />
    )

    expect(wrapper.children()).toHaveLength(1)
    expect(confirmKickOutPlayer).toHaveBeenCalledTimes(0)
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
    const confirmKickOutPlayer = jest.fn()
    const wrapper = shallow(
      <AvatarList
        confirmKickOutPlayer={confirmKickOutPlayer}
        items={items}
      />
    )

    expect(wrapper.children()).toHaveLength(2)
    expect(confirmKickOutPlayer).toHaveBeenCalledTimes(0)
  })
})
