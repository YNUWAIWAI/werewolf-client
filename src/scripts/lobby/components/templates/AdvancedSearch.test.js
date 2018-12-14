// @flow
import AdvancedSearch from './AdvancedSearch'
import React from 'react'
import {shallow} from 'enzyme'

test('<AdvancedSearch />', () => {
  const handleAvatarChange = jest.fn()
  const handleCheckboxChange = jest.fn()
  const handleNumberChange = jest.fn()
  const handleTextChange = jest.fn()
  const handleValidityChange = jest.fn()
  const selectVillage = jest.fn()
  const transition = jest.fn()
  const checked = {
    avatar: true,
    comment: false,
    hostName: false,
    maximum: false,
    minimum: false,
    villageName: false
  }
  const validity = {
    avatar: true,
    comment: false,
    hostName: false,
    maximum: false,
    minimum: false,
    villageName: false
  }
  const wrapper = shallow(
    <AdvancedSearch
      checked={checked}
      handleAvatarChange={handleAvatarChange}
      handleCheckboxChange={handleCheckboxChange}
      handleNumberChange={handleNumberChange}
      handleTextChange={handleTextChange}
      handleValidityChange={handleValidityChange}
      header="header"
      image="image"
      isPlayer
      menuItems={[]}
      name="name"
      searched={false}
      selectVillage={selectVillage}
      transition={transition}
      validity={validity}
      villageItems={[]}
    />
  )

  expect(wrapper.children()).toHaveLength(4)
  expect(wrapper.find('Header').exists()).toBe(true)
  expect(wrapper.find('MainContent').exists()).toBe(true)
  expect(wrapper.find('MainContent').find('AdvancedSearchBox').exists()).toBe(true)
  expect(wrapper.find('MainContent').find('SearchResult').exists()).toBe(true)
  expect(wrapper.find('AsideContent').exists()).toBe(true)
  expect(wrapper.find('AsideContent').find('Menu').exists()).toBe(true)
  expect(selectVillage).toHaveBeenCalledTimes(0)
  expect(transition).toHaveBeenCalledTimes(0)
})
