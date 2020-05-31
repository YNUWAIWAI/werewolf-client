import * as React from 'react'
import {Login} from './Login'
import {shallow} from 'enzyme'

test('render', () => {
  const wrapper = shallow(
    <Login
      action="/login"
      csrfToken="token"
      error={false}
    />
  )

  expect(wrapper.exists()).toBe(true)
})
