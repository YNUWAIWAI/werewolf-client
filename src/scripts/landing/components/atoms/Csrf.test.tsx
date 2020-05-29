import * as React from 'react'
import {Csrf} from './Csrf'
import {shallow} from 'enzyme'

test('render', () => {
  const wrapper = shallow(
    <Csrf
      token="token"
    />
  )

  expect(wrapper.exists()).toBe(true)
})
