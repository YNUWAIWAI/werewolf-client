import Info from './Info'
import React from 'react'
import {shallow} from 'enzyme'

test('<Info />', () => {
  const wrapper = shallow(<Info />)

  expect(wrapper.find('Connect(Day)')).toHaveLength(1)
  expect(wrapper.find('Connect(Role)')).toHaveLength(1)
})
