import * as React from 'react'
import {SettingsBoxBucketDanger} from './SettingsBoxBucketDanger'
import {getMessages} from '../../../i18n'
import {initRenderer} from '../../../tools'
import {lobby} from '../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleSubmitDeactivate = jest.fn()
  const handleSubmitLogout = jest.fn()
  const wrapper = mountWithIntl(
    <SettingsBoxBucketDanger
      handleSubmitDeactivate={handleSubmitDeactivate}
      handleSubmitLogout={handleSubmitLogout}
      navigatable
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
test('handleSubmitDeactivate', () => {
  const handleSubmitDeactivate = jest.fn()
  const handleSubmitLogout = jest.fn()
  const wrapper = mountWithIntl(
    <SettingsBoxBucketDanger
      handleSubmitDeactivate={handleSubmitDeactivate}
      handleSubmitLogout={handleSubmitLogout}
      navigatable
    />
  )

  wrapper.find('.lo--settings--bucket--form').at(1).simulate('submit')
  expect(handleSubmitDeactivate).toHaveBeenCalled()
  expect(handleSubmitLogout).not.toHaveBeenCalled()
})
test('handleSubmitLogout', () => {
  const handleSubmitDeactivate = jest.fn()
  const handleSubmitLogout = jest.fn()
  const wrapper = mountWithIntl(
    <SettingsBoxBucketDanger
      handleSubmitDeactivate={handleSubmitDeactivate}
      handleSubmitLogout={handleSubmitLogout}
      navigatable
    />
  )

  wrapper.find('.lo--settings--bucket--form').at(0).simulate('submit')
  expect(handleSubmitDeactivate).not.toHaveBeenCalled()
  expect(handleSubmitLogout).toHaveBeenCalled()
})
