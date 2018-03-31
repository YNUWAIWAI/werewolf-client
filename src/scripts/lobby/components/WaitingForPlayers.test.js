// @flow
import React from 'react'
import WaitingForPlayers from './WaitingForPlayers'
import {shallow} from 'enzyme'

test('<WaitingForPlayers isPlayer />', () => {
  const transition = jest.fn()
  const village = {
    name: 'name',
    id: 1,
    hostPlayer: {
      name: 'hostPlayer name',
      isAnonymous: false
    },
    playerSetting: {
      number: 15,
      current: 8,
      robot: {
        min: 7,
        current: 3
      },
      human: {
        max: 8,
        current: 5
      }
    },
    roleSetting: {
      villager: 6,
      werewolf: 2,
      seer: 1,
      medium: 1,
      madman: 1,
      hunter: 1,
      mason: 2,
      werehumster: 1
    },
    avatar: 'fixed',
    comment: 'comment'
  }
  const wrapper = shallow(
    <WaitingForPlayers
      isPlayer
      menuItems={[]}
      players={[]}
      transition={transition}
      village={village}
    />
  )

  expect(wrapper.children()).toHaveLength(3)
  expect(wrapper.find('Header').exists()).toBe(true)
  expect(wrapper.find('MainContent').exists()).toBe(true)
  expect(wrapper.find('MainContent').find('VillageItem').exists()).toBe(true)
  expect(wrapper.find('AsideContent').exists()).toBe(true)
  expect(wrapper.find('AsideContent').find('AvatarList').exists()).toBe(true)
  expect(wrapper.find('AsideContent').find('Menu').exists()).toBe(true)
  expect(transition).toHaveBeenCalledTimes(0)
})
