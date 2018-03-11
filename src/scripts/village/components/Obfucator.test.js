import Obfucator from './Obfucator'
import React from 'react'
import {shallow} from 'enzyme'

test('<Obfucator visible />', () => {
  const wrapper = shallow(<Obfucator visible />)

  expect(wrapper.find('.obfucator').exists()).toBe(true)
})
test('<Obfucator />', () => {
  const wrapper = shallow(<Obfucator />)

  expect(wrapper.find('.obfucator').exists()).toBe(false)
})
