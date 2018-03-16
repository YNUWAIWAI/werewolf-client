// @flow
import React from 'react'
import Result from './Result'
import {shallow} from 'enzyme'

test('<Result visible />', () => {
  const wrapper = shallow(<Result visible />)

  expect(wrapper.find('.result').exists()).toBe(true)
})
test('<Result visible={false} />', () => {
  const wrapper = shallow(<Result visible={false} />)

  expect(wrapper.find('.result').exists()).toBe(false)
})
