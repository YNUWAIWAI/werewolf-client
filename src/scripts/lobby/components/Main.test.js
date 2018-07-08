// @flow
import Main from './Main'
import React from 'react'
import {shallow} from 'enzyme'

test('<Main image="image" name="name" />', () => {
  const items = []
  const transition = jest.fn()
  const wrapper = shallow(<Main image="image" menuItems={items} name="name" transition={transition} />)

  expect(wrapper.find('Player').exists()).toBe(true)
  expect(wrapper.find('Menu').exists()).toBe(true)
  expect(transition).toHaveBeenCalledTimes(0)
})
