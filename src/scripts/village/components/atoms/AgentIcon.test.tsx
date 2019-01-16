import * as React from 'react'
import AgentIcon from './AgentIcon'
import {shallow} from 'enzyme'

describe('<AgentIcon />', () => {
  test('default', () => {
    const wrapper = shallow(
      <AgentIcon
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
      <AgentIcon
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
  test('handleOnClick', () => {
    const handleOnClick = jest.fn()
    const wrapper = shallow(
      <AgentIcon
        class="class"
        handleOnClick={handleOnClick}
        image="image"
        name="name"
      />
    )

    expect(handleOnClick).toHaveBeenCalledTimes(0)
    wrapper.find('.class').simulate('click')
    expect(handleOnClick).toHaveBeenCalledTimes(1)
  })
})
