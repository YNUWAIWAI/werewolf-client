import * as React from 'react'
import * as lobby from 'types/lobby'
import BuildVillage from './BuildVillage'
import {shallow} from 'enzyme'

test('<BuildVillage />', () => {
  const handleAvatarChange = jest.fn()
  const handleMemberChange = jest.fn()
  const handleNumberChange = jest.fn()
  const handleTextChange = jest.fn()
  const handleValidityChange = jest.fn()
  const transition = jest.fn()
  const validity = {
    avatar: true,
    comment: true,
    numberOfPlayers: true,
    numberOfRobots: true,
    villageName: true
  }
  const value = {
    avatar: lobby.Avatar.random,
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
      image=""
      menuItems={[]}
      name=""
      transition={transition}
      validity={validity}
      value={value}
    />
  )

  expect(wrapper.find('Header').exists()).toBe(true)
  expect(wrapper.find('MainContent').exists()).toBe(true)
  expect(
    wrapper
      .find('MainContent')
      .find('BuildVillageBox')
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
