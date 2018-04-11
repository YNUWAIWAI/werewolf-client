// @flow
import Description from './Description'
import React from 'react'
import {shallow} from 'enzyme'

test('<Description class="class" text="text" />', () => {
  const timer = {
    limit: 10,
    phase: 'night'
  }
  const wrapper = shallow(<Description class="class" text="text" timer={timer} />)

  expect(wrapper.is('.class')).toBe(true)
  expect(wrapper.text()).toBe('text（<Timer />）')
})
