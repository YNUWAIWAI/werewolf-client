import * as React from 'react'
import CreateNewHumanAvatarBody from './CreateNewHumanAvatarBody'
import TextInput from '../atoms/TextInput'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const {shallowWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleChangeImage = jest.fn()
  const handleChangeLanguage = jest.fn()
  const handleChangeName = jest.fn()
  const wrapper = shallowWithIntl(
    <CreateNewHumanAvatarBody
      handleChangeImage={handleChangeImage}
      handleChangeLanguage={handleChangeLanguage}
      handleChangeName={handleChangeName}
      image=""
      language={lobby.Language.en}
      name=""
      navigatable
    />
  )

  expect(wrapper.find(TextInput)).toHaveLength(1)
})
