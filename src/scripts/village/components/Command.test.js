// @flow
import Command from './Command'
import React from 'react'
import {shallow} from 'enzyme'

test('<Command hide />', () => {
  const wrapper = shallow(<Command content={<div />} hide />)

  expect(wrapper.find('.command').hasClass('hide')).toBe(true)
  expect(wrapper.childAt(0).type()).toBe('div')
})
test('<Command hide={false} />', () => {
  const wrapper = shallow(<Command content={<div />} hide={false} />)

  expect(wrapper.find('.command').hasClass('hide')).toBe(false)
  expect(wrapper.childAt(0).type()).toBe('div')
})
