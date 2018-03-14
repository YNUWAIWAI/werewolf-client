// @flow
import CommandOption from './CommandOption'
import React from 'react'
import {shallow} from 'enzyme'

test('<CommandOption id={1} image="image" name="name" />', () => {
  const mockFn = jest.fn()
  const wrapper = shallow(<CommandOption handleSelectOption={mockFn} id={1} image="image" name="name" />)

  expect(wrapper.is('.command--option[data-player=1]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
  expect(wrapper.text()).toBe('name')
  expect(mockFn).toHaveBeenCalledTimes(0)
})
test('<CommandOption id={undefined} image="image" name="name" />', () => {
  const mockFn = jest.fn()
  const wrapper = shallow(<CommandOption handleSelectOption={mockFn} id={undefined} image="image" name="name" />)

  expect(wrapper.is('.command--option[data-player]')).toBe(false)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
  expect(wrapper.text()).toBe('name')
  expect(mockFn).toHaveBeenCalledTimes(0)
})
test('<CommandOption id={1} image={undefined} name="name" />', () => {
  const mockFn = jest.fn()
  const wrapper = shallow(<CommandOption handleSelectOption={mockFn} id={1} image={undefined} name="name" />)

  expect(wrapper.is('.command--option[data-player=1]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img />)).toBe(true)
  expect(wrapper.text()).toBe('name')
  expect(mockFn).toHaveBeenCalledTimes(0)
})
test('<CommandOption id={1} image="image" name={undefined} />', () => {
  const mockFn = jest.fn()
  const wrapper = shallow(<CommandOption handleSelectOption={mockFn} id={1} image="image" name={undefined} />)

  expect(wrapper.is('.command--option[data-player=1]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
  expect(wrapper.text()).toBe('')
  expect(mockFn).toHaveBeenCalledTimes(0)
})
test('<CommandOption id={1} image="image" name="name" /> handleSelectOption', () => {
  const mockFn = jest.fn()
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
