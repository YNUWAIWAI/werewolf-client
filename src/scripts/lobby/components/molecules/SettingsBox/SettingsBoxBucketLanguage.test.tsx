import * as React from 'react'
import {LanguageSelect} from '../../atoms/Select/LanguageSelect'
import {SettingsBoxBucketLanguage} from './SettingsBoxBucketLanguage'
import {act} from 'react-dom/test-utils'
import {getMessages} from '../../../i18n'
import {initRenderer} from '../../../tools'
import {lobby} from '../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleChange = jest.fn()
  const wrapper = mountWithIntl(
    <SettingsBoxBucketLanguage
      handleChange={handleChange}
      initialValue={lobby.Language.en}
      navigatable
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
describe('handleChange', () => {
  test('value === props.initialValue', () => {
    const handleChange = jest.fn()
    const wrapper = mountWithIntl(
      <SettingsBoxBucketLanguage
        handleChange={handleChange}
        initialValue={lobby.Language.en}
        navigatable
      />
    )

    act(() => {
      wrapper.find(LanguageSelect).props().handleChange(true)(lobby.Language.en)
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('value !== props.initialValue', () => {
    const handleChange = jest.fn()
    const wrapper = mountWithIntl(
      <SettingsBoxBucketLanguage
        handleChange={handleChange}
        initialValue={lobby.Language.en}
        navigatable
      />
    )

    act(() => {
      wrapper.find(LanguageSelect).props().handleChange(true)(lobby.Language.ja)
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
describe('handleSubmit', () => {
  test('enabled', () => {
    const handleChange = jest.fn()
    const wrapper = mountWithIntl(
      <SettingsBoxBucketLanguage
        handleChange={handleChange}
        initialValue={lobby.Language.en}
        navigatable
      />
    )

    act(() => {
      wrapper.find(LanguageSelect).props().handleChange(true)(lobby.Language.ja)
    })
    act(() => {
      wrapper.find('.lo--settings--bucket--form').simulate('submit')
    })
    expect(handleChange).toHaveBeenCalledWith(lobby.Language.ja)
  })
  test('disabled', () => {
    const handleChange = jest.fn()
    const wrapper = mountWithIntl(
      <SettingsBoxBucketLanguage
        handleChange={handleChange}
        initialValue={lobby.Language.en}
        navigatable
      />
    )

    act(() => {
      wrapper.find('.lo--settings--bucket--form').simulate('submit')
    })
    expect(handleChange).not.toHaveBeenCalled()
  })
})
