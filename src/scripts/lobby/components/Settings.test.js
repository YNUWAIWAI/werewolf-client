// @flow
import React from 'react'
import Settings from './Settings'
import {shallow} from 'enzyme'

test('<Settings />', () => {
  const initialValue = {
    language: 'ja',
    userEmail: 'example@example.com',
    userName: 'userName'
  }
  const menuItems = []
  const handleChangeLanguage = jest.fn()
  const handleChangeUserEmail = jest.fn()
  const handleChangeUserName = jest.fn()
  const handleChangeUserPassword = jest.fn()
  const transition = jest.fn()
  const wrapper = shallow(
    <Settings
      handleChangeLanguage={handleChangeLanguage}
      handleChangeUserEmail={handleChangeUserEmail}
      handleChangeUserName={handleChangeUserName}
      handleChangeUserPassword={handleChangeUserPassword}
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
