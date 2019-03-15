import * as React from 'react'
import PredictionPlayer from './PredictionPlayer'
import {shallow} from 'enzyme'

describe('<PredictionPlayer />', () => {
  test('image="image" name="name" status="alive"', () => {
    const wrapper = shallow(
      <PredictionPlayer
        image="image"
        name="name"
        status="alive"
      />
    )

    expect(wrapper.find('.vi--prediction--player').hasClass('dead')).toBe(false)
    expect(wrapper.find('.vi--prediction--player--image').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--player--name').exists()).toBe(true)
    expect(wrapper.text()).toBe('name')
  })
  test('image="image" name="name" status="dead"', () => {
    const wrapper = shallow(
      <PredictionPlayer
        image="image"
        name="name"
        status="dead"
      />
    )

    expect(wrapper.find('.vi--prediction--player').hasClass('dead')).toBe(true)
    expect(wrapper.find('.vi--prediction--player--image').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--player--name').exists()).toBe(true)
    expect(wrapper.text()).toBe('name')
  })
  test('image="image" name="name" status="death by execution"', () => {
    const wrapper = shallow(
      <PredictionPlayer
        image="image"
        name="name"
        status="death by execution"
      />
    )

    expect(wrapper.find('.vi--prediction--player').hasClass('dead')).toBe(true)
    expect(wrapper.find('.vi--prediction--player--image').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--player--name').exists()).toBe(true)
    expect(wrapper.text()).toBe('name')
  })
  test('image="image" name="name" status="death by attack"', () => {
    const wrapper = shallow(
      <PredictionPlayer
        image="image"
        name="name"
        status="death by attack"
      />
    )

    expect(wrapper.find('.vi--prediction--player').hasClass('dead')).toBe(true)
    expect(wrapper.find('.vi--prediction--player--image').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--player--name').exists()).toBe(true)
    expect(wrapper.text()).toBe('name')
  })
  test('image="image" name="name" status="death by fear"', () => {
    const wrapper = shallow(
      <PredictionPlayer
        image="image"
        name="name"
        status="death by fear"
      />
    )

    expect(wrapper.find('.vi--prediction--player').hasClass('dead')).toBe(true)
    expect(wrapper.find('.vi--prediction--player--image').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--player--name').exists()).toBe(true)
    expect(wrapper.text()).toBe('name')
  })
  test('image="image" name="name" status="unnatural death"', () => {
    const wrapper = shallow(
      <PredictionPlayer
        image="image"
        name="name"
        status="unnatural death"
      />
    )

    expect(wrapper.find('.vi--prediction--player').hasClass('dead')).toBe(true)
    expect(wrapper.find('.vi--prediction--player--image').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--player--name').exists()).toBe(true)
    expect(wrapper.text()).toBe('name')
  })
})
