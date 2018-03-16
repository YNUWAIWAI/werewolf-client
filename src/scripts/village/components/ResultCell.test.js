import React from 'react'
import ResultCell from './ResultCell'
import {shallow} from 'enzyme'

test('<ResultCell image="image" result="win" status="alive" text="text" tooltip="tooltip" type="image" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="alive"
      text="text"
      tooltip="tooltip"
      type="image"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="image"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="win" status="dead" text="text" tooltip="tooltip" type="image" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="dead"
      text="text"
      tooltip="tooltip"
      type="image"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="image"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="win" status="death by execution" text="text" tooltip="tooltip" type="image" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="death by execution"
      text="text"
      tooltip="tooltip"
      type="image"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="image"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="win" status="death by werewolf attack" text="text" tooltip="tooltip" type="image" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="death by werewolf attack"
      text="text"
      tooltip="tooltip"
      type="image"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="image"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="win" status="death by fear" text="text" tooltip="tooltip" type="image" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="death by fear"
      text="text"
      tooltip="tooltip"
      type="image"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="image"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="win" status="unnatural death" text="text" tooltip="tooltip" type="image" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="unnatural death"
      text="text"
      tooltip="tooltip"
      type="image"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="image"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="lose" status="alive" text="text" tooltip="tooltip" type="image" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="alive"
      text="text"
      tooltip="tooltip"
      type="image"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="image"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="lose" status="dead" text="text" tooltip="tooltip" type="image" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="dead"
      text="text"
      tooltip="tooltip"
      type="image"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="image"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="lose" status="death by execution" text="text" tooltip="tooltip" type="image" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="death by execution"
      text="text"
      tooltip="tooltip"
      type="image"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="image"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="lose" status="death by werewolf attack" text="text" tooltip="tooltip" type="image" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="death by werewolf attack"
      text="text"
      tooltip="tooltip"
      type="image"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="image"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="lose" status="death by fear" text="text" tooltip="tooltip" type="image" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="death by fear"
      text="text"
      tooltip="tooltip"
      type="image"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="image"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="lose" status="unnatural death" text="text" tooltip="tooltip" type="image" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="unnatural death"
      text="text"
      tooltip="tooltip"
      type="image"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="image"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="win" status="alive" text="text" tooltip="tooltip" type="name" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="alive"
      text="text"
      tooltip="tooltip"
      type="name"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="name"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="win" status="dead" text="text" tooltip="tooltip" type="name" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="dead"
      text="text"
      tooltip="tooltip"
      type="name"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="name"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="win" status="death by execution" text="text" tooltip="tooltip" type="name" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="death by execution"
      text="text"
      tooltip="tooltip"
      type="name"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="name"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="win" status="death by werewolf attack" text="text" tooltip="tooltip" type="name" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="death by werewolf attack"
      text="text"
      tooltip="tooltip"
      type="name"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="name"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="win" status="death by fear" text="text" tooltip="tooltip" type="name" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="death by fear"
      text="text"
      tooltip="tooltip"
      type="name"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="name"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="win" status="unnatural death" text="text" tooltip="tooltip" type="name" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="unnatural death"
      text="text"
      tooltip="tooltip"
      type="name"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="name"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="lose" status="alive" text="text" tooltip="tooltip" type="name" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="alive"
      text="text"
      tooltip="tooltip"
      type="name"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="name"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="lose" status="dead" text="text" tooltip="tooltip" type="name" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="dead"
      text="text"
      tooltip="tooltip"
      type="name"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="name"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="lose" status="death by execution" text="text" tooltip="tooltip" type="name" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="death by execution"
      text="text"
      tooltip="tooltip"
      type="name"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="name"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="lose" status="death by werewolf attack" text="text" tooltip="tooltip" type="name" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="death by werewolf attack"
      text="text"
      tooltip="tooltip"
      type="name"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="name"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="lose" status="death by fear" text="text" tooltip="tooltip" type="name" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="death by fear"
      text="text"
      tooltip="tooltip"
      type="name"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="name"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="lose" status="unnatural death" text="text" tooltip="tooltip" type="name" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="unnatural death"
      text="text"
      tooltip="tooltip"
      type="name"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="name"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="win" status="alive" text="text" tooltip="tooltip" type="result" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="alive"
      text="text"
      tooltip="tooltip"
      type="result"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="result"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="win" status="dead" text="text" tooltip="tooltip" type="result" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="dead"
      text="text"
      tooltip="tooltip"
      type="result"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="result"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="win" status="death by execution" text="text" tooltip="tooltip" type="result" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="death by execution"
      text="text"
      tooltip="tooltip"
      type="result"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="result"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="win" status="death by werewolf attack" text="text" tooltip="tooltip" type="result" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="death by werewolf attack"
      text="text"
      tooltip="tooltip"
      type="result"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="result"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="win" status="death by fear" text="text" tooltip="tooltip" type="result" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="death by fear"
      text="text"
      tooltip="tooltip"
      type="result"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="result"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="win" status="unnatural death" text="text" tooltip="tooltip" type="result" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="unnatural death"
      text="text"
      tooltip="tooltip"
      type="result"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="result"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="lose" status="alive" text="text" tooltip="tooltip" type="result" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="alive"
      text="text"
      tooltip="tooltip"
      type="result"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="result"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="lose" status="dead" text="text" tooltip="tooltip" type="result" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="dead"
      text="text"
      tooltip="tooltip"
      type="result"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="result"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="lose" status="death by execution" text="text" tooltip="tooltip" type="result" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="death by execution"
      text="text"
      tooltip="tooltip"
      type="result"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="result"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="lose" status="death by werewolf attack" text="text" tooltip="tooltip" type="result" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="death by werewolf attack"
      text="text"
      tooltip="tooltip"
      type="result"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="result"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="lose" status="death by fear" text="text" tooltip="tooltip" type="result" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="death by fear"
      text="text"
      tooltip="tooltip"
      type="result"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="result"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="lose" status="unnatural death" text="text" tooltip="tooltip" type="result" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="unnatural death"
      text="text"
      tooltip="tooltip"
      type="result"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="result"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="win" status="alive" text="text" tooltip="tooltip" type="roleImage" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="alive"
      text="text"
      tooltip="tooltip"
      type="roleImage"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="roleImage"]')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-tooltip="tooltip"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="win" status="dead" text="text" tooltip="tooltip" type="roleImage" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="dead"
      text="text"
      tooltip="tooltip"
      type="roleImage"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="roleImage"]')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-tooltip="tooltip"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="win" status="death by execution" text="text" tooltip="tooltip" type="roleImage" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="death by execution"
      text="text"
      tooltip="tooltip"
      type="roleImage"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="roleImage"]')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-tooltip="tooltip"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="win" status="death by werewolf attack" text="text" tooltip="tooltip" type="roleImage" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="death by werewolf attack"
      text="text"
      tooltip="tooltip"
      type="roleImage"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="roleImage"]')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-tooltip="tooltip"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="win" status="death by fear" text="text" tooltip="tooltip" type="roleImage" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="death by fear"
      text="text"
      tooltip="tooltip"
      type="roleImage"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="roleImage"]')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-tooltip="tooltip"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="win" status="unnatural death" text="text" tooltip="tooltip" type="roleImage" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="unnatural death"
      text="text"
      tooltip="tooltip"
      type="roleImage"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="roleImage"]')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-tooltip="tooltip"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="lose" status="alive" text="text" tooltip="tooltip" type="roleImage" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="alive"
      text="text"
      tooltip="tooltip"
      type="roleImage"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="roleImage"]')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-tooltip="tooltip"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="lose" status="dead" text="text" tooltip="tooltip" type="roleImage" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="dead"
      text="text"
      tooltip="tooltip"
      type="roleImage"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="roleImage"]')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-tooltip="tooltip"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="lose" status="death by execution" text="text" tooltip="tooltip" type="roleImage" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="death by execution"
      text="text"
      tooltip="tooltip"
      type="roleImage"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="roleImage"]')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-tooltip="tooltip"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="lose" status="death by werewolf attack" text="text" tooltip="tooltip" type="roleImage" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="death by werewolf attack"
      text="text"
      tooltip="tooltip"
      type="roleImage"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="roleImage"]')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-tooltip="tooltip"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="lose" status="death by fear" text="text" tooltip="tooltip" type="roleImage" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="death by fear"
      text="text"
      tooltip="tooltip"
      type="roleImage"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="roleImage"]')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-tooltip="tooltip"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="lose" status="unnatural death" text="text" tooltip="tooltip" type="roleImage" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="unnatural death"
      text="text"
      tooltip="tooltip"
      type="roleImage"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="roleImage"]')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-tooltip="tooltip"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="win" status="alive" text="text" tooltip="tooltip" type="status" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="alive"
      text="text"
      tooltip="tooltip"
      type="status"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="status"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="win" status="dead" text="text" tooltip="tooltip" type="status" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="dead"
      text="text"
      tooltip="tooltip"
      type="status"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="status"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="win" status="death by execution" text="text" tooltip="tooltip" type="status" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="death by execution"
      text="text"
      tooltip="tooltip"
      type="status"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="status"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="win" status="death by werewolf attack" text="text" tooltip="tooltip" type="status" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="death by werewolf attack"
      text="text"
      tooltip="tooltip"
      type="status"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="status"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="win" status="death by fear" text="text" tooltip="tooltip" type="status" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="death by fear"
      text="text"
      tooltip="tooltip"
      type="status"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="status"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="win" status="unnatural death" text="text" tooltip="tooltip" type="status" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="unnatural death"
      text="text"
      tooltip="tooltip"
      type="status"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="status"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="lose" status="alive" text="text" tooltip="tooltip" type="status" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="alive"
      text="text"
      tooltip="tooltip"
      type="status"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="status"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="lose" status="dead" text="text" tooltip="tooltip" type="status" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="dead"
      text="text"
      tooltip="tooltip"
      type="status"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="status"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="lose" status="death by execution" text="text" tooltip="tooltip" type="status" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="death by execution"
      text="text"
      tooltip="tooltip"
      type="status"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="status"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="lose" status="death by werewolf attack" text="text" tooltip="tooltip" type="status" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="death by werewolf attack"
      text="text"
      tooltip="tooltip"
      type="status"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="status"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="lose" status="death by fear" text="text" tooltip="tooltip" type="status" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="death by fear"
      text="text"
      tooltip="tooltip"
      type="status"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="status"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="lose" status="unnatural death" text="text" tooltip="tooltip" type="status" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="unnatural death"
      text="text"
      tooltip="tooltip"
      type="status"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="status"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell text="text" type="summary" />', () => {
  const wrapper = shallow(
    <ResultCell
      text="text"
      type="summary"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.equals(
    <div className="result--cell" data-result="summary">
      {'text'}
    </div>
  )).toBe(true)
})
test('<ResultCell image="image" result="win" status="alive" text="text" tooltip="tooltip" type="userAvatar" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="alive"
      text="text"
      tooltip="tooltip"
      type="userAvatar"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="userAvatar"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="win" status="dead" text="text" tooltip="tooltip" type="userAvatar" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="dead"
      text="text"
      tooltip="tooltip"
      type="userAvatar"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="userAvatar"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="win" status="death by execution" text="text" tooltip="tooltip" type="userAvatar" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="death by execution"
      text="text"
      tooltip="tooltip"
      type="userAvatar"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="userAvatar"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="win" status="death by werewolf attack" text="text" tooltip="tooltip" type="userAvatar" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="death by werewolf attack"
      text="text"
      tooltip="tooltip"
      type="userAvatar"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="userAvatar"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="win" status="death by fear" text="text" tooltip="tooltip" type="userAvatar" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="death by fear"
      text="text"
      tooltip="tooltip"
      type="userAvatar"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="userAvatar"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="win" status="unnatural death" text="text" tooltip="tooltip" type="userAvatar" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="unnatural death"
      text="text"
      tooltip="tooltip"
      type="userAvatar"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="userAvatar"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="lose" status="alive" text="text" tooltip="tooltip" type="userAvatar" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="alive"
      text="text"
      tooltip="tooltip"
      type="userAvatar"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="userAvatar"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="lose" status="dead" text="text" tooltip="tooltip" type="userAvatar" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="dead"
      text="text"
      tooltip="tooltip"
      type="userAvatar"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="userAvatar"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="lose" status="death by execution" text="text" tooltip="tooltip" type="userAvatar" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="death by execution"
      text="text"
      tooltip="tooltip"
      type="userAvatar"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="userAvatar"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="lose" status="death by werewolf attack" text="text" tooltip="tooltip" type="userAvatar" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="death by werewolf attack"
      text="text"
      tooltip="tooltip"
      type="userAvatar"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="userAvatar"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="lose" status="death by fear" text="text" tooltip="tooltip" type="userAvatar" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="death by fear"
      text="text"
      tooltip="tooltip"
      type="userAvatar"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="userAvatar"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="lose" status="unnatural death" text="text" tooltip="tooltip" type="userAvatar" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="unnatural death"
      text="text"
      tooltip="tooltip"
      type="userAvatar"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="userAvatar"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" result="win" status="alive" text="text" tooltip="tooltip" type="userName" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="alive"
      text="text"
      tooltip="tooltip"
      type="userName"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="userName"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="win" status="dead" text="text" tooltip="tooltip" type="userName" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="dead"
      text="text"
      tooltip="tooltip"
      type="userName"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="userName"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="win" status="death by execution" text="text" tooltip="tooltip" type="userName" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="death by execution"
      text="text"
      tooltip="tooltip"
      type="userName"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="userName"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="win" status="death by werewolf attack" text="text" tooltip="tooltip" type="userName" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="death by werewolf attack"
      text="text"
      tooltip="tooltip"
      type="userName"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="userName"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="win" status="death by fear" text="text" tooltip="tooltip" type="userName" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="death by fear"
      text="text"
      tooltip="tooltip"
      type="userName"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="userName"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="win" status="unnatural death" text="text" tooltip="tooltip" type="userName" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="win"
      status="unnatural death"
      text="text"
      tooltip="tooltip"
      type="userName"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="userName"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="lose" status="alive" text="text" tooltip="tooltip" type="userName" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="alive"
      text="text"
      tooltip="tooltip"
      type="userName"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="userName"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="lose" status="dead" text="text" tooltip="tooltip" type="userName" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="dead"
      text="text"
      tooltip="tooltip"
      type="userName"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="userName"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="lose" status="death by execution" text="text" tooltip="tooltip" type="userName" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="death by execution"
      text="text"
      tooltip="tooltip"
      type="userName"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="userName"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="lose" status="death by werewolf attack" text="text" tooltip="tooltip" type="userName" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="death by werewolf attack"
      text="text"
      tooltip="tooltip"
      type="userName"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="userName"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="lose" status="death by fear" text="text" tooltip="tooltip" type="userName" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="death by fear"
      text="text"
      tooltip="tooltip"
      type="userName"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="userName"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell image="image" result="lose" status="unnatural death" text="text" tooltip="tooltip" type="userName" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      result="lose"
      status="unnatural death"
      text="text"
      tooltip="tooltip"
      type="userName"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('win')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="userName"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
