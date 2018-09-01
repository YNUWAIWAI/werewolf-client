// @flow
import BuildVillage from './BuildVillage'
import React from 'react'
import {shallow} from 'enzyme'

test('<BuildVillage />', () => {
  const handleAvatarChange = jest.fn()
  const handleMemberChange = jest.fn()
  const handleNumberChange = jest.fn()
  const handleTextChange = jest.fn()
  const handleValidityChange = jest.fn()
  const transition = jest.fn()
  const village = {
    comment: 'comment',
    hostName: 'hostName',
    numberOfHumans: 8,
    numberOfPlayers: 15,
    numberOfRobots: 7,
    villageName: 'villageName'
  }
  const wrapper = shallow(
    <BuildVillage
      handleAvatarChange={handleAvatarChange}
      handleMemberChange={handleMemberChange}
      handleNumberChange={handleNumberChange}
      handleTextChange={handleTextChange}
      handleValidityChange={handleValidityChange}
      menuItems={[]}
      transition={transition}
      village={village}
    />
  )

  expect(wrapper.find('Header').exists()).toBe(true)
  expect(wrapper.find('MainContent').exists()).toBe(true)
  expect(
    wrapper
      .find('MainContent')
      .find('EditableVillageItem')
      .exists()
  ).toBe(true)
  expect(wrapper.find('AsideContent').exists()).toBe(true)
  expect(
    wrapper
      .find('AsideContent')
      .find('Menu')
      .exists()
  ).toBe(true)
  expect(handleAvatarChange).toHaveBeenCalledTimes(0)
  expect(handleMemberChange).toHaveBeenCalledTimes(0)
  expect(handleNumberChange).toHaveBeenCalledTimes(0)
  expect(handleTextChange).toHaveBeenCalledTimes(0)
  expect(handleValidityChange).toHaveBeenCalledTimes(0)
  expect(transition).toHaveBeenCalledTimes(0)
})
