// @flow
import PredictionPlayer from './PredictionPlayer'
import React from 'react'
import {shallow} from 'enzyme'

test('<PredictionPlayer image="image" name="name" status="alive" />', () => {
  const wrapper = shallow(
    <PredictionPlayer
      image="image"
      name="name"
      status="alive"
    />
  )

  expect(wrapper.find('.prediction--player').hasClass('dead')).toBe(false)
  expect(wrapper.find('.prediction--player--image').exists()).toBe(true)
  expect(wrapper.find('.prediction--player--name').exists()).toBe(true)
  expect(wrapper.text()).toBe('name')
})
test('<PredictionPlayer image="image" name="name" status="dead" />', () => {
  const wrapper = shallow(
    <PredictionPlayer
      image="image"
      name="name"
      status="dead"
    />
  )

  expect(wrapper.find('.prediction--player').hasClass('dead')).toBe(true)
  expect(wrapper.find('.prediction--player--image').exists()).toBe(true)
  expect(wrapper.find('.prediction--player--name').exists()).toBe(true)
  expect(wrapper.text()).toBe('name')
})
test('<PredictionPlayer image="image" name="name" status="death by execution" />', () => {
  const wrapper = shallow(
    <PredictionPlayer
      image="image"
      name="name"
      status="death by execution"
    />
  )

  expect(wrapper.find('.prediction--player').hasClass('dead')).toBe(true)
  expect(wrapper.find('.prediction--player--image').exists()).toBe(true)
  expect(wrapper.find('.prediction--player--name').exists()).toBe(true)
  expect(wrapper.text()).toBe('name')
})
test('<PredictionPlayer image="image" name="name" status="death by werewolf attack" />', () => {
  const wrapper = shallow(
    <PredictionPlayer
      image="image"
      name="name"
      status="death by werewolf attack"
    />
  )

  expect(wrapper.find('.prediction--player').hasClass('dead')).toBe(true)
  expect(wrapper.find('.prediction--player--image').exists()).toBe(true)
  expect(wrapper.find('.prediction--player--name').exists()).toBe(true)
  expect(wrapper.text()).toBe('name')
})
test('<PredictionPlayer image="image" name="name" status="death by fear" />', () => {
  const wrapper = shallow(
    <PredictionPlayer
      image="image"
      name="name"
      status="death by fear"
    />
  )

  expect(wrapper.find('.prediction--player').hasClass('dead')).toBe(true)
  expect(wrapper.find('.prediction--player--image').exists()).toBe(true)
  expect(wrapper.find('.prediction--player--name').exists()).toBe(true)
  expect(wrapper.text()).toBe('name')
})
test('<PredictionPlayer image="image" name="name" status="unnatural death" />', () => {
  const wrapper = shallow(
    <PredictionPlayer
      image="image"
      name="name"
      status="unnatural death"
    />
  )

  expect(wrapper.find('.prediction--player').hasClass('dead')).toBe(true)
  expect(wrapper.find('.prediction--player--image').exists()).toBe(true)
  expect(wrapper.find('.prediction--player--name').exists()).toBe(true)
  expect(wrapper.text()).toBe('name')
})
