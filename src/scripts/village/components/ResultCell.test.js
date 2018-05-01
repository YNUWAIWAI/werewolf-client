// @flow
import React from 'react'
import ResultCell from './ResultCell'
import {shallow} from 'enzyme'

test('<ResultCell image="image" status="alive" type="image" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      status="alive"
      type="image"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="image"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" status="dead" type="image" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      status="dead"
      type="image"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="image"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" status="death by execution" type="image" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      status="death by execution"
      type="image"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="image"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" status="death by werewolf attack" type="image" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      status="death by werewolf attack"
      type="image"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="image"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" status="death by fear" type="image" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      status="death by fear"
      type="image"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="image"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" status="unnatural death" type="image" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      status="unnatural death"
      type="image"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="image"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" status="alive" type="userAvatar" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      status="alive"
      type="userAvatar"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="userAvatar"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" status="dead" type="userAvatar" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      status="dead"
      type="userAvatar"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="userAvatar"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" status="death by execution" type="userAvatar" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      status="death by execution"
      type="userAvatar"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="userAvatar"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" status="death by werewolf attack" type="userAvatar" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      status="death by werewolf attack"
      type="userAvatar"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="userAvatar"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" status="death by fear" type="userAvatar" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      status="death by fear"
      type="userAvatar"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="userAvatar"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" status="unnatural death" type="userAvatar" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      status="unnatural death"
      type="userAvatar"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="userAvatar"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" status="alive" tooltip="tooltip" type="roleImage" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      status="alive"
      tooltip="tooltip"
      type="roleImage"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="roleImage"]')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-tooltip="tooltip"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" status="dead" tooltip="tooltip" type="roleImage" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      status="dead"
      tooltip="tooltip"
      type="roleImage"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="roleImage"]')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-tooltip="tooltip"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" status="death by execution" tooltip="tooltip" type="roleImage" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      status="death by execution"
      tooltip="tooltip"
      type="roleImage"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="roleImage"]')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-tooltip="tooltip"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" status="death by werewolf attack" tooltip="tooltip" type="roleImage" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      status="death by werewolf attack"
      tooltip="tooltip"
      type="roleImage"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="roleImage"]')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-tooltip="tooltip"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" status="death by fear" tooltip="tooltip" type="roleImage" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      status="death by fear"
      tooltip="tooltip"
      type="roleImage"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="roleImage"]')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-tooltip="tooltip"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
})
test('<ResultCell image="image" status="unnatural death" tooltip="tooltip" type="roleImage" />', () => {
  const wrapper = shallow(
    <ResultCell
      image="image"
      status="unnatural death"
      tooltip="tooltip"
      type="roleImage"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="roleImage"]')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-tooltip="tooltip"]')).toBe(true)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
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
test('<ResultCell text="text" type="caption" />', () => {
  const wrapper = shallow(
    <ResultCell
      text="text"
      type="caption"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.equals(
    <div className="result--cell" data-result="caption">
      {'text'}
    </div>
  )).toBe(true)
})
test('<ResultCell status="alive" text="text" type="name" />', () => {
  const wrapper = shallow(
    <ResultCell
      status="alive"
      text="text"
      type="name"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="name"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell status="dead" text="text" type="name" />', () => {
  const wrapper = shallow(
    <ResultCell
      status="dead"
      text="text"
      type="name"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="name"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell status="death by execution" text="text" type="name" />', () => {
  const wrapper = shallow(
    <ResultCell
      status="death by execution"
      text="text"
      type="name"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="name"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell status="death by werewolf attack" text="text" type="name" />', () => {
  const wrapper = shallow(
    <ResultCell
      status="death by werewolf attack"
      text="text"
      type="name"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="name"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell status="death by fear" text="text" type="name" />', () => {
  const wrapper = shallow(
    <ResultCell
      status="death by fear"
      text="text"
      type="name"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="name"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell status="unnatural death" text="text" type="name" />', () => {
  const wrapper = shallow(
    <ResultCell
      status="unnatural death"
      text="text"
      type="name"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="name"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell status="alive" text="text" type="status" />', () => {
  const wrapper = shallow(
    <ResultCell
      status="alive"
      text="text"
      type="status"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="status"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell status="dead" text="text" type="status" />', () => {
  const wrapper = shallow(
    <ResultCell
      status="dead"
      text="text"
      type="status"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="status"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell status="death by execution" text="text" type="status" />', () => {
  const wrapper = shallow(
    <ResultCell
      status="death by execution"
      text="text"
      type="status"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="status"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell status="death by werewolf attack" text="text" type="status" />', () => {
  const wrapper = shallow(
    <ResultCell
      status="death by werewolf attack"
      text="text"
      type="status"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="status"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell status="death by fear" text="text" type="status" />', () => {
  const wrapper = shallow(
    <ResultCell
      status="death by fear"
      text="text"
      type="status"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="status"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell status="unnatural death" text="text" type="status" />', () => {
  const wrapper = shallow(
    <ResultCell
      status="unnatural death"
      text="text"
      type="status"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="status"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell status="alive" text="text" type="userName" />', () => {
  const wrapper = shallow(
    <ResultCell
      status="alive"
      text="text"
      type="userName"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
  expect(wrapper.find('.result--cell').is('[data-result="userName"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell status="dead" text="text" type="userName" />', () => {
  const wrapper = shallow(
    <ResultCell
      status="dead"
      text="text"
      type="userName"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="userName"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell status="death by execution" text="text" type="userName" />', () => {
  const wrapper = shallow(
    <ResultCell
      status="death by execution"
      text="text"
      type="userName"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="userName"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell status="death by werewolf attack" text="text" type="userName" />', () => {
  const wrapper = shallow(
    <ResultCell
      status="death by werewolf attack"
      text="text"
      type="userName"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="userName"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell status="death by fear" text="text" type="userName" />', () => {
  const wrapper = shallow(
    <ResultCell
      status="death by fear"
      text="text"
      type="userName"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="userName"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
test('<ResultCell status="unnatural death" text="text" type="userName" />', () => {
  const wrapper = shallow(
    <ResultCell
      status="unnatural death"
      text="text"
      type="userName"
    />
  )

  expect(wrapper.find('.result--cell').exists()).toBe(true)
  expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
  expect(wrapper.find('.result--cell').is('[data-result="userName"]')).toBe(true)
  expect(wrapper.text()).toBe('text')
})
