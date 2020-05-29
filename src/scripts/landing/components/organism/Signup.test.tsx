import * as React from 'react'
import {Signup} from './Signup'
import {shallow} from 'enzyme'

test('render', () => {
  const wrapper = shallow(
    <Signup
      action="/signup"
      csrfToken="token"
      error={false}
    />
  )

  expect(wrapper.exists()).toBe(true)
})
