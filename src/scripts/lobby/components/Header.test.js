// @flow
import Header from './Header'
import React from 'react'
import {shallow} from 'enzyme'

test('<Header text="text" />', () => {
  const wrapper = shallow(<Header text="text" />)

  expect(wrapper.text()).toBe('text')
})
