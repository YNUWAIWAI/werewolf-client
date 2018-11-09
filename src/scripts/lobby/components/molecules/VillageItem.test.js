// @flow
import React from 'react'
import type {Village} from 'lobby'
import VillageItem from './VillageItem'
import {getMessages} from '../../../../i18n/lobby'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer('ja', getMessages('ja'))

test('<VillageItem isPlayer />', () => {
  const village: Village = {
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
  const handleClick = jest.fn()
  const wrapper = mountWithIntl(<VillageItem {... village} handleClick={handleClick} isPlayer />)

  expect(wrapper.find('.village--item--val.village-name').text()).toBe('name')
  expect(wrapper.find('.village--item--val.id-for-searching').text()).toBe('#123')
  expect(wrapper.find('.village--item--val.host-name').text()).toBe('hostPlayer name')
  expect(wrapper.find('.village--item--val.setup1').text()).toBe('8 / 15 players')
  expect(wrapper.find('.village--item--val.setup2').text()).toBe('Fixed Avatar')
  expect(wrapper.find('.village--item--val.comment').text()).toBe('comment')
  expect(handleClick).toHaveBeenCalledTimes(0)
})
test('<VillageItem isPlayer={false} />', () => {
  const village: Village = {
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
  const handleClick = jest.fn()
  const wrapper = mountWithIntl(<VillageItem {... village} handleClick={handleClick} isPlayer={false} />)

  expect(wrapper.find('.village--item--val.village-name').text()).toBe('name')
  expect(wrapper.find('.village--item--val.id-for-searching').text()).toBe('#123')
  expect(wrapper.find('.village--item--val.host-name').text()).toBe('hostPlayer name')
  expect(wrapper.find('.village--item--val.setup1').text()).toBe('15 players')
  expect(wrapper.find('.village--item--val.setup2').text()).toBe('Fixed Avatar')
  expect(wrapper.find('.village--item--val.comment').text()).toBe('comment')
  expect(handleClick).toHaveBeenCalledTimes(0)
})
test('<VillageItem isPlayer /> idForSearching is invalid', () => {
  const village: Village = {
    avatar: 'fixed',
    comment: 'comment',
    hostPlayer: {
      isAnonymous: false,
      name: 'hostPlayer name'
    },
    id: 1,
    idForSearching: 1.23,
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
  const handleClick = jest.fn()
  const wrapper = mountWithIntl(<VillageItem {... village} handleClick={handleClick} isPlayer />)

  expect(wrapper.find('.village--item--val.id-for-searching').text()).toBe('####')
})
test('<VillageItem isPlayer /> onClick', () => {
  const village: Village = {
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
  const handleClick = jest.fn()
  const wrapper = mountWithIntl(<VillageItem {... village} handleClick={handleClick} isPlayer />)

  wrapper.simulate('click')
  expect(handleClick).toHaveBeenCalledTimes(1)
})
test('<VillageItem isPlayer={false} /> onClick', () => {
  const village: Village = {
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
  const handleClick = jest.fn()
  const wrapper = mountWithIntl(<VillageItem {... village} handleClick={handleClick} isPlayer={false} />)

  wrapper.simulate('click')
  expect(handleClick).toHaveBeenCalledTimes(1)
})
