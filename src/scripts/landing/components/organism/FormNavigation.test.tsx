import * as React from 'react'
import {
  Language,
  getMessages
} from '../../i18n'
import {FormNavigation} from './FormNavigation'
import {initRenderer} from '../../tools'

const {mountWithIntl} = initRenderer(Language.en, getMessages(Language.en))

describe('render', () => {
  test('mode: login', () => {
    const handleClick = jest.fn()
    const wrapper = mountWithIntl(
      <FormNavigation
        handleClick={handleClick}
        mode="login"
      />
    )

    expect(wrapper.html()).toMatchSnapshot()
    expect(handleClick).toHaveBeenCalledTimes(0)
  })
  test('mode: signup', () => {
    const handleClick = jest.fn()
    const wrapper = mountWithIntl(
      <FormNavigation
        handleClick={handleClick}
        mode="signup"
      />
    )

    expect(wrapper.html()).toMatchSnapshot()
    expect(handleClick).toHaveBeenCalledTimes(0)
  })
})
describe('onClick', () => {
  test('login -> signup', () => {
    const handleClick = jest.fn()
    const wrapper = mountWithIntl(
      <FormNavigation
        handleClick={handleClick}
        mode="login"
      />
    )

    wrapper.find('.la--form-navigation.signup').simulate('click')
    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(handleClick).toHaveBeenCalledWith('signup')
  })
  test('signup -> login', () => {
    const handleClick = jest.fn()
    const wrapper = mountWithIntl(
      <FormNavigation
        handleClick={handleClick}
        mode="signup"
      />
    )

    wrapper.find('.la--form-navigation.login').simulate('click')
    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(handleClick).toHaveBeenCalledWith('login')
  })
})
