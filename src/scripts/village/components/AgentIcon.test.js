// @flow
import AgentIcon from './AgentIcon'
import React from 'react'
import {shallow} from 'enzyme'

test('<AgentIcon />', () => {
  const wrapper = shallow(
    <AgentIcon
      class="class"
      image="image"
      name="name"
    />
  )

  expect(wrapper.find('.class').exists()).toBe(true)
  expect(wrapper.find('.class--image').exists()).toBe(true)
  expect(wrapper.find('.class--name').exists()).toBe(true)
})
