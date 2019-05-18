import * as React from 'react'
import {Language, getMessages} from '../../../../i18n/landing'
import TextField from './TextField'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer(Language.en, getMessages(Language.en))

describe('render', () => {
  test('email', () => {
    const wrapper = mountWithIntl<TextField>(
      <TextField
        autoFocus
        name="email"
        type="signup"
      />
    )

    expect(wrapper.text()).toBe('Email')
    expect(wrapper.find('.la--input').props().minLength).toBeUndefined()
    expect(wrapper.find('.la--input').props().type).toBe('text')
  })
  test('name', () => {
    const wrapper = mountWithIntl<TextField>(
      <TextField
        autoFocus
        name="name"
        type="signup"
      />
    )

    expect(wrapper.text()).toBe('Name')
    expect(wrapper.find('.la--input').props().minLength).toBeUndefined()
    expect(wrapper.find('.la--input').props().type).toBe('text')
  })
  test('password', () => {
    const wrapper = mountWithIntl<TextField>(
      <TextField
        autoFocus
        name="password"
        type="signup"
      />
    )

    expect(wrapper.text()).toBe('Password')
    expect(wrapper.find('.la--input').props().minLength).toBe(8)
    expect(wrapper.find('.la--input').props().type).toBe('password')
  })
})
test('handleTextChange', () => {
  const wrapper = mountWithIntl<TextField>(
    <TextField
      autoFocus
      name="email"
      type="signup"
    />
  )

  expect(wrapper.state().text).toBe('')
  wrapper.find('.la--input').simulate('change', {
    target: {
      value: 'text'
    }
  })
  expect(wrapper.state().text).toBe('text')
})
