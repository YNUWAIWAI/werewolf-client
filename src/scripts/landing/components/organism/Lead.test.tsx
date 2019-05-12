import * as React from 'react'
import Lead from './Lead'
import {shallow} from 'enzyme'

test('render', () => {
  const wrapper = shallow(
    <Lead />
  )

  expect(wrapper.exists()).toBe(true)
})
