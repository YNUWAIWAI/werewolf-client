import * as React from 'react'
import {Language, getMessages} from '../../../../i18n/landing'
import FormNavigation from './FormNavigation'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer(Language.en, getMessages(Language.en))

describe('render', () => {
  test('isSignup={true}', () => {
    const handleClick = jest.fn()
    const wrapper = mountWithIntl(
      <FormNavigation
        handleClick={handleClick}
        isSignup
      />
    )

    expect(wrapper.text()).toBe('Login')
  })
  test('isSignup={false}', () => {
    const handleClick = jest.fn()
    const wrapper = mountWithIntl(
      <FormNavigation
        handleClick={handleClick}
        isSignup={false}
      />
    )

    expect(wrapper.text()).toBe('Signup')
  })
})
