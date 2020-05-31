import * as React from 'react'
import {SelectHumanAvatarTableHeader} from './SelectHumanAvatarTableHeader'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const wrapper = mountWithIntl(
    <SelectHumanAvatarTableHeader />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
