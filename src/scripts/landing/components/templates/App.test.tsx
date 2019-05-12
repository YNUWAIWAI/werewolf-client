import * as React from 'react'
import App from './App'
import {Language} from '../../../../i18n/landing'
import {shallow} from 'enzyme'

test('render', () => {
  const wrapper = shallow(
    <App
      csrfToken="token"
      lang={Language.en}
      loginAction="/login"
      loginError={false}
      signupAction="/signup"
      signupError={false}
    />
  )

  expect(wrapper.exists()).toBe(true)
})
