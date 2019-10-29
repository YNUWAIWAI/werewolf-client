import * as React from 'react'
import Settings, {Props} from './Settings'
import {lobby} from '../../types'
import {shallow} from 'enzyme'

test('<Settings />', () => {
  const initialValue: Props['initialValue'] = {
    language: lobby.Language.en,
    userEmail: 'example@example.com',
    userName: 'userName'
  }
  const menuItems: Props['menuItems'] = []
  const handleChangeLanguage = jest.fn()
  const handleChangeUserEmail = jest.fn()
  const handleChangeUserName = jest.fn()
  const handleChangeUserPassword = jest.fn()
  const handleSubmitLogout = jest.fn()
  const transition = jest.fn()
  const wrapper = shallow(
    <Settings
      handleChangeLanguage={handleChangeLanguage}
      handleChangeUserEmail={handleChangeUserEmail}
      handleChangeUserName={handleChangeUserName}
      handleChangeUserPassword={handleChangeUserPassword}
      handleSubmitLogout={handleSubmitLogout}
      initialValue={initialValue}
      menuItems={menuItems}
      transition={transition}
    />
  )

  expect(wrapper.find('Header').exists()).toBe(true)
  expect(wrapper.find('MainContent').exists()).toBe(true)
  expect(wrapper.find('AsideContent').exists()).toBe(true)
  expect(handleChangeLanguage).toHaveBeenCalledTimes(0)
  expect(handleChangeUserEmail).toHaveBeenCalledTimes(0)
  expect(handleChangeUserName).toHaveBeenCalledTimes(0)
  expect(handleChangeUserPassword).toHaveBeenCalledTimes(0)
  expect(transition).toHaveBeenCalledTimes(0)
})
