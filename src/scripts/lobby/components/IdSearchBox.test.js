// @flow
import IdSearchBox from './IdSearchBox'
import React from 'react'
import {shallow} from 'enzyme'

test('<IdSearchBox />', () => {
  const wrapper = shallow(<IdSearchBox numberOfDigit={3} placeholder="3 digits" />)

  expect(wrapper.find('id-search')).toHaveLength(3)
})
