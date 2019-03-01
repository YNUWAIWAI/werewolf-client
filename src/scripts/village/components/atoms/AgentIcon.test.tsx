import * as React from 'react'
import AgentIcon from './AgentIcon'
import Question from './svg/Question'
import {shallow} from 'enzyme'

describe('<AgentIcon />', () => {
  test('default', () => {
    const wrapper = shallow(
      <AgentIcon
        className="className"
        image="image"
        name="name"
      />
    )

    expect(wrapper.find('.className').exists()).toBe(true)
    expect(wrapper.find('.className').hasClass('undefined')).toBe(false)
    expect(wrapper.find('.className--image').exists()).toBe(true)
    expect(wrapper.find('.className--name').exists()).toBe(true)
  })
  test('<Question />', () => {
    const wrapper = shallow(
      <AgentIcon
        className="className"
        image=""
        name="name"
      />
    )

    expect(wrapper.find('.className').exists()).toBe(true)
    expect(wrapper.find('.className').hasClass('undefined')).toBe(false)
    expect(wrapper.find(Question).hasClass('undefined')).toBe(false)
    expect(wrapper.find('.className--image').exists()).toBe(false)
    expect(wrapper.find('.className--name').exists()).toBe(false)
  })
  test('additionalClass', () => {
    const wrapper = shallow(
      <AgentIcon
        additionalClass="additionalClass"
        className="className"
        image="image"
        name="name"
      />
    )

    expect(wrapper.find('.className').exists()).toBe(true)
    expect(wrapper.find('.className').hasClass('additionalClass')).toBe(true)
    expect(wrapper.find('.className--image').exists()).toBe(true)
    expect(wrapper.find('.className--name').exists()).toBe(true)
  })
  test('handleOnClick', () => {
    const handleOnClick = jest.fn()
    const wrapper = shallow(
      <AgentIcon
        className="className"
        handleOnClick={handleOnClick}
        image="image"
        name="name"
      />
    )

    expect(handleOnClick).toHaveBeenCalledTimes(0)
    wrapper.find('.className').simulate('click')
    expect(handleOnClick).toHaveBeenCalledTimes(1)
  })
})
