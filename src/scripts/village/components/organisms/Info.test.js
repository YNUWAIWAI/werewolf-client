// @flow
import Info from './Info'
import React from 'react'
import {shallow} from 'enzyme'

test('<Info />', () => {
  const wrapper = shallow(<Info />)

  expect(wrapper.children()).toHaveLength(7)
})
