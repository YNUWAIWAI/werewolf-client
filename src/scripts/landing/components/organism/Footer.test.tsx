import * as React from 'react'
import {Footer} from './Footer'
import {shallow} from 'enzyme'

test('render', () => {
  const wrapper = shallow(
    <Footer />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
