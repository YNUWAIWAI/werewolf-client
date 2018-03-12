import CommandOption from './CommandOption'
import React from 'react'
import {shallow} from 'enzyme'

test('<CommandOption id={1} image="image" name="name" />', () => {
  const wrapper = shallow(<CommandOption id={1} image="image" name="name" />)

  expect(wrapper.is('.command--option[data-player=1]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
  expect(wrapper.text()).toBe('name')
})
test('<CommandOption id={undefined} image="image" name="name" />', () => {
  const wrapper = shallow(<CommandOption image="image" name="name" />)

  expect(wrapper.is('.command--option[data-player]')).toBe(false)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
  expect(wrapper.text()).toBe('name')
})
test('<CommandOption id={1} image={undefined} name="name" />', () => {
  const wrapper = shallow(<CommandOption id={1} name="name" />)

  expect(wrapper.is('.command--option[data-player=1]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img />)).toBe(true)
  expect(wrapper.text()).toBe('name')
})
test('<CommandOption id={1} image="image" name={undefined} />', () => {
  const wrapper = shallow(<CommandOption id={1} image="image" />)

  expect(wrapper.is('.command--option[data-player=1]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
  expect(wrapper.text()).toBe('')
})
test('<CommandOption id={1} image="image" name="name" /> handleSelectOption', () => {
  const mockFn = jest.fn().mockName('handleSelectOption')
  const wrapper = shallow(<CommandOption handleSelectOption={mockFn} id={1} image="image" name="name" />)

  expect(wrapper.is('.command--option[data-player=1]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
  expect(wrapper.text()).toBe('name')
  wrapper.simulate('click')
  expect(mockFn).toHaveBeenCalledWith(1)
  expect(wrapper.is('.command--option[data-player=1]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
  expect(wrapper.text()).toBe('name')
})
