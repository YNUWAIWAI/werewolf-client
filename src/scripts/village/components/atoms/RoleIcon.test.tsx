import * as React from 'react'
import RoleIcon from './RoleIcon'
import {shallow} from 'enzyme'

describe('<RoleIcon />', () => {
  test('default', () => {
    const wrapper = shallow(
      <RoleIcon
        class="class"
        image="image"
        name="name"
      />
    )

    expect(wrapper.find('.class').exists()).toBe(true)
    expect(wrapper.find('.class').hasClass('undefined')).toBe(false)
    expect(wrapper.find('.class--image').exists()).toBe(true)
    expect(wrapper.find('.class--name').exists()).toBe(true)
  })
  test('additionalClass', () => {
    const wrapper = shallow(
      <RoleIcon
        additionalClass="additionalClass"
        class="class"
        image="image"
        name="name"
      />
    )

    expect(wrapper.find('.class').exists()).toBe(true)
    expect(wrapper.find('.class').hasClass('additionalClass')).toBe(true)
    expect(wrapper.find('.class--image').exists()).toBe(true)
    expect(wrapper.find('.class--name').exists()).toBe(true)
  })
  test('numberOfAgents', () => {
    const wrapper = shallow(
      <RoleIcon
        class="class"
        image="image"
        name="name"
        numberOfAgents={1}
      />
    )

    expect(wrapper.find('.class').exists()).toBe(true)
    expect(wrapper.find('.class--image').exists()).toBe(true)
    expect(wrapper.find('.class--number').exists()).toBe(true)
    expect(wrapper.find('.class--times').exists()).toBe(true)
    expect(wrapper.find('.class--name').exists()).toBe(true)
  })
})
