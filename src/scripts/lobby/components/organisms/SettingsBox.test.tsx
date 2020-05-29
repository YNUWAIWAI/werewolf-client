import * as React from 'react'
import {
  Props,
  SettingsBox
} from './SettingsBox'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const initialValue: Props['initialValue'] = {
    language: lobby.Language.ja,
    userEmail: 'example@example.com',
    userName: 'userName'
  }
  const handleChangeLanguage = jest.fn()
  const handleChangeUserEmail = jest.fn()
  const handleChangeUserName = jest.fn()
  const handleChangeUserPassword = jest.fn()
  const handleSubmitLogout = jest.fn()
  const wrapper = mountWithIntl(
    <SettingsBox
      handleChangeLanguage={handleChangeLanguage}
      handleChangeUserEmail={handleChangeUserEmail}
      handleChangeUserName={handleChangeUserName}
      handleChangeUserPassword={handleChangeUserPassword}
      handleSubmitLogout={handleSubmitLogout}
      initialValue={initialValue}
      navigatable
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
  expect(handleChangeLanguage).toHaveBeenCalledTimes(0)
  expect(handleChangeUserEmail).toHaveBeenCalledTimes(0)
  expect(handleChangeUserName).toHaveBeenCalledTimes(0)
  expect(handleChangeUserPassword).toHaveBeenCalledTimes(0)
  expect(handleSubmitLogout).toHaveBeenCalledTimes(0)
})
