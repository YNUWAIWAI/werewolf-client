// @flow
import Player from './Player'
import React from 'react'
import {shallow} from 'enzyme'

test('<Player image="image" name="name" />', () => {
  const wrapper = shallow(<Player image="image" name="name" />)

  expect(wrapper.text()).toBe('name')
  expect(wrapper.find('img[src="image"]').exists()).toBe(true)
})
