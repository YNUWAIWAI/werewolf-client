import React from 'react'
import RoleIcon from './RoleIcon'
import {shallow} from 'enzyme'

test('<RoleIcon agent="agent" class="class" image="image" />', () => {
  const wrapper = shallow(<RoleIcon agent="agent" class="class" image="image" />)

  expect(wrapper.find('.class')).toHaveLength(1)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
  expect(wrapper.containsMatchingElement(
    <span>
      {'agent'}
    </span>
  )).toBe(true)
})
test('<RoleIcon agent={undefined} class="class" image="image" />', () => {
  const wrapper = shallow(<RoleIcon class="class" image="image" />)

  expect(wrapper.find('.class')).toHaveLength(1)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
  expect(wrapper.containsMatchingElement(
    <span>
      {''}
    </span>
  )).toBe(true)
})
test('<RoleIcon agent="" class="class" image="image" />', () => {
  const wrapper = shallow(<RoleIcon agent="" class="class" image="image" />)

  expect(wrapper.find('.class')).toHaveLength(1)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
  expect(wrapper.containsMatchingElement(
    <span>
      {''}
    </span>
  )).toBe(true)
})
test('<RoleIcon agent="agent" class={undefined} image="image" />', () => {
  const wrapper = shallow(<RoleIcon agent="agent" image="image" />)

  expect(wrapper.find('.undefined')).toHaveLength(0)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
  expect(wrapper.containsMatchingElement(
    <span>
      {'agent'}
    </span>
  )).toBe(true)
})
test('<RoleIcon agent="agent" class="" image="image" />', () => {
  const wrapper = shallow(<RoleIcon agent="agent" class="" image="image" />)

  expect(wrapper.find('.undefined')).toHaveLength(0)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
  expect(wrapper.containsMatchingElement(
    <span>
      {'agent'}
    </span>
  )).toBe(true)
})
test('<RoleIcon agent="agent" image={undefined} />', () => {
  const wrapper = shallow(<RoleIcon agent="agent" class="class" />)

  expect(wrapper.find('.class')).toHaveLength(1)
  expect(wrapper.containsMatchingElement(<img />)).toBe(true)
  expect(wrapper.containsMatchingElement(
    <span>
      {'agent'}
    </span>
  )).toBe(true)
})
test('<RoleIcon agent="agent" image="" />', () => {
  const wrapper = shallow(<RoleIcon agent="agent" class="class" image="" />)

  expect(wrapper.find('.class')).toHaveLength(1)
  expect(wrapper.containsMatchingElement(<img src="" />)).toBe(true)
  expect(wrapper.containsMatchingElement(
    <span>
      {'agent'}
    </span>
  )).toBe(true)
})
