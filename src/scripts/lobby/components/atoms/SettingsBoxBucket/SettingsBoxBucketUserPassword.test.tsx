import * as React from 'react'
import {SettingsBoxBucketUserPassword} from './SettingsBoxBucketUserPassword'
import {getMessages} from '../../../i18n'
import {initRenderer} from '../../../tools'
import {lobby} from '../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleSubmit = jest.fn()
  const wrapper = mountWithIntl(
    <SettingsBoxBucketUserPassword
      handleSubmit={handleSubmit}
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
      <SettingsBoxBucketUserPassword
        handleSubmit={handleSubmit}
        navigatable
      />
    )

    expect(wrapper.find('.lo--settings--bucket--form--button').props().disabled).toBe(true)
    wrapper.find('input.lo--settings--bucket--form--field.input').simulate('change', {
      target: {
        validity: {
          valid: true
        },
        value: 'password'
      }
    })
    expect(wrapper.find('.lo--settings--bucket--form--button').props().disabled).toBe(false)
    expect(handleSubmit).toHaveBeenCalledTimes(0)
  })
  test('invalid', () => {
    const handleSubmit = jest.fn()
    const wrapper = mountWithIntl(
      <SettingsBoxBucketUserPassword
        handleSubmit={handleSubmit}
        navigatable
      />
    )

    expect(wrapper.find('.lo--settings--bucket--form--button').props().disabled).toBe(true)
    wrapper.find('input.lo--settings--bucket--form--field.input').simulate('change', {
      target: {
        validity: {
          valid: false
        },
        value: 'passwd'
      }
    })
    expect(wrapper.find('.lo--settings--bucket--form--button').props().disabled).toBe(true)
    expect(handleSubmit).toHaveBeenCalledTimes(0)
  })
  test('empty', () => {
    const handleSubmit = jest.fn()
    const wrapper = mountWithIntl(
      <SettingsBoxBucketUserPassword
        handleSubmit={handleSubmit}
        navigatable
      />
    )

    expect(wrapper.find('.lo--settings--bucket--form--button').props().disabled).toBe(true)
    wrapper.find('input.lo--settings--bucket--form--field.input').simulate('change', {
      target: {
        validity: {
          valid: true
        },
        value: ''
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
      <SettingsBoxBucketUserPassword
        handleSubmit={handleSubmit}
        navigatable
      />
    )

    wrapper.find('.lo--settings--bucket--form').simulate('submit')
    expect(handleSubmit).toHaveBeenCalledTimes(0)
  })
  test('enabled', () => {
    const handleSubmit = jest.fn()
    const wrapper = mountWithIntl(
      <SettingsBoxBucketUserPassword
        handleSubmit={handleSubmit}
        navigatable
      />
    )

    wrapper.find('input.lo--settings--bucket--form--field.input').simulate('change', {
      target: {
        validity: {
          valid: true
        },
        value: 'password'
      }
    })
    wrapper.find('.lo--settings--bucket--form').simulate('submit')
    expect(handleSubmit).toHaveBeenCalledTimes(1)
    expect(handleSubmit).toHaveBeenCalledWith('password')
  })
})
