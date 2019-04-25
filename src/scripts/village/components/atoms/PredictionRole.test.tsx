import * as React from 'react'
import PredictionRole from './PredictionRole'
import {shallow} from 'enzyme'

describe('<PredictionRole />', () => {
  test('render', () => {
    const handleMouseEnter = jest.fn()
    const handleMouseLeave = jest.fn()
    const wrapper = shallow(
      <PredictionRole
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        image="image"
        name="name"
        numberOfAgents={1}
      />
    )

    expect(wrapper.find('.vi--prediction--role').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--role--image').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--role--times').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--role--number').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--role--number').text()).toBe('1')
    expect(wrapper.find('.vi--prediction--role--name').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--role--name').text()).toBe('name')
    expect(handleMouseEnter).toHaveBeenCalledTimes(0)
    expect(handleMouseLeave).toHaveBeenCalledTimes(0)
  })
  test('handleMouseEnter', () => {
    const handleMouseEnter = jest.fn()
    const handleMouseLeave = jest.fn()
    const wrapper = shallow(
      <PredictionRole
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        image="image"
        name="name"
        numberOfAgents={1}
      />
    )

    wrapper.find('.vi--prediction--role').simulate('mouseEnter')
    expect(handleMouseEnter).toHaveBeenCalledTimes(1)
    expect(handleMouseLeave).toHaveBeenCalledTimes(0)
  })
  test('handleMouseLeave', () => {
    const handleMouseEnter = jest.fn()
    const handleMouseLeave = jest.fn()
    const wrapper = shallow(
      <PredictionRole
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        image="image"
        name="name"
        numberOfAgents={1}
      />
    )

    wrapper.find('.vi--prediction--role').simulate('mouseLeave')
    expect(handleMouseEnter).toHaveBeenCalledTimes(0)
    expect(handleMouseLeave).toHaveBeenCalledTimes(1)
  })
})
