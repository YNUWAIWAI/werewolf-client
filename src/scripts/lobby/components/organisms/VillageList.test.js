// @flow
import React from 'react'
import type {Village} from 'lobby'
import VillageList from './VillageList'
import {shallow} from 'enzyme'

test('<VillageList isPlayer /> 0 item', () => {
  const items: Village[] = []
  const selectVillageEventHandler = jest.fn()
  const selectVillage = jest.fn().mockReturnValue(selectVillageEventHandler)
  const wrapper = shallow(<VillageList isPlayer items={items} selectVillage={selectVillage} />)

  expect(wrapper.children()).toHaveLength(0)
  expect(selectVillageEventHandler).toHaveBeenCalledTimes(0)
  expect(selectVillage).toHaveBeenCalledTimes(0)
})
test('<VillageList isPlayer /> 1 item', () => {
  const items: Village[] = [
    {
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
        werehumster: 1,
        werewolf: 2
      }
    }
  ]
  const selectVillageEventHandler = jest.fn()
  const selectVillage = jest.fn().mockReturnValue(selectVillageEventHandler)
  const wrapper = shallow(<VillageList isPlayer items={items} selectVillage={selectVillage} />)

  expect(wrapper.children()).toHaveLength(1)
  expect(selectVillageEventHandler).toHaveBeenCalledTimes(0)
  expect(selectVillage).toHaveBeenCalledTimes(1)
  expect(selectVillage).toHaveBeenCalledWith(1)
})
test('<VillageList isPlayer /> 2 item', () => {
  const items: Village[] = [
    {
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
        werehumster: 1,
        werewolf: 2
      }
    },
    {
      avatar: 'fixed',
      comment: 'comment',
      hostPlayer: {
        isAnonymous: false,
        name: 'hostPlayer name'
      },
      id: 2,
      idForSearching: 456,
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
        werehumster: 1,
        werewolf: 2
      }
    }
  ]
  const selectVillageEventHandler = jest.fn()
  const selectVillage = jest.fn().mockReturnValue(selectVillageEventHandler)
  const wrapper = shallow(<VillageList isPlayer items={items} selectVillage={selectVillage} />)

  expect(wrapper.children()).toHaveLength(2)
  expect(selectVillageEventHandler).toHaveBeenCalledTimes(0)
  expect(selectVillage).toHaveBeenCalledTimes(2)
  expect(selectVillage).toHaveBeenCalledWith(1)
  expect(selectVillage).toHaveBeenCalledWith(2)
})
