import PredictionRole from './PredictionRole'
import React from 'react'
import {shallow} from 'enzyme'

test('<PredictionRole id="id" image="image" name="name" numberOfAgents={1} />', () => {
  const wrapper = shallow(<PredictionRole id="id" image="image" name="name" numberOfAgents={1} />)

  expect(wrapper.is('[data-role="id"]')).toBe(true)
  expect(wrapper.is('[data-tooltip="name"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
  expect(wrapper.text()).toBe('✕1')
})
test('<PredictionRole id={undefined} image="image" name="name" numberOfAgents={1} />', () => {
  const wrapper = shallow(<PredictionRole image="image" name="name" numberOfAgents={1} />)

  expect(wrapper.is('[data-role]')).toBe(false)
  expect(wrapper.is('[data-tooltip="name"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
  expect(wrapper.text()).toBe('✕1')
})
test('<PredictionRole id="id" image={undefined} name="name" numberOfAgents={1} />', () => {
  const wrapper = shallow(<PredictionRole id="id" name="name" numberOfAgents={1} />)

  expect(wrapper.is('[data-role="id"]')).toBe(true)
  expect(wrapper.is('[data-tooltip="name"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img />)).toBe(true)
  expect(wrapper.text()).toBe('✕1')
})
test('<PredictionRole id="id" image="image" name={undefined} numberOfAgents={1} />', () => {
  const wrapper = shallow(<PredictionRole id="id" image="image" numberOfAgents={1} />)

  expect(wrapper.is('[data-role="id"]')).toBe(true)
  expect(wrapper.is('[data-tooltip]')).toBe(false)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
  expect(wrapper.text()).toBe('✕1')
})
test('<PredictionRole id="id" image="image" name="name" numberOfAgents={undefined} />', () => {
  const wrapper = shallow(<PredictionRole id="id" image="image" name="name" />)

  expect(wrapper.is('[data-role="id"]')).toBe(true)
  expect(wrapper.is('[data-tooltip="name"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
  expect(wrapper.text()).toBe('')
})
test('<PredictionRole id="id" image="image" name="name" numberOfAgents={0} />', () => {
  const wrapper = shallow(<PredictionRole id="id" image="image" name="name" numberOfAgents={0} />)

  expect(wrapper.is('[data-role="id"]')).toBe(true)
  expect(wrapper.is('[data-tooltip="name"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
  expect(wrapper.text()).toBe('✕0')
})
