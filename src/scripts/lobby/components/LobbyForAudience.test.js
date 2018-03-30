// @flow
import LobbyForAudience from './LobbyForAudience'
import React from 'react'
import {shallow} from 'enzyme'

test('<LobbyForAudience />', () => {
  const selectVillage = jest.fn()
  const transition = jest.fn()
  const wrapper = shallow(<LobbyForAudience isPlayer={false} menuItems={[]} selectVillage={selectVillage} transition={transition} villageItems={[]} />)

  expect(wrapper.children()).toHaveLength(3)
  expect(wrapper.find('Header').exists()).toBe(true)
  expect(wrapper.find('MainContent').exists()).toBe(true)
  expect(wrapper.find('MainContent').find('VillageList').exists()).toBe(true)
  expect(wrapper.find('AsideContent').exists()).toBe(true)
  expect(wrapper.find('AsideContent').find('Menu').exists()).toBe(true)
  expect(selectVillage).toHaveBeenCalledTimes(0)
  expect(transition).toHaveBeenCalledTimes(0)
})
