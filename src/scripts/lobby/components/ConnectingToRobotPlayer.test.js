// @flow
import ConnectingToRobotPlayer from './ConnectingToRobotPlayer'
import React from 'react'
import {shallow} from 'enzyme'

test('<ConnectingToRobotPlayer />', () => {
  const items = []
  const transitionEventHandler = jest.fn()
  const transition = jest.fn().mockReturnValue(transitionEventHandler)
  const wrapper = shallow(<ConnectingToRobotPlayer menuItems={items} transition={transition} />)

  expect(wrapper.find('Header').exists()).toBe(true)
  expect(wrapper.find('MainContent').exists()).toBe(true)
  expect(wrapper.find('AsideContent').exists()).toBe(true)
  expect(transitionEventHandler).toHaveBeenCalledTimes(0)
  expect(transition).toHaveBeenCalledTimes(0)
})
