import * as React from 'react'
import {Slider} from './Slider'
import {shallow} from 'enzyme'

test('render', () => {
  const wrapper = shallow(
    <Slider />
  )

  expect(wrapper.getElement()).toMatchSnapshot()
})
