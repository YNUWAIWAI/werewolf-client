import * as React from 'react'
import Info from './Info'
import {shallow} from 'enzyme'

test('<Info />', () => {
  const wrapper = shallow(<Info />)

  expect(wrapper.children()).toHaveLength(7)
})
