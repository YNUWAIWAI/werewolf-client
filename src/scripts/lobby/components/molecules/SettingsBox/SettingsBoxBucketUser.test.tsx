import * as React from 'react'
import {SettingsBoxBucketUser} from './SettingsBoxBucketUser'
import {getMessages} from '../../../i18n'
import {initRenderer} from '../../../tools'
import {lobby} from '../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleChangeUserEmail = jest.fn()
  const handleChangeUserName = jest.fn()
  const handleChangeUserPassword = jest.fn()
  const wrapper = mountWithIntl(
    <SettingsBoxBucketUser
      handleChangeUserEmail={handleChangeUserEmail}
      handleChangeUserName={handleChangeUserName}
      handleChangeUserPassword={handleChangeUserPassword}
      initialUserEmail="example@example.com"
      initialUserName="user name"
      navigatable
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
