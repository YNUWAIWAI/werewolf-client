// @flow
import Menu from './Menu'
import React from 'react'
import {shallow} from 'enzyme'

describe('<Menu />', () => {
  test('0 item', () => {
    const transition = jest.fn()
    const items = []
    const wrapper = shallow(
      <Menu
        class="class"
        itemClass="itemClass"
        items={items}
        transition={transition}
      />
    )

    expect(wrapper.children()).toHaveLength(0)
    expect(transition).toHaveBeenCalledTimes(0)
  })
  test('1 item', () => {
    const transition = jest.fn()
    const items = [
      {
        id: 'Menu.returnToMainPage',
        types: ['SHOW_MAIN']
      }
    ]
    const wrapper = shallow(
      <Menu
        class="class"
        itemClass="itemClass"
        items={items}
        transition={transition}
      />
    )

    expect(wrapper.children()).toHaveLength(1)
    expect(transition).toHaveBeenCalledTimes(0)
  })
  test('2 items', () => {
    const transition = jest.fn()
    const items = [
      {
        id: 'Menu.returnToMainPage',
        types: ['SHOW_MAIN']
      },
      {
        id: 'Menu.returnToMainPage',
        types: ['SHOW_MAIN']
      }
    ]
    const wrapper = shallow(
      <Menu
        class="class"
        itemClass="itemClass"
        items={items}
        transition={transition}
      />
    )

    expect(wrapper.children()).toHaveLength(2)
    expect(transition).toHaveBeenCalledTimes(0)
  })
})
