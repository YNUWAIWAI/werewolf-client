import * as React from 'react'
import PredictionRole from './PredictionRole'
import {shallow} from 'enzyme'

test('<PredictionRole image="image" caption="caption" numberOfAgents={1} />', () => {
  const wrapper = shallow(
    <PredictionRole
      caption="caption"
      image="image"
      numberOfAgents={1}
    />
  )

  expect(wrapper.find('.prediction--role').exists()).toBe(true)
  expect(wrapper.find('.prediction--role--image').exists()).toBe(true)
  expect(wrapper.find('.prediction--role--times').exists()).toBe(true)
  expect(wrapper.find('.prediction--role--number').exists()).toBe(true)
  expect(wrapper.find('.prediction--role--number').text()).toBe('1')
  expect(wrapper.find('.prediction--role--caption').exists()).toBe(true)
  expect(wrapper.find('.prediction--role--caption').text()).toBe('caption')
})
