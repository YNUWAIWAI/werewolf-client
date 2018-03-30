// @flow
import React from 'react'
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
    },
    {
      name: 'name',
      id: 2,
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
