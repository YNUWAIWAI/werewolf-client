import React from 'react'
import RoleIcon from './RoleIcon'
import {shallow} from 'enzyme'

test('<RoleIcon class="class" image="image" name="name" />', () => {
  const wrapper = shallow(<RoleIcon class="class" image="image" name="name" />)

  expect(wrapper.find('.class')).toHaveLength(1)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
  expect(wrapper.containsMatchingElement(
    <span>
      {'name'}
    </span>
  )).toBe(true)
})
test('<RoleIcon class="class" image="image" name="" />', () => {
  const wrapper = shallow(<RoleIcon class="class" image="image" name="" />)

  expect(wrapper.find('.class')).toHaveLength(1)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
  expect(wrapper.containsMatchingElement(
    <span>
      {''}
    </span>
  )).toBe(true)
})
test('<RoleIcon class="" image="image" name="name" />', () => {
  const wrapper = shallow(<RoleIcon class="" image="image" name="name" />)

  expect(wrapper.find('.undefined')).toHaveLength(0)
  expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
  expect(wrapper.containsMatchingElement(
    <span>
      {'name'}
    </span>
  )).toBe(true)
})
test('<RoleIcon class="class" image="" name="name" />', () => {
  const wrapper = shallow(<RoleIcon class="class" image="" name="name" />)

  expect(wrapper.find('.class')).toHaveLength(1)
  expect(wrapper.containsMatchingElement(<img src="" />)).toBe(true)
  expect(wrapper.containsMatchingElement(
    <span>
      {'name'}
    </span>
  )).toBe(true)
})
