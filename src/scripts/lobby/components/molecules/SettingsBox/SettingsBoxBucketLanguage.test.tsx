import * as React from 'react'
import {SettingsBoxBucketLanguage} from './SettingsBoxBucketLanguage'
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
