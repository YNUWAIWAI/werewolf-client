import * as React from 'react'
import {SettingsBoxBucketUserName} from './SettingsBoxBucketUserName'
import {getMessages} from '../../../i18n'
import {initRenderer} from '../../../tools'
import {lobby} from '../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleSubmit = jest.fn()
  const wrapper = mountWithIntl(
    <SettingsBoxBucketUserName
      handleSubmit={handleSubmit}
      initialValue="user name"
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
      <SettingsBoxBucketUserName
        handleSubmit={handleSubmit}
        initialValue="user name"
        navigatable
      />
    )

    expect(wrapper.find('.lo--settings--bucket--form--button').props().disabled).toBe(true)
    wrapper.find('input.lo--settings--bucket--form--field.input').simulate('change', {
      target: {
        validity: {
          valid: true
        },
        value: 'another name'
      }
    })
    expect(wrapper.find('.lo--settings--bucket--form--button').props().disabled).toBe(false)
    expect(handleSubmit).toHaveBeenCalledTimes(0)
  })
  test('invalid', () => {
    const handleSubmit = jest.fn()
    const wrapper = mountWithIntl(
      <SettingsBoxBucketUserName
        handleSubmit={handleSubmit}
        initialValue="user name"
        navigatable
      />
    )

    expect(wrapper.find('.lo--settings--bucket--form--button').props().disabled).toBe(true)
    wrapper.find('input.lo--settings--bucket--form--field.input').simulate('change', {
      target: {
        validity: {
          valid: false
        },
        value: 'user name'
      }
    })
    expect(wrapper.find('.lo--settings--bucket--form--button').props().disabled).toBe(true)
    expect(handleSubmit).toHaveBeenCalledTimes(0)
  })
  test('same value', () => {
    const handleSubmit = jest.fn()
    const wrapper = mountWithIntl(
      <SettingsBoxBucketUserName
        handleSubmit={handleSubmit}
        initialValue="user name"
        navigatable
      />
    )

    expect(wrapper.find('.lo--settings--bucket--form--button').props().disabled).toBe(true)
    wrapper.find('input.lo--settings--bucket--form--field.input').simulate('change', {
      target: {
        validity: {
          valid: true
        },
        value: 'user name'
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
      <SettingsBoxBucketUserName
        handleSubmit={handleSubmit}
        initialValue="user name"
        navigatable
      />
    )

    wrapper.find('.lo--settings--bucket--form').simulate('submit')
    expect(handleSubmit).toHaveBeenCalledTimes(0)
  })
  test('enabled', () => {
    const handleSubmit = jest.fn()
    const wrapper = mountWithIntl(
      <SettingsBoxBucketUserName
        handleSubmit={handleSubmit}
        initialValue="user name"
        navigatable
      />
    )

    wrapper.find('input.lo--settings--bucket--form--field.input').simulate('change', {
      target: {
        validity: {
          valid: true
        },
        value: 'another name'
      }
    })
    wrapper.find('.lo--settings--bucket--form').simulate('submit')
    expect(handleSubmit).toHaveBeenCalledTimes(1)
    expect(handleSubmit).toHaveBeenCalledWith('another name')
  })
})
