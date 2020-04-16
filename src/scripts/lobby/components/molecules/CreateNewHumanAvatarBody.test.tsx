
import * as React from 'react'
import CreateNewHumanAvatarBody from './CreateNewHumanAvatarBody'
import TextInput from '../atoms/TextInput'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const {shallowWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleImageClick = jest.fn()
  const handleLanguageChange = jest.fn()
  const handleNameChange = jest.fn()
  const wrapper = shallowWithIntl(
    <CreateNewHumanAvatarBody
      handleImageClick={handleImageClick}
      handleLanguageChange={handleLanguageChange}
      handleNameChange={handleNameChange}
      image=""
      language={lobby.Language.en}
      name=""
      navigatable
    />
  )

  expect(wrapper.find(TextInput)).toHaveLength(1)
})
