import * as React from 'react'
import {SettingsBoxBucketDanger} from './SettingsBoxBucketDanger'
import {getMessages} from '../../../i18n'
import {initRenderer} from '../../../tools'
import {lobby} from '../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleSubmitLogout = jest.fn()
  const wrapper = mountWithIntl(
    <SettingsBoxBucketDanger
      handleSubmitLogout={handleSubmitLogout}
      navigatable
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
