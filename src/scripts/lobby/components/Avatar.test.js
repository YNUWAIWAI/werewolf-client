// @flow
import Avatar from './Avatar'
import React from 'react'
import {shallow} from 'enzyme'

test('<Avatar image="image" name="name" />', () => {
  const wrapper = shallow(<Avatar image="image" name="name" />)

  expect(wrapper.text()).toBe('name')
  expect(wrapper.find('img[src="image"]').exists()).toBe(true)
})
