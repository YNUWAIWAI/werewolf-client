// @flow
import React from 'react'
import VillageItem from './VillageItem'
import {shallow} from 'enzyme'

test('<VillageItem isPlayer />', () => {
  const village: Village = {
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
  const handleClick = jest.fn()
  const wrapper = shallow(<VillageItem {... village} handleClick={handleClick} isPlayer />)

  expect(wrapper.children()).toHaveLength(10)
  expect(wrapper.find('.village--item--village-name--val').text()).toBe('name')
  expect(wrapper.find('.village--item--host-name--val').text()).toBe('hostPlayer name')
  expect(wrapper.find('.village--item--setup--val1').text()).toBe('8 / 15 players')
  expect(wrapper.find('.village--item--setup--val2').text()).toBe('Fixed Avatar')
  expect(wrapper.find('.village--item--comment--val').text()).toBe('comment')
  expect(handleClick).toHaveBeenCalledTimes(0)
})
test('<VillageItem isPlayer={false} />', () => {
  const village: Village = {
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
    avatar: 'random',
    comment: 'comment'
  }
  const handleClick = jest.fn()
  const wrapper = shallow(<VillageItem {... village} handleClick={handleClick} isPlayer={false} />)

  expect(wrapper.children()).toHaveLength(10)
  expect(wrapper.find('.village--item--village-name--val').text()).toBe('name')
  expect(wrapper.find('.village--item--host-name--val').text()).toBe('hostPlayer name')
  expect(wrapper.find('.village--item--setup--val1').text()).toBe('15 players')
  expect(wrapper.find('.village--item--setup--val2').text()).toBe('Random Avatar')
  expect(wrapper.find('.village--item--comment--val').text()).toBe('comment')
  expect(handleClick).toHaveBeenCalledTimes(0)
})
test('<VillageItem isPlayer /> onClick', () => {
  const village: Village = {
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
  const handleClick = jest.fn()
  const wrapper = shallow(<VillageItem {... village} handleClick={handleClick} isPlayer />)

  wrapper.simulate('click')
  expect(handleClick).toHaveBeenCalledTimes(1)
})
test('<VillageItem isPlayer={false} /> onClick', () => {
  const village: Village = {
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
    avatar: 'random',
    comment: 'comment'
  }
  const handleClick = jest.fn()
  const wrapper = shallow(<VillageItem {... village} handleClick={handleClick} isPlayer={false} />)

  wrapper.simulate('click')
  expect(handleClick).toHaveBeenCalledTimes(1)
})
