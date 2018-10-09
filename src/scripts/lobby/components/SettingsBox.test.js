// @flow
import React from 'react'
import SettingsBox from './SettingsBox'
import {shallow} from 'enzyme'

test('<SettingsBox />', () => {
  const initialValue = {
    language: 'ja',
    userEmail: 'example@example.com',
    userName: 'userName'
  }
  const handleChangeLanguage = jest.fn()
  const handleChangeUserEmail = jest.fn()
  const handleChangeUserName = jest.fn()
  const handleChangeUserPassword = jest.fn()
  const wrapper = shallow(
    <SettingsBox
      handleChangeLanguage={handleChangeLanguage}
      handleChangeUserEmail={handleChangeUserEmail}
      handleChangeUserName={handleChangeUserName}
      handleChangeUserPassword={handleChangeUserPassword}
      initialValue={initialValue}
    />
  )

  expect(handleChangeLanguage).toHaveBeenCalledTimes(0)
  expect(handleChangeUserEmail).toHaveBeenCalledTimes(0)
  expect(handleChangeUserName).toHaveBeenCalledTimes(0)
  expect(handleChangeUserPassword).toHaveBeenCalledTimes(0)
})
