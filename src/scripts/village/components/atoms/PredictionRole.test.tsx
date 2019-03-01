import * as React from 'react'
import PredictionRole from './PredictionRole'
import {shallow} from 'enzyme'

test('<PredictionRole />', () => {
  const wrapper = shallow(
    <PredictionRole
      image="image"
      name="name"
      numberOfAgents={1}
    />
  )

  expect(wrapper.find('.prediction--role').exists()).toBe(true)
  expect(wrapper.find('.prediction--role--image').exists()).toBe(true)
  expect(wrapper.find('.prediction--role--times').exists()).toBe(true)
  expect(wrapper.find('.prediction--role--number').exists()).toBe(true)
  expect(wrapper.find('.prediction--role--number').text()).toBe('1')
  expect(wrapper.find('.prediction--role--name').exists()).toBe(true)
  expect(wrapper.find('.prediction--role--name').text()).toBe('name')
})
