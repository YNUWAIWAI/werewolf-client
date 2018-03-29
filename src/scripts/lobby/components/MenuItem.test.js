// @flow
import MenuItem from './MenuItem'
import React from 'react'
import {shallow} from 'enzyme'

test('<MenuItem class="class" text="text" type="type" />', () => {
  const transitionEventHandler = jest.fn()
  const transition = jest.fn().mockReturnValue(transitionEventHandler)
  const wrapper = shallow(<MenuItem class="class" text="text" transition={transition} type="type" />)

  expect(wrapper.text()).toBe('text')
  expect(wrapper.hasClass('class')).toBe(true)
  expect(transition).toHaveBeenCalledTimes(1)
  expect(transition).toHaveBeenCalledWith('type')
  expect(transitionEventHandler).toHaveBeenCalledTimes(0)
})
test('<MenuItem class="class" text="text" type="type" /> onClick', () => {
  const transitionEventHandler = jest.fn()
  const transition = jest.fn().mockReturnValue(transitionEventHandler)
  const wrapper = shallow(<MenuItem class="class" text="text" transition={transition} type="type" />)

  wrapper.simulate('click')
  expect(transition).toHaveBeenCalledTimes(1)
  expect(transition).toHaveBeenCalledWith('type')
  expect(transitionEventHandler).toHaveBeenCalledTimes(1)
})
