import * as React from 'react'
import PredictionPlayer from './PredictionPlayer'
import {mount} from 'enzyme'

describe('<PredictionPlayer />', () => {
  test('status="alive"', () => {
    const wrapper = mount(
      <PredictionPlayer
        image="https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png"
        initial="A"
        name="Adil"
        status="alive"
      />
    )

    expect(wrapper.find('.vi--prediction--player').hasClass('dead')).toBe(false)
    expect(wrapper.find('.vi--prediction--player--image').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--player--name').exists()).toBe(true)
  })
  test('status="dead"', () => {
    const wrapper = mount(
      <PredictionPlayer
        image="https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png"
        initial="A"
        name="Adil"
        status="dead"
      />
    )

    expect(wrapper.find('.vi--prediction--player').hasClass('dead')).toBe(true)
    expect(wrapper.find('.vi--prediction--player--image').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--player--name').exists()).toBe(true)
  })
  test('status="death by execution"', () => {
    const wrapper = mount(
      <PredictionPlayer
        image="https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png"
        initial="A"
        name="Adil"
        status="death by execution"
      />
    )

    expect(wrapper.find('.vi--prediction--player').hasClass('dead')).toBe(true)
    expect(wrapper.find('.vi--prediction--player--image').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--player--name').exists()).toBe(true)
  })
  test('status="death by attack"', () => {
    const wrapper = mount(
      <PredictionPlayer
        image="https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png"
        initial="A"
        name="Adil"
        status="death by attack"
      />
    )

    expect(wrapper.find('.vi--prediction--player').hasClass('dead')).toBe(true)
    expect(wrapper.find('.vi--prediction--player--image').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--player--name').exists()).toBe(true)
  })
  test('status="death by fear"', () => {
    const wrapper = mount(
      <PredictionPlayer
        image="https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png"
        initial="A"
        name="Adil"
        status="death by fear"
      />
    )

    expect(wrapper.find('.vi--prediction--player').hasClass('dead')).toBe(true)
    expect(wrapper.find('.vi--prediction--player--image').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--player--name').exists()).toBe(true)
  })
  test('status="unnatural death"', () => {
    const wrapper = mount(
      <PredictionPlayer
        image="https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png"
        initial="A"
        name="Adil"
        status="unnatural death"
      />
    )

    expect(wrapper.find('.vi--prediction--player').hasClass('dead')).toBe(true)
    expect(wrapper.find('.vi--prediction--player--image').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--player--name').exists()).toBe(true)
  })
})
