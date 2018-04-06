// @flow
import React from 'react'
import Settings from './Settings'
import {shallow} from 'enzyme'

test('<Settings />', () => {
  const items = []
  const transition = jest.fn()
  const wrapper = shallow(<Settings menuItems={items} transition={transition} />)

  expect(wrapper.find('Header').exists()).toBe(true)
  expect(wrapper.find('MainContent').exists()).toBe(true)
  expect(wrapper.find('AsideContent').exists()).toBe(true)
  expect(transition).toHaveBeenCalledTimes(0)
})
