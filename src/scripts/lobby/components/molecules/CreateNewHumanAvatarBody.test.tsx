
import * as React from 'react'
import CreateNewHumanAvatarBody from './CreateNewHumanAvatarBody'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleImageClick = jest.fn()
  const handleLanguageChange = jest.fn()
  const handleNameChange = jest.fn()
  const wrapper = mountWithIntl(
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

  expect(wrapper.html()).toMatchSnapshot()
})
