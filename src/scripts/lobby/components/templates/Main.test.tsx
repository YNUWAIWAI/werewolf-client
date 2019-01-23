import * as React from 'react'
import Main, {Props} from './Main'
import {shallow} from 'enzyme'

test('<Main image="image" name="name" />', () => {
  const items: Props['menuItems'] = []
  const transition = jest.fn()
  const wrapper = shallow(
    <Main
      menuItems={items}
      transition={transition}
    />
  )

  expect(wrapper.find('Menu').exists()).toBe(true)
  expect(transition).toHaveBeenCalledTimes(0)
})
