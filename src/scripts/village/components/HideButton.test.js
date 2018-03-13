// @flow
import HideButton from './HideButton'
import React from 'react'
import {shallow} from 'enzyme'

test('<HideButton hide />', () => {
  const mockFn = jest.fn()
  const wrapper = shallow(<HideButton handleClick={mockFn} hide />)

  expect(wrapper.find('.hide-button').hasClass('hide')).toBe(true)
  expect(wrapper.find('.hide-button--icon').hasClass('hide')).toBe(true)
  expect(mockFn).toHaveBeenCalledTimes(0)
})
test('<HideButton hide={false} />', () => {
  const mockFn = jest.fn()
  const wrapper = shallow(<HideButton handleClick={mockFn} hide={false} />)

  expect(wrapper.find('.hide-button').hasClass('hide')).toBe(false)
  expect(wrapper.find('.hide-button--icon').hasClass('hide')).toBe(false)
  expect(mockFn).toHaveBeenCalledTimes(0)
})
test('<HideButton hide /> onClick', () => {
  const mockFn = jest.fn()
  const wrapper = shallow(<HideButton handleClick={mockFn} hide />)

  wrapper.simulate('click')
  expect(mockFn).toHaveBeenCalledWith(true)
})
test('<HideButton hide={false} /> onClick', () => {
  const mockFn = jest.fn()
  const wrapper = shallow(<HideButton handleClick={mockFn} hide={false} />)

  wrapper.simulate('click')
  expect(mockFn).toHaveBeenCalledWith(false)
})
