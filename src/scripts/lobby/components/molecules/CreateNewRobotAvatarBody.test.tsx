import * as ActionTypes from '../../constants/ActionTypes'
import * as React from 'react'
import AutomationSelect from '../atoms/AutomationSelect'
import CreateNewRobotAvatarBody from './CreateNewRobotAvatarBody'
import Menu from '../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from '../organisms/Menu'
import TextInput from '../atoms/TextInput'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const {shallowWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const command: MenuItem[] = [
    {
      id: 'CreateNewAvatar.create',
      types: [ActionTypes.SelectRobotAvatar.CREATE]
    }
  ]
  const wrapper = shallowWithIntl(
    <CreateNewRobotAvatarBody
      command={command}
    />
  )

  expect(wrapper.find(TextInput)).toHaveLength(1)
  expect(wrapper.find(AutomationSelect)).toHaveLength(1)
  expect(wrapper.find(Menu)).toHaveLength(1)
})
