// @flow
import Day from './Day'
import React from 'react'
import {shallow} from 'enzyme'

test('<Day date={0} phase="昼" />', () => {
  const timer = {
    limit: 10,
    phase: 'night'
  }
  const wrapper = shallow(<Day date={0} phase="昼" timer={timer} />)

  expect(wrapper.text()).toMatch('0日目 昼')
})
