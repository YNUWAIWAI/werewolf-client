import * as React from 'react'
import Command from './Command'
import {shallow} from 'enzyme'

test('<Command hide />', () => {
  const wrapper = shallow(<Command content={<div />} hide />)

  expect(wrapper.find('.command').hasClass('hidden')).toBe(true)
  expect(wrapper.childAt(0).type()).toBe('div')
})
test('<Command hide={false} />', () => {
  const wrapper = shallow(<Command content={<div />} hide={false} />)

  expect(wrapper.find('.command').hasClass('hidden')).toBe(false)
  expect(wrapper.childAt(0).type()).toBe('div')
})
