import * as React from 'react'
import {CreateNewAvatarAvatarName} from './CreateNewAvatarAvatarName'
import {getMessages} from '../../../i18n'
import {initRenderer} from '../../../tools'
import {lobby} from '../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleChange = jest.fn()
  const wrapper = mountWithIntl(
    <CreateNewAvatarAvatarName
      handleChange={handleChange}
      navigatable
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
