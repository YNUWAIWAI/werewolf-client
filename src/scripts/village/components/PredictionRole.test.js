// @flow
import PredictionRole from './PredictionRole'
import React from 'react'
import {shallow} from 'enzyme'

test('<PredictionRole image="image" name="name" numberOfAgents={1} />', () => {
  const wrapper = shallow(<PredictionRole image="image" name="name" numberOfAgents={1} />)

  expect(wrapper.is('[data-tooltip="name"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
  expect(wrapper.text()).toBe('✕1')
})
test('<PredictionRole image="image" name="name" numberOfAgents={0} />', () => {
  const wrapper = shallow(<PredictionRole image="image" name="name" numberOfAgents={0} />)

  expect(wrapper.is('[data-tooltip="name"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
  expect(wrapper.text()).toBe('✕0')
})
