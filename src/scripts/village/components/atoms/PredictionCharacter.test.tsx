import * as React from 'react'
import PredictionCharacter from './PredictionCharacter'
import {mount} from 'enzyme'

describe('<PredictionCharacter />', () => {
  test('status="alive"', () => {
    const wrapper = mount(
      <PredictionCharacter
        image="https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png"
        initial="A"
        isSilent={false}
        name="Adil"
        status="alive"
      />
    )

    expect(wrapper.find('div.vi--prediction--player').hasClass('dead')).toBe(false)
    expect(wrapper.find('.vi--prediction--player--image').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--player--name').exists()).toBe(true)
  })
  test('status="dead"', () => {
    const wrapper = mount(
      <PredictionCharacter
        image="https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png"
        initial="A"
        isSilent={false}
        name="Adil"
        status="dead"
      />
    )

    expect(wrapper.find('div.vi--prediction--player').hasClass('dead')).toBe(true)
    expect(wrapper.find('.vi--prediction--player--image').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--player--name').exists()).toBe(true)
  })
  test('status="death by execution"', () => {
    const wrapper = mount(
      <PredictionCharacter
        image="https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png"
        initial="A"
        isSilent={false}
        name="Adil"
        status="death by execution"
      />
    )

    expect(wrapper.find('div.vi--prediction--player').hasClass('dead')).toBe(true)
    expect(wrapper.find('.vi--prediction--player--image').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--player--name').exists()).toBe(true)
  })
  test('status="death by attack"', () => {
    const wrapper = mount(
      <PredictionCharacter
        image="https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png"
        initial="A"
        isSilent={false}
        name="Adil"
        status="death by attack"
      />
    )

    expect(wrapper.find('div.vi--prediction--player').hasClass('dead')).toBe(true)
    expect(wrapper.find('.vi--prediction--player--image').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--player--name').exists()).toBe(true)
  })
  test('status="death by fear"', () => {
    const wrapper = mount(
      <PredictionCharacter
        image="https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png"
        initial="A"
        isSilent={false}
        name="Adil"
        status="death by fear"
      />
    )

    expect(wrapper.find('div.vi--prediction--player').hasClass('dead')).toBe(true)
    expect(wrapper.find('.vi--prediction--player--image').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--player--name').exists()).toBe(true)
  })
  test('status="unnatural death"', () => {
    const wrapper = mount(
      <PredictionCharacter
        image="https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png"
        initial="A"
        isSilent={false}
        name="Adil"
        status="unnatural death"
      />
    )

    expect(wrapper.find('div.vi--prediction--player').hasClass('dead')).toBe(true)
    expect(wrapper.find('.vi--prediction--player--image').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--player--name').exists()).toBe(true)
  })
  test('isSilent=true, status="alive"', () => {
    const wrapper = mount(
      <PredictionCharacter
        image="https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png"
        initial="A"
        isSilent
        name="Adil"
        status="alive"
      />
    )

    expect(wrapper.find('div.vi--prediction--player').hasClass('silent')).toBe(true)
  })
  test('isSilent=true, status="dead"', () => {
    const wrapper = mount(
      <PredictionCharacter
        image="https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png"
        initial="A"
        isSilent
        name="Adil"
        status="dead"
      />
    )

    expect(wrapper.find('div.vi--prediction--player').hasClass('dead')).toBe(true)
  })
})
