import * as ActionTypes from '../../constants/ActionTypes'
import * as React from 'react'
import {
  Menu,
  Props
} from './Menu'
import {shallow} from 'enzyme'

describe('<Menu />', () => {
  test('0 item', () => {
    const transition = jest.fn()
    const items: Props['items'] = []
    const wrapper = shallow(
      <Menu
        className="className"
        itemClassName="itemClassName"
        items={items}
        navigatable
        transition={transition}
      />
    )

    expect(wrapper.children()).toHaveLength(0)
    expect(transition).toHaveBeenCalledTimes(0)
  })
  test('1 item', () => {
    const transition = jest.fn()
    const items: Props['items'] = [
      {
        id: 'Menu.returnToMainPage',
        types: [ActionTypes.App.SHOW_MAIN]
      }
    ]
    const wrapper = shallow(
      <Menu
        className="className"
        itemClassName="itemClassName"
        items={items}
        navigatable
        transition={transition}
      />
    )

    expect(wrapper.children()).toHaveLength(1)
    expect(transition).toHaveBeenCalledTimes(0)
  })
  test('2 items', () => {
    const transition = jest.fn()
    const items: Props['items'] = [
      {
        id: 'Menu.returnToMainPage',
        types: [ActionTypes.App.SHOW_MAIN]
      },
      {
        id: 'Menu.returnToMainPage',
        types: [ActionTypes.App.SHOW_MAIN]
      }
    ]
    const wrapper = shallow(
      <Menu
        className="className"
        itemClassName="itemClassName"
        items={items}
        navigatable
        transition={transition}
      />
    )

    expect(wrapper.children()).toHaveLength(2)
    expect(transition).toHaveBeenCalledTimes(0)
  })
})
