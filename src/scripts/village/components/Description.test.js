// @flow
import Description from './Description'
import React from 'react'
import {shallow} from 'enzyme'

test('<Description class="class" text="text" />', () => {
  const wrapper = shallow(<Description class="class" text="text" />)

  expect(wrapper.is('.class')).toBe(true)
  expect(wrapper.text()).toBe('text（<Connect(Timer) />）')
})
test('<Description class="class" text={undefined} />', () => {
  const wrapper = shallow(<Description class="class" text={undefined} />)

  expect(wrapper.is('.class')).toBe(true)
  expect(wrapper.text()).toBe('（<Connect(Timer) />）')
})
