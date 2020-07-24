import * as React from 'react'
import {Publicity} from './Publicity'
import {shallow} from 'enzyme'

test('render', () => {
  const wrapper = shallow(
    <Publicity />
  )

  expect(wrapper.getElement()).toMatchSnapshot()
})
