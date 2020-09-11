import * as React from 'react'
import {
  Language,
  getMessages
} from '../../i18n'
import {TextField} from './TextField'
import {initRenderer} from '../../tools'

const {mountWithIntl} = initRenderer(Language.en, getMessages(Language.en))

describe('render', () => {
  test('email', () => {
    const handleValidityChange = jest.fn()
    const wrapper = mountWithIntl(
      <TextField
        autoFocus
        handleValidityChange={handleValidityChange}
        name="email"
        type="signup"
      />
    )

    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('.la--form--input').props().minLength).toBe(6)
    expect(wrapper.find('.la--form--input').props().type).toBe('text')
  })
  test('name', () => {
    const handleValidityChange = jest.fn()
    const wrapper = mountWithIntl(
      <TextField
        autoFocus
        handleValidityChange={handleValidityChange}
        name="name"
        type="signup"
      />
    )

    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('.la--form--input').props().minLength).toBe(5)
    expect(wrapper.find('.la--form--input').props().type).toBe('text')
  })
  test('password', () => {
    const handleValidityChange = jest.fn()
    const wrapper = mountWithIntl(
      <TextField
        autoFocus
        handleValidityChange={handleValidityChange}
        name="password"
        type="signup"
      />
    )

    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('.la--form--input').props().minLength).toBe(8)
    expect(wrapper.find('.la--form--input').props().type).toBe('password')
  })
})
test('handleTextChange', () => {
  const handleValidityChange = jest.fn()
  const wrapper = mountWithIntl(
    <TextField
      autoFocus
      handleValidityChange={handleValidityChange}
      name="email"
      type="signup"
    />
  )

  expect(wrapper.find('.la--form--input').props().value).toBe('')
  wrapper.find('.la--form--input').simulate('change', {
    target: {
      validity: {
        valid: true
      },
      value: 'text'
    }
  })
  expect(wrapper.find('.la--form--input').props().value).toBe('text')
  expect(handleValidityChange).toHaveBeenCalledWith(true)
})
