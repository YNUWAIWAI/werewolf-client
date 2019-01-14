import * as React from 'react'
import ConnectingToRobotPlayer, {Props} from './ConnectingToRobotPlayer'
import {shallow} from 'enzyme'

test('<ConnectingToRobotPlayer />', () => {
  const items: Props['menuItems'] = []
  const transition = jest.fn()
  const wrapper = shallow(<ConnectingToRobotPlayer menuItems={items} transition={transition} />)

  expect(wrapper.find('Header').exists()).toBe(true)
  expect(wrapper.find('MainContent').exists()).toBe(true)
  expect(wrapper.find('AsideContent').exists()).toBe(true)
  expect(transition).toHaveBeenCalledTimes(0)
})
