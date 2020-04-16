import * as React from 'react'
import AutomationSelect from '../atoms/Select/AutomationSelect'
import CreateNewRobotAvatarBody from './CreateNewRobotAvatarBody'
import TextInput from '../atoms/TextInput'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const {shallowWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const wrapper = shallowWithIntl(
    <CreateNewRobotAvatarBody
      navigatable
    />
  )

  expect(wrapper.find(TextInput)).toHaveLength(1)
  expect(wrapper.find(AutomationSelect)).toHaveLength(1)
})
