// @flow
import LobbyForHumanPlayer from './LobbyForHumanPlayer'
import React from 'react'
import {shallow} from 'enzyme'

test('<LobbyForHumanPlayer />', () => {
  const selectVillage = jest.fn()
  const transition = jest.fn()
  const wrapper = shallow(
    <LobbyForHumanPlayer
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
