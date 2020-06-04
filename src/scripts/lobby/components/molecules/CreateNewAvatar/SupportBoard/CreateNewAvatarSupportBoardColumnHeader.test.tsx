import * as React from 'react'
import {CreateNewAvatarSupportBoardColumnHeader} from './CreateNewAvatarSupportBoardColumnHeader'
import {getMessages} from '../../../../i18n'
import {initRenderer} from '../../../../tools'
import {lobby} from '../../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const wrapper = mountWithIntl(
    <CreateNewAvatarSupportBoardColumnHeader
      className="className"
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
