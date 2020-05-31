import * as React from 'react'
import {CreateNewAvatarAvatarLanguage} from './CreateNewAvatarAvatarLanguage'
import {getMessages} from '../../../i18n'
import {initRenderer} from '../../../tools'
import {lobby} from '../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleChange = jest.fn()
  const wrapper = mountWithIntl(
    <CreateNewAvatarAvatarLanguage
      handleChange={handleChange}
      language={lobby.Language.en}
      navigatable
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
