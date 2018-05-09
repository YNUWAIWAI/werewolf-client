// @flow
import CommandNavigationButton from './CommandNavigationButton'
import React from 'react'
import {shallow} from 'enzyme'

test('<CommandNavigationButton text="text" />', () => {
  const handleClick = jest.fn()
  const wrapper = shallow(<CommandNavigationButton handleClick={handleClick} text="text" />)

  expect(wrapper.text()).toMatch('text')
  expect(handleClick).toHaveBeenCalledTimes(0)
})
test('<CommandNavigationButton text="text" /> onClick', () => {
  const handleClick = jest.fn()
  const wrapper = shallow(<CommandNavigationButton handleClick={handleClick} text="text" />)

  wrapper.simulate('click')
  expect(wrapper.text()).toMatch('text')
  expect(handleClick).toHaveBeenCalledTimes(1)
})
