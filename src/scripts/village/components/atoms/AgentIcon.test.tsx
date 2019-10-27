import * as React from 'react'
import AgentIcon from './AgentIcon'
import {shallow} from 'enzyme'

describe('<AgentIcon />', () => {
  test('defined props: initial, name', () => {
    const wrapper = shallow(
      <AgentIcon
        className="className"
        image="https://werewolf.world/image/0.3/character_icons/50x50/a_50x50.png"
        initial="A"
        name="Adil"
      />
    )

    expect(wrapper.find('.className--image').exists()).toBe(true)
    expect(wrapper.find('.className--initial').exists()).toBe(true)
    expect(wrapper.find('.className--name').exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('defined props: initial', () => {
    const wrapper = shallow(
      <AgentIcon
        className="className"
        image="https://werewolf.world/image/0.3/character_icons/50x50/a_50x50.png"
        initial="A"
      />
    )

    expect(wrapper.find('.className--image').exists()).toBe(true)
    expect(wrapper.find('.className--initial').exists()).toBe(true)
    expect(wrapper.find('.className--name').exists()).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('defined props: name', () => {
    const wrapper = shallow(
      <AgentIcon
        className="className"
        image="https://werewolf.world/image/0.3/character_icons/50x50/a_50x50.png"
        name="Adil"
      />
    )

    expect(wrapper.find('.className--image').exists()).toBe(true)
    expect(wrapper.find('.className--initial').exists()).toBe(false)
    expect(wrapper.find('.className--name').exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('defined props: nothing', () => {
    const wrapper = shallow(
      <AgentIcon
        className="className"
        image="https://werewolf.world/image/0.3/character_icons/50x50/a_50x50.png"
      />
    )

    expect(wrapper.find('.className--image').exists()).toBe(true)
    expect(wrapper.find('.className--initial').exists()).toBe(false)
    expect(wrapper.find('.className--name').exists()).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('additionalClass', () => {
    const wrapper = shallow(
      <AgentIcon
        additionalClass="additionalClass"
        className="className"
        image="https://werewolf.world/image/0.3/character_icons/50x50/a_50x50.png"
        initial="A"
        name="Adil"
      />
    )

    expect(wrapper.find('.className').exists()).toBe(true)
    expect(wrapper.find('.className').hasClass('additionalClass')).toBe(true)
    expect(wrapper.find('.className--image').exists()).toBe(true)
    expect(wrapper.find('.className--initial').exists()).toBe(true)
    expect(wrapper.find('.className--name').exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('handleOnClick', () => {
    const handleOnClick = jest.fn()
    const wrapper = shallow(
      <AgentIcon
        className="className"
        handleOnClick={handleOnClick}
        image="https://werewolf.world/image/0.3/character_icons/50x50/a_50x50.png"
        initial="A"
        name="Adil"
      />
    )

    expect(handleOnClick).toHaveBeenCalledTimes(0)
    wrapper.find('.className').simulate('click')
    expect(handleOnClick).toHaveBeenCalledTimes(1)
  })
})
