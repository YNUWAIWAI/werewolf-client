// @flow
import React from 'react'
import Settings from './Settings'
import {shallow} from 'enzyme'

test('<Settings />', () => {
  const items = []
  const transitionEventHandler = jest.fn()
  const transition = jest.fn().mockReturnValue(transitionEventHandler)
  const wrapper = shallow(<Settings menuItems={items} transition={transition} />)

  expect(wrapper.find('Header').exists()).toBe(true)
  expect(wrapper.find('MainContent').exists()).toBe(true)
  expect(wrapper.find('AsideContent').exists()).toBe(true)
  expect(transitionEventHandler).toHaveBeenCalledTimes(0)
  expect(transition).toHaveBeenCalledTimes(0)
})
