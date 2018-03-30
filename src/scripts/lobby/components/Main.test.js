// @flow
import Main from './Main'
import React from 'react'
import {shallow} from 'enzyme'

test('<Main image="image" name="name" />', () => {
  const items = []
  const transitionEventHandler = jest.fn()
  const transition = jest.fn().mockReturnValue(transitionEventHandler)
  const wrapper = shallow(<Main image="image" items={items} name="name" transition={transition} />)

  expect(wrapper.find('Player').exists()).toBe(true)
  expect(wrapper.find('Menu').exists()).toBe(true)
  expect(transitionEventHandler).toHaveBeenCalledTimes(0)
  expect(transition).toHaveBeenCalledTimes(0)
})
