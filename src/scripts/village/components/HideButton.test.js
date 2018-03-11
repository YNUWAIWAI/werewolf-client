import HideButton from './HideButton'
import React from 'react'
import {shallow} from 'enzyme'

test('<HideButton isHide />', () => {
  const wrapper = shallow(<HideButton isHide />)

  expect(wrapper.find('.hide-button').hasClass('hide')).toBe(true)
  expect(wrapper.find('.hide-button--icon').hasClass('hide')).toBe(true)
})
test('<HideButton />', () => {
  const wrapper = shallow(<HideButton />)

  expect(wrapper.find('.hide-button').hasClass('hide')).toBe(false)
  expect(wrapper.find('.hide-button--icon').hasClass('hide')).toBe(false)
})
test('<HideButton isHide /> onClick', () => {
  const mockFn = jest.fn().mockName('handleClick')
  const wrapper = shallow(<HideButton handleClick={mockFn} isHide />)

  wrapper.simulate('click')
  expect(mockFn).toHaveBeenCalledWith(true)
})
test('<HideButton /> onClick', () => {
  const mockFn = jest.fn().mockName('handleClick')
  const wrapper = shallow(<HideButton handleClick={mockFn} isHide />)

  wrapper.simulate('click')
  expect(mockFn).toHaveBeenCalledWith(true)
})
