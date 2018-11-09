// @flow
import IdSearch from './IdSearch'
import React from 'react'
import {shallow} from 'enzyme'

describe('<IdSearch />', () => {
  test('0 items', () => {
    const handleSearchIdChange = jest.fn()
    const handleValidityChange = jest.fn()
    const selectVillage = jest.fn()
    const transition = jest.fn()
    const wrapper = shallow(
      <IdSearch
        handleSearchIdChange={handleSearchIdChange}
        handleValidityChange={handleValidityChange}
        header="header"
        image="image"
        isPlayer
        menuItems={[]}
        name="name"
        selectVillage={selectVillage}
        transition={transition}
        villageItems={[]}
      />
    )

    expect(wrapper.children()).toHaveLength(4)
    expect(wrapper.find('Header').exists()).toBe(true)
    expect(wrapper.find('MainContent').exists()).toBe(true)
    expect(
      wrapper
        .find('MainContent')
        .find('IdSearchBox')
        .exists()
    ).toBe(true)
    expect(
      wrapper
        .find('MainContent')
        .find('div')
        .exists()
    ).toBe(true)
    expect(wrapper.find('AsideContent').exists()).toBe(true)
    expect(
      wrapper
        .find('AsideContent')
        .find('Menu')
        .exists()
    ).toBe(true)
    expect(selectVillage).toHaveBeenCalledTimes(0)
    expect(transition).toHaveBeenCalledTimes(0)
  })
  test('1 items', () => {
    const handleSearchIdChange = jest.fn()
    const handleValidityChange = jest.fn()
    const selectVillage = jest.fn()
    const transition = jest.fn()
    const villageItems = [
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
          werehamster: 1,
          werewolf: 2
        }
      }
    ]
    const wrapper = shallow(
      <IdSearch
        handleSearchIdChange={handleSearchIdChange}
        handleValidityChange={handleValidityChange}
        header="header"
        image="image"
        isPlayer
        menuItems={[]}
        name="name"
        selectVillage={selectVillage}
        transition={transition}
        villageItems={villageItems}
      />
    )

    expect(wrapper.children()).toHaveLength(4)
    expect(wrapper.find('Header').exists()).toBe(true)
    expect(wrapper.find('MainContent').exists()).toBe(true)
    expect(
      wrapper
        .find('MainContent')
        .find('IdSearchBox')
        .exists()
    ).toBe(true)
    expect(
      wrapper
        .find('MainContent')
        .find('VillageList')
        .exists()
    ).toBe(true)
    expect(wrapper.find('AsideContent').exists()).toBe(true)
    expect(
      wrapper
        .find('AsideContent')
        .find('Menu')
        .exists()
    ).toBe(true)
    expect(selectVillage).toHaveBeenCalledTimes(0)
    expect(transition).toHaveBeenCalledTimes(0)
  })
})
