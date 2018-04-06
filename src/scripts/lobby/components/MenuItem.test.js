// @flow
import MenuItem from './MenuItem'
import React from 'react'
import {shallow} from 'enzyme'

test('<MenuItem class="class" text="text" type="type" />', () => {
  const transition = jest.fn()
  const wrapper = shallow(<MenuItem class="class" text="text" transition={transition} types={['SHOW_MAIN']} />)

  expect(wrapper.text()).toBe('text')
  expect(wrapper.hasClass('class')).toBe(true)
  expect(transition).toHaveBeenCalledTimes(0)
})
test('<MenuItem class="class" text="text" type="type" /> onClick', () => {
  const transition = jest.fn()
  const wrapper = shallow(<MenuItem class="class" text="text" transition={transition} types={['SHOW_MAIN']} />)

  wrapper.simulate('click')
  expect(transition).toHaveBeenCalledTimes(1)
  expect(transition).toHaveBeenCalledWith('SHOW_MAIN')
})
