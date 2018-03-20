// @flow
import CommandOption from './CommandOption'
import React from 'react'
import {shallow} from 'enzyme'

test('<CommandOption image="image" name="name" />', () => {
  const mockFn = jest.fn()
  const wrapper = shallow(<CommandOption handleSelectOption={mockFn} image="image" name="name" />)

  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
  expect(wrapper.text()).toBe('name')
  expect(mockFn).toHaveBeenCalledTimes(0)
})
test('<CommandOption image={undefined} name="name" />', () => {
  const mockFn = jest.fn()
  const wrapper = shallow(<CommandOption handleSelectOption={mockFn} image={undefined} name="name" />)

  expect(wrapper.containsMatchingElement(<img />)).toBe(true)
  expect(wrapper.text()).toBe('name')
  expect(mockFn).toHaveBeenCalledTimes(0)
})
test('<CommandOption image="image" name={undefined} />', () => {
  const mockFn = jest.fn()
  const wrapper = shallow(<CommandOption handleSelectOption={mockFn} image="image" name={undefined} />)

  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
  expect(wrapper.text()).toBe('')
  expect(mockFn).toHaveBeenCalledTimes(0)
})
test('<CommandOption image="image" name="name" /> handleSelectOption', () => {
  const mockFn = jest.fn()
  const wrapper = shallow(<CommandOption handleSelectOption={mockFn} image="image" name="name" />)

  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
  expect(wrapper.text()).toBe('name')
  wrapper.simulate('click')
  expect(mockFn).toHaveBeenCalledTimes(1)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
  expect(wrapper.text()).toBe('name')
})
