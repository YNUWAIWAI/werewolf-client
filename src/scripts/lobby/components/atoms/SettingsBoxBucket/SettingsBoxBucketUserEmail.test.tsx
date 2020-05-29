import * as React from 'react'
import {SettingsBoxBucketUserEmail} from './SettingsBoxBucketUserEmail'
import {getMessages} from '../../../i18n'
import {initRenderer} from '../../../tools'
import {lobby} from '../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleSubmit = jest.fn()
  const wrapper = mountWithIntl(
    <SettingsBoxBucketUserEmail
      handleSubmit={handleSubmit}
      initialValue="example@example.com"
      navigatable
    />
  )

  expect(handleSubmit).toHaveBeenCalledTimes(0)
  expect(wrapper.html()).toMatchSnapshot()
})
describe('handleChange', () => {
  test('valid', () => {
    const handleSubmit = jest.fn()
    const wrapper = mountWithIntl(
      <SettingsBoxBucketUserEmail
        handleSubmit={handleSubmit}
        initialValue="example@example.com"
        navigatable
      />
    )

    expect(wrapper.find('.lo--settings--bucket--form--button').props().disabled).toBe(true)
    wrapper.find('input.lo--settings--bucket--form--field.input').simulate('change', {
      target: {
        validity: {
          valid: true
        },
        value: 'example@example.net'
      }
    })
    expect(wrapper.find('.lo--settings--bucket--form--button').props().disabled).toBe(false)
    expect(handleSubmit).toHaveBeenCalledTimes(0)
  })
  test('invalid', () => {
    const handleSubmit = jest.fn()
    const wrapper = mountWithIntl(
      <SettingsBoxBucketUserEmail
        handleSubmit={handleSubmit}
        initialValue="example@example.com"
        navigatable
      />
    )

    expect(wrapper.find('.lo--settings--bucket--form--button').props().disabled).toBe(true)
    wrapper.find('input.lo--settings--bucket--form--field.input').simulate('change', {
      target: {
        validity: {
          valid: false
        },
        value: 'a'
      }
    })
    expect(wrapper.find('.lo--settings--bucket--form--button').props().disabled).toBe(true)
    expect(handleSubmit).toHaveBeenCalledTimes(0)
  })
  test('same value', () => {
    const handleSubmit = jest.fn()
    const wrapper = mountWithIntl(
      <SettingsBoxBucketUserEmail
        handleSubmit={handleSubmit}
        initialValue="example@example.com"
        navigatable
      />
    )

    expect(wrapper.find('.lo--settings--bucket--form--button').props().disabled).toBe(true)
    wrapper.find('input.lo--settings--bucket--form--field.input').simulate('change', {
      target: {
        validity: {
          valid: true
        },
        value: 'example@example.com'
      }
    })
    expect(wrapper.find('.lo--settings--bucket--form--button').props().disabled).toBe(true)
    expect(handleSubmit).toHaveBeenCalledTimes(0)
  })
})
describe('handleSubmit', () => {
  test('disabled', () => {
    const handleSubmit = jest.fn()
    const wrapper = mountWithIntl(
      <SettingsBoxBucketUserEmail
        handleSubmit={handleSubmit}
        initialValue="example@example.com"
        navigatable
      />
    )

    wrapper.find('.lo--settings--bucket--form').simulate('submit')
    expect(handleSubmit).toHaveBeenCalledTimes(0)
  })
  test('enabled', () => {
    const handleSubmit = jest.fn()
    const wrapper = mountWithIntl(
      <SettingsBoxBucketUserEmail
        handleSubmit={handleSubmit}
        initialValue="example@example.com"
        navigatable
      />
    )

    wrapper.find('input.lo--settings--bucket--form--field.input').simulate('change', {
      target: {
        validity: {
          valid: true
        },
        value: 'example@example.net'
      }
    })
    wrapper.find('.lo--settings--bucket--form').simulate('submit')
    expect(handleSubmit).toHaveBeenCalledTimes(1)
    expect(handleSubmit).toHaveBeenCalledWith('example@example.net')
  })
})
