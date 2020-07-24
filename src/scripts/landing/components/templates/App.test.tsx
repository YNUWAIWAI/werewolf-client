import * as React from 'react'
import {App} from './App'
import {FormNavigation} from '../organism/FormNavigation'
import {Language} from '../../i18n'
import {Lead} from '../organism/Lead'
import {Login} from '../organism/Login'
import {Signup} from '../organism/Signup'
import {shallow} from 'enzyme'

test('render', () => {
  const wrapper = shallow(
    <App
      csrfToken="token"
      language={Language.en}
      loginAction="/login"
      loginError={false}
      signupAction="/signup"
      signupError={false}
    />
  )

  expect(wrapper.find(Lead).exists()).toBe(true)
  expect(wrapper.find(FormNavigation).exists()).toBe(true)
  expect(wrapper.find(Signup).exists()).toBe(false)
  expect(wrapper.find(Login).exists()).toBe(true)
})
test('setIsSignup', () => {
  const wrapper = shallow(
    <App
      csrfToken="token"
      language={Language.en}
      loginAction="/login"
      loginError={false}
      signupAction="/signup"
      signupError={false}
    />
  )

  const {handleClick, mode} = wrapper.find(FormNavigation).props()

  expect(mode).toBe('login')
  handleClick('signup')
  expect(wrapper.find(Lead).exists()).toBe(true)
  expect(wrapper.find(FormNavigation).exists()).toBe(true)
  expect(wrapper.find(Signup).exists()).toBe(true)
  expect(wrapper.find(Login).exists()).toBe(false)
})
