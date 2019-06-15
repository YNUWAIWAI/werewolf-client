/* global lobby */
import * as React from 'react'
import VillageItem from './VillageItem'
import {getMessages} from '../../../../i18n/lobby'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

describe('<VillageItem />', () => {
  test('isPlayer: true', () => {
    const village: lobby.Village = {
      avatar: lobby.Avatar.fixed,
      comment: 'comment',
      hostPlayer: {
        isAnonymous: false,
        isHuman: true,
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
    const wrapper = mountWithIntl(
      <VillageItem
        {... village}
        handleClick={handleClick}
        isPlayer
      />
    )

    expect(wrapper.find('.lo--village--item.clickable').exists()).toBe(true)
    expect(wrapper.find('.lo--village--item--val.village-name').text()).toBe('name')
    expect(wrapper.find('.lo--village--item--val.id-for-searching').text()).toBe('#123')
    expect(wrapper.find('.lo--village--item--val.host-name').text()).toBe('hostPlayer name')
    expect(wrapper.find('.lo--village--item--val.setup1').text()).toBe('8 / 15 players')
    expect(wrapper.find('.lo--village--item--val.setup2').text()).toBe('Fixed avatar')
    expect(wrapper.find('.lo--village--item--val.comment').text()).toBe('comment')
    expect(handleClick).toHaveBeenCalledTimes(0)
  })
  test('isPlayer: false', () => {
    const village: lobby.Village = {
      avatar: lobby.Avatar.fixed,
      comment: 'comment',
      hostPlayer: {
        isAnonymous: false,
        isHuman: true,
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
    const wrapper = mountWithIntl(
      <VillageItem
        {... village}
        handleClick={handleClick}
        isPlayer={false}
      />
    )

    expect(wrapper.find('.lo--village--item.clickable').exists()).toBe(true)
    expect(wrapper.find('.lo--village--item--val.village-name').text()).toBe('name')
    expect(wrapper.find('.lo--village--item--val.id-for-searching').text()).toBe('#123')
    expect(wrapper.find('.lo--village--item--val.host-name').text()).toBe('hostPlayer name')
    expect(wrapper.find('.lo--village--item--val.setup1').text()).toBe('15 players')
    expect(wrapper.find('.lo--village--item--val.setup2').text()).toBe('Fixed avatar')
    expect(wrapper.find('.lo--village--item--val.comment').text()).toBe('comment')
    expect(handleClick).toHaveBeenCalledTimes(0)
  })
  test('isPlayer: true, idForSearching is invalid', () => {
    const village: lobby.Village = {
      avatar: lobby.Avatar.fixed,
      comment: 'comment',
      hostPlayer: {
        isAnonymous: false,
        isHuman: true,
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

    expect(wrapper.find('.lo--village--item--val.id-for-searching').text()).toBe('####')
  })
  test('isPlayer: true, onClick', () => {
    const village: lobby.Village = {
      avatar: lobby.Avatar.fixed,
      comment: 'comment',
      hostPlayer: {
        isAnonymous: false,
        isHuman: true,
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
    const wrapper = mountWithIntl(
      <VillageItem
        {... village}
        handleClick={handleClick}
        isPlayer
      />
    )

    wrapper.simulate('click')
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
  test('isPlayer: false, onClick', () => {
    const village: lobby.Village = {
      avatar: lobby.Avatar.fixed,
      comment: 'comment',
      hostPlayer: {
        isAnonymous: false,
        isHuman: true,
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
    const wrapper = mountWithIntl(
      <VillageItem
        {... village}
        handleClick={handleClick}
        isPlayer={false}
      />
    )

    wrapper.simulate('click')
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
  test('typeof handleClick !== "function"', () => {
    const village: lobby.Village = {
      avatar: lobby.Avatar.fixed,
      comment: 'comment',
      hostPlayer: {
        isAnonymous: false,
        isHuman: true,
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
    const wrapper = mountWithIntl(
      <VillageItem
        {... village}
        isPlayer
      />
    )

    expect(wrapper.find('.lo--village--item.clickable').exists()).toBe(false)
    expect(wrapper.find('.lo--village--item--val.village-name').text()).toBe('name')
    expect(wrapper.find('.lo--village--item--val.id-for-searching').text()).toBe('#123')
    expect(wrapper.find('.lo--village--item--val.host-name').text()).toBe('hostPlayer name')
    expect(wrapper.find('.lo--village--item--val.setup1').text()).toBe('8 / 15 players')
    expect(wrapper.find('.lo--village--item--val.setup2').text()).toBe('Fixed avatar')
    expect(wrapper.find('.lo--village--item--val.comment').text()).toBe('comment')
  })
})
