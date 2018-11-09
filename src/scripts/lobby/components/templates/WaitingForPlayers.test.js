// @flow
import React from 'react'
import WaitingForPlayers from './WaitingForPlayers'
import {shallow} from 'enzyme'

test('<WaitingForPlayers isPlayer village />', () => {
  const transition = jest.fn()
  const village = {
    avatar: 'fixed',
    comment: 'comment',
    hostPlayer: {
      isAnonymous: false,
      name: 'hostPlayer name'
    },
    id: 1,
    idForSearching: 123,
    name: 'name',
    playerSetting: {
      current: 8,
      human: {
        current: 5,
        max: 8
      },
      number: 15,
      robot: {
        current: 3,
        min: 7
      }
    },
    roleSetting: {
      hunter: 1,
      madman: 1,
      mason: 2,
      medium: 1,
      seer: 1,
      villager: 6,
      werehamster: 1,
      werewolf: 2
    }
  }
  const kickOut = jest.fn()
  const wrapper = shallow(
    <WaitingForPlayers
      isPlayer
      kickOut={kickOut}
      menuItems={[]}
      players={[]}
      transition={transition}
      village={village}
    />
  )

  expect(wrapper.children()).toHaveLength(3)
  expect(wrapper.find('Header').exists()).toBe(true)
  expect(wrapper.find('MainContent').exists()).toBe(true)
  expect(
    wrapper
      .find('MainContent')
      .find('VillageItem')
      .exists()
  ).toBe(true)
  expect(wrapper.find('AsideContent').exists()).toBe(true)
  expect(
    wrapper
      .find('AsideContent')
      .find('AvatarList')
      .exists()
  ).toBe(true)
  expect(
    wrapper
      .find('AsideContent')
      .find('Menu')
      .exists()
  ).toBe(true)
  expect(transition).toHaveBeenCalledTimes(0)
  expect(kickOut).toHaveBeenCalledTimes(0)
})
test('<WaitingForPlayers isPlayer village={undefined} />', () => {
  const transition = jest.fn()
  const kickOut = jest.fn()
  const wrapper = shallow(
    <WaitingForPlayers
      isPlayer
      kickOut={kickOut}
      menuItems={[]}
      players={[]}
      transition={transition}
    />
  )

  expect(wrapper.children()).toHaveLength(3)
  expect(wrapper.find('Header').exists()).toBe(true)
  expect(wrapper.find('MainContent').exists()).toBe(true)
  expect(
    wrapper
      .find('MainContent')
      .find('VillageItem')
      .exists()
  ).toBe(false)
  expect(wrapper.find('AsideContent').exists()).toBe(true)
  expect(
    wrapper
      .find('AsideContent')
      .find('AvatarList')
      .exists()
  ).toBe(true)
  expect(
    wrapper
      .find('AsideContent')
      .find('Menu')
      .exists()
  ).toBe(true)
  expect(transition).toHaveBeenCalledTimes(0)
  expect(kickOut).toHaveBeenCalledTimes(0)
})
