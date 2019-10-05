import * as React from 'react'
import {Language, getMessages} from '../../i18n'
import FormNavigation from './FormNavigation'
import {initRenderer} from '../../tools'

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
    expect(handleClick).toHaveBeenCalledTimes(0)
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
    expect(handleClick).toHaveBeenCalledTimes(0)
  })
})
test('onClick', () => {
  const handleClick = jest.fn()
  const wrapper = mountWithIntl(
    <FormNavigation
      handleClick={handleClick}
      isSignup={false}
    />
  )

  wrapper.find('.la--form-navigation').simulate('click')
  expect(handleClick).toHaveBeenCalledTimes(1)
  expect(handleClick).toHaveBeenCalledWith(true)
})
