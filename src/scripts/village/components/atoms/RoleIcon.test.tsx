import * as React from 'react'
import RoleIcon from './RoleIcon'
import {shallow} from 'enzyme'

describe('<RoleIcon />', () => {
  test('default', () => {
    const wrapper = shallow(
      <RoleIcon
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
  test('additionalClass', () => {
    const wrapper = shallow(
      <RoleIcon
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
  test('numberOfPlayers', () => {
    const wrapper = shallow(
      <RoleIcon
        className="className"
        image="image"
        name="name"
        numberOfPlayers={1}
      />
    )

    expect(wrapper.find('.className').exists()).toBe(true)
    expect(wrapper.find('.className--image').exists()).toBe(true)
    expect(wrapper.find('.className--number').exists()).toBe(true)
    expect(wrapper.find('.className--times').exists()).toBe(true)
    expect(wrapper.find('.className--name').exists()).toBe(true)
  })
})
