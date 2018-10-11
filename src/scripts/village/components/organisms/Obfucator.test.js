// @flow
import Obfucator from './Obfucator'
import React from 'react'
import {shallow} from 'enzyme'

test('<Obfucator visible />', () => {
  const wrapper = shallow(<Obfucator visible />)

  expect(wrapper.find('.obfucator').exists()).toBe(true)
})
test('<Obfucator visible={false} />', () => {
  const wrapper = shallow(<Obfucator visible={false} />)

  expect(wrapper.find('.obfucator').exists()).toBe(false)
})
