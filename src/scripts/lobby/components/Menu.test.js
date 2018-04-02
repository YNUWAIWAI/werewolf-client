// @flow
import Menu from './Menu'
import React from 'react'
import {shallow} from 'enzyme'

test('<Menu class="class" itemClass="itemClass" /> 0 item', () => {
  const transitionEventHandler = jest.fn()
  const transition = jest.fn().mockReturnValue(transitionEventHandler)
  const items = []
  const wrapper = shallow(<Menu class="class" itemClass="itemClass" items={items} transition={transition} />)

  expect(wrapper.children()).toHaveLength(0)
  expect(transitionEventHandler).toHaveBeenCalledTimes(0)
  expect(transition).toHaveBeenCalledTimes(0)
})
test('<Menu class="class" itemClass="itemClass" /> 1 item', () => {
  const transitionEventHandler = jest.fn()
  const transition = jest.fn().mockReturnValue(transitionEventHandler)
  const items = [
    {
      text: 'text',
      type: 'SHOW_MAIN'
    }
  ]
  const wrapper = shallow(<Menu class="class" itemClass="itemClass" items={items} transition={transition} />)

  expect(wrapper.children()).toHaveLength(1)
  expect(transitionEventHandler).toHaveBeenCalledTimes(0)
  expect(transition).toHaveBeenCalledTimes(0)
})
test('<Menu class="class" itemClass="itemClass" /> 2 items', () => {
  const transitionEventHandler = jest.fn()
  const transition = jest.fn().mockReturnValue(transitionEventHandler)
  const items = [
    {
      text: 'text',
      type: 'SHOW_MAIN'
    },
    {
      text: 'text',
      type: 'SHOW_MAIN'
    }
  ]
  const wrapper = shallow(<Menu class="class" itemClass="itemClass" items={items} transition={transition} />)

  expect(wrapper.children()).toHaveLength(2)
  expect(transitionEventHandler).toHaveBeenCalledTimes(0)
  expect(transition).toHaveBeenCalledTimes(0)
})
