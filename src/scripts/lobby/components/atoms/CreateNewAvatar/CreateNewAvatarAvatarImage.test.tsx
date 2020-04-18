import * as React from 'react'
import CreateNewAvatarAvatarImage from './CreateNewAvatarAvatarImage'
import {ImagePath} from '../../../constants/ImagePath'
import {getMessages} from '../../../i18n'
import {initRenderer} from '../../../tools'
import {lobby} from '../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleClick = jest.fn()
  const wrapper = mountWithIntl(
    <CreateNewAvatarAvatarImage
      handleClick={handleClick}
      image={ImagePath.Character.a}
      navigatable
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
