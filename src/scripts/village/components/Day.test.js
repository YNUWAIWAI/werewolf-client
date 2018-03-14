// @flow
import Day from './Day'
import React from 'react'
import {shallow} from 'enzyme'

test('<Day date={0} phase="昼" />', () => {
  const wrapper = shallow(<Day date={0} phase="昼" />)

  expect(wrapper.text()).toMatch('0日目 昼')
})
test('<Day date={undefined} phase="昼" />', () => {
  const wrapper = shallow(<Day date={undefined} phase="昼" />)

  expect(wrapper.text()).toMatch('undefined日目 昼')
})
test('<Day date={0} phase={undefined} />', () => {
  const wrapper = shallow(<Day date={0} phase={undefined} />)

  expect(wrapper.text()).toMatch('0日目 undefined')
})
