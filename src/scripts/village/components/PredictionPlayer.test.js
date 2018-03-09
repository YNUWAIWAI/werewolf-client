import PredictionPlayer from './PredictionPlayer'
import React from 'react'
import {shallow} from 'enzyme'

test('<PredictionPlayer status="alive" />', () => {
  const wrapper = shallow(<PredictionPlayer status="alive" />)

  expect(wrapper.find('.prediction--player').hasClass('dead')).toBe(false)
})
test('<PredictionPlayer status="dead" />', () => {
  const wrapper = shallow(<PredictionPlayer status="dead" />)

  expect(wrapper.find('.prediction--player').hasClass('dead')).toBe(true)
})
test('<PredictionPlayer status="death by execution" />', () => {
  const wrapper = shallow(<PredictionPlayer status="death by execution" />)

  expect(wrapper.find('.prediction--player').hasClass('dead')).toBe(true)
})
test('<PredictionPlayer status="death by werewolf attack" />', () => {
  const wrapper = shallow(<PredictionPlayer status="death by werewolf attack" />)

  expect(wrapper.find('.prediction--player').hasClass('dead')).toBe(true)
})
test('<PredictionPlayer status="death by fear" />', () => {
  const wrapper = shallow(<PredictionPlayer status="death by fear" />)

  expect(wrapper.find('.prediction--player').hasClass('dead')).toBe(true)
})
test('<PredictionPlayer status="unnatural death" />', () => {
  const wrapper = shallow(<PredictionPlayer status="unnatural death" />)

  expect(wrapper.find('.prediction--player').hasClass('dead')).toBe(true)
})
test('<PredictionPlayer image="image" name="name" />', () => {
  const wrapper = shallow(<PredictionPlayer image="image" name="name" />)

  expect(wrapper.contains(<img src="image" />)).toBe(true)
  expect(wrapper.text()).toBe('name')
})
test('<PredictionPlayer image={undefined} name="name" />', () => {
  const wrapper = shallow(<PredictionPlayer name="name" />)

  expect(wrapper.contains(<img />)).toBe(true)
  expect(wrapper.text()).toBe('name')
})
test('<PredictionPlayer image="image" name={undefined} />', () => {
  const wrapper = shallow(<PredictionPlayer image="image" />)

  expect(wrapper.contains(<img src="image" />)).toBe(true)
  expect(wrapper.text()).toBe('')
})
