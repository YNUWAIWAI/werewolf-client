// @flow
import Day from './Day'
import React from 'react'
import {shallow} from 'enzyme'

test('<Day date={0} phase="昼" />', () => {
  const wrapper = shallow(<Day date={0} phase="昼" />)

  expect(wrapper.text()).toMatch('0日目 昼')
})
