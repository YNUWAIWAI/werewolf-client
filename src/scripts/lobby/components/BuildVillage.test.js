// @flow
import BuildVillage from './BuildVillage'
import React from 'react'
import {shallow} from 'enzyme'

test('<BuildVillage />', () => {
  const handleChange = jest.fn()
  const transition = jest.fn()
  const village = {
    comment: 'comment',
    hostName: 'hostName',
    numberOfHumans: 8,
    numberOfPlayers: 15,
    numberOfRobots: 7,
    villageName: 'villageName'
  }
  const wrapper = shallow(<BuildVillage handleChange={handleChange} menuItems={[]} transition={transition} village={village} />)

  expect(wrapper.find('Header').exists()).toBe(true)
  expect(wrapper.find('MainContent').exists()).toBe(true)
  expect(wrapper.find('MainContent').find('EditableVillageItem').exists()).toBe(true)
  expect(wrapper.find('AsideContent').exists()).toBe(true)
  expect(wrapper.find('AsideContent').find('Menu').exists()).toBe(true)
  expect(handleChange).toHaveBeenCalledTimes(0)
  expect(transition).toHaveBeenCalledTimes(0)
})
