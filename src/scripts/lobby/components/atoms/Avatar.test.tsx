import * as React from 'react'
import Avatar from './Avatar'
import {shallow} from 'enzyme'

test('render', () => {
  const wrapper = shallow(
    <Avatar
      image="image"
      name="name"
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
